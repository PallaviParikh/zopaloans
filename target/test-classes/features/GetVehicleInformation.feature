@test
Feature: Get Vehicle Information from DVLA


  Scenario: Redirect to vehicle enquiry service
    Given I navigate to Vehicle and driver data and information page
    When I click on Start Now button
    Then I am redirected to vehicle enquiry service page


  Scenario Outline: View Vehicle details
    Given I navigate to vehicle enquiry service page
    And I enter registration number <Registration number>
    When I click on continue button
    And I confirm vehicle details RegNum <Registration number> Make <Make> Colour <Colour>
    Then vehicle details are displayed <Registration number>
    Examples:
      |  Registration number | Make | Colour |
      |  KU04 TDV            | FORD | BLUE   |

  Scenario Outline: Vehicle details don't match
    Given I navigate to vehicle enquiry service page
    And I enter registration number <Registration number>
    When I click on continue button
    And I select vehicle details does not match
    When I click on continue
    Then I am redirected to vehicle enquiry service page
    Examples:
      |  Registration number |
      |  KU04 TDV            |