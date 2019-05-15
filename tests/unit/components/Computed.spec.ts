import { shallowMount } from '@vue/test-utils';
import Computed from '@/components/model/Computed.vue';

describe('Computed.vue', () => {

  const wrapper = shallowMount(Computed);

  /**
   * Wrapper
   *   .element: 当前组件的根DOM
   */
  it('应该能够计算出fullName', () => {
    const data = {
      firstName: 'Jon',
      lastName: 'Snow',
    };
    wrapper.setData(data);

    // 拿到根节点，强制类型转化为HTMLInputElement，不然编译器认为它没有value属性
    const fullNameElement = wrapper.find('#fullName').element as HTMLInputElement;
    // 读取fullName的值，确认它是正确的
    expect(fullNameElement.value).toEqual(`${data.firstName} ${data.lastName}`);
  });

  it('从fullName计算出firstName lastName', () => {
    wrapper.setData({
      fullName:  'Jon Snow',
    });

    const firstNameElement = wrapper.find('#firstName').element as HTMLInputElement;
    expect(firstNameElement.value).toEqual('Jon');

    const lastNameElement = wrapper.find('#lastName').element as HTMLInputElement;
    expect(lastNameElement.value).toEqual('Snow');
  });

});
