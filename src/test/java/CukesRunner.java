import common.Driver;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

import static common.Driver.driver;

/**
 * Created by rohitsamala on 02/06/2017.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        tags = "@Obtain_a_zopa_quote",
        format = {"pretty","html:target/Destination"} )
public class CukesRunner {

    @BeforeClass
    public static void setup(){

        Driver.initialiseDriver();

    }

    @AfterClass
    public static void teardown(){
        Driver.driver.quit();
    }
}
