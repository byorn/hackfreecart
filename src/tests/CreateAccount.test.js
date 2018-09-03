import React from 'react';
import { shallow} from 'enzyme';

import CreateAccount from '../components/CreateAccount';

import {teststore} from './teststore';


const setup = (props={}, state=null, storeState={}) => {
  const wrapper = shallow(<CreateAccount store={teststore(storeState)} {...props} />).dive().dive();
  if (state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}


describe('Testing the CreateAccount Component', ()=>{

    test('renders without error', () => {
      const wrapper = setup();
      const appComponent = findByTestAttr(wrapper, 'create-account-form');
      expect(appComponent.length).toBe(1);
    });

    describe('Testing the Email Text Field Component', () => {

         test('renders default email text field with error css', () => {
            const wrapper = setup();
            
            expect(wrapper.find('[id="id_email"]').props().helperText.length).toBe(0);
            expect(wrapper.find('[id="id_email"]').props().error).toBe(false);
        });


        test('renders invalid email format error when state has changed', () => {
            const wrapper = setup({},{emailError:'Invalid Email Format'},{});
            
            expect(wrapper.find('[id="id_email"]').props().helperText).toBe('Invalid Email Format');
            expect(wrapper.find('[id="id_email"]').props().error).toBe(true);
        });

        test('updates emailError state when invalid email is entered', () => {
    
          const wrapper = setup({},{email:'',emailError:''},{});
          const textField = wrapper.find('[id="id_email"]');
          textField.simulate('change',{target:{value:'a.com'}})
          textField.simulate('blur');
          expect(wrapper.state().emailError.length).toBeGreaterThan(0);
          
      });

        
    });

  
});