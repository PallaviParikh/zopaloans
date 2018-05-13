package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import static common.Driver.driver;

public class ZopaStepDef {

    @Given("^I navigated to Zopa website$")
    public void i_navigated_to_Zopa_website() throws Throwable {

        driver.get("https://zopa.com/");
        String innerText = driver.findElement(By.xpath("//*[@id=\'homepage-hero\']/div/div/h1")).getText();


        Assert.assertEquals(innerText, "Simple loans. Smart investments.");

        System.out.println(" I have navigated to the " + innerText + " zopa page");

        Thread.sleep(2000);


    }

    @When("^I clicked on Get a Zopa loan$")
    public void i_clicked_on_Get_a_Zopa_loan() throws Throwable {
        driver.findElement(By.xpath("//*[@id='homepage-hero']/div/div/div/div[1]/a")).click();

    }


    @Then("^I navigate to Get a Zopa loan page$")
    public void i_navigate_to_Get_a_Zopa_loan_page() throws Throwable {

        driver.get("https://zopa.com/loans");
        driver.manage().window().maximize();
        String innerText = driver.findElement(By.xpath("//*[@id=\'content\']/section[1]/div[1]/div/h1")).getText();


        Assert.assertEquals(innerText, "See your personalised loan rates in just 3 minutes");

        System.out.println(" I have navigated to the " + innerText + " get a loan page");

        Thread.sleep(2000);

    }

//	@Given("^I navigate to Get a Zopa loan page$")
//	public void i_navigate_to_Get_a_Zopa_loan_page() throws Throwable {
//
//
//
//	}

    @Given("^I select loan amount of \"([^\"]*)\"$")
    public void i_select_loan_amount_of(String arg1) throws Throwable {

        WebElement slider = driver.findElement(By.id("amount-slider"));

//Using Action Class
        Actions move = new Actions(driver);
        Action action = move.dragAndDropBy(slider, 30, 0).build();
        action.perform();

    }

    @Given("^I select the loan year \"([^\"]*)\"$")
    public void i_select_the_loan_year(String arg1) throws Throwable {

        driver.findElement(By.id("term_0")).click();


    }

    @When("^I Clicked on Get my personalised rates button$")
    public void i_Clicked_on_Get_my_personalised_rates_button() throws Throwable {
        WebElement element = driver.findElement(By.id("submit-loan-button"));
        Actions actions = new Actions(driver);
        actions.moveToElement(element);
        actions.perform();
        driver.findElement(By.id("submit-loan-button")).click();
        Thread.sleep(1000);

    }

    @Then("^I naviagted to sign up page$")
    public void i_naviagted_to_sign_up_page() throws Throwable {

    }

    @Given("^I navigated to sign up page$")
    public void i_navigated_to_sign_up_page() throws Throwable {


    }

    @Given("^I confirm the loan amount and term result box screen$")
    public void i_confirm_the_loan_amount_and_term_result_box_screen() throws Throwable {

        String result = driver.findElement(By.cssSelector(".result.box")).getText();
        Assert.assertEquals("You've chosen a loan of £15,500 over 5 years", result);
    }

    @Given("^I entered the email address \"([^\"]*)\"$")
    public void i_entered_the_email_address(String arg1) throws Throwable {

        driver.findElement(By.xpath(("//*[@id=\'member_email\']"))).sendKeys("arg1");


    }

    @Given("^I entered the Title \"([^\"]*)\"$")
    public void i_entered_the_Title(String arg1) throws Throwable {
        driver.findElement(By.id("applications_loan_apply_title_ms")).click();
    }

    @Given("^I entered the First name \"([^\"]*)\"$")
    public void i_entered_the_First_name(String arg1) throws Throwable {


        driver.findElement(By.xpath("//*[@id=\'applications_loan_apply_first_name\']")).sendKeys(arg1);
    }

    @Given("^I entered the Last name \"([^\"]*)\"$")
    public void i_entered_the_Last_name(String arg1) throws Throwable {

        driver.findElement(By.xpath("//*[@id=\'applications_loan_apply_last_name\']")).sendKeys("arg1");

    }

    @Given("^I entered the Phone number \"([^\"]*)\"$")
    public void i_entered_the_Phone_number(String arg1) throws Throwable {

        driver.findElement(By.xpath("//*[@id=\'applications_loan_apply_home_phone\']")).sendKeys("arg1");

    }

    @Given("^I entered the Date of birth \"([^\"]*)\"$")
    public void i_entered_the_Date_of_birth(String arg1) throws Throwable {

        driver.findElement(By.xpath("//*[@id=\'content\']/div/div[1]/div/form/fieldset[1]/div[4]/p/span")).sendKeys("arg1");

    }

    @Given("^I entered the Laon reason \"([^\"]*)\"$")
    public void i_entered_the_Laon_reason(String arg1) throws Throwable {


    }

    @Given("^I entered the Postcode \"([^\"]*)\"$")
    public void i_entered_the_Postcode(String arg1) throws Throwable {

        driver.findElement(By.xpath("//*[@id=\'address_postcode\']")).sendKeys("arg1");
    }

    @Given("^I click on Look up address \"([^\"]*)\"$")
    public void i_click_on_Look_up_address(String arg1) throws Throwable {

        driver.findElement(By.name("find_address")).click();
    }

    @Given("^I entered the move in month and year which is above (\\d+) years$")
    public void i_entered_the_move_in_month_and_year_which_is_above_years(int arg1) throws Throwable {

    }

    @Given("^I click on use this address command option$")
    public void i_click_on_use_this_address_command_option() throws Throwable {

    }

    @Given("^validated the address history displayed on the screen$")
    public void validated_the_address_history_displayed_on_the_screen() throws Throwable {

    }


    @Given("^I selected the employment status \"([^\"]*)\"$")
    public void i_selected_the_employment_status(String arg1) throws Throwable {


    }

    @Given("^I entered the annual income before tax \"([^\"]*)\"$")
    public void i_entered_the_annual_income_before_tax(String arg1) throws Throwable {


    }

    public String timestamp() {
        return new SimpleDateFormat("yyyy-MM-dd HH-mm-ss").format(new Date());

    }

    @When("^I Take a screen shot$")
    public void i_Take_a_screen_shot() throws Throwable {

        File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

        File dest = new File("C:\\_automation\\testoutput\\screenshots\\CompletedZopaMembershipSignupPage_" + timestamp() + ".png");
        FileUtils.copyFile(scr, dest);
        Thread.sleep(3000);


    }


}
