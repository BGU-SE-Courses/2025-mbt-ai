/* @provengo summon selenium */

const seleniumSession = new SeleniumSession("checkoutSession");

bthread("User Checkout Flow", function () {
  with (seleniumSession) {
    openPrestaShop(seleniumSession);
    login(seleniumSession);
    clickProduct(seleniumSession);
    sync({ request: Event('AddProductToCart') });
    addToCart(seleniumSession);
    proceedToCheckoutPopup(seleniumSession);
    sync({ request: Event('Checkout') });
    proceedToCheckoutCart(seleniumSession);
    verifyCheckoutPage(seleniumSession);
    sync({ request: Event('CheckoutComplete') });
  }
});

const seleniumSessionAdmin = new SeleniumSession("adminSession");

bthread("Admin Changes Product Price", function () {
  with (seleniumSessionAdmin) {
    openAdminPanel(seleniumSessionAdmin);
    adminLogin(seleniumSessionAdmin);
    navigateToProducts(seleniumSessionAdmin);
    selectProduct(seleniumSessionAdmin);
    sync({ request: Event('ChangeProductPrice') });
    changeProductPrice(seleniumSessionAdmin);
    savePriceChange(seleniumSessionAdmin);
    sync({ request: Event('ChangeProductPriceComplete') }); // Signal the completion of the price change
  }
});

bthread("Sync Checkout and Price Change", function () {
  while (true) {
    let event = sync({
      waitFor: [Event('Checkout'), Event('ChangeProductPrice')]
    });

    if (event.name === 'Checkout') {
      // If checkout occurs first, block price change until checkout ends
      sync({
        waitFor: Event('CheckoutComplete'),
        block: Event('ChangeProductPrice')
      });
    } else if (event.name === 'ChangeProductPrice') {
      // If price change occurs first, block checkout until price change is done
      sync({
        waitFor: Event('ChangeProductPriceComplete'),
        block: Event('Checkout')
      });
      // Allow checkout to complete and then verify the product price
      sync({ waitFor: Event('CheckoutComplete') });
      sync({ request: Event('PriceValidation') }); // Signal the PriceValidation event
      verifyProductPrice(seleniumSession, NEW_PRICE);
    }
  }
});