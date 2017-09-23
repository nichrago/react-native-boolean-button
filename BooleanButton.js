import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';


class BooleanButton extends React.Component {

  _button = (props) => {
    const styles = StyleSheet.create({
      button: {
        width: props.width || props.size || 24,
        height: props.height || props.size || 24,

        borderWidth: props.borderWidth || 4,
        borderRadius: props.borderRadius || this.props.size / 2 || 12,

        backgroundColor: props.selected ? (props.selectedButtonColor || 'grey') : (props.buttonColor || 'white'),
        borderColor: props.selected ? (props.selectedBorderColor || 'black') : (props.borderColor || 'grey'),
      }
    });
  
    return (<View style={styles.button}></View>); 
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress.bind(this)}>
        {this._button(this.props)}
      </TouchableOpacity>
    );
  }
}


BooleanButton.propTypes = {
  // handle the state of the button, makes it easier to listen to it
  onPress: PropTypes.func.isRequired,
  // the button's state is off of the active prop value
  selected: PropTypes.bool.isRequired,

  // optionally specify sizes, width and height will override the size prop 
  size: PropTypes.number, 
  width: PropTypes.number,
  height: PropTypes.number,
  borderWidth: PropTypes.number,  
  borderRadius: PropTypes.number, // will default to 1/2 the size prop

  // optionally specify colors, main color and border color
  buttonColor: PropTypes.string,  
  borderColor: PropTypes.string,
  selectedButtonColor: PropTypes.string,
  selectedBorderColor: PropTypes.string,
}


export default BooleanButton;
