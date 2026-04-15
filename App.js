import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
// Importamos los componentes de Paper y el nuevo Agregar
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';
import Alumno from './Alumno';
import Agregar from './Agregar';

export default function App() {
 
  const [listaAlumnos, setListaAlumnos] = useState([
    { nombre: 'CANDELARIA MORA SAMANTHA', matricula: '2114354' },
    { nombre: 'CANTU SILVA JAVIER', matricula: '2111889' },
    { nombre: 'CARMONA LOZANO ANGEL EMILIANO', matricula: '2069119' },
    { nombre: 'CASTILLO ACOSTA JORGE', matricula: '2132842' },
    { nombre: 'DAVILA GONZALEZ ALDO ADRIAN', matricula: '1994122' },
    { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '2018230' },
    { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '2104564' },
    { nombre: 'FLORES LÓPEZ DIEGO', matricula: '2066033' },
    { nombre: 'FLORES MARTINEZ ERICK ADRIAN', matricula: '2132976' },
    { nombre: 'GARZA AVALOS DIEGO', matricula: '2066114' },
    { nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL', matricula: '2031243' },
    { nombre: 'GRANJA PEÑA DIEGO', matricula: '2064733' },
    { nombre: 'IBARRA RODRIGUEZ ALEXIS', matricula: '2031243' },
    { nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN', matricula: '2064733' },
    { nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA', matricula: '2094647' },
    { nombre: 'MIRELES VELAZQUEZ ALEJANDRO', matricula: '2005102' },
    { nombre: 'MONSIVAIS SALAZAR ANDRES', matricula: '2064574' },
    { nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA', matricula: '2024783' },
    { nombre: 'PEÑA MUNGARRO LUIS ANGEL', matricula: '2066077' },
    { nombre: 'PUENTE REYNOSO JULIO CESAR', matricula: '2092151' },
    { nombre: 'RAMIREZ LOPEZ BRYAN', matricula: '2103708' },
    { nombre: 'RAMOS AVILA LILIANA VALERIA', matricula: '2115192' },
    { nombre: 'RICO JAUREGUI MAURICIO', matricula: '2037503' },
    { nombre: 'RIVERA LUNA ADRIAN', matricula: '2131513' },
    { nombre: 'RIVERA REYNA JOSE EMILIO', matricula: '2013503' },
    { nombre: 'RODRIGUEZ OLVERA ROSA ISELA', matricula: '2004613' },
    { nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL', matricula: '2133022' },
    { nombre: 'SANCHEZ GALARZA JUAN CARLOS', matricula: '2026061' },
    { nombre: 'SOLIS ORTIZ ALFREDO', matricula: '2095320' },
    { nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL', matricula: '2025350' },
    { nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL', matricula: '2103895' },
    { nombre: 'ZACATENCO OLIVE RODRIGO', matricula: '1857791' },
    { nombre: 'ZAVALA CANTU TERESA MARGARITA', matricula: '2025218' }
  ]);

  // Modal
  const [esVisible, setEsVisible] = useState(false);

  // agregar 
  const manejarNuevoAlumno = (nuevo) => {
    // Usamos el spread operator [...] para actualizar la lista
    setListaAlumnos([...listaAlumnos, nuevo]);
    setEsVisible(false);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={estilos.container}>
        <View style={estilos.header}>
          <Text variant="headlineSmall" style={{ color: 'white' }}>Control Escolar</Text>
          <Button 
            mode="contained" 
            onPress={() => setEsVisible(true)}
            style={estilos.botonAdd}
            buttonColor="#fff"
            textColor="#c1121f"
          >
            Nuevo Registro
          </Button>
        </View>

        <ScrollView contentContainerStyle={estilos.contenido}>
          {listaAlumnos.map((alumno, index) => (
            <Alumno 
              key={alumno.matricula + index} 
              nombre={alumno.nombre} 
              matricula={alumno.matricula} 
            />
          ))}
        </ScrollView>

        <Agregar 
          visible={esVisible} 
          onAdd={manejarNuevoAlumno} 
          onCancel={() => setEsVisible(false)} 
        />
        
        <StatusBar style="light" />
      </SafeAreaView>
    </PaperProvider>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1121f',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  botonAdd: {
    marginTop: 10,
    width: '80%',
  },
  contenido: {
    paddingBottom: 20,
  }
});