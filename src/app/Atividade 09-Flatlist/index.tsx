import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { router } from 'expo-router';
import Botao from '../../components/Botao';

type ItemBebida = {
  id: string;
  nome: string;
  descricao: string;
  preco: string;
  tamanho: string;
};

const bebidas: ItemBebida[] = [
  { id: '1', nome: 'Refrigerante Lata', descricao: 'Coca-Cola, Guaraná ou Fanta', preco: 'R$ 6,00', tamanho: '350ml' },
  { id: '2', nome: 'Refrigerante 2L', descricao: 'Coca-Cola ou Guaraná Antarctica', preco: 'R$ 14,00', tamanho: '2 Litros' },
  { id: '3', nome: 'Suco Natural', descricao: 'Laranja, Maracujá ou Limonada Suíça', preco: 'R$ 9,00', tamanho: '500ml' },
  { id: '4', nome: 'Água Mineral', descricao: 'Com ou sem gás', preco: 'R$ 4,50', tamanho: '500ml' },
  { id: '5', nome: 'Cerveja Artesanal', descricao: 'IPA ou Weiss gelada', preco: 'R$ 18,00', tamanho: '600ml' },
];

export default function Atividade9() {
  const renderItem = ({ item }: { item: ItemBebida }) => (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <Text style={styles.cardDesc}>{item.descricao}</Text>
        <Text style={styles.cardPrice}>{item.preco}</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.tamanho}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <FlatList
          data={bebidas}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.title}>Atividade 09</Text>
              <Text style={styles.subtitle}>Renderização com FlatList</Text>
            </View>
          }
          ListFooterComponent={
            <View style={styles.footer}>
              <Botao titulo="Voltar para o Hub" corDeFundo="#4B5563" onPress={() => router.push('/')} />
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

