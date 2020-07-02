import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const AddItem = ({ addNewItem }) => {

  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={'New item...'}
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <TouchableOpacity style={styles.btn} onPress={() => {
        addNewItem(text);
        setText('');
      }}>
        <Text>Add item</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 6,
    margin: 5,
    fontSize: 20
  },
  btn: {
    padding: 6,
    margin: 5,
    backgroundColor: '#c2bad8'
  }
})


export default AddItem;
