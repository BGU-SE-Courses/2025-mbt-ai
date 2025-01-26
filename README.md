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

Feature: Admin updates a product price in PrestaShop
Scenario: Admin successfully changes the price of a product
Given the admin is on the PrestaShop login page.
When the admin logs in with email and password.
And navigates to the product catalog.
And selects the product name.
And updates the retail price to price>.
Then the product price should be updated successfully.

Feature: User adds a product to the cart and proceeds to checkout
Scenario: User successfully adds a product and reaches the checkout page
Given the user is on the PrestaShop homepage.
When the user logs in with email and password.
And adds the product name to the cart.
And navigates to the cart page and clicks checkout.
Then the user should be on the checkout page.


## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory. 

## Results
Update all README.md files (except for d-e, see Section 1). Specifically, replace all $$*TODO*…$$ according to the instructions inside the $$.

## Detected Bugs
We detected the following bugs:

1. Bug 1: 
   1. General description: ...
   2. Steps to reproduce: ...
   3. Expected result: ...
   4. Actual result: ...
   5. Link to the bug report: (you are encouraged to report the bug to the developers of the software)
2. Bug 2: ...

$$*TODO* if you did not detect the bug, you should delete this section$$  
