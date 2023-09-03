import { View, Text, Modal as NewModal, StyleSheet, Button } from 'react-native'
import React from 'react'

const Modal = ({modalVisible, onHandleDelete, onModalCancel, text}) => {
    return (
        <NewModal visible={modalVisible} animationType='fade' >
            <View style={styles.modalContenedor}>
                <View style={styles.modalContenido}>
                    <View>
                        <Text style={styles.modalTitle}>Confirmación</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text>¿Estas seguro de eliminar este elemento?{text}</Text>
                    </View>
                    <View style={styles.viewBotones}>
                        <View style={styles.modalButton}>
                            <Button title='Cancelar' onPress={onModalCancel}/>
                        </View>
                        <View style={styles.modalButton}>
                            <Button title='Confirmar' onPress={onHandleDelete}/>
                        </View>
                    </View>
                </View>
            </View>
        </NewModal>
    );
};

export default Modal

const styles = StyleSheet.create({
    modalMessage: {
        marginTop: 10,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 15,
    },
    modalTitle: {
        color: "black",
        fontSize: 20,
        padding: 10,
    },
    modalButton: {
        marginTop: 10,
    },
    modalContenedor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8efed",
    },
    modalContenido: {
        backgroundColor: "#e4d1ed",
        alignItems: "center",
        padding: 35,
        borderRadius: 20,
        elevation: 5,
    },
    viewBotones: {
        flexDirection: 'row',
        gap: 50,
    },
});