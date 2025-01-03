Feature: Web Interactions

  @demo
  Scenario Outline: Form interactions
    Given Text inputs page is open
    When Perform text input interactions
    Then The text inputs should be filled

    Examples:
      | TestID    |
      | WEB_TC002 | 
