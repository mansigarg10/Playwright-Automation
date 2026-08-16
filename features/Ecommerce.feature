Feature: Ecommerce end to end validation
       
       @Smoke 
       Scenario Outline: User is able to login to the ecommerce application successfully
              Given User is on the ecommerce application login page
              #When User enters valid "tanya10@gmail.com" and "Tanya@10"
              When User enters valid "<username>" and "<password>"
              And User clicks on the login button
              Then User should be redirected to the homepage of the ecommerce application

       Examples:
         | username            | password     |
         | tanya10@gmail.com   | Tanya@10     |
         | mansi10@gamil.com   | Mansi10      |
       
       @Regression
       Scenario: Get the product name and add to cart
              Given User is on the homepage of the ecommerce application with valid credentials "tanya10@gmail.com" and "Tanya@10"
              When User fetch the first product name and add to cart
              Then User go to cart page and verify if the product is visible or not