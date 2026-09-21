import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { styles } from './Home/styles';
import Botao from '../components/Botao';

export default function Hub() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Hub de Atividades</Text>
          <Text style={styles.subtitle}>Selecione uma atividade para visualizar</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Botao titulo="Atividade 1 (Foto e Botões)" onPress={() => router.push('/Atividade 01')} />
          <Botao titulo="Atividade 2 (Tela de Login)" onPress={() => router.push('/Atividade 02')} />
          <Botao titulo="Atividade 3 (Cadastro Contato)" onPress={() => router.push('/Atividade 03-Contato')} />
          <Botao titulo="Atividade 3 (Cadastro Aluno)" onPress={() => router.push('/Atividade 03-Aluno')} />
          <Botao titulo="Atividade 4 (Contador useState)" onPress={() => router.push('/Atividade 04')} />
          <Botao titulo="Atividade 5 (Cadastro Usuário)" onPress={() => router.push('/Atividade 05')} />
          <Botao titulo="Atividade 6 (Cálculo Ração)" onPress={() => router.push('/Atividade 06')} />
          <Botao titulo="Atividade 7 (Seguro Veicular)" onPress={() => router.push('/Atividade 07')} />
          <Botao titulo="Atividade 8 (Map)" onPress={() => router.push('/Atividade 08-Map')} />
          <Botao titulo="Atividade 9 (FlatList)" onPress={() => router.push('/Atividade 09-Flatlist')} />
          <Botao titulo="Atividade 9 (Map)" onPress={() => router.push('/Atividade 09-Map')} />
          <Botao titulo="Atividade 10 (Navegação - Filmes)" onPress={() => router.push('/Atividade 10-Navegacao')} />
          <Botao titulo="Atividade Adega (Navegação Tabs)" onPress={() => router.push('/Atividade Adega')} />
        </View>
        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

