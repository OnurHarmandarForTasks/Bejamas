@Regression
Feature: Product List
  Background:
    Given the user navigates to homepage

    Scenario: The product list should contain 6 artworks
      When the user hover overs the product list
      Then verify the number of the product list is 6

  Scenario: Hover over to product and see add to chart
    When the user hover over the product pictures
    Then verify add to chart bars are displayed


    Scenario: Best seller flag appears after hovering over the product
      Then verify that Best Seller flag is disabled after hovering over