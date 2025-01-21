/*
 * This file contains test data, project-wide constants, and XPath selectors.
 */

const URL = 'http://localhost:8080/';

const XPATHS = {
  homepage: {
    productLink: "//a[contains(text(), 'Mug The best is yet to come')]",
    addToCartButton: "//button[contains(@class, 'add-to-cart')]",
    checkoutPopupButton: "//a[contains(@class, 'btn-primary') and contains(text(), 'Proceed to checkout')]"
  },
  cartPage: {
    pageIdentifier: "//h1[contains(text(), 'Shopping Cart') or contains(text(), 'Cart')]",
    checkoutButton: "//a[contains(@class, 'btn') and contains(text(), 'Proceed to checkout')]"
  },
  checkoutPage: {
    pageIdentifier: "//section[@id='checkout-personal-information-step']"
  }
};

const PRODUCT_NAME = 'Mug The best is yet to come';
