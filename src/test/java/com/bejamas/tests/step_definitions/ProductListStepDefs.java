package com.bejamas.tests.step_definitions;

import com.bejamas.tests.pages.HomePage;
import com.bejamas.tests.utilities.MyUtilities;
import com.bejamas.tests.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class ProductListStepDefs {

    HomePage homePage=new HomePage();
    JavascriptExecutor jse= (JavascriptExecutor) Driver.get();
    Actions actions=new Actions(Driver.get());
    WebDriverWait wait=new WebDriverWait(Driver.get(),10);

    @When("the user hover overs the product list")
    public void the_user_hover_overs_the_product_list() {

        jse.executeScript("arguments[0].scrollIntoView(true);",homePage.productList);
    }

    @Then("verify the number of the product list is {int}")
    public void verify_the_number_of_the_product_list_is(int expectedSize) {
        List<WebElement> elements=homePage.productElements;
        int actualSize=elements.size();

        Assert.assertEquals("verify actual size",expectedSize,actualSize);
    }

    @When("the user hover over the product pictures")
    public void the_user_hover_over_the_product_pictures() throws InterruptedException {

        jse.executeScript("arguments[0].scrollIntoView(true);",homePage.productList);
        MyUtilities.waitFor(2);

    }


    @Then("verify add to chart bars are displayed")
    public void verify_add_to_chart_bars_are_displayed(){
        //Normally isDisplayed method gives us if the element is displayed on the screen or not
        //But in this situation HTML doesn't have expected form
        //So I used the Location of "ADD TO CHART" button
        //When we hover over the pictures, "ADD TO CHART" button moves up and location changes

        List<WebElement> productsPictureList=homePage.productPictures;
        List<WebElement> addToChartList=homePage.addToChartProducts;
        for(int i=0;i<productsPictureList.size();i++) {
            int yCordAddToChartFirst=homePage.yCord(addToChartList.get(i));
            System.out.println("yCordAddToChartFirst = " + yCordAddToChartFirst);
            actions.moveToElement(productsPictureList.get(i)).perform();
            MyUtilities.waitFor(2);

            wait.until(ExpectedConditions.elementToBeClickable(addToChartList.get(i)));

            int  yCordAddToChartLast=homePage.yCord(addToChartList.get(i));
            System.out.println("yCordAddToChartLast = " + yCordAddToChartLast);

            Assert.assertTrue(yCordAddToChartLast<yCordAddToChartFirst);

        }
    }


    @Then("verify that Best Seller flag is disabled after hovering over")
    public void verifyThatBestSellerFlagIsDisabledAfterHoveringOver() {
        //Normally as I manually test the feature and it is a bug I don't automate unless it is fixed
        //But for that task I am automating with a quick way
        //As I don't hover over the products with "Best Seller" flag number of bestSellerItemList should be 0

        List<WebElement> bestSellerItemList=homePage.bestSellers;

        Assert.assertTrue("Verify Size of Best Sellers= "+bestSellerItemList.size(),bestSellerItemList.size()==0);
    }
}
