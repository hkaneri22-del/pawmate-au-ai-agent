console.log("🔥 AI Agent index.js loaded");

require("dotenv").config();

(async () => {
  try {
    console.log("🚀 AI Agent starting up...");

    // Load modules
    const productScanner = require("./productScanner");
    const shopifySync = require("./shopifySync");
    const cjIntegration = require("./cjIntegration");
    const adsManager = require("./adsManager");
    const orderManager = require("./orderManager");
    const reports = require("./reports");

    console.log("📦 All modules loaded successfully");

    // Main loop
    setInterval(async () => {
      try {
        console.log("❤️ Heartbeat — running AI tasks...");

        await productScanner.scan();
        await shopifySync.sync();
        await cjIntegration.syncOrders();
        await adsManager.optimize();
        await orderManager.process();
        await reports.weekly();

      } catch (loopErr) {
        console.error("❌ ERROR inside main loop:", loopErr);
      }
    }, 60000);

  } catch (err) {
    console.error("❌ FATAL STARTUP ERROR:", err);
  }
})();
