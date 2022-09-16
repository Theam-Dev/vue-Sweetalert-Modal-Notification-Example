import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(VueSweetalert2).mount('#app')
