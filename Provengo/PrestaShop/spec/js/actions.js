/**
 * Open the PrestaShop homepage.
 */
function openPrestaShop(session) {
  session.start(URL);
}

function login(session){
  session.waitForVisibility(XPATHS.homepage.loginButton, 5000); // Wait for login button
  session.click(XPATHS.homepage.loginButton);

  session.waitForVisibility(XPATHS.loginPage.emailField, 5000); // Wait for email field
  session.writeText(XPATHS.loginPage.emailField, USER_MAIL);

  session.waitForVisibility(XPATHS.loginPage.passwordField, 5000); // Wait for password field
  session.writeText(XPATHS.loginPage.passwordField, PASSWORD);

  session.waitForVisibility(XPATHS.loginPage.submitButton, 5000); // Wait for login submit button
  session.click(XPATHS.loginPage.submitButton);

  // Verify login success by checking if logout button appears
  session.waitForVisibility(XPATHS.loginPage.logoutButton, 5000);
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

//------------------------------------------------Change product price ------------------------------------------------------

/**
 * Open the PrestaShop Admin Panel.
 */
function openAdminPanel(session) {
  session.start(ADMIN_URL);
}

/**
 * Perform Admin login.
 */
function adminLogin(session) {
  session.waitForVisibility(XPATHS_Admin.adminLoginPage.emailField, 5000); // Wait for email field
  session.writeText(XPATHS_Admin.adminLoginPage.emailField, ADMIN_EMAIL);

  session.waitForVisibility(XPATHS_Admin.adminLoginPage.passwordField, 5000); // Wait for password field
  session.writeText(XPATHS_Admin.adminLoginPage.passwordField, ADMIN_PASSWORD);

  session.waitForVisibility(XPATHS_Admin.adminLoginPage.submitButton, 5000); // Wait for login submit button
  session.click(XPATHS_Admin.adminLoginPage.submitButton);

  // Verify login success by checking the Dashboard
  session.waitForVisibility(XPATHS_Admin.adminLoginPage.dashboardIdentifier, 5000);
}

/**
 * Navigate to the Products section.
 */
function navigateToProducts(session) {
  session.waitForVisibility(XPATHS_Admin.adminPanel.catalogMenu, 5000);
  session.click(XPATHS_Admin.adminPanel.catalogMenu);

  session.waitForVisibility(XPATHS_Admin.adminPanel.productsOption, 5000);
  session.click(XPATHS_Admin.adminPanel.productsOption);
}

/**
 * Select the product.
 */
function selectProduct(session) {
  session.waitForVisibility(XPATHS_Admin.productPage.productLink, 5000);
  session.click(XPATHS_Admin.productPage.productLink);
}

/**
 * Change the product price.
 */
function changeProductPrice(session) {
  session.waitForVisibility(XPATHS_Admin.productPage.pricingTab, 5000);
  session.click(XPATHS_Admin.productPage.pricingTab);

  session.waitForVisibility(XPATHS_Admin.productPage.retailPriceField, 5000);
  session.writeText(XPATHS_Admin.productPage.retailPriceField, NEW_PRICE, true);
}

/**
 * Save the updated product price.
 */
function savePriceChange(session) {
  session.waitForVisibility(XPATHS_Admin.productPage.saveButton, 5000);
  session.click(XPATHS_Admin.productPage.saveButton);

  // Wait for the confirmation message
  session.waitForVisibility(XPATHS_Admin.successMessage.confirmationPopup, 5000);
}