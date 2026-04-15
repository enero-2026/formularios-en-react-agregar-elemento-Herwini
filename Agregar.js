import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Portal, TextInput, Button, Text } from 'react-native-paper';

export default function Agregar({ visible, onAdd, onCancel }) {
  // Guardamos lo que el usuario escribe
  const [nombre, setNombre] = useState('');
  const [matricula, setMatricula] = useState('');

  const ejecutarGuardado = () => {
    // Mandamos el objeto al padre
    onAdd({ nombre, matricula });
    // Limpiamos los campos
    setNombre('');
    setMatricula('');
  };

  const ejecutarCancelado = () => {
    setNombre('');
    setMatricula('');
    onCancel();
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={ejecutarCancelado} contentContainerStyle={styles.container}>
        <Text variant="headlineSmall" style={styles.titulo}>Agregar Alumno</Text>
        
        <TextInput
          label="Nombre Completo"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />
        
        <TextInput
          label="Matrícula"
          value={matricula}
          keyboardType="numeric"
          onChangeText={setMatricula}
          style={styles.input}
        />

        <View style={styles.row}>
          <Button mode="outlined" onPress={ejecutarCancelado} style={styles.btn}>
            Cancelar
          </Button>
          <Button mode="contained" onPress={ejecutarGuardado} style={styles.btn}>
            Agregar
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 8 },
  titulo: { marginBottom: 20, textAlign: 'center' },
  input: { marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  btn: { flex: 0.45 }
});