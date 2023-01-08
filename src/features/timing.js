import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

export const Timing = (props) => {
  const { onChangeTime } = props;
  return (
    <>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="5" onPress={() => onChangeTime(5)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="1" onPress={() => onChangeTime(1)} />
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center'
  },
});
