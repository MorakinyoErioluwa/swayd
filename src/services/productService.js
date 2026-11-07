import { products } from "../data/products";

export async function getProducts() {
    return [...products];
}

export async function getProductById(id) {
    const numericId = Number(id);

    return products.find(
        (product) => product.id === numericId
    ) ?? null;
}
