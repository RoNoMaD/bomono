module.exports = api => {
  api.cache(true);

  return {
    presets: [
      "@babel/env",
      [
        "@babel/preset-react",
        {
          development: process.env.BABEL_ENV !== "build"
        }
      ]
    ],
    env: {
      build: {
        ignore: [
          "**/*.test.jsx",
          "**/*.test.js",
          "**/*.story.jsx",
          "__snapshots__",
          "__tests__",
          "__stories__"
        ]
      }
    },
    ignore: ["node_modules"]
  };
};
