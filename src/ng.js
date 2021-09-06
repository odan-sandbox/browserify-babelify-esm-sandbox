const ky = require("ky");

async function poyo() {
  console.log(await ky.get("https://example.com"));
}

poyo();
