<template>
  <div>
    <Data/>
    <Props :names="names"/>
    <Computed/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Data from '@/components/model/Data.vue';
import Props from '@/components/model/Props.vue';
import Computed from '@/components/model/Computed.vue';

@Component({
  components: {
    Props,
    Data,
    Computed
  },
})
export default class Index extends Vue {
  private names: string[];
  constructor(){
    super();
    this.names = ['Jon', 'Bob', 'Jack'];
  }
}
</script>
