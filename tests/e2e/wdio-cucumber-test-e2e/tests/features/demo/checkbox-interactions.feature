Feature: CheckboxInteractions

  @CheckboxInteractions
  Scenario Outline: Checkbox interactions
    Given Checkbox page is open
    When Check selected checkbox value
    When Perform checkbox interaction - select unselected checkbox
    Then The first checkbox value should be true

    Examples:
      | TestID    |
      | WEB_TC004 | 