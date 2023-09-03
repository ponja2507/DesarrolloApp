import React from "react";
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from "react-native"; 


const Input = ({textValue, onHandleChangeItem, addItem}) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.totalInputContainer}>
                <TextInput 
                    placeholder='Agregar ítem'
                    style={styles.input}
                    value= {textValue}
                    onChangeText={onHandleChangeItem}
                />
                <TouchableOpacity style={styles.botton} onPress={addItem}>
                    <Text style={styles.textBoton}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Input;


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        fontSize: 24,
        borderBottomColor: "black", 
        width: "80%",
        margin: 10,
    },
    botton: {
        justifyContent: "center",
    },
    textBoton: {
        alignItems: "center",
        color: "black",
        fontSize: 30,
        fontWeight: "400",
    },
    totalInputContainer: {
        borderRadius: 10,
        width: "95%",
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-evenly",
        marginLeft: 10,
    },
});