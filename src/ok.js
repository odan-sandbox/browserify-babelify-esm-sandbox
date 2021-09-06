const axios = require("axios");

async function poyo() {
  console.log(await axios.get("https://example.com"));
}

poyo();
