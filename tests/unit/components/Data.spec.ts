import { shallowMount } from '@vue/test-utils';
import Data from '@/components/model/Data.vue';

describe('Data.vue', () => {
  // 传递给组件的数据
  const data = {
    title: 'Vue的数据绑定',
    id: 'id9527',
    isLogin: true,
  };
  // 获得组件的vm实例
  // shallowMount: 只渲染当前组件，不渲染子组件
  const wrapper = shallowMount(Data);
  // 给组件设置数据
  wrapper.setData(data);

  /**
   * Wrapper: 一个 Wrapper 是一个包括了一个挂载组件或 vnode，以及测试该组件或 vnode 的方法。
   *
   *   ==> find (selector: string): Wrapper<Vue>
   *     返回匹配选择器的第一个 DOM 节点或 Vue 组件的 Wrapper。
   *
   *   ==> exists (): boolean
   *     断言 Wrapper 或 WrapperArray 是否存在。
   *     如果被一个空 Wrapper 或 WrapperArray 调用则返回 false。
   *
   *   ==> text (): string
   *     返回 Wrapper 的文本内容。
   *
   */

  it('{{}}能够渲染数据', () => {
    // #title 应该正确的渲染出title
    expect(wrapper.find('#title').text()).toEqual(data.title);
  });

  it('v-bind为属性绑定数据', () => {
    // 正确为元素绑定id
    expect(wrapper.find('#' + data.id).exists()).toBeTruthy();
  });

  it('使用宿主环境提供的全局变量Date', () => {
    // #date 组件应该渲染出日期
    expect(wrapper.find('#date').text().includes(new Date().toDateString()));
  });

  it('使用三元表达式', () => {
    expect(wrapper.find('#ternary').text().includes('Hello Bob'));
  });

});
