
import React,{Component} from 'react';
import axios from 'axios';
import Config from '../util/Config'

class TraditionalFileUpload extends Component {
  
  constructor(props) {
    super(props);
      this.state = {
        uploadStatus: false
      }
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.successCallBack = this.successCallBack.bind(this);
  }

  successCallBack(response){
    console.log(response);
    this.uploadInput.value = null;
    this.props.onImageUpload(response.data);
  }

  handleUploadImage(ev) {

    ev.preventDefault();

    const data = new FormData();
    data.append('sampleFile', this.uploadInput.files[0]);
  
    axios.post(`${Config.serviceUrl()}/upload`, data)
      .then(this.successCallBack)
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return(
          <div className="form-group">
            <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" onChange={this.handleUploadImage}/>
          </div>
    )
  }
}
export default TraditionalFileUpload;