Feature: ScrollNScreenshot

  @ScrollNScreenshot
  Scenario Outline: Scroll and Screenshot
    Given eCommerce web page is open
    When Scroll to the bottom of the page
    Then Take a screenshot of the page

    Examples:
      | TestID    |
      | WEB_TC006 | 