import {teststore} from '../teststore';
import * as createAccountActions from '../../actions/createAccountActions';
import * as displayMessageActions from '../../actions/displayMessageActions';
import Config from '../../util/Config';
import moxios from 'moxios';


      

describe('Testing actions for createAccountActions and displayMessageActions', ()=>{

    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
       moxios.uninstall();
    });

    test('should update state when displayError is created',()=>{
            const store = teststore({});
            store.dispatch(displayMessageActions.displayError('abcd'));       
            const newState = store.getState();
            const displayMessageState = {open:true,type:'error',message:'abcd'};
            expect(newState.displayMessage).toEqual(displayMessageState);
    });

    test('should add the token and user to LocalStorage when createAccount is Success',()=>{
    
        const store = teststore({});
        moxios.stubRequest(Config.serviceUrl()+"/users", {
            status: 200,
            headers:{'x-auth-token':'abcd'},
            response:{response:{status:200}}
      });

      store.dispatch(createAccountActions.createAccount({})).then(()=>{
            expect(localStorage.setItem).toHaveBeenCalledTimes(2); 
       });
    
    });
});