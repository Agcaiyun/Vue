<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="title" />
    </div>
    <div>
      <slot name="item" v-bind="{value: 'test', key: 'key'}"/>
    </div>
  </div>
</template>
