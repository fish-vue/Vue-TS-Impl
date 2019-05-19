<!--
计算属性和侦听属性有一定的相似性
要选择合适的场景
-->
<template>
  <div>
    <h2>测试点击事件</h2>

    <!--  $event是只带触发事件的魔法变量  -->
    <button @click="alertHello($event)">hello</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Computed extends Vue {

  private alertHello(event: MouseEvent){
    let button = event.target as HTMLButtonElement;
    alert(button.innerText)
  }


}
</script>
