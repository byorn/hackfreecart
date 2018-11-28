import Config from "./Config";

class Util{
    static validEmail(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    static saveUserTokenAndUserToLocalStorage(token,user){
        localStorage.setItem('token', token);
        localStorage.setItem('user',JSON.stringify(user))
    }

    static logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.assign('/');
       
    }

    static getUserId(){
        if(localStorage.getItem('user')){
            return JSON.parse(localStorage.getItem('user'))._id;
        }
        return null;
    }

    static getImageUrl(imageId){
        return Config.serviceUrl()+"/imgs/"+imageId+".png";
    }
}
export default Util;