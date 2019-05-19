<template>
  <div>
    <div v-if="names.length > 0">
      <h2 >Props 生效了</h2>
      <div v-for="name in computedNames" class="item">
        {{name}}
      </div>
    </div>
    <div v-else>
      <h2 >Props 没有生效</h2>
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
  // /**
  //  * 不能这样写默认值！！
  //  * https://github.com/kaorun343/vue-property-decorator/issues/154
  //  * 服了
  //  */
  // @Prop()
  // private names: string[] = [];

  @Prop({default: []})
  private names!: string[];

  get computedNames (): string[] {
    return this.names;
  }

}
</script>
