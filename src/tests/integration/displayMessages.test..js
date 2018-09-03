import {teststore} from '../teststore';
import * as displayMessageActions from '../../actions/displayMessageActions';


describe('Display Alert Messages Box', ()=>{

    test('when displayError action dispatch should update error message state',()=>{
            const store = teststore({});
            store.dispatch(displayMessageActions.displayError('abcd'));       
            const displayMessageState = {open:true,type:'error',message:'abcd'};
            expect(store.getState().displayMessage).toEqual(displayMessageState);
    });

});