module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/main.css");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
