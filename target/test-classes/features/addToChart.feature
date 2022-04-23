
@Regression
Feature: Add To Chart

  Background:
    Given the user navigates to homepage

  Scenario:User can not see the counter badge if it is empty
    Then Verify that counter badge is NOT appear

    Scenario: User can see the number of added items on the counter badge
      When the user adds the new item
      Then Verify the number of counter badge is the same with added products

  Scenario: User can see the dropdow for each Add to cart action
    When the user adds the new item
    Then verify the dropdown appears and close the dropdown
    And Add items from product list and verify dropdown appears for each action

  Scenario: User can see dropdown by clicking busket icon
    When the user adds the new item
    Then verify the dropdown appears and close the dropdown
    And click the basket icon
    Then verify the dropdown appears and close the dropdown

  Scenario: User can see the dropdow empty after clicking clear button
    When the user adds the new item
    Then verify the dropdown appears and close the dropdown
    And click the basket icon
    And click the clear button
    And click the basket icon
    Then verify the "Your Shopping Cart is Empty" message
