Feature: DropdownInteractions

  @DropdownInteractions
  Scenario Outline: Dropdown interactions
    Given Dropdown page is open
    When Check the default dropdown value
    When Perform dropdown interaction - select option 1
    Then The new dropdown value should be 1
    When Perform dropdown interaction - select option 2
    Then The new dropdown value should be 2
    When Perform dropdown interaction - select option 1 of 2
    Then The new dropdown value should be 1 again

    Examples:
      | TestID    |
      | WEB_TC003 | 