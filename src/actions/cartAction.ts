export async function addProductToCart(page: any, productId: string, quantity: number, isDiscounted: boolean) {
    for (let i = 0; i < quantity; i++) {
    }
}

export async function openCart(page: any) {
    await page.click('.cart-icon');
}

export async function goToCart(page: any) {
    await page.click('.cart-details .go-to-cart');
}
