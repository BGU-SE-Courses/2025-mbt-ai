/**
 * Open the PrestaShop homepage.
 */
function openPrestaShop(session) {
  session.start(URL);
}

/**
 * Click on the product in the "Popular Products" section.
 */
function clickProduct(session) {
  session.waitForVisibility(XPATHS.homepage.productLink, 5000); // Wait until the product is visible
  session.click(XPATHS.homepage.productLink);
}

/**
 * Add the product to the cart.
 */
function addToCart(session) {
  session.waitForVisibility(XPATHS.homepage.addToCartButton, 5000); // Wait until the "Add to Cart" button is visible
  session.click(XPATHS.homepage.addToCartButton);
}

/**
 * Proceed to checkout from the popup modal.
 */
function proceedToCheckoutPopup(session) {
  session.waitForVisibility(XPATHS.homepage.checkoutPopupButton, 5000); // Wait until "Proceed to Checkout" button is visible
  session.click(XPATHS.homepage.checkoutPopupButton);
}

/**
 * Proceed to checkout from the cart page.
 */
function proceedToCheckoutCart(session) {
  session.waitForVisibility(XPATHS.cartPage.pageIdentifier, 5000); // Ensure we are on the cart page
  session.waitForVisibility(XPATHS.cartPage.checkoutButton, 5000); // Wait until the checkout button is visible
  session.click(XPATHS.cartPage.checkoutButton);
}

/**
 * Verify that the user is on the checkout page by checking for the "Personal Information" heading.
 */
function verifyCheckoutPage(session) {
  session.waitForVisibility(XPATHS.checkoutPage.pageIdentifier, 5000); // Wait until the "Personal Information" heading is visible
}
