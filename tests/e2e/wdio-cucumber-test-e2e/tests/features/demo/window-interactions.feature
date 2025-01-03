Feature: WindowInteractions

  @WindowInteractions
  Scenario Outline: Window interactions
    Given Web page is open
    When Check webpage is completely loaded by listening for DOM content to be loaded
    When Open another window
    Then Browser should have two windows
    When Switch back to old window
    Then Check the title of the window to be The Internet
    When Switch to window based on title
    Then Check the title of the window to be Home | Elemental Selenium
    When Switch back to the main window

    Examples:
      | TestID    |
      | WEB_TC005 | 