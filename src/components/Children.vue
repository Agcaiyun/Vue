<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="title" />
    </div>
    <div>
      <slot name="item" :value="'value'" :test="'test'" />
    </div>
  </div>
</template>
