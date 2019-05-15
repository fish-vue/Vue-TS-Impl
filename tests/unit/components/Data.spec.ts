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
   * Wrapper
   *   ==> find (selector: string): Wrapper<Vue>
   *     在wrapper中查询指定元素，然后返回值是自身
   *     然后后面的text() exists()其实都是针对刚才查询到的元素
   *     这样的设计应该是为了编码的统一
   *
   *   ==>exists (): boolean
   *     查询的元素是否存在
   *
   *   ==> text (): string
   *     获得查询到的元素的文本内容
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
