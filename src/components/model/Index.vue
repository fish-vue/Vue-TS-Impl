<template>
  <div>
    <Data/>
    <Props :names="names"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Data from '@/components/model/Data.vue';
import Props from '@/components/model/Props.vue';

@Component({
  components: {
    Props,
    Data,
  },
})
export default class Index extends Vue {
  private names: string[];
  constructor(){
    super();
    this.names = ['Jond', 'Bob', 'Jack'];
  }
}
</script>
