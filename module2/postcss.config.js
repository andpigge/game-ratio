const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const { join } = require("path");

module.exports = {
  plugins: [
    autoprefixer,
    cssnano({ preset: "default" }),
    "postcss-nested",
    [
      "postcss-mixins",
      {
        mixinsDir: join(__dirname, "src/styles/mixins"),
      },
    ],
  ],
};
