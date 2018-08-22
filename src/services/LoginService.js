import Config from '../util/Config'

class LoginService {
  static login(username, password) {
    
    const requestOptions = {
      method: 'GET',
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
       },
       redirect: "manual",
    };
    return fetch(Config.serviceUrl()+'/tasks',requestOptions)
    .then(response => {
       return response.json();
    }).catch(error => {
      return error;
    });
  }


}

export default LoginService;
