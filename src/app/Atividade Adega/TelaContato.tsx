import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles, COLORS } from './styles';

const CONTATOS = [
  {
    id: '1',
    icone: 'phone-alt',
    label: 'Telefone:',
    valor: '+55 21 000000000',
  },
  {
    id: '2',
    icone: 'map-marker-alt',
    label: 'Endereço:',
    valor: 'Av. 123, 222 - Rio de Janeiro RJ',
  },
  {
    id: '3',
    icone: 'envelope',
    label: 'Email:',
    valor: 'preferida@adega.com.br',
  },
  {
    id: '4',
    icone: 'instagram',
    label: 'Instagram:',
    valor: '@adegapreferida',
  },
];

export default function TelaContato() {
  return (
    <ScrollView
      style={styles.contatoContainer}
      contentContainerStyle={styles.contatoContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.contatoTitulo}>
        Entre em contato conosco para comprar nossos produtos
      </Text>

      {CONTATOS.map((item) => (
        <View key={item.id} style={styles.cardContato}>
          <FontAwesome5
            name={item.icone}
            size={32}
            color={COLORS.primary}
            style={styles.cardContatoIcone}
          />
          <Text style={styles.cardContatoLabel}>{item.label}</Text>
          <Text style={styles.cardContatoValor}>{item.valor}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
