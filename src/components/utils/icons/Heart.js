import React, {Component} from 'react';
import {Image} from 'react-native';
import imageSource from '../../../assets/images/Heart.png';
class Heart extends Component {
  render () {
    return <Image source={imageSource} />;
  }
}

export default Heart;
