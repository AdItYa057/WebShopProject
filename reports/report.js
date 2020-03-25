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
        "harikaascsd@gmail.com",
        "harikaY",
        "harikaY"
      ]
    },
    {
      "cells": [
        "Female",
        "Kiranmai",
        "Kiran",
        "kiran@gmail.com",
        "kiranmai",
        "kiranmai"
      ]
    },
    {
      "cells": [
        "Female",
        "Prasanna",
        "Pras",
        "prasa@gmail.com",
        "prasannaP",
        "prasannaP"
      ]
    },
    {
      "cells": [
        "Male",
        "Aditya",
        "Borra",
        "adithyaaV@gmail.com",
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
  "name": "I enter gender as \u0027Female\u0027 and firstname as \u0027Harika\u0027 and lastname as \u0027Yarramsetty\u0027 and email as \u0027harikaascsd@gmail.com\u0027 and password as \u0027harikaY\u0027 and confirmpassword as \u0027harikaY\u0027",
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
  "name": "I enter gender as \u0027Female\u0027 and firstname as \u0027Kiranmai\u0027 and lastname as \u0027Kiran\u0027 and email as \u0027kiran@gmail.com\u0027 and password as \u0027kiranmai\u0027 and confirmpassword as \u0027kiranmai\u0027",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027Continue\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RILG4HT\u0027, ip: \u0027192.168.0.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\adity\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56322}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 18cd55eb4ccccb91f71f093f10dd1471\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Continue\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cts.pages.RegistrationPage.checkContinue(RegistrationPage.java:47)\r\n\tat com.cts.stepDefinitions.StepDefinitions.my_account_must_be_registered_with_the_Application(StepDefinitions.java:55)\r\n\tat ✽.my account must be registered with the Application(file:///C:/Users/adity/Desktop/AdiDemoWorkShop-master/AdiDemoWorkShop-master/src/main/resources/features/DemoWebShop.feature:12)\r\n",
  "status": "failed"
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
  "name": "I enter gender as \u0027Female\u0027 and firstname as \u0027Prasanna\u0027 and lastname as \u0027Pras\u0027 and email as \u0027prasa@gmail.com\u0027 and password as \u0027prasannaP\u0027 and confirmpassword as \u0027prasannaP\u0027",
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
  "name": "I enter gender as \u0027Male\u0027 and firstname as \u0027Aditya\u0027 and lastname as \u0027Borra\u0027 and email as \u0027adithyaaV@gmail.com\u0027 and password as \u0027trustXD\u0027 and confirmpassword as \u0027trustXD\u0027",
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
formatter.scenarioOutline({
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter email as \u0027\u003cusername\u003e\u0027 and enter password as \u0027\u003cpassword\u003e\u0027 and click on Login",
  "keyword": "When "
});
formatter.step({
  "name": "I must login to the portal",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "trustxd@gmail.com",
        "trustXD"
      ]
    },
    {
      "cells": [
        "harikaY@gmail.com",
        "harikaY"
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
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter email as \u0027trustxd@gmail.com\u0027 and enter password as \u0027trustXD\u0027 and click on Login",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_enter_email_as_and_enter_password_as_and_click_on_Login(java.lang.String,java.lang.String)"
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
  "name": "Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter email as \u0027harikaY@gmail.com\u0027 and enter password as \u0027harikaY\u0027 and click on Login",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepDefinitions.StepDefinitions.i_enter_email_as_and_enter_password_as_and_click_on_Login(java.lang.String,java.lang.String)"
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
  "error_message": "java.lang.AssertionError: Got wrong product suggestions\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat com.cts.stepDefinitions.StepDefinitions.i_must_get_the_products_related_to(StepDefinitions.java:103)\r\n\tat ✽.I must get the products related to \u0027Fiction\u0027(file:///C:/Users/adity/Desktop/AdiDemoWorkShop-master/AdiDemoWorkShop-master/src/main/resources/features/DemoWebShop.feature:32)\r\n",
  "status": "failed"
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