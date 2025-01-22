/**
 * This file contains test data, project-wide constants, and XPath selectors.
 */

const URL = 'http://localhost:8080/';

const XPATHS = {
  homepage: {
    loginButton: "//*[@id=\"_desktop_user_info\"]/div/a/span",
    productLink: "//a[contains(text(), 'Brown bear - Vector graphics')]",
    addToCartButton: "//*[@id=\"add-to-cart-or-refresh\"]/div[2]/div/div[2]/button",
    checkoutPopupButton: "//*[@id=\"blockcart-modal\"]/div/div/div[2]/div/div[2]/div/div/a"
  },
  loginPage: {
    emailField: "//*[@id=\"field-email\"]", // Email input field
    passwordField: "//*[@id=\"field-password\"]", // Password input field
    submitButton: "//*[@id=\"submit-login\"]", // Login submit button
    logoutButton: "//*[@id=\"_desktop_user_info\"]/div/a[1]", // Logout button (used for verification)
  },
  cartPage: {
    pageIdentifier: "//*[@id=\"main\"]/div/div[1]/div/div[1]/h1",
    checkoutButton: "//*[@id=\"main\"]/div/div[2]/div[1]/div[2]/div/a"
  },
  checkoutPage: {
    pageIdentifier: "//*[@id=\"checkout\"]"
  }
};

const USER_MAIL = 'avigofek@post.bgu.ac.il';
const PASSWORD = 'skibidiOhio';



/**
 * This file contains test data, project-wide constants, and XPath selectors for the Admin workflow.
 */

const ADMIN_URL = 'http://localhost:8080/admina';  // Admin panel URL

const XPATHS_Admin = {
  adminLoginPage: {
    emailField: "//*[@id=\"email\"]", // Admin email input field
    passwordField: "//*[@id=\"passwd\"]", // Admin password input field
    submitButton: "//*[@id=\"submit_login\"]", // Login button
    dashboardIdentifier: "//h1[contains(text(), 'Dashboard')]" // Verify admin login
  },
  adminPanel: {
    catalogMenu: "//*[@id=\"subtab-AdminCatalog\"]/a",
    productsOption: "//*[@id=\"subtab-AdminProducts\"]"
  },
  productPage: {
    productLink: "//a[contains(text(), 'Hummingbird cushion')]", // Example product
    pricingTab: "//*[@id=\"product_pricing-tab-nav\"]", // Pricing tab
    retailPriceField: "//*[@id=\"product_pricing_retail_price_price_tax_excluded\"]",
    saveButton: "//*[@id=\"product_footer_save\"]"
  },
  successMessage: {
    confirmationPopup: "//*[@id=\"main-div\"]/div/div[3]/form/div[3]"
  }
};

const ADMIN_EMAIL = 'demo@prestashop.com';
const ADMIN_PASSWORD = 'prestashop_demo';
const NEW_PRICE = '25.00';
