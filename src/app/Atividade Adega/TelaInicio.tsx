import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './styles';

export default function TelaInicio() {
  return (
    <View style={styles.inicioContainer}>
      <ImageBackground
        source={require('./assets/capa.png')}
        style={styles.capaBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.inicioContent}>
          <Text style={styles.inicioTitulo}>Adega Preferida</Text>
          <Text style={styles.inicioSubtitulo}>
            Aqui você encontra os melhores e mais saborosos vinhos.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
