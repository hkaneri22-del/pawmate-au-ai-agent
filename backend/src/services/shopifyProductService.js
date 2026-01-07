import fetch from "node-fetch";

const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const SHOPIFY_API_PASSWORD = process.env.SHOPIFY_ADMIN_API_TOKEN;
const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;

export async function createShopifyProduct(productData) {
  try {

    const url = https://${SHOPIFY_API_KEY}:${SHOPIFY_API_PASSWORD}@${SHOPIFY_STORE_DOMAIN}/admin/api/2023-10/products.json;

    const payload = {
      product: {
        title: productData.title,
        body_html: productData.descriptionHtml,
        vendor: productData.vendor,
        product_type: productData.productType,
        tags: productData.tags,
        status: "active"
      }
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("❌ Shopify API Error:", result);
      throw new Error("Failed to create product in Shopify");
    }

    console.log("✅ Product created in Shopify:", result.product.title);

    return result.product;

  } catch (err) {
    console.error("❌ ERROR createShopifyProduct:", err);
  }
}
