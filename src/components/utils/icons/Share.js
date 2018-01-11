import React, {Component} from 'react';
import {Image} from 'react-native';
import imageSource from '../../../assets/images/share.png';
class Share extends Component {
  render () {
    return <Image source={imageSource} />;
  }
}

export default Share;
