package com.bejamas.tests.step_definitions;

import com.bejamas.tests.pages.HomePage;
import com.bejamas.tests.utilities.Driver;
import com.bejamas.tests.utilities.MyUtilities;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class AddToChartStepDefs {
    HomePage homePage=new HomePage();
    JavascriptExecutor jse= (JavascriptExecutor) Driver.get();
    Actions actions=new Actions(Driver.get());
    WebDriverWait wait=new WebDriverWait(Driver.get(),10);

    @Then("Verify that counter badge is NOT appear")
    public void verify_that_counter_badge_is_NOT_appear() {
        //If it is displayed it turns false
        Assert.assertFalse("Verify the number of counter: "+homePage.counterBadge.getText(),homePage.counterBadge.isDisplayed());
    }

    @When("the user adds the new item")
    public void the_user_adds_the_new_item() {
        homePage.featuredArtAddToCart.click();
        MyUtilities.waitFor(1);
    }



    @Then("Verify the number of counter badge is the same with added products")
    public void verify_the_number_of_counter_badge_is_the_same_with_added_products() {
        //Number of added items and number of counter should be the same
        List<WebElement> addedItems=homePage.dropdownItems;
        int expectedNumberOfItems=addedItems.size();
        int actualNuberOfCounter=Integer.parseInt(homePage.counterBadge.getText());
        Assert.assertEquals("Verify number of counter: "+homePage.counterBadge.getText(),expectedNumberOfItems,actualNuberOfCounter);
    }
    @Then("verify the dropdown appears and close the dropdown")
    public void verifyTheDropdownAppearsAndCloseTheDropdown() {
        Assert.assertTrue(homePage.dropdown.isDisplayed());
        MyUtilities.waitFor(1);
        homePage.closeDropdown.click();
        MyUtilities.waitFor(1);

    }

    @And("Add items from product list and verify dropdown appears for each action")
    public void addItemsFromProductListAndVerifyDropdownAppearsForEachAction() {
        //I add the products from product list one by one
        //And verify the dropdown appears for each action


        List<WebElement> productsPictureList=homePage.productPictures;
        List<WebElement> addToChartList=homePage.addToChartProducts;
        for(int i=0;i<productsPictureList.size();i++) {
            jse.executeScript("arguments[0].scrollIntoView(true);",homePage.productList);
            actions.moveToElement(productsPictureList.get(i)).perform();
            MyUtilities.waitFor(2);

            wait.until(ExpectedConditions.elementToBeClickable(addToChartList.get(i)));
            addToChartList.get(i).click();
            verifyTheDropdownAppearsAndCloseTheDropdown();
        }

    }

    @And("click the basket icon")
    public void clickTheBasketIcon() {
        homePage.basketIcon.click();
    }
    @Then("click the clear button")
    public void click_the_clear_button() {
        homePage.clearButton.click();
        MyUtilities.waitFor(1);
    }

    @Then("verify the {string} message")
    public void verify_the_message(String expectedMessage) {
       String actualMessage=homePage.emptMessage.getText();
        System.out.println("actualMessage = " + actualMessage);
        Assert.assertEquals("Verify actual message: "+actualMessage,expectedMessage,actualMessage);
    }


}
