@Regression
Feature: Pagination

  Background:
    Given the user navigates to homepage
    When the user hover overs the product list
    Scenario: User sees the paginated page number under the page

      Then Verify the page numbers

    Scenario: User can change page by clicking page numbers
      Then Click on the page number and Verify the pages are changing

  @wip
  Scenario: User can cahange pages by clicking 'next' and 'prev' arrows
    Then Click on the "next" arrow and Verify the pages are changing
    And Click on the "prev" arrow and Verify the pages are changing

