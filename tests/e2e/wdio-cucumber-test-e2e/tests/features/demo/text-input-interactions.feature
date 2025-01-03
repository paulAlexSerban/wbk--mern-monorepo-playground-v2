Feature: TextInputInteractions

  @TextInputInteractions
  Scenario Outline: Text input interactions
    Given Text inputs page is open
    When Perform text input interactions
    Then The text inputs should be filled

    Examples:
      | TestID    |
      | WEB_TC002 | 
