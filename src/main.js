import { createApp } from 'vue';
import "./tailwind.css";
import App from './App.vue';
import router from './router';
import Vuesax from 'vuesax3';
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';


createApp(App).use(Vuesax, {

}).use(router).mount('#app')
