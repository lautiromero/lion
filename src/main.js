// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VueRouter from 'vue-router';
import VueAnalytics from 'vue-analytics'

// SECCIONES
import Home from './components/sections/Home';
import Quienes from './components/sections/Quienes';
import Promociones from './components/sections/Promociones';
import Sucursales from './components/sections/Sucursales';
import Entregas from './components/sections/Entregas';
import Novedades from './components/sections/Novedades';
import Contacto from './components/sections/Contacto';


Vue.use(VueAnalytics, {
  id: 'UA-156391190-1'
})

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/quienes-somos',
      component: Quienes
    },
    {
      path: '/contacto',
      component: Contacto
    },
    {
      path: '/sucursales',
      component: Sucursales
    },
    {
      path: '/promociones',
      component: Promociones
    },
    {
      path: '/entregas',
      component: Entregas
    },
    {
      path: '/novedades',
      component: Novedades
    }
  ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app');
