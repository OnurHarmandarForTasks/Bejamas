package com.bejamas.tests.step_definitions;

import com.bejamas.tests.pages.HomePage;
import com.bejamas.tests.utilities.MyUtilities;
import com.bejamas.tests.utilities.ConfigurationReader;
import com.bejamas.tests.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Point;

public class HomePageStepDefs {
    HomePage homePage=new HomePage();
    @Given("the user navigates to homepage")
    public void the_user_navigates_to_homepage() throws InterruptedException {
        Driver.get().get(ConfigurationReader.get("url"));
        MyUtilities.waitFor(2);
    }



    @When("the product should have special message under the picture")
    public void the_product_should_have_special_message_under_the_picture() {
        String expectedFlag="Photo of the day";
        String actualFlag= homePage.message.getText();
        System.out.println("actualMessage = " + actualFlag);
        Assert.assertEquals("Verify Actual Message",expectedFlag,actualFlag);

    }
    @Then("the product should be displayed on the productlist")
    public void the_product_should_be_displayed_on_the_productlist() {
        //Point class and getLocation Method brings the location of the WebElement
        //getY() methods shows if the element on or under
        Point yCordFeaturedProduct=homePage.featuredProduct.getLocation();
        int featuredProductYloc=yCordFeaturedProduct.getY();
        System.out.println("yCord.getY() = " + yCordFeaturedProduct.getY());

        Point yCordProductList=homePage.productList.getLocation();
        int productListYloc=yCordProductList.getY();
        System.out.println("yCodeProductList.getY() = " + yCordProductList.getY());

        //if Y cord of productList bigger than Y cord of featured product return true and assertion passes
        Assert.assertTrue(productListYloc>featuredProductYloc);

    }

}
