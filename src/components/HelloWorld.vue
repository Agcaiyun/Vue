<template>
  <div>
    <p>Current route name------ {{ $route.name }} </p>
    <ul>
      <li>
        <router-link :to="{name: 'home'}">home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'bar'}">bar</router-link>
      </li>
      <li>
        <router-link :to="{path: '/foo'}">foo</router-link>
        <!-- 等同于 -->
        <router-link to="/foo">foo</router-link>

      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {

  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
