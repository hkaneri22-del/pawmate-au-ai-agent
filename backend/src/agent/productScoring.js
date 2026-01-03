console.log("🐶 Pet Product Scoring module loaded");

function scoreProduct(product) {

  let score = 0;

  // 1. Demand / Trend (0–25)
  score += (product.demand || 0) * 0.25;

  // 2. Margin (0–20)
  score += (product.margin || 0) * 0.20;

  // 3. Competition (lower = better) (0–15)
  score += ((10 - (product.competition || 0)) * 0.15);

  // 4. Reviews Quality (0–10)
  score += (product.reviews || 0) * 0.10;

  // 5. Refund Risk (lower = better) (0–10)
  score += ((10 - (product.refundRisk || 0)) * 0.10);

  // 6. Shipping Speed (0–10)
  score += (product.shipping || 0) * 0.10;

  // 7. Pet Relevance (0–10)
  score += (product.petFit || 0) * 0.10;

  return score;
}

module.exports = {
  scoreProduct
};
