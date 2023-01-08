import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';
import { Timing } from './timing';

export const FocusHistory = (props) => {
  const renderItem = ({ item }) => <Text style={styles.item}> - {item} </Text>;

  const { history } = props;
  if (!history || !history.length) return  <View style={styles.container}>
      <Text style={styles.title}> Focus History </Text>
      
    </View>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Focus History </Text>
      <FlatList data={history} renderItem ={renderItem}/>
    </View>
  );
};

const styles = StyleSheet.create({

container: {
  flex: 1,
  padding: spacing.md,
},
item: {
  fontSize: fontSizes.md,
  color : colors.white,
  paddingTop:spacing.sm
},

  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    textAlign: 'start',   
    fontWeight: 'bold',
  },
});
