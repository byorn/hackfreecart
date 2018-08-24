import Config from '../util/Config';
import axios from 'axios';

class CreateAccountService {
  static createAccount(obj) {
    
     return axios({

      method: 'post',
      url: Config.serviceUrl() + '/users',
      data: obj

    })
    .then((data)=>{
       
       return data;
    })
    .catch(function(error) {
      return error;
    });
    
  }


}

export default CreateAccountService;
