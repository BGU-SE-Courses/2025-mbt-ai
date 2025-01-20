package hellocucumber;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class StepDefinitions {

    private WebDriver driver;
    private WebDriverWait wait;
    private JavascriptExecutor jsExecutor;

    @Before
    public void setup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10)); // Dynamic wait
        jsExecutor = (JavascriptExecutor) driver;
    }

    @After
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Given("the user is on the PrestaShop homepage")
    public void userIsOnHomePage() throws InterruptedException {
        driver.get("http://localhost:8080/");
        Thread.sleep(2000); // Wait for page to load
    }

    @When("adds {string} to the cart")
    public void userAddsProductToCart(String productName) throws InterruptedException {
        // Wait until the product is clickable
        WebElement product = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath("//a[contains(text(), '" + productName + "')]")));

        // Scroll to make sure it's centered
        jsExecutor.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", product);
        Thread.sleep(2000);

        // Click on the product
        product.click();
        Thread.sleep(2000);

        WebElement addToCartButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".add-to-cart")));
        addToCartButton.click();
        Thread.sleep(2000); // Wait for modal to appear

        // Click "Proceed to Checkout" in the pop-up modal
        WebElement proceedToCheckoutButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".cart-content-btn .btn-primary")));
        proceedToCheckoutButton.click();
        Thread.sleep(2000); // Ensure navigation to cart page
    }

    @When("the user is on the cart page and clicks checkout")
    public void userClicksCheckoutOnCartPage() throws InterruptedException {
        // Ensure the cart page has loaded
        WebElement cartTitleElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("h1")));
        String cartTitle = cartTitleElement.getText().trim();

        Assertions.assertTrue(cartTitle.equalsIgnoreCase("Shopping Cart") || cartTitle.equalsIgnoreCase("Cart") || cartTitle.contains("Your Cart"),
                "User is not on the cart page! Expected 'Shopping Cart' but found: " + cartTitle);

        // Click the "Proceed to Checkout" button in the cart page
        WebElement finalCheckoutButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".checkout")));
        finalCheckoutButton.click();
        Thread.sleep(2000);
    }

    @Then("the user should be on the checkout page")
    public void userIsOnCheckoutPage() throws InterruptedException {
        // Wait for the URL to confirm we are on the checkout page
        wait.until(ExpectedConditions.urlContains("/order"));

        // Debugging: Print current URL
        String currentUrl = driver.getCurrentUrl();
        System.out.println("Checkout Page URL: " + currentUrl);

        Assertions.assertTrue(currentUrl.contains("/order"),
                "User is not on the checkout page! Current URL: " + currentUrl);

        // Alternative check: Wait for a known checkout page element (update selector if needed)
        WebElement checkoutSection = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("checkout")));
        Assertions.assertTrue(checkoutSection.isDisplayed(), "Checkout page did not load correctly!");

        Thread.sleep(2000);
    }

    //------------------------------------------ change pricing -----------------------------------------------\\

    @Given("the admin is on the PrestaShop login page")
    public void adminIsOnLoginPage() throws InterruptedException {
        driver.get("http://localhost:8080/admina");
        Thread.sleep(2000);
    }

    @When("the admin logs in with email {string} and password {string}")
    public void adminLogsIn(String email, String password) throws InterruptedException {
        WebElement emailField = wait.until(ExpectedConditions.elementToBeClickable(By.id("email")));
        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(By.id("passwd")));
        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(By.name("submitLogin")));

        emailField.sendKeys(email);
        passwordField.sendKeys(password);
        loginButton.click();

        Thread.sleep(3000); // Wait for dashboard to load
    }

    @When("the admin navigates to the product catalog")
    public void adminNavigatesToCatalog() throws InterruptedException {
        WebElement catalogMenu = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[contains(text(), 'Catalog')]")));
        catalogMenu.click();
        Thread.sleep(2000);

        WebElement productsMenu = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(text(), 'Products')]")));
        productsMenu.click();
        Thread.sleep(2000);
    }

    @When("the admin selects the product {string}")
    public void adminSelectsProduct(String productName) throws InterruptedException {
        // Wait until the product is clickable
        WebElement product = wait.until(ExpectedConditions.elementToBeClickable(
                By.xpath("//a[contains(text(), '" + productName + "')]")));

        // Scroll to make sure it's centered
        jsExecutor.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", product);
        Thread.sleep(2000);

        // Click on the product
        product.click();
        Thread.sleep(2000);
    }

    @When("the admin updates the retail price to {string}")
    public void adminUpdatesPrice(String newPrice) throws InterruptedException {
        WebElement pricingTab = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(text(), 'Pricing')]")));
        pricingTab.click();
        Thread.sleep(2000);

        WebElement priceField = wait.until(ExpectedConditions.elementToBeClickable(By.id("product_pricing_retail_price_price_tax_excluded")));
        // Use JavaScript to clear the field completely
        jsExecutor.executeScript("arguments[0].value = '';", priceField);
        Thread.sleep(1000);

        // Send the new price correctly
        priceField.sendKeys(newPrice);
        Thread.sleep(1000);

        WebElement saveButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("product_footer_save")));
        saveButton.click();
        Thread.sleep(3000);
    }

    @Then("the product price should be updated successfully")
    public void productPriceUpdatedSuccessfully() throws InterruptedException {
        // Wait for the success message to appear
        WebElement confirmationMessage = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".alert-text p")));

        // Get the text inside the message
        String messageText = confirmationMessage.getText().trim();
        System.out.println("Success Message: " + messageText); // Debugging

        // Ensure it matches the expected success text
        Assertions.assertEquals("Successful update", messageText, "Price update confirmation message not found!");

        Thread.sleep(2000);
    }
}
