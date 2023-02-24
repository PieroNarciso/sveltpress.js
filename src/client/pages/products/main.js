import App from "./App.svelte";

console.log("products main.js");

const app = new App({
  target: document.getElementById("app"),
});

export default app;
