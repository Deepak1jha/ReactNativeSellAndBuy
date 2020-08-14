import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import colors from "../../config/colors";
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({image, title, subTitle, onPress,renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image}/>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  title: {
    fontWeight: "bold"
  },
  subTitle: {
    color: colors.mediumGrey
  }
})
