import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: h => h(App),
  created() {
    console.log('starting');
  },
}).$mount('#app');
