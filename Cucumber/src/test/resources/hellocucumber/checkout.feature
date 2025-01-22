Feature: User adds a product to the cart and proceeds to checkout

  Scenario Outline: User successfully adds a product and reaches the checkout page
    Given the user is on the PrestaShop homepage
    When user is logged in as "avigofek@post.bgu.ac.il" "skibidiOhio"
    And adds "<name>" to the cart
    And the user is on the cart page and clicks checkout
    Then the user should be on the checkout page

    Examples:
    | name                         |
    | Hummingbird printed t-shirt  |
    | Mug The best is yet to come  |
    | Brown bear - Vector graphics |

    # we created account with name:"avigofek@post.bgu.ac.il" password:"skibidiOhio"  in our DB.
