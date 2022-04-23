package com.bejamas.tests.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class HomePage extends BasePage{

    @FindBy(css = "div[class='FeaturedProductstyle__ProductImageWrapper-b7938p-0 epCavU']")
    public WebElement featuredProduct;

    @FindBy(xpath = "//div[@class='FeaturedProductstyle__ProductImageWrapper-b7938p-0 epCavU']/p")
    public WebElement message;

    @FindBy(xpath = "//div[@class='style__Row-sc-4ctdae-2 lgoTez']")
    public WebElement productList;

    @FindBy(xpath = "//div[@class='ProductCardstyle__ProductImageWrapper-sc-5v39a6-1 OdCKD']")
    public List<WebElement> productElements;

    @FindBy(xpath = "//div[@class='ProductCardstyle__ProductImageWrapper-sc-5v39a6-1 OdCKD']")
    public List<WebElement> productPictures;

    @FindBy(xpath = "//div[@class='ProductCardstyle__ProductImageWrapper-sc-5v39a6-1 OdCKD']/button")
    public List<WebElement> addToChartProducts;

    @FindBy(xpath = "//p[@class='ProductCardstyle__BestSellerBadge-sc-5v39a6-6 eHAhyp']")
    public List<WebElement> bestSellers;

    @FindBy(css = "button>span")
    public WebElement counterBadge;

    @FindBy(css = "button[class='Buttonstyle__ButtonWrapper-sc-1d6yy9q-0 fQMgOi']")
    public WebElement featuredArtAddToCart;

    @FindBy(xpath = "//div[@class='style__Column-sc-4ctdae-1 EwxsO']/div/div")
    public List<WebElement> dropdownItems;

    @FindBy(xpath = "//div[@class='Navbarstyle__CartWrapper-sc-1b7zefh-1 kcaWdL']")
    public WebElement dropdown;

    @FindBy(xpath = "//button[@class='ShoppingCartstyle__CloseButton-sc-1xombtx-2 dZcQeL']")
    public WebElement closeDropdown;

    @FindBy(xpath = "(//button)[1]")
    public WebElement basketIcon;

    @FindBy(xpath = "//button[@class='Buttonstyle__ButtonWrapper-sc-1d6yy9q-0 kkjxIW']")
    public WebElement clearButton;

    @FindBy(className = "empty-text")
    public WebElement emptMessage;

    @FindBy(xpath = "//div[@class='style__Column-sc-4ctdae-1 RTgwF']/ol")
    public WebElement paginationMain;

    @FindBy(xpath = "//div/ol/li[@class='PaginationIndicatorstyle__Li-urm45v-1 jpDQtp']")
    public List<WebElement> pageNumbers;

    @FindBy(xpath = "//div/ol/li[@class='PaginationIndicatorstyle__Li-urm45v-1 bbjimK']")
    public WebElement currentPage;

    @FindBy(xpath = "//div/ol/li[@class='PaginationIndicatorstyle__Li-urm45v-1 MCnLo']")
    public WebElement nextArrow;



}
