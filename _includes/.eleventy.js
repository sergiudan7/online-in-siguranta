module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".", // rădăcina site-ului
      includes: "_includes", // folderul cu layout-ul
      output: "_site" // folderul de build
    }
  };
};
