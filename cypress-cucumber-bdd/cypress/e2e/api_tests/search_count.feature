# cypress/e2e/api_tests/search_count.feature

Feature: Search count for deli items

Scenario: Valid search term returns correct response
  Given I have the search endpoint
  When I search for the term "deli"
  Then the response status code should be 200
  And the response should contain "ArticleCount" in "SearchCount"
  And the response should contain "Total" in "SearchCount"
  And I log the response details

Scenario: Invalid search term returns empty results
  Given I have the search endpoint
  When I search for the term "invalidterm"
  Then the response status code should be 200
  And the response should contain "ArticleCount" in "SearchCount"
  And ArticleCount should be 0 in "SearchCount"
  And the response should contain "Total" in "SearchCount"
  And I log the response details

Scenario: Empty search term returns bad request
  Given I have the search endpoint
  When I search with an empty term
  Then the response status code should be 400
  And I log the response details
