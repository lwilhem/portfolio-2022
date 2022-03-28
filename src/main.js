import { createApp } from "vue";
import veProgress from "vue-ellipse-progress";
import App from "./App.vue";
import "./index.css";
import router from "./router";

const app = createApp(App);
app.use(veProgress);
app.use(router);
app.mount("#app");
