Feature: View content for market regions

  As a user, from different market regions, I want to be able to visit the store front and view the content
  available in my region

  Scenario Outline: Acceptance Criteria 1
    Given A user from one of the <Market regions>
    When The user visits the store front
    Then They should be able to view the content related to the <Market regions>

    Examples:
      | Market regions |
      | United Kingdom |
      | France         |
      | Italy          |
