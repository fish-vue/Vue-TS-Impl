<template>
  <div>
    <watch/>
    <click/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Watch from './Watch.vue';
import Click from './Click.vue';

@Component({
  components: {
    Watch,
    Click
  },
})
export default class Index extends Vue {
  constructor(){
    super();
  }
}
</script>
