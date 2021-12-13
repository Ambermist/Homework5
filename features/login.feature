Feature: Login Check

  Scenario:
    When I go to "https://viktor-silakov.github.io/course-sut/index.html?quick"
    When I check login combinations:
      | user              | password      |
      | walker@jw.com     | password1     |
      | walker@jw.com     |               |
      |                   | password      |
      | old_walker@jw.com | walker@jw.com |
      | admin             | admin         |
      | user              | 123           |
      | dlink             | dlink         |
      | user              |               |
      | admin             |               |
      |                   |               |