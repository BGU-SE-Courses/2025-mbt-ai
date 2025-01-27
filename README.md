# Software Quality Engineering - System Testing
This is a repository for the system-testing assignment of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called [PrestaShop](https://demo.prestashop.com/#/en/front).

PrestaShop is an open-source e-commerce web application built to offer a great shopping experience for both merchants and customers. It is written in PHP and:

Easy to customize: Merchants can adjust it to fit their specific needs.
Supports multiple languages: It works in many languages and is adapted for different countries.
Packed with features: It integrates with major payment services, has a mobile-friendly design for both the store and admin panel, and includes many add-ons to extend its functionality.

## Installation
PrestaShop is an Open Source e-commerce web application, committed to providing the best shopping cart experience for both merchants and customers. It is written in PHP, is highly customizable, supports all the major payment services, is translated in many languages and localized for many countries, has a fully responsive design (both front and back office), etc.

## What we tested
In this assignment, we focused on testing two key features of PrestaShop: updating a product price as an admin and adding a product to the cart as a user. Below are the detailed scenarios for each feature:

🛠 Scenario: Admin updates a product price in PrestaShop.

Preconditions: The admin exists in the system, and the product exists in the product catalog. 

Postcondition: The product's price is updated in the product catalog.

🛒 Scenario: The user adds a product to the cart and proceeds to checkout.

Preconditions: The user exists in the system, and the product is available on the storefront.

Postconditions: The user is successfully redirected to the checkout page, the product is displayed in the shopping cart summary, and the system is ready for the user to complete the purchase.


## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory. 


