import { createApp } from 'vue';
import "./tailwind.css";
import App from './App.vue';
import router from './router';
import Vuesax from 'vuesax3';
import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';


createApp(App).use(Vuesax, {

}).use(router).mount('#app')


export function setWidth(main) {
    // let main = document.getElementById("main-content")
    let sidebar = document.getElementById("sidebar")
    // console.log(main)
    main.value.style.width = (document.body.offsetWidth - sidebar.offsetWidth-1) + "px"
    // console.log((document.body.offsetWidth - sidebar.offsetWidth-1) + "px")
    main.value.style.maxWidth = (document.body.offsetWidth - sidebar.offsetWidth-1) + "px"
    console.log("Set width and Height")
    // console.log(main.value.style.width)
    // console.log(main.value.style.maxWidth)
    let playerHeight = document.getElementById("music-player").offsetHeight;
    main.value.style.marginBottom = playerHeight/2 + "px"
}