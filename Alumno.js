import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, List } from 'react-native-paper';

export default function Alumno({ nombre, matricula }) {
  return (
    <Card style={estilos.tarjeta} mode="elevated">
      <List.Item
        title={nombre}
        titleStyle={estilos.textoNombre}
        description={`Matrícula: ${matricula}`}
        left={props => <List.Icon {...props} icon="account-school" color="#c1121f" />}
      />
    </Card>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    marginHorizontal: 20,
    marginVertical: 8,
    backgroundColor: 'white',
  },
  textoNombre: {
    fontWeight: 'bold',
  }
});