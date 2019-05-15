import { shallowMount } from '@vue/test-utils';
import List from '@/components/template/List.vue';

describe('List.vue', () => {
  // 传递给组件的数据
  const monkeys = ['Jon', 'Jack', 'Bob', 'Marry'];

  // 获得组件的vm实例
  // shallowMount: 只渲染当前组件，不渲染子组件
  const wrapper = shallowMount(List);
  // 给组件设置数据
  wrapper.setData(List);

  /**
   * 为了便于测试，我在组件渲染的时候做了埋点
   */
  it(' J开头的渲染后为class .J', () => {
    expect(wrapper.findAll('.J').length).toEqual(2);
  });

  it(' B开头的渲染后为class .B', () => {
    expect(wrapper.findAll('.B').length).toEqual(1);
  });
});
