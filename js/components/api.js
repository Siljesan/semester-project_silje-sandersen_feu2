export async function getProducts(url) {
    const response = await fetch(url);
    const json = await response.json();
}