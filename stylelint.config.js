module.exports = {
  extends: "stylelint-config-recommended",
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "order/properties-alphabetical-order": true,
    "scss/at-rule-no-unknown": null,
    "scss/at-import-no-partial-leading-underscore": null,
    // "at-rule-no-unknown": [
    //   true,
    //   {
    //     ignoreAtRules: [
    //       "tailwind",
    //       "apply",
    //       "responsive",
    //       "variants",
    //       "screen",
    //     ],
    //   },
    // ],
  },
};
