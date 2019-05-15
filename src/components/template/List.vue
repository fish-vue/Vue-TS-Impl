<template>
  <div>
    <!-- 列表渲染 -->
    <div v-for="monkey in monkeys">
      <div v-if="monkey.startsWith('J')" class="J">你好啊: {{monkey}}</div>
      <div v-else-if="monkey.startsWith('B')" class="B">Hello: {{monkey}}</div>
      <div v-else>Hi: {{monkey}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class List extends Vue {

  private monkeys: string[];

  constructor(){
    super();
    this.monkeys = ['Jon', 'Jack', 'Bob', 'Marry'];
  }
}
</script>
