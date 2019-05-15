<template>
  <div>
    <List/>
    <Slot>
      <!-- 传递一个具名插槽 -->
      <template v-slot:header>
        这是一个来自template/Index.vue的header
      </template>

      <!-- 除了Template里面，其他的HTML元素都是属于默认插槽的 -->
      这是一个来自template/Index.vue的header

      <template v-slot:footer>
        这是一个来自template/Index.vue的header
      </template>
    </Slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import List from '@/components/template/List.vue';
import Slot from '@/components/template/Slot.vue';

@Component({
  components: {
    List,
    Slot
  },
})
export default class Index extends Vue {
  constructor(){
    super();
  }
}
</script>
