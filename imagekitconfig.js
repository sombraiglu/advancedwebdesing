const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: "TU_PUBLIC_API_KEY",
  privateKey: "TU_PRIVATE_API_KEY",
  urlEndpoint: "https://ik.imagekit.io/TU_USUARIO",
});

module.exports = imagekit;
