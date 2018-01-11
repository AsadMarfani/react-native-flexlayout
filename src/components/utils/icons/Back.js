import React, {Component} from 'react';
import {Image} from 'react-native';
import imageSource from '../../../assets/images/Back.png';
class Back extends Component {
  render () {
    return <Image source={imageSource} />;
  }
}

export default Back;
