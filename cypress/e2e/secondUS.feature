Feature: Add a Personalised Engagement Ring to the shopping bag

  As a user, from each of the different <market regions>, I want to be able to add a Personalised Engagement Ring to the shopping bag

  @Us2Ac1
  Scenario Outline: Acceptance Criteria 1
    Given A user from one of the <Market regions>
    When I view all available Engagement Rings
    Then I should be able to filter the product by all Available Filters
    Examples:
      | Market regions |
      | United Kingdom |
      | France         |
      | Italy          |

  @Us2Ac2
  Scenario Outline:Acceptance Criteria 2
    Given A user from one of the <Market regions>
    When I view the details of a ring
    Then I should be be able to personalise the ring on and add it to the shopping bag
    Examples:
      | Market regions |
      | United Kingdom |
      | France         |
      | Italy          |

  @Us2Ac3
  Scenario Outline:Acceptance Criteria 3
    Given A user from one of the <Market regions>
    When I add an engagement ring to the shopping bag
    Then I should be able to place an order for the ring

    Examples:
      | Market regions |
      | United Kingdom |
      | France         |
      | Italy          |
