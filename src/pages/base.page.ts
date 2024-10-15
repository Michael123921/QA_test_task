import { Page, BrowserContext } from '@playwright/test';
import { WebElement } from '../elements/web.element';

export default class BasePage {
  protected page: Page;
  protected context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('load');
  }

  // Метод для получения кнопки "Купить" для товара по индексу
  buyProductButton(index: number): WebElement {
    return new WebElement(this.page.locator('button.actionBuyProduct').nth(index));
  }

  // Число товаров в корзине
  get basketItemCount(): WebElement {
    return new WebElement(this.page.locator('span.basket-count-items.badge.badge-primary'));
  }

  // Поле ввода количества товара по индексу
  productCountInput(index: number): WebElement {
    return new WebElement(this.page.locator('input.form-control[name="product-enter-count"]').nth(index));
  }

  // Локатор для ссылки "Корзина" по id
  get basketLinkById(): WebElement {
    return new WebElement(this.page.locator('#dropdownBasket'));
  }

  // Локатор для dropdown-menu
  get dropdownMenu(): WebElement {
    return new WebElement(this.page.locator('div.dropdown-menu[aria-labelledby="dropdownBasket"]'));
  }

  // Локатор для кнопки "Перейти в корзину"
  get goToCartButton(): WebElement {
    return new WebElement(this.page.locator('a.btn.btn-primary.btn-sm.ml-auto[href="/basket"]'));
  }

}
