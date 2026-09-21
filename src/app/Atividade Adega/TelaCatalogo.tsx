import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './styles';

const VINHOS = [
  {
    id: '1',
    nome: 'Chatigny Chardonnay',
    descricao:
      'Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.',
    imagem: require('./assets/vinho-branco.png'),
  },
  {
    id: '2',
    nome: 'Concha y Toro Exportacion',
    descricao:
      'Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.',
    imagem: require('./assets/vinho-rose.png'),
  },
  {
    id: '3',
    nome: "Portada Winemaker's",
    descricao:
      'Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.',
    imagem: require('./assets/vinho-tinto.png'),
  },
  {
    id: '4',
    nome: 'Elvio Cogno Ravera Barolo',
    descricao:
      'Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho-rubi intenso com reflexos alaranjados.',
    imagem: require('./assets/vinho-seco.png'),
  },
];

export default function TelaCatalogo() {
  return (
    <ScrollView
      style={styles.catalogoContainer}
      contentContainerStyle={styles.catalogoContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.catalogoTitulo}>Nossos vinhos</Text>
      <Text style={styles.catalogoDescricao}>
        Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
      </Text>

      {VINHOS.map((vinho) => (
        <View key={vinho.id} style={styles.cardVinho}>
          <Image source={vinho.imagem} style={styles.cardVinhoImagem} />
          <View style={styles.cardVinhoInfo}>
            <Text style={styles.cardVinhoTitulo}>{vinho.nome}</Text>
            <Text style={styles.cardVinhoTexto}>{vinho.descricao}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
