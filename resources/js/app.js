import "./bootstrap";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes.js";
import store from "./store";

const app = createApp({});
const router = createRouter({
    history: createWebHistory(),
    routes,
});

import App from "./components/App.vue";
app.component("App", App);
app.use(router);
app.use(store).mount("#app");
