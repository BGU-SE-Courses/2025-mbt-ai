Feature: Admin updates a product price in PrestaShop

  Scenario Outline: Admin successfully changes the price of a product
    Given the admin is on the PrestaShop login page
    When the admin logs in with email "demo@prestashop.com" and password "prestashop_demo"
    And the admin navigates to the product catalog
    And the admin selects the product "<name>"
    And the admin updates the retail price to "<price>"
    Then the product price should be updated successfully

    Examples:
    | name                        | price  |
    | Hummingbird cushion         | 25.900 |
    | Hummingbird printed t-shirt | 19.90  |
    | Customizable mug            | 7.99   |