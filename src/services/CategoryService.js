import Config from '../util/Config';
import axios from 'axios';

class CategoryService {
  static createCategory(obj) {
    
     return axios({

      method: 'post',
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
      url: Config.serviceUrl() + '/categories',
      data: obj,
      

    })
    .then((data)=>{
       
       return data;
    })
    .catch(function(error) {
      return error;
    });
    
  }

  static deleteCategory(_id){
    return axios({

      method: 'delete',
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
      url: Config.serviceUrl() + `/categories/${_id}`,
 
    })
    .then((data)=>{
       
       return data;
    })
    .catch(function(error) {
      return error;
    });

  }

  static updateCategory(obj) {
    const id = obj._id;
   
    delete(obj._id);
    
    return axios({

     method: 'put',
     headers: {
       'x-auth-token': localStorage.getItem('token'),
     },
     url: Config.serviceUrl() + `/categories/${id}`,
     data: obj,
     

   })
   .then((data)=>{
      
      return data;
   })
   .catch(function(error) {
     return error;
   });
   
 }

  

  static loadCategories(){

    return axios({
      method: 'get',
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
      url: Config.serviceUrl() + '/categories',
 
    })
    .then((data)=>{
       return data;
    })
    .catch(function(error) {
      return error;
    });
  }

}

export default CategoryService;
