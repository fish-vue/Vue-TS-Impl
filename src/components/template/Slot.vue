<template>
  <div>
    <header>
      <h5>父组件传递的header-slot</h5>
      <slot name="header"></slot>
    </header>
    <main>
      <h5>父组件传递default-slot</h5>
      <slot></slot>
    </main>
    <footer>
      <h5>父组件传递footer-slot</h5>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class List extends Vue {
}
</script>
