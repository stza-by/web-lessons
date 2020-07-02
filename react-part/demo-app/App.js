import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { uuid } from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

export default function App() {

  const [items, setItems] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ])


  const removeItem = (id) => {
    setItems((currentItems) => {
      return currentItems.filter(item => item.id !== id)
    })
  }
 
  const addNewItem = (itemText) => {
    setItems((items) => {
      return [...items, {id: Math.random().toString(), title: itemText}]
    })
  }

  const renderItem = ({ item }) => {
    return (<ListItem item={item}
      removeItem={removeItem} />)
  }

  return (
    <View style={styles.container}>
      <Header title={'Demo App'} />

      <AddItem addNewItem={addNewItem}/>

      <FlatList
        data={items}
        renderItem={renderItem}
      />
    </View>
  )
}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    }
  }
)
