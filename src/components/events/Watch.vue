<!--
计算属性和侦听属性有一定的相似性
要选择合适的场景
-->
<template>
  <div>
    <div>
      Ask a yes/no question:
      <input v-model="question">
    </div>
    <div id="answer">{{ answer }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Computed extends Vue {

  private question: string = '';
  private answer: string = '';

  @Watch('question')
  private watchQuestion(newVal: string, oldVal: string){
    this.answer = newVal.toUpperCase();
  }


}
</script>
