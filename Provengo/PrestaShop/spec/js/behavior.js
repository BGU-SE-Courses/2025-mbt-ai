/* @provengo summon selenium */

const seleniumSession = new SeleniumSession("checkoutSession");

bthread("User Checkout Flow", function () {
  with (seleniumSession) {
    openPrestaShop(seleniumSession);
    login(seleniumSession)
    clickProduct(seleniumSession);
    addToCart(seleniumSession);
    proceedToCheckoutPopup(seleniumSession);
    proceedToCheckoutCart(seleniumSession);
    verifyCheckoutPage(seleniumSession);
  }
});

const seleniumSessionAdmin = new SeleniumSession("adminSession");

bthread("Admin Changes Product Price", function () {
  with (seleniumSessionAdmin) {
    openAdminPanel(seleniumSessionAdmin);
    adminLogin(seleniumSessionAdmin);
    navigateToProducts(seleniumSessionAdmin);
    selectProduct(seleniumSessionAdmin);
    changeProductPrice(seleniumSessionAdmin);
    savePriceChange(seleniumSessionAdmin);
  }
});