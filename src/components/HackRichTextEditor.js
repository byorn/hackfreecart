import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import './HackRichTextEditor.css';
class HackRichTextEditor extends Component {

  constructor(props){
   
  super(props);
 
  this.state = {
    value: this.props.value?RichTextEditor.createValueFromString(this.props.value, 'html'):RichTextEditor.createEmptyValue()
  }
}
 
  onChange = (value) => {
   // this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  componentWillReceiveProps(props){
    if(props.value===''){
    // const oldValue = this.state.value.toString('html')
    this.setState({ value : RichTextEditor.createEmptyValue() });
    }else{
      this.setState({ value : RichTextEditor.createValueFromString(props.value, 'html') });
    }
  
  }
 
  render () {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
        className="hackRTE"
      />
    );
  }
}
export default HackRichTextEditor;