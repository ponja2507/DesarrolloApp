import {TouchableOpacity, Button, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Item de la lista'
          style={styles.input}
        />
        {/* <Button title='ADD'></Button> */}
        <TouchableOpacity style={styles.botton} >
          <Text style={styles.textBoton}>ADD</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.listContainer}>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 1</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 2</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 3</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 4</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 5</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 6</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 7</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 8</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 9</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 10</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 11</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 12</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 13</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 14</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 15</Text>
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.text}>Item 16</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: 24,
    borderBottomColor: "black", 
    borderBottomWidth: 1,
    width: 200,
  },
  botton: {
    heigh: 50,
    width: 50,
    borderColor: "red",
    borderWidth: 1,
    backgroundColor: "blue",
    color: "red",
  },
  textBoton: {
    color: "white",
    fontSize: 20,
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ff0000",
    borderWidth: 2,
    gap: 2,
  },
  textContainer: {
    borderColor: "#ff0000",
    alignItems: "center",
    borderWidth: "2",
    marginVertical: 10,
    width: "90%",
  },
  text: {
    fontSize: 24,
  },
});