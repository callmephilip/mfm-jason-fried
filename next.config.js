module.exports = {
      ...require("nextra")({
        theme: "nextra-theme-docs",
        themeConfig: "./theme.config.jsx",
        latex: true,
        titleSuffix:
        "Hooks Over Towel Bars: Jason Fried's Philosophy on Product Design",
      })()
    };