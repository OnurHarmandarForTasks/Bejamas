@Regression
Feature:featured product


  Background:
    Given the user navigates to homepage


  Scenario: the product displays on the other products
    When the product should have special message under the picture
    Then the product should be displayed on the productlist
