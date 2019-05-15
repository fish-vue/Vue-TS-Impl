import { shallowMount } from '@vue/test-utils';
import Watch from '@/components/events/Watch.vue';

describe('Watch.vue', () => {
  // shallowMount: 只渲染当前组件，不渲染子组件
  const wrapper = shallowMount(Watch);

  // 给组件设置数据
  let question = 'What is you name?';
  wrapper.setData({
    question,
  });

  /**
   * Wrapper
   *   .vm: 当前组件的实例
   */
  it('从fullName计算出firstName lastName', () => {
    // 确定answer通过事件监听机制刷新了值
    expect(wrapper.vm.$data.answer).toEqual(question.toUpperCase());

  });


  it('从fullName计算出firstName lastName', () => {
    question = 'What is my name?';
    wrapper.setData({
      question,
    });
    expect(wrapper.vm.$data.answer).toEqual(question.toUpperCase());
  });


});
