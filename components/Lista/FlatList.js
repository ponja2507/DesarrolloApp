import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Item from "./Item";


const Lista = ({ itemList, onHandleModal }) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={itemList}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => {
                    return <Item item={item} onHandleModal={onHandleModal} index={index} />
                }}
            />
    </View>
    );
};

export default Lista;

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#f3eae8",
    },
});