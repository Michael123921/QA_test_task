export async function login(page: any, username: string, password: string, expectedUrl: string) {
    await page.goto('https://enotes.pointschool.ru/login');
    await page.type('#loginform-username', username);
    await page.type('#loginform-password', password);
    const loginButton = await page.waitForSelector('[name="login-button"]:not([disabled])', { timeout: 10000 });
    await loginButton.click();
    await page.waitForURL(expectedUrl);
}
