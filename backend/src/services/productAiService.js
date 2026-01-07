// productAiService.js
// Converts a user prompt into a structured Shopify product object

export async function generateProductFromPrompt(promptText) {

  // Simple AI placeholder logic for now
  // (Later we swap to real AI model)
  
  return {
    title: "Premium Waterproof Pet Car Seat Cover – Australia Edition",
    descriptionHtml: `
      <h2>Protect Your Car & Keep Your Dog Comfortable – Every Ride</h2>
      <p>This premium waterproof seat cover is designed for Australian pet owners who love travelling with their furry mates.</p>
      <ul>
        <li>100% Waterproof & Scratch Resistant</li>
        <li>Non-Slip Backing for Safety</li>
        <li>Universal Fit for AU Cars & SUVs</li>
        <li>Easy to Clean — Machine Washable</li>
        <li>Pet-Safe, Eco-Friendly Materials</li>
      </ul>
      <h3>Fast AU Shipping 🇦🇺</h3>
      <p>Delivered in 3–7 days Australia-wide.</p>
      <h3>30-Day Money-Back Guarantee</h3>
      <p>Love it — or return it.</p>
    `,
    vendor: "PawMates Australia",
    productType: "Pet Accessories",
    tags: ["dogs", "car cover", "pet travel", "australia"],
  };
}
