import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ item, removeItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.text}>
          {item.title}
        </Text>

        <Text onPress={() => removeItem(item.id)}
          style={styles.btn}>X</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: 'black'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 18
  },
  btn: {
    backgroundColor: 'red',
    padding: 5,
    color: 'white'
  }

})


export default ListItem;
