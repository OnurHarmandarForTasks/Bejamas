$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addToChart.feature");
formatter.feature({
  "name": "Add To Chart",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can not see the counter badge if it is empty",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Verify that counter badge is NOT appear",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.verify_that_counter_badge_is_NOT_appear()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Verify the number of counter: 0\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertFalse(Assert.java:65)\n\tat com.bejamas.tests.step_definitions.AddToChartStepDefs.verify_that_counter_badge_is_NOT_appear(AddToChartStepDefs.java:27)\n\tat ✽.Verify that counter badge is NOT appear(file:///Users/onur/IdeaProjects/Bejamas/src/test/resources/features/addToChart.feature:9)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can see the number of added items on the counter badge",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "the user adds the new item",
  "keyword": "When "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.the_user_adds_the_new_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the number of counter badge is the same with added products",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.verify_the_number_of_counter_badge_is_the_same_with_added_products()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can see the dropdow for each Add to cart action",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "the user adds the new item",
  "keyword": "When "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.the_user_adds_the_new_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the dropdown appears and close the dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.verifyTheDropdownAppearsAndCloseTheDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add items from product list and verify dropdown appears for each action",
  "keyword": "And "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.addItemsFromProductListAndVerifyDropdownAppearsForEachAction()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can see dropdown by clicking busket icon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "the user adds the new item",
  "keyword": "When "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.the_user_adds_the_new_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the dropdown appears and close the dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.verifyTheDropdownAppearsAndCloseTheDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the basket icon",
  "keyword": "And "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.clickTheBasketIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the dropdown appears and close the dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.verifyTheDropdownAppearsAndCloseTheDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can see the dropdow empty after clicking clear button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "the user adds the new item",
  "keyword": "When "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.the_user_adds_the_new_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the dropdown appears and close the dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.verifyTheDropdownAppearsAndCloseTheDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the basket icon",
  "keyword": "And "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.clickTheBasketIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the clear button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.click_the_clear_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the basket icon",
  "keyword": "And "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.clickTheBasketIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the \"Your Shopping Cart is Empty\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.AddToChartStepDefs.verify_the_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/featuredProduct.feature");
formatter.feature({
  "name": "featured product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the product displays on the other products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "the product should have special message under the picture",
  "keyword": "When "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_product_should_have_special_message_under_the_picture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product should be displayed on the productlist",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_product_should_be_displayed_on_the_productlist()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/pagination.feature");
formatter.feature({
  "name": "Pagination",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user hover overs the product list",
  "keyword": "When "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.ProductListStepDefs.the_user_hover_overs_the_product_list()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User sees the paginated page number under the page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Verify the page numbers",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.PaginationStepDefs.verify_the_page_numbers()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user hover overs the product list",
  "keyword": "When "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.ProductListStepDefs.the_user_hover_overs_the_product_list()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can change page by clicking page numbers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on the page number and Verify the pages are changing",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.PaginationStepDefs.clickOnThePageNumberAndVerifyThePagesAreChanging()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user hover overs the product list",
  "keyword": "When "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.ProductListStepDefs.the_user_hover_overs_the_product_list()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can cahange pages by clicking \u0027next\u0027 and \u0027prev\u0027 arrows",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "Click on the \"next\" arrow and Verify the pages are changing",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.PaginationStepDefs.clickOnTheArrowAndVerifyThePagesAreChanging(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the \"prev\" arrow and Verify the pages are changing",
  "keyword": "And "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.PaginationStepDefs.clickOnTheArrowAndVerifyThePagesAreChanging(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/productList.feature");
formatter.feature({
  "name": "Product List",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The product list should contain 6 artworks",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "the user hover overs the product list",
  "keyword": "When "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.ProductListStepDefs.the_user_hover_overs_the_product_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the number of the product list is 6",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.ProductListStepDefs.verify_the_number_of_the_product_list_is(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: verify actual size expected:\u003c6\u003e but was:\u003c4\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:647)\n\tat com.bejamas.tests.step_definitions.ProductListStepDefs.verify_the_number_of_the_product_list_is(ProductListStepDefs.java:35)\n\tat ✽.verify the number of the product list is 6(file:///Users/onur/IdeaProjects/Bejamas/src/test/resources/features/productList.feature:8)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Hover over to product and see add to chart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "the user hover over the product pictures",
  "keyword": "When "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.ProductListStepDefs.the_user_hover_over_the_product_pictures()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify add to chart bars are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.ProductListStepDefs.verify_add_to_chart_bars_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.HomePageStepDefs.the_user_navigates_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Best seller flag appears after hovering over the product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "verify that Best Seller flag is disabled after hovering over",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bejamas.tests.step_definitions.ProductListStepDefs.verifyThatBestSellerFlagIsDisabledAfterHoveringOver()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Verify Size of Best Sellers\u003d 3\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat com.bejamas.tests.step_definitions.ProductListStepDefs.verifyThatBestSellerFlagIsDisabledAfterHoveringOver(ProductListStepDefs.java:81)\n\tat ✽.verify that Best Seller flag is disabled after hovering over(file:///Users/onur/IdeaProjects/Bejamas/src/test/resources/features/productList.feature:16)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
});