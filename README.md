# react-native-boolean-button
Button with a boolean state for react native. Changes color when selected.


```
import BooleanButton from './BooleanButton';

...

<BooleanButton 
  onPress={this._myButtonPressed.bind(this)}
  selected={this.state.isSelected}
  size={30}
  borderWidth={5}
  buttonColor='white'
  borderColor='black'
  selectedButtonColor='black'
  selectedBorderColor='grey'
/>
```
