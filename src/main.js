import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import Vant from "vant";
// import "vant/lib/index.css";

const app = createApp(App);
app.use(router);
// app.use(Vant);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.mount("#app");
