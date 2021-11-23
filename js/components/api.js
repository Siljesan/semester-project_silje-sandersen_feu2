export async function getProducts(url) {
    const response = await fetch(url);
    const json = await response.json();
}

export async function getHero(url) {
    const response = await fetch(url);
    const json = await response.json();

    
}