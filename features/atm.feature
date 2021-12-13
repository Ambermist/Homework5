Feature: ATM withdraw
  As an Account Holder
  To get money
  I want to withdraw cash from an ATM

  Scenario Outline: ATM sends correct message <message> 
    Given my account balance is "<balance>"
    And the ATM contains "<moneyAmount>"
    When I withdraw "<withdrawAmount>"
    Then I get "<message>" message
    Examples:
      | balance | moneyAmount | withdrawAmount | message                               |
      | 500     | 600         | 50             | Take your money!                      |
      | 500     | 600         | 550            | You don't have enough money!           |
      | 500     | 150         | 300            | The machine is not have enough money! |