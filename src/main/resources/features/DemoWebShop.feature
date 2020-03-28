Feature: DemoWebShop 
	In order to buy products 
	As a e-commerce customer
	I want to access the Application
	
Background: 
	Given I have a browser with DemoWebShop Application 
	
Scenario Outline: Registration 
	When I enter gender as '<gender>' and firstname as '<firstname>' and lastname as '<lastname>' and email as '<email>' and password as '<password>' and confirmpassword as '<confirmpassword>' 
	
	Then my account must be registered with the Application 
Examples:
|gender|firstname|lastname|email|password|confirmpassword|
|Female|Harika|Yarramsetty|mohithaHY.0001@gmail.com|harikaY|harikaY|
|Female|Kiranmai|Kiran|kiranKIRANs.0002@gmail.com|kiranmai|kiranmai|
|Female|Prasanna|Pras|prasaNNAs.0003@gmail.com|prasannaP|prasannaP|
|Male|Aditya|Borra|adithyaaVArdhanBorra.0007@gmail.com|trustXD|trustXD|	


Scenario: Login 
	When I enter login details from excel 'src/test/resources/Excel/Login.xlsx' with sheetname as  'LoginDetails' and click on Login 
	Then I must login to the portal 


	

Scenario: Search 
	When I enter 'Fiction' in search bar and click on search 
	Then I must get the products related to 'Fiction'
	
	
Scenario: Books 
	When I click on Books in the Homepage and select 'Science' book 
	Then I must get the price of the book 


Scenario: Computers 
	When I click on Computers in the Homepage and click on 'Notebooks' and select '14.1-inch laptop' 
	
	Then I must get navigated to the laptop page and must be ale to get product details
	
	
