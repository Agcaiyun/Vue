import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Foo from '../components/Foo'
import Bar from '../components/Bar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home},
    { path: '/foo', name: 'foo', component: Foo},
    { path: '/bar', name: 'bar', component: Bar}
  ]
})