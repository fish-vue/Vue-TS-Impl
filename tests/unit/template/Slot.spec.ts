import { shallowMount } from '@vue/test-utils';
import Slot from '@/components/template/Slot.vue';

describe('Slot.vue', () => {

  // 注入插槽
  const wrapper = shallowMount(Slot, {
    slots: {
      default: '<div id="default">这是一个来自template/Index.vue的header</div>',
      header: '<div id="header">这是一个来自template/Index.vue的header</div>',
      footer: '<div id="footer">这是一个来自template/Index.vue的header</div>',
    },
  });

  it('渲染默认插槽', () => {
    expect(wrapper.find('#default').exists()).toBeTruthy();
  });

  it('渲染具名插槽', () => {
    expect(wrapper.find('#header').exists()).toBeTruthy();
  });
});
