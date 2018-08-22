import React from 'react';
import { shallow } from 'enzyme';

import Login from '../components/Login';

import {teststore} from './teststore';


const setup = (props={}, state=null, storeState={}) => {
  const wrapper = shallow(<Login store={teststore(storeState)} {...props} />).dive().dive();
  if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}


describe('Testing the Login Component', ()=>{

    test('renders without error', () => {
      const wrapper = setup();
      const appComponent = findByTestAttr(wrapper, 'login-form');
      expect(appComponent.length).toBe(1);
    });

    test('renders the app if logged in', () => {
        const wrapper = setup({},null,{credentials:{isLoggedIn:true}});
        const appComponent = findByTestAttr(wrapper, 'logged-in');
        expect(appComponent.length).toBe(1);
      });

  
});