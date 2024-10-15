import { test } from '../src/fixtures/loginFixture';
import { expect } from '@playwright/test';
import { login } from '../src/actions/loginAction';
import BasePage from '../src/pages/base.page';

test.describe('E2E тесты для корзины', () => {
    let basePage: BasePage;

    test.beforeEach(async ({ page, context }) => {
        basePage = new BasePage(page, context);
        await login(page, 'test', 'test', 'https://enotes.pointschool.ru/');
    });

    test('Добавить 9 товаров одного наименования со скидкой', async ({ page }) => {

        // Очищаем поле ввода количества товара
        await basePage.productCountInput(0).clear();
        // Устанавливаем количество товара в поле ввода
        await basePage.productCountInput(0).type('9');
        // Нажимаем кнопку "Купить"
        await basePage.buyProductButton(0).click();
        // Проверяем, что в корзине отображается цифра 9
        await expect(basePage.basketItemCount.locator).toHaveText('9');
        // Кликаем по корзине
        await basePage.basketLinkById.click();
        // Ожидание отображения dropdown-меню
        await basePage.dropdownMenu.waitForElementVisible();
        // Проверка, что dropdown-меню видимо
        await expect(basePage.dropdownMenu.locator).toBeVisible();
        // Кликаем по кнопке "Перейти в корзину" и ожидаем перехода на нужный URL
        await basePage.goToCartButton.click();
        await expect(page).toHaveURL('https://enotes.pointschool.ru/basket');
    });
    
    test('Добавить 8 товаров разного наименования в корзину', async ({ page }) => {

        // Очищаем поле ввода количества товара
        await basePage.productCountInput(0).clear();
        // Устанавливаем количество товара в поле ввода
        await basePage.productCountInput(0).type('1');
        // Нажимаем кнопку "Купить"
        await basePage.buyProductButton(0).click();
        // Проверяем, что в корзине отображается цифра 1
        await expect(basePage.basketItemCount.locator).toHaveText('1');
        // Добавление 8 разных товаров
            for (let i = 0; i < 8; i++) {
                await basePage.buyProductButton(i).click();
                await page.waitForTimeout(500);
            }
        // Проверяем, что в корзине отображается цифра 9
        await expect(basePage.basketItemCount.locator).toHaveText('9');
        // Кликаем по корзине
        await basePage.basketLinkById.click();
        // Ожидание отображения dropdown-меню
        await basePage.dropdownMenu.waitForElementVisible();
        // Проверка, что dropdown-меню видимо
        await expect(basePage.dropdownMenu.locator).toBeVisible();
        // Кликаем по кнопке "Перейти в корзину" и ожидаем перехода на нужный URL
        await basePage.goToCartButton.click();
        await expect(page).toHaveURL('https://enotes.pointschool.ru/basket');
    });

    test('Добавить 1 товар со скидкой', async ({ page }) => {

        // Очищаем поле ввода количества товара
        await basePage.productCountInput(0).clear();
        // Устанавливаем количество товара в поле ввода
        await basePage.productCountInput(0).type('1');
        // Нажимаем кнопку "Купить"
        await basePage.buyProductButton(0).click();
        // Проверяем, что в корзине отображается цифра 9
        await expect(basePage.basketItemCount.locator).toHaveText('1');
        // Кликаем по корзине
        await basePage.basketLinkById.click();
        // Ожидание отображения dropdown-меню
        await basePage.dropdownMenu.waitForElementVisible();
        // Проверка, что dropdown-меню видимо
        await expect(basePage.dropdownMenu.locator).toBeVisible();
        // Кликаем по кнопке "Перейти в корзину" и ожидаем перехода на нужный URL
        await basePage.goToCartButton.click();
        await expect(page).toHaveURL('https://enotes.pointschool.ru/basket');
    });

    test('Добавить 1 товар без скидки', async ({ page }) => {

        // Очищаем поле ввода количества товара
        await basePage.productCountInput(0).clear();
        // Устанавливаем количество товара в поле ввода
        await basePage.productCountInput(0).type('1');
        // Нажимаем кнопку "Купить"
        await basePage.buyProductButton(0).click();
        // Проверяем, что в корзине отображается цифра 9
        await expect(basePage.basketItemCount.locator).toHaveText('1');
        // Кликаем по корзине
        await basePage.basketLinkById.click();
        // Ожидание отображения dropdown-меню
        await basePage.dropdownMenu.waitForElementVisible();
        // Проверка, что dropdown-меню видимо
        await expect(basePage.dropdownMenu.locator).toBeVisible();
        // Кликаем по кнопке "Перейти в корзину" и ожидаем перехода на нужный URL
        await basePage.goToCartButton.click();
        await expect(page).toHaveURL('https://enotes.pointschool.ru/basket');
    });
});
