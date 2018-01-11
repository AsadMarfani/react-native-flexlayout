import React, {Component} from 'react';
import {Image} from 'react-native';
import imageSource from '../../../assets/images/pin.png';
class PinIcon extends Component {
  render () {
    return <Image source={imageSource} />;
  }
}

export default PinIcon;
