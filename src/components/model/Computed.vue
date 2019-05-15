<template>
  <div>
<!--  v-model可以实现双向数据绑定  -->
    <input id="firstName" v-model="firstName">
    <input id="lastName" v-model="lastName">
    <input id="fullName" v-model="fullName">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Computed extends Vue {

  private firstName: string = 'Jon';
  private lastName: string = 'Snow';

  get fullName(): string{
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(newVal: string){
    let names = newVal.split(' ');
    console.log(newVal, names);
    if (names.length != 2){
      // JS没有内置的InvalidArgumentException，必须自己手动继承实现，这里就不麻烦了
      // https://stackoverflow.com/questions/38145977
      throw new Error("InvalidArgumentException: fullName必须包含两部分并且以空格作为分隔符")
    } else {
      this.firstName = names[0];
      this.lastName = names[1];
    }
  }

}
</script>
