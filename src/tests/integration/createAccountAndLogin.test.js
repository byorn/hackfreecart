import {teststore} from '../teststore';
import * as createAccountActions from '../../actions/createAccountActions';
import * as loginActions from '../../actions/loginActions';
import * as displayMessageActions from '../../actions/displayMessageActions';
import Config from '../../util/Config';
import moxios from 'moxios';

describe('Testing actions for createAccountActions and displayMessageActions', ()=>{

    beforeEach(() => {
        moxios.install();
        
    });
    afterEach(() => {
       jest.clearAllMocks();
       moxios.uninstall();
    });

    test('should update state when displayError is created',()=>{
            const store = teststore({});
            store.dispatch(displayMessageActions.displayError('abcd'));       
            const displayMessageState = {open:true,type:'error',message:'abcd'};
            expect(store.getState().displayMessage).toEqual(displayMessageState);
    });

    test('should add to LocalStorage when createAccount is Success',()=>{
    
       const store = teststore({});
       moxios.stubRequest(Config.serviceUrl()+"/users", {
            status: 200,
            headers:{'x-auth-token':'abcd'},
            response:{data:{}}
      });

      store.dispatch(createAccountActions.createAccount({})).then(()=>{
            expect(localStorage.setItem).toHaveBeenCalledTimes(2); 
      });
    
    });

    test('should add token to storage during success login',()=>{
    
        const store = teststore({});
        moxios.stubRequest(Config.serviceUrl()+"/login", {
             status: 200,
             headers:{'x-auth-token':'abcd'},
             response:{data:{}}
       });

      
 
       store.dispatch(loginActions.login("user","password")).then(()=>{
            expect(store.getState().credentials.isLoggedIn).toEqual(true);
            expect(localStorage.setItem).toHaveBeenCalledTimes(2); 
       });
     
     });
});