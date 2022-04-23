package com.bejamas.tests.step_definitions;

import com.bejamas.tests.pages.HomePage;
import com.bejamas.tests.utilities.Driver;
import com.bejamas.tests.utilities.MyUtilities;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.List;

public class PaginationStepDefs {
    HomePage homePage=new HomePage();

    @Then("Verify the page numbers")
    public void verify_the_page_numbers() {
        Assert.assertTrue(homePage.paginationMain.isDisplayed());
    }


    @Then("Click on the page number and Verify the pages are changing")
    public void clickOnThePageNumberAndVerifyThePagesAreChanging() {
        List<WebElement> pages=homePage.pageNumbers;
        System.out.println("pages.size() = " + pages.size());
        int currentPageNumber;
        int defaultPageNumber=Integer.parseInt(homePage.currentPage.getText());

        for (int i = 0; i < pages.size(); i++) {
            currentPageNumber=Integer.parseInt(homePage.currentPage.getText());
            System.out.println("currentPageNumber = " + currentPageNumber);
            System.out.println("defaultPageNumber = " + defaultPageNumber);
            Assert.assertEquals(defaultPageNumber,currentPageNumber);

            //after switching to second page prev arrow's locater is changing and it becomes a pages member
            //to pass to 0 to 2 a condition is needed
            if(pages.get(i).getText().equals("1")){
                i++;
            }
            pages.get(i).click();
            MyUtilities.waitFor(1);

            defaultPageNumber++;
        }
    }


    @Then("Click on the {string} arrow and Verify the pages are changing")
    public void clickOnTheArrowAndVerifyThePagesAreChanging(String arrow) {
        List<WebElement> pages=homePage.pageNumbers;
        System.out.println("pages.size() = " + pages.size());
        int currentPageNumber;
        int defaultPageNumber=Integer.parseInt(homePage.currentPage.getText());

        for (int i = 0; i < pages.size(); i++) {
            currentPageNumber=Integer.parseInt(homePage.currentPage.getText());
            System.out.println("currentPageNumber = " + currentPageNumber);
            System.out.println("defaultPageNumber = " + defaultPageNumber);
            Assert.assertEquals(defaultPageNumber,currentPageNumber);

            if (arrow.equals("next")){

                if (currentPageNumber!=pages.size()){
                    homePage.nextArrow.click();
                }
                defaultPageNumber++;
            }else if (arrow.equals("prev")){
                pages.get(0).click();
                defaultPageNumber--;
                if(defaultPageNumber==1){
                    currentPageNumber=defaultPageNumber;
                    System.out.println("currentPageNumber = " + currentPageNumber);
                    System.out.println("defaultPageNumber = " + defaultPageNumber);
                    Assert.assertEquals(defaultPageNumber,currentPageNumber);
                    break;
                }

            }
            MyUtilities.waitFor(1);
        }

    }
}
