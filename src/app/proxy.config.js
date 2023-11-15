const proxy = [
  {
    context: ["/api"],
    target: "http://localhost:8080/v1",
    secure: false,
    changeOrgin: true,
    logLevel: "debug",
    pathRewrite: { "^/api": "" },
  },
];
module.exports = proxy;
