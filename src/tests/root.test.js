import React from 'react';
import { shallow } from 'enzyme';

import RootApp from '../root';



const setup = (props={}, state=null) => {
  const wrapper = shallow(<RootApp {...props} />)
  if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

describe('Testing the Root Component', ()=>{

    test('renders without error', () => {
      const wrapper = setup();
      const appComponent = findByTestAttr(wrapper, 'root-app');
      expect(appComponent.length).toBe(1);
    });

});

