import Config from '../util/Config'
import axios from 'axios';
import Util from '../util/Util';

class LoginService {
  static login(username, password) {
    return axios({
      method: 'post',
      url: Config.serviceUrl() + '/login',
      data: {email:username,password}
    })
    .then((data)=>{
       return data;
    })
    .catch(function(error) {
      return error;
    });
  }

  static checkLogin(){
    return axios({
      method: 'get',
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
      url: Config.serviceUrl() + '/users/'+Util.getUserId(),
 
    })
    .then((data)=>{
       return data;
    })
    .catch(function(error) {
      return error;
    });
  }


}

export default LoginService;
