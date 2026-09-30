const API_URL = "https://dummyjson.com/products";
const BAGS_API_URL = `${API_URL}/category/womens-bags`;

export async function getProducts() {
    const response = await fetch(BAGS_API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return data.products;
}

export async function getProductById(id) {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }

    const data = await response.json();

    return data;
}