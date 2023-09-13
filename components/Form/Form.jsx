import React, { useState } from 'react';
import { TextInput, Button, Text, View, ScrollView, FlatList, StyleSheet } from 'react-native';
import { styles, myimage } from '../../assets/styles/styles1.jsx'

function Form() {
  const [identificacion, setIdentificacion] = useState('');
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [notaMomento1, setNotaMomento1] = useState('');
  const [notaMomento2, setNotaMomento2] = useState('');
  const [notaMomento3, setNotaMomento3] = useState('');
  const [definitiva, setDefinitiva] = useState('');
  const [observacion, setObservacion] = useState('');
  const [calificaciones, setCalificaciones] = useState([]);
  const [error, setError] = useState('');
  const [busquedaIdentificacion, setBusquedaIdentificacion] = useState('');
  const [calificacionEncontrada, setCalificacionEncontrada] = useState(null);
  const [exitoMensaje, setExitoMensaje] = useState('');

  const calcularNotaFinal = () => {
    if (
      notaMomento1 === '' ||
      notaMomento2 === '' ||
      notaMomento3 === '' ||
      isNaN(notaMomento1) ||
      isNaN(notaMomento2) ||
      isNaN(notaMomento3)
    ) {
      setError('Ingrese notas válidas para Momento 1, 2 y 3.');
      return;
    }

    const nota1 = parseFloat(notaMomento1);
    const nota2 = parseFloat(notaMomento2);
    const nota3 = parseFloat(notaMomento3);

    if (nota1 < 0 || nota1 > 5 || nota2 < 0 || nota2 > 5 || nota3 < 0 || nota3 > 5) {
      setError('Las notas deben estar entre 0 y 5.');
      return;
    }

    const notaFinal = (nota1 + nota2 + nota3) / 3;
    setDefinitiva(notaFinal.toFixed(2));

    if (notaFinal >= 3) {
      setObservacion('Gana');
    } else if (notaFinal < 2) {
      setObservacion('Pierde');
    } else {
      setObservacion('Habilita');
    }

    setError('');
    setExitoMensaje('Operación de cálculo exitosa.');
  };

  const guardarCalificacion = () => {
    if (
      identificacion === '' ||
      nombre === '' ||
      asignatura === '' ||
      notaMomento1 === '' ||
      notaMomento2 === '' ||
      notaMomento3 === '' ||
      isNaN(notaMomento1) ||
      isNaN(notaMomento2) ||
      isNaN(notaMomento3)
    ) {
      setError('Todos los campos son obligatorios y deben contener valores válidos.');
      return;
    }
  
    const nota1 = parseFloat(notaMomento1);
    const nota2 = parseFloat(notaMomento2);
    const nota3 = parseFloat(notaMomento3);
  
    if (nota1 < 0 || nota1 > 5 || nota2 < 0 || nota2 > 5 || nota3 < 0 || nota3 > 5) {
      setError('Las notas deben estar entre 0 y 5.');
      return;
    }
  
    const notaFinal = (nota1 + nota2 + nota3) / 3;
    const nuevaCalificacion = {
      identificacion,
      nombre,
      asignatura,
      definitiva: notaFinal.toFixed(2), // Calcular la definitiva antes de guardarla
      observacion,
    };
  
    // Agregar la nueva calificación al estado de calificaciones
    setCalificaciones([...calificaciones, nuevaCalificacion]);
    
    // Limpiar los campos del formulario después de guardar
    limpiarCampos();
    setError('');
    setExitoMensaje('Operación de guardado exitosa.');
  };
  

  const limpiarCampos = () => {
    setIdentificacion('');
    setNombre('');
    setAsignatura('');
    setNotaMomento1('');
    setNotaMomento2('');
    setNotaMomento3('');
    setDefinitiva('');
    setObservacion('');
    setError('');
    setExitoMensaje('Campos limpiados exitosamente.');
  };

  const buscarCalificacion = () => {
    const calificacionBuscada = calificaciones.find((calificacion) => {
      const { identificacion, nombre, asignatura } = calificacion;
      const busqueda = busquedaIdentificacion.toLowerCase(); // Convertir la búsqueda a minúsculas para hacer la comparación insensible a mayúsculas
  
      return (
        identificacion.toLowerCase() === busqueda ||
        nombre.toLowerCase().includes(busqueda) ||
        asignatura.toLowerCase().includes(busqueda)
      );
    });
  
    if (calificacionBuscada) {
      setCalificacionEncontrada(calificacionBuscada);
      // Rellenar los campos del formulario con los datos encontrados
      const { identificacion, nombre, asignatura, definitiva, observacion } = calificacionBuscada;
      setIdentificacion(identificacion);
      setNombre(nombre);
      setAsignatura(asignatura);
      setDefinitiva(definitiva);
      setObservacion(observacion);
      setError('');
      setExitoMensaje('Búsqueda exitosa.');
    } else {
      setCalificacionEncontrada(null);
      setError('No se encontró ninguna calificación con la información ingresada.');
      setExitoMensaje('');
    }
  };
  

    return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Nota Definitiva</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {exitoMensaje ? <Text style={styles.exitoText}>{exitoMensaje}</Text> : null}

      <TextInput
        label='Identificación'
        placeholder='Escriba la identificación'
        style={styles.input} // Aplica el estilo para TextInput
        value={identificacion}
        onChangeText={(text) => setIdentificacion(text)}
      />
      <TextInput
        label='Nombre completo'
        placeholder='Escriba nombre completo'
        style={styles.input} // Aplica el estilo para TextInput
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        label='Asignatura'
        placeholder='Escriba la asignatura'
        style={styles.input} // Aplica el estilo para TextInput
        value={asignatura}
        onChangeText={(text) => setAsignatura(text)}
      />
      <TextInput
        label='Nota 1'
        placeholder='Escriba la nota 1'
        style={styles.input} // Aplica el estilo para TextInput
        value={notaMomento1}
        onChangeText={(text) => setNotaMomento1(text)}
      />
      <TextInput
        label='Nota 2'
        placeholder='Escriba la nota 2'
        style={styles.input} // Aplica el estilo para TextInput
        value={notaMomento2}
        onChangeText={(text) => setNotaMomento2(text)}
      />
      <TextInput
        label='Nota 3'
        placeholder='Escriba la nota 3'
        style={styles.input} // Aplica el estilo para TextInput
        value={notaMomento3}
        onChangeText={(text) => setNotaMomento3(text)}
      />


      <Text>Observación: {observacion}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title='Iniciar'
          mode='contained'
          onPress={calcularNotaFinal}
          contentStyle={styles.buttonContent}
          style={styles.button}
          left={<TextInput.Icon icon="calculator"/>}
        >
          Calcular Definitiva
        </Button>
        <Button
          title="Guardar"
          type="clear"
          mode='contained'
          onPress={guardarCalificacion}
          contentStyle={styles.buttonContent}
          style={styles.button}
        >
          Guardar Calificación
        </Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title='Limpiar'
          mode='contained'
          onPress={limpiarCampos}
          contentStyle={styles.buttonContent}
          style={styles.button}
          
        >
          Limpiar Campos
        </Button>
        <Button
          title='Buscar'
          mode='contained'
          onPress={buscarCalificacion}
          contentStyle={styles.buttonContent}
          style={styles.button}
        >
          Buscar Calificación
        </Button>
      </View>

      {calificacionEncontrada && (
        <View style={styles.calificacionEncontrada}>
          <Text style={styles.sectionTitle}>Calificación Encontrada</Text>
          <TextInput
            label='Identificación'
            value={identificacion}
            onChangeText={(text) => setIdentificacion(text)}
          />
          <TextInput
            label='Nombre completo'
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />
          <TextInput
            label='Asignatura'
            value={asignatura}
            onChangeText={(text) => setAsignatura(text)}
          />
          <Text>Definitiva: {definitiva}</Text>
          <Text>Observación: {observacion}</Text>
        </View>
      )}
    </ScrollView>
  );
}



export default Form;