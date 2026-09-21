import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { router } from 'expo-router';
import Botao from '../../components/Botao';

const cardapio = [
  { id: 1, nome: 'Pizza Calabresa', ingredientes: 'Molho de tomate, mussarela, calabresa fatiada e cebola', preco: 'R$ 42,00', categoria: 'Tradicional' },
  { id: 2, nome: 'Pizza Quatro Queijos', ingredientes: 'Mussarela, provolone, parmesão e gorgonzola', preco: 'R$ 48,00', categoria: 'Especial' },
  { id: 3, nome: 'Pizza Margherita', ingredientes: 'Molho especial, mussarela, fatias de tomate e manjericão fresco', preco: 'R$ 45,00', categoria: 'Tradicional' },
  { id: 4, nome: 'Pizza Frango c/ Catupiry', ingredientes: 'Frango desfiado temperado com legítimo Catupiry', preco: 'R$ 46,00', categoria: 'Especial' },
  { id: 5, nome: 'Pizza Portuguesa', ingredientes: 'Mussarela, presunto, ovos, cebola, ervilha e azeitonas', preco: 'R$ 47,00', categoria: 'Tradicional' },
];

export default function Atividade8() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Atividade 08</Text>
          <Text style={styles.subtitle}>Renderização com .map()</Text>
        </View>

        <View style={styles.listContainer}>
          {cardapio.map((pizza) => (
            <View key={pizza.id} style={styles.card}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{pizza.nome}</Text>
                <Text style={styles.cardDesc}>{pizza.ingredientes}</Text>
                <Text style={styles.cardPrice}>{pizza.preco}</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{pizza.categoria}</Text>
              </View>
            </View>
          ))}
        </View>

        <Botao titulo="Voltar para o Hub" corDeFundo="#4B5563" onPress={() => router.push('/')} />
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

