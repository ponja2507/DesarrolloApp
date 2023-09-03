import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


const Item = ({item, onHandleModal, index}) => {
    return (
        <TouchableOpacity style={styles.textContainer} onPress={() => onHandleModal(index)}>
            <Text style={styles.text}>{item?.value}</Text>
        </TouchableOpacity>
    );
};

export default Item;

const styles = StyleSheet.create({
    textContainer: {
        width: 360,
        backgroundColor: "#e4d1ed",
        borderColor: "#e4d1ed",
        alignItems: "center",
        borderWidth: "2",
        borderRadius: 10,
        marginVertical: 10,
        padding: 5,
    },
    text: {
        fontSize: 24,
    },
});