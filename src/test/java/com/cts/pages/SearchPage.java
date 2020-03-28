package com.cts.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SearchPage {
	private WebDriver driver;
	private By searchElementLocator = By.xpath("//a[contains(text(),'Fiction')]");
	private By searchElementNameLocator = By.xpath("//h1[contains(text(),'Fiction')]");
	
	public SearchPage(WebDriver driver)
	{
		this.driver = driver;
	}
	
	public void clickonSearchElement()
	{
		driver.findElement(searchElementLocator).click();
	}
	
	public boolean assertSearchElement(String searchElement)
	{
		String name = driver.findElement(searchElementNameLocator).getText();
		if(name.equalsIgnoreCase(searchElement))
			return true;
		else
			return false;
	}
}
