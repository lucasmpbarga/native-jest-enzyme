import React from 'react';
import {mount, shallow} from 'enzyme';
import App, {renderFlatList} from '../App';

describe('Button', () => {
  describe('Rendering', () => {
    const setupRenderFlatList = data => mount(renderFlatList(data));

    it('should match to snapshot', () => {
      const wrapper = mount(<App />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should match to snapshot 2', () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });

    it('new test', () => {
      const mockData = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

      const wrapper = setupRenderFlatList(mockData);

      expect(wrapper.text()).toContain('First Item');
      expect(wrapper.text()).toContain('Second Item');
      expect(wrapper.text()).toContain('Third Item');
    });
  });
});
