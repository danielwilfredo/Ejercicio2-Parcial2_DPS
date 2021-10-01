import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , Alert, ScrollView} from 'react-native';
import Formulario from './src/components/Formulario'
import Clima from './src/components/Clima'

export default function App() {

  const [busqueda, setBusqueda] = useState({
    municipio: '',
  });
  const [consultar, setConsultar] = useState(false);
  const [resultados, setResultados] = useState([]);

  const ApiKey="8f32c9780bd185984d9e0872463f7792";


  useEffect(() => {
    const { municipio } = busqueda;
      const consultarClima = async () => {
        if (consultar) {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${municipio},sv&appid=${ApiKey}`;
          try {
            const resultado = await fetch(url).then(response => response.json());
            //const resultado = await respuesta.json();
            console.log('test');
            setResultados([...resultados, resultado]);
            setConsultar(false);
          } catch (error) {
            mostrarAlerta();
          }
        }
      };
      consultarClima();
    },[consultar]);

    const mostrarAlerta = () => {
      Alert.alert('Error', 'No hay resultado intenta con otra ciudad o país'),
        [{ Text: 'Ok' }];
    };

    console.log('resultados', resultados);
  
  return (
    <View style={styles.container}>
      <ScrollView>
              <Formulario
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          setConsultar={setConsultar}
        />
      <Clima resultados={ resultados }/>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9e3f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25
  },
});
