$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/DemoWebShop.feature");
formatter.feature({
  "name": "DemoWebShop",
  "description": "\tIn order to buy products \n\tAs a e-commerce customer\n\tI want to access the Application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter gender as \u0027\u003cgender\u003e\u0027 and firstname as \u0027\u003cfirstname\u003e\u0027 and lastname as \u0027\u003clastname\u003e\u0027 and email as \u0027\u003cemail\u003e\u0027 and password as \u0027\u003cpassword\u003e\u0027 and confirmpassword as \u0027\u003cconfirmpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "my account must be registered with the Application",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "gender",
        "firstname",
        "lastname",
        "email",
        "password",
        "confirmpassword"
      ]
    },
    {
      "cells": [
        "Female",
        "Harika",
        "Yarramsetty",
        "mohithaHY.100011@gmail.com",
        "harikaY",
        "harikaY"
      ]
    },
    {
      "cells": [
        "Female",
        "Kiranmai",
        "Kiran",
        "kiranKIRANs.200022@gmail.com",
        "kiranmai",
        "kiranmai"
      ]
    },
    {
      "cells": [
        "Female",
        "Prasanna",
        "Pras",
        "prasaNNAs.300033@gmail.com",
        "prasannaP",
        "prasannaP"
      ]
    },
    {
      "cells": [
        "Male",
        "Aditya",
        "Borra",
        "adithyaaVArdhanBorra.700007@gmail.com",
        "trustXD",
        "trustXD"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with DemoWebShop Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_have_a_browser_with_DemoWebShop_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter gender as \u0027Female\u0027 and firstname as \u0027Harika\u0027 and lastname as \u0027Yarramsetty\u0027 and email as \u0027mohithaHY.100011@gmail.com\u0027 and password as \u0027harikaY\u0027 and confirmpassword as \u0027harikaY\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_enter_gender_as_and_firstname_as_and_lastname_as_and_email_as_and_password_as_and_confirmpassword_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "my account must be registered with the Application",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.my_account_must_be_registered_with_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with DemoWebShop Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_have_a_browser_with_DemoWebShop_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter gender as \u0027Female\u0027 and firstname as \u0027Kiranmai\u0027 and lastname as \u0027Kiran\u0027 and email as \u0027kiranKIRANs.200022@gmail.com\u0027 and password as \u0027kiranmai\u0027 and confirmpassword as \u0027kiranmai\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_enter_gender_as_and_firstname_as_and_lastname_as_and_email_as_and_password_as_and_confirmpassword_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "my account must be registered with the Application",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.my_account_must_be_registered_with_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with DemoWebShop Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_have_a_browser_with_DemoWebShop_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter gender as \u0027Female\u0027 and firstname as \u0027Prasanna\u0027 and lastname as \u0027Pras\u0027 and email as \u0027prasaNNAs.300033@gmail.com\u0027 and password as \u0027prasannaP\u0027 and confirmpassword as \u0027prasannaP\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_enter_gender_as_and_firstname_as_and_lastname_as_and_email_as_and_password_as_and_confirmpassword_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "my account must be registered with the Application",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.my_account_must_be_registered_with_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with DemoWebShop Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_have_a_browser_with_DemoWebShop_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter gender as \u0027Male\u0027 and firstname as \u0027Aditya\u0027 and lastname as \u0027Borra\u0027 and email as \u0027adithyaaVArdhanBorra.700007@gmail.com\u0027 and password as \u0027trustXD\u0027 and confirmpassword as \u0027trustXD\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_enter_gender_as_and_firstname_as_and_lastname_as_and_email_as_and_password_as_and_confirmpassword_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "my account must be registered with the Application",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.my_account_must_be_registered_with_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with DemoWebShop Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_have_a_browser_with_DemoWebShop_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter login details from excel \u0027src/test/resources/Excel/Login.xlsx\u0027 with sheetname as  \u0027LoginDetails\u0027 and click on Login",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_enter_login_details_from_excel_with_sheetname_as_and_click_on_Login(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I must login to the portal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_must_login_to_the_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with DemoWebShop Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_have_a_browser_with_DemoWebShop_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter \u0027Fiction\u0027 in search bar and click on search",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_enter_in_search_bar_and_click_on_search(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I must get the products related to \u0027Fiction\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_must_get_the_products_related_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with DemoWebShop Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_have_a_browser_with_DemoWebShop_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Books",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Books in the Homepage and select \u0027Science\u0027 book",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_click_on_Books_in_the_Homepage_and_select_book(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I must get the price of the book",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_must_get_the_price_of_the_book()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have a browser with DemoWebShop Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_have_a_browser_with_DemoWebShop_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Computers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Computers in the Homepage and click on \u0027Notebooks\u0027 and select \u002714.1-inch laptop\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_click_on_Computers_in_the_Homepage_and_click_on_and_select(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I must get navigated to the laptop page and must be ale to get product details",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_must_get_navigated_to_the_laptop_page_and_must_be_ale_to_get_product_details()"
});
formatter.result({
  "status": "passed"
});
});