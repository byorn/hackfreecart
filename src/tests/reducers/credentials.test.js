import credentials from "../../reducers/credentials";
import {actionTypes} from '../../actions/actionTypes';

describe('Credentials.js Reducer',()=>{


    test('Should Update isLoggedIn State, during success login', ()=>{
        let credentialsDefaultState = {"isLoggedIn":false, "user":{}};
        let actionObject = {
                                type:actionTypes.DO_LOGIN,
                                obj: {
                                    email:'a@b.com',
                                    name:'a@b.com',
                                    isAdmin:false
                                }
                            }

        let expectedNewState = {isLoggedIn:true, user:actionObject.obj};                    

        const newState = credentials(credentialsDefaultState, actionObject);
        
        expect(newState).toEqual(expectedNewState);

    });



});