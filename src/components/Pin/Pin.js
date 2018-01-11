import React, {Component} from 'react';
import {Back, Heart, More, PinIcon, Share} from '../utils/icons/';

import {Text, View, StyleSheet} from 'react-native';

class Pin extends Component {
  render () {
    return (
      <View style={styles.PinContainer}>
        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>
            <Back />
            <Heart />
            <Share />
            <More />
          </View>
          <View style={styles.PinButtonContainer}>
            <View style={styles.PinButton}>
              <PinIcon />
              <Text style={styles.PinButtonText}>Save</Text>
            </View>
          </View>
        </View>
        <View style={styles.PinContent}>
          <Text style={styles.ImagePlaceHolder}>Placeholder</Text>
        </View>
        <View style={styles.PinMeta}>
          <View style={styles.PinMetaTextContainer}>
            <Text style={styles.PinMetaText}>Saved from </Text>
            <Text style={[styles.PinMetaText, styles.UtilityButtonText]}>
              website.com
            </Text>
          </View>
          <View style={styles.PinButtonContainer}>
            <View style={[styles.PinButton, , styles.UtilityButton]}>
              <Text style={[styles.PinButtonText, styles.UtilityButtonText]}>
                Save
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.PinUser}>
          <View style={styles.PinUserAvatar} />
          <View style={styles.PinUserContainer}>
            <Text style={styles.PinUserText}>
              <Text style={styles.TextBold}>User Name</Text>
              {' '}
              saved to
              {' '}
              <Text style={styles.TextBold}> Space</Text>
            </Text>
            <Text style={styles.PinUserText}>Description Lorem Ipsum</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  PinContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch',
  },
  PinHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    paddingTop: 20
  },
  UtilityNav: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  PinButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80,
  },
  PinButtonText: {
    color: 'white',
  },
  PinButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  PinContent: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  ImagePlaceHolder: {
    backgroundColor: '#1e1e1e',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 6,
  },
  PinMeta: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 16,
    paddingLeft: 8,
  },
  UtilityButton: {
    backgroundColor: '#c9c9c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UtilityButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  PinUser: {
    flex: 4,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8,
  },
  PinUserAvatar: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 50,
    marginRight: 8,
  },
  TextBold: {
    fontWeight: 'bold',
  },
});

export default Pin;
