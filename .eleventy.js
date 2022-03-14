const sass = require("sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/main.css");

  eleventyConfig.addTemplateFormats("scss");

  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    // `compile` is called once per .scss file in the input directory
    compile: async function(inputContent) {
      let result = sass.compileString(inputContent);

      // This is the render function, `data` is the full data cascade
      return async (data) => {
        return result.css;
      };
    }
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
