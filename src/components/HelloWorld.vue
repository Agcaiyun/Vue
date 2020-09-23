<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <Children>
      <template v-slot:default>
        default
      </template>
      <template v-slot:title>
        title
      </template>
      <template v-slot:item="aaa">
        {{aaa.value}} --- {{aaa.test}}
      </template>
    </Children>
  </div>
</template>

<script>
import Children from './Children.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Children
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
