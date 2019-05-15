import { shallowMount } from '@vue/test-utils';
import Props from '@/components/model/Props.vue';

describe('Props.vue', () => {

  let names = ['Jon', 'Bob', 'Jack'];
  // 给组件传递Props数据
  const wrapper = shallowMount(Props, {
    propsData: {
      names,
    },
  });

  /**
   *  Wrapper
   *    ==> findAll (selector: string): WrapperArray<Vue>
   */
  it('渲染出列表', () => {
    // 应该渲染出多个 .item
    expect(wrapper.findAll('.item').length).toEqual(names.length);
  });

});
