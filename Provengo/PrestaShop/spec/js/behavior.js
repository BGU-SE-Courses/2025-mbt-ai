/* @provengo summon selenium */

const seleniumSession = new SeleniumSession("checkoutSession");

bthread("User Checkout Flow", function () {
  with (seleniumSession) {
    openPrestaShop(seleniumSession);
    clickProduct(seleniumSession);
    addToCart(seleniumSession);
    proceedToCheckoutPopup(seleniumSession);
    proceedToCheckoutCart(seleniumSession);
    verifyCheckoutPage(seleniumSession);
  }
});
