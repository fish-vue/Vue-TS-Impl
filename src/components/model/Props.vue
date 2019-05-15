<template>
  <div>
    <div v-for="name in computedNames" class="item">
      {{name}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * todo: 为啥props无效呢。。。
 */
@Component
export default class Props extends Vue {
  // 接受父组件传递的数据
  @Prop()
  private names: string[] = [];

  get computedNames (): string[] {
    return this.names;
  }

}
</script>
