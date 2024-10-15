import { test, expect } from '@playwright/test';

test('Авторизация', async ({ request }) => {
    const headers = {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': 'PHPSESSID=b8a08603be7ea413ce045906540aea34; _csrf=14e23b8de25730e3f30a94b588289f3ba1841684f6bff8372c4cad437c1e7586a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22Z1BkYBL-If7J2LJwosGuQH0QFmLZqnX9%22%3B%7D',
        'origin': 'https://enotes.pointschool.ru',
    };

    const postData = '_csrf=GQripbeeSY1Wg907LoUcBu38nI2cRZMuURfv32lOXmFDO6DO7twFoB_l6nEcyVZxgo_b-M0No38XeqOFGCAGWA%3D%3D&LoginForm%5Busername%5D=test&LoginForm%5Bpassword%5D=test&LoginForm%5BrememberMe%5D=0&LoginForm%5BrememberMe%5D=1&login-button=';
    
    // Выполнение запроса на авторизацию
    const authResponse = await request.post('https://enotes.pointschool.ru/login', {
        headers,
        data: postData
    });

    console.log('Auth Response Status:', authResponse.status());
    console.log('Auth Response Body:', await authResponse.text());

    // Проверка успешности авторизации
    expect(authResponse.status()).toBe(200);
});

test('Добавление товара в корзину', async ({ request }) => {
    const headers = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,ru;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': 'PHPSESSID=04ac1e82197562119ee7116a5316b8a7; _csrf=66714956a3ce4328d6eb0853aa34ba5c63f978cf38efeddf977daa7fe08b30a4a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22XgVvkEDB2nWJrhpDH9e0YsTb4gN2vHol%22%3B%7D',
        'origin': 'https://enotes.pointschool.ru',
        'referer': 'https://enotes.pointschool.ru/',
        'x-csrf-token': '9c_z8FzEllOfCAQYbPMbMGaM3QjnuDqWZAyp5IkFqiOtqKWGN4HSEa1mU1Iem2t0LrW4OL7LbvRQa-fW_03FTw==',
        'x-requested-with': 'XMLHttpRequest',
    };

    const postData = 'product=2&count=1';

    // Выполнение запроса на добавление товара в корзину
    const addToBasketResponse = await request.post('https://enotes.pointschool.ru/basket/create', {
        headers,
        data: postData
    });

    console.log('Add to Basket Response Status:', addToBasketResponse.status());
    console.log('Add to Basket Response Body:', await addToBasketResponse.text());

    // Проверка успешности добавления товара в корзину (статус должен быть 200)
    expect(addToBasketResponse.status()).toBe(200);
});

test('Очистка корзины', async ({ request }) => {
    const headers = {
 
        'cookie': 'PHPSESSID=04ac1e82197562119ee7116a5316b8a7; _csrf=66714956a3ce4328d6eb0853aa34ba5c63f978cf38efeddf977daa7fe08b30a4a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22XgVvkEDB2nWJrhpDH9e0YsTb4gN2vHol%22%3B%7D',
        'origin': 'https://enotes.pointschool.ru',
        'x-csrf-token': '9c_z8FzEllOfCAQYbPMbMGaM3QjnuDqWZAyp5IkFqiOtqKWGN4HSEa1mU1Iem2t0LrW4OL7LbvRQa-fW_03FTw==',
    };

    // Выполнение запроса на очистку корзины
    const clearBasketResponse = await request.post('https://enotes.pointschool.ru/basket/clear', {
        headers
    });

    console.log('Clear Basket Response Status:', clearBasketResponse.status());
    console.log('Clear Basket Response Body:', await clearBasketResponse.text());

    // Проверка успешности очистки корзины (статус должен быть 200)
    expect(clearBasketResponse.status()).toBe(200);
});

test('Выход из системы', async ({ request }) => {
    const headers = {
        // 'cookie': 'PHPSESSID=04ac1e82197562119ee7116a5316b8a7; _csrf=66714956a3ce4328d6eb0853aa34ba5c63f978cf38efeddf977daa7fe08b30a4a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22XgVvkEDB2nWJrhpDH9e0YsTb4gN2vHol%22%3B%7D',
        // 'origin': 'https://enotes.pointschool.ru',
        // 'x-csrf-token': '6S4utwTqBl_1XZBHodB2ijEj5OGUmUizB-o2Q8Yid1qxSXjBb69CHcczxw3TuAbOeRqB0c3qHNEzjXhxsGoYNg%3D%3D',
    };

    // Выполнение запроса на выход из системы
    const logoutResponse = await request.post('https://enotes.pointschool.ru/site/logout', {
        headers,
        // data: '_csrf=6S4utwTqBl_1XZBHodB2ijEj5OGUmUizB-o2Q8Yid1qxSXjBb69CHcczxw3TuAbOeRqB0c3qHNEzjXhxsGoYNg%3D%3D',
    });

    console.log('Logout Response Status:', logoutResponse.status());
    console.log('Logout Response Body:', await logoutResponse.text());

    // Проверка успешности выхода (статус должен быть 200)
    expect(logoutResponse.status()).toBe(200);
});