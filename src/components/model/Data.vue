<template>
  <div>
    <!-- 使用 {{}}  绑定数据 -->
    <h2 id="title">{{title}}</h2>

    <!-- 标签属性不能用{{}}语法，这里我们使用v-bind来给标签做动态绑定-->
    <div v-bind:id="id">v-bind</div>

    <!-- 可以省略v-bind来简写-->
    <div id="v-bind" :data-id="id">v-bind简写</div>

    <!--
    在模板中，只能使用：
       - 单行JS表达式
       - Math、Date等全局变量。
           用户自定义的全局变量不能使用
    -->
    <div id="date">{{new Date().toDateString()}}</div>

    <!-- 使用三元表达式来做条件输出 -->
    <div id="ternary">{{isLogin ? 'Hello Bob' : 'Please login'}}</div>

    <!-- 只能使用单行表达式，这种写法无法解析 -->
    <div>if(isLogin){return 'Hello Bob'}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// 虽然语法概念截然不同，但是结果完全类似于Java的注解
@Component
export default class Data extends Vue {
  // 组件内部的数据
  private title: string;
  private id: string;
  private isLogin: boolean;

  // 构造函数初始化数据
  constructor(){
    super();
    this.title = 'title';
    this.id = '#id';
    this.isLogin = false;
  }
}
</script>
