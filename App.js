import {TouchableOpacity, Button, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import React, {useState} from 'react';
import Modal from './components/Modal';
import Input from './components/TextInput';
import Lista from './components/Lista/FlatList';

export default function App() {

  const [textValue, setTextValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleChangeItem = text => setTextValue(text);

  const addItem = () => {
    if(textValue == ""){
      return
    }
    setItemList(prevState => [
      ...prevState,
      {id: Math.random(),
      value: textValue},
    ])
    setTextValue("");
  };

  // const renderListItem = ({item, index}) => (
  //   <TouchableOpacity style={styles.textContainer} onPress={() => onHandleModal(index)}>
  //     <Text style={styles.text}>{item.value}</Text>
  //   </TouchableOpacity>
  // );

  const onHandleDelete = () => {
    let arr = itemList
    arr.splice(itemSelected, 1)
    setItemList(arr)
    setModalVisible(false)
  };

  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
  };

  const onModalCancel = () => {
    setModalVisible (false)
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tittle}>Compras</Text>
      <Input textValue={textValue} onHandleChangeItem={onHandleChangeItem} addItem={addItem}/>
      <Lista itemList={itemList} onHandleModal={onHandleModal} />
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} onModalCancel={onModalCancel} text={textValue} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    gap: 10,
    backgroundColor: "#f3eae8",
    height: "100%",
    width: "100%",
  },
  tittle: {
    fontSize: 40,
    textAlign: "center",
  },
});


