Feature: Demo Feature
  @demo
  Scenario Outline: Run first demo feature
    Given DuckDuckGo page is opened
    When I search with <SearchItem>
    Then I click on the first search result
    Then The URL should match <ExpectedURL>

    Examples:
      | TestID     | SearchItem | ExpectedURL          |
      | DEMO_TC001 | paulserban.eu       | https://paulserban.eu |
