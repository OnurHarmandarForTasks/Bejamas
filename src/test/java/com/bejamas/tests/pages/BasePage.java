package com.bejamas.tests.pages;

import com.bejamas.tests.utilities.Driver;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {
    public BasePage(){
        PageFactory.initElements(Driver.get(),this);
    }

    public int yCord(WebElement element){
        Point point=element.getLocation();
        int ycord=point.getY();
        return ycord;
    }
}
