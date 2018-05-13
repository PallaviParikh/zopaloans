@Get_Zopa_loan
Feature: Open the Zopa website
  As a user I want to navigate to Zopa website and complete the sign up form as a new Borrower.

  @Open_Zopa_website
  Scenario: As a user I want to navigate to Zopa website and select Get a Zopa loan option
    Given I navigated to Zopa website
    When I clicked on Get a Zopa loan
    Then I navigate to Get a Zopa loan page
#    And Close the browser

  @Obtain_a_zopa_quote
  Scenario Outline: As a user I want to verify the interest rate and monthly cost for the loan amount
    Given I navigate to Get a Zopa loan page
    And I select loan amount of "£15000"
    And I select the loan year "1"
    When I Clicked on Get my personalised rates button
    Then I naviagted to sign up page
    And I confirm the loan amount and term result box screen
    And I entered the email address "<Email>"
    And I entered the Title "<Title>"
    And I entered the First name "<First name>"
    And I entered the Last name "<Last name>"
    And I entered the Phone number "<Phone number>"
    And I entered the Date of birth "<Date of birth>"
    And I entered the Laon reason "<Loan reason>"
    And I entered the Postcode "<Postcode>"
    And I click on Look up address Look up address
    And I select the first address "<address>"
    And I entered the move in month and year "<move in month>" "<move in year>"
    And I click on use this address command option
    And I select the employment status "<Employment status>"
    And I entered the annual income before tax "<Annual income>"
    When I Take a screen shot
    Then Close the browser

    Examples:
      | Email              | Title | First name | Last name | Phone number | Date of birth | Loan reason        | Postcode | address                                       | move in month | move in year | Employment status  | Annual income |
      | plvparih@gmail.com | Ms    | Pallavi    | Parikh    |  07432105689 | 20/01/1990    | Debt consolidation | TW5 9TY  | 778a, Bath Road, Hounslow, Middlesex, TW5 9TY | November      |         2012 | Employed full-time |         50000 |
