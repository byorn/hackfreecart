import Config from '../util/Config'
import axios from 'axios';

class UserService {
  static updateUser(user,id) {

    return axios({
      method: 'put',
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
      url: Config.serviceUrl() + '/users/'+id,
      data: user
    })
    .then((data)=>{
       return data;
    })
    .catch(function(error) {
      return error;
    });
  }

  static updateProfilePic(obj,id) {

    return axios({
      method: 'put',
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
      url: Config.serviceUrl() + '/users_updatepic/'+id,
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

export default UserService;
