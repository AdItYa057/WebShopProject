package com.cts.stepDefinitions;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cts.base.LaunchWebBrowser;
import com.cts.pages.BooksPage;
import com.cts.pages.ComputersPage;
import com.cts.pages.HomePage;
import com.cts.pages.LoginPage;
import com.cts.pages.RegistrationPage;
import com.cts.pages.SearchPage;
import com.cts.utils.ExcelRead;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinitions {

	WebDriver driver;
	
	
	@Given("I have a browser with DemoWebShop Application")
	public void i_have_a_browser_with_DemoWebShop_Application() {
		//Launching the Browser with either Chrome(ch, default) or Firefox(ff) or Internet explorer(ie)
		LaunchWebBrowser.LaunchWebDriver("ch");
		this.driver = LaunchWebBrowser.driver;

	}

	@When("I enter gender as {string} and firstname as {string} and lastname as {string} and email as {string} and password as {string} and confirmpassword as {string}")
	public void i_enter_gender_as_and_firstname_as_and_lastname_as_and_email_as_and_password_as_and_confirmpassword_as(String gender, String firstname, String lastname, String email, String password, String confirmPassword) 
	{
		//creating a reference variable for HomePage
		HomePage home = new HomePage(driver);
		
		//creating a reference variable for RegistrationPage
		RegistrationPage register = new RegistrationPage(driver);
		
		//clicking on Register button
		home.clickonRegister();
		
		//filling the details to register
		register.fillRegistrationDetails(gender, firstname, lastname, email, password, confirmPassword);
	}

	@Then("my account must be registered with the Application")
	public void my_account_must_be_registered_with_the_Application() {	

		//creating a reference variable for RegistrationPage
		RegistrationPage register = new RegistrationPage(driver);
		
		//check if continue button is present after clicking on Register to validate registration
		boolean ele = register.checkContinue();
		
		//Asserting and dsiplaying whether Login is successful or not
		Assert.assertTrue("Not registered", ele);
		//terminating the current scenario
		LaunchWebBrowser.terminate();

	}

	@When("I enter login details from excel {string} with sheetname as  {string} and click on Login")
	public void i_enter_login_details_from_excel_with_sheetname_as_and_click_on_Login(String fileDetails, String sheetName) throws IOException  {

		HomePage home = new HomePage(driver);
		
		//creating a reference variable for LoginPage
		LoginPage login = new LoginPage(driver);

		//clicking on Login Icon
		home.clickonLogin();
		
		//getting login details from excel
		String[][] data = ExcelRead.getSheetIntoStringArray(fileDetails, sheetName);
		
		//entering Login details
		login.loginDetils(data[0][0], data[0][1]);
		
		//click on Login Button
		login.clickOnLogin();
	}

	@Then("I must login to the portal")
	public void i_must_login_to_the_portal() {
		
		LoginPage login = new LoginPage(driver);
		
		//find if logout button is displayed after login
		boolean logoutele = login.validateLogin();
		Assert.assertTrue("Invalid Credentials", logoutele);
		
		//closing the scenario
		LaunchWebBrowser.terminate();
	}

	@When("I enter {string} in search bar and click on search")
	public void i_enter_in_search_bar_and_click_on_search(String searchText) {
		

		HomePage home = new HomePage(driver);
		home.search(searchText);
		
		//creating a reference variable for Searchpage
		SearchPage search = new SearchPage(driver);
		//clicking on the search Element 
		search.clickonSearchElement();
	}

	@Then("I must get the products related to {string}")
	public void i_must_get_the_products_related_to(String searchText) {
		// Write code here that turns the phrase above into concrete actions
		SearchPage search = new SearchPage(driver);
		if (search.assertSearchElement(searchText))
			System.out.println("Got the products related to search");
		else
			Assert.fail("Got wrong product suggestions");
		
		//closing the scenario
		LaunchWebBrowser.terminate();
	}

	@When("I click on Books in the Homepage and select {string} book")
	public void i_click_on_Books_in_the_Homepage_and_select_book(String bookname) {
		// Write code here that turns the phrase above into concrete actions
		HomePage home = new HomePage(driver);
		BooksPage books = new BooksPage(driver);
		
		//clicking on Books
		home.books();
		
		//getting the book by name
		books.clickonBook(bookname);
	}

	@Then("I must get the price of the book")
	public void i_must_get_the_price_of_the_book() {
		// Write code here that turns the phrase above into concrete actions
		BooksPage books = new BooksPage(driver);
		
		//printing the price of the book
		System.out.println(books.getBookPrice());
		
		//closing the scenario
		LaunchWebBrowser.terminate();
	}

	@When("I click on Computers in the Homepage and click on {string} and select {string}")
	public void i_click_on_Computers_in_the_Homepage_and_click_on_and_select(String computerType, String computer) 
	{
		HomePage home = new HomePage(driver);
		ComputersPage computers = new ComputersPage(driver);
		home.computers();
		//clicking on notepad
		computers.selectComputerType(computerType);
		//selecting the type of Laptop
		computers.selectLaptop();
		
		
	}

	@Then("I must get navigated to the laptop page and must be ale to get product details")
	public void i_must_get_navigated_to_the_laptop_page_and_must_be_ale_to_get_product_details() 
	{		
		ComputersPage computers = new ComputersPage(driver);
		//Asserting CPU type
		String cpuType = computers.getLaptopDetails();
		Assert.assertTrue("Wrong CPU type", cpuType.equalsIgnoreCase("Intel"));
		
		//closing the scenario
		LaunchWebBrowser.terminate();
	}
	
}