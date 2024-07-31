module.exports = function(eleventyConfig) {
    // Copy `src/files` to `_site/files`
    eleventyConfig.addPassthroughCopy({"files": "files"});
    // Put robots.txt in root
eleventyConfig.addPassthroughCopy({ 'robots.txt': 'robots.txt' }); 
    return {
      // other configuration...
    };
  };