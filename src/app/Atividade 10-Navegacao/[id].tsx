import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

type Filme = {
  id: string;
  titulo: string;
  genero: string;
  ano: number;
  duracao: string;
  nota: number;
  sinopse: string;
  diretor: string;
  elenco: string;
  premios: string;
  emoji: string;
  cor: string;
  bgColor: string;
};

const filmes: Filme[] = [
  {
    id: '1',
    titulo: 'Interestelar',
    genero: 'FICÇÃO CIENTÍFICA',
    ano: 2014,
    duracao: '2h 49min',
    nota: 9.3,
    sinopse:
      'Em um futuro próximo, a Terra enfrenta colapso ambiental. Um grupo de astronautas atravessa um buraco de minhoca próximo a Saturno para encontrar um novo planeta habitável, enquanto o tempo flui de forma diferente em cada mundo visitado.',
    diretor: 'Christopher Nolan',
    elenco: 'Matthew McConaughey · Anne Hathaway · Jessica Chastain',
    premios: 'Oscar 2015 — Melhores Efeitos Visuais',
    emoji: '🚀',
    cor: '#6366F1',
    bgColor: '#16213E',
  },
  {
    id: '2',
    titulo: 'Parasita',
    genero: 'THRILLER / DRAMA',
    ano: 2019,
    duracao: '2h 12min',
    nota: 8.5,
    sinopse:
      'A família Kim vive na miséria num porão apertado. Quando o filho mais velho consegue dar aulas para a filha da abastada família Park, toda a família Kim começa a se infiltrar na mansão com consequências imprevisíveis.',
    diretor: 'Bong Joon-ho',
    elenco: 'Song Kang-ho · Lee Sun-kyun · Cho Yeo-jeong',
    premios: 'Oscar 2020 — Melhor Filme, Diretor, Roteiro e Filme Internacional',
    emoji: '🪲',
    cor: '#10B981',
    bgColor: '#0D2B1E',
  },
  {
    id: '3',
    titulo: 'Cidade de Deus',
    genero: 'CRIME / DRAMA',
    ano: 2002,
    duracao: '2h 10min',
    nota: 8.7,
    sinopse:
      'Na favela Cidade de Deus, dois jovens trilham caminhos opostos: Buscapé sonha em ser fotógrafo, enquanto Zé Pequeno ascende como o traficante mais temido da região. Um retrato brutal e poético da desigualdade brasileira.',
    diretor: 'Fernando Meirelles & Kátia Lund',
    elenco: 'Alexandre Rodrigues · Leandro Firmino · Phellipe Haagensen',
    premios: '4 indicações ao Oscar 2004 · BAFTA Melhor Filme Estrangeiro',
    emoji: '📸',
    cor: '#F97316',
    bgColor: '#1C1000',
  },
  {
    id: '4',
    titulo: 'Matrix',
    genero: 'FICÇÃO CIENTÍFICA / AÇÃO',
    ano: 1999,
    duracao: '2h 16min',
    nota: 8.7,
    sinopse:
      'Neo descobre que a realidade que conhece é uma simulação computacional criada por máquinas para subjugar a humanidade. Guiado por Morpheus e Trinity, ele embarca na luta para libertar o mundo.',
    diretor: 'Lilly & Lana Wachowski',
    elenco: 'Keanu Reeves · Laurence Fishburne · Carrie-Anne Moss',
    premios: 'Oscar 2000 — Melhores Efeitos Visuais, Edição, Som',
    emoji: '💊',
    cor: '#22C55E',
    bgColor: '#031A0A',
  },
];

export default function FilmeDetalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const filme = filmes.find((f) => f.id === id);

  if (!filme) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>Filme não encontrado 😔</Text>
          <TouchableOpacity style={styles.voltarBtn} onPress={() => router.back()}>
            <Text style={styles.voltarBtnText}>← Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* Banner */}
        <View style={[styles.banner, { borderColor: filme.cor, backgroundColor: filme.bgColor }]}>
          <Text style={styles.bannerEmoji}>{filme.emoji}</Text>
        </View>

        {/* Badge gênero */}
        <View style={[styles.genreBadge, { backgroundColor: filme.cor }]}>
          <Text style={styles.genreText}>{filme.genero}</Text>
        </View>

        {/* Título */}
        <Text style={styles.titulo}>{filme.titulo}</Text>

        {/* Meta */}
        <View style={styles.metaRow}>
          <View style={styles.metaTag}><Text style={styles.metaTagText}>📅 {filme.ano}</Text></View>
          <View style={styles.metaTag}><Text style={styles.metaTagText}>⏱ {filme.duracao}</Text></View>
        </View>

        {/* Nota */}
        <View style={[styles.notaBox, { borderColor: '#F59E0B' }]}>
          <Text style={styles.notaEstrela}>⭐</Text>
          <View>
            <Text style={styles.notaLabel}>NOTA IMDB</Text>
            <Text style={styles.notaValor}>{filme.nota} / 10</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={[styles.sectionLabel, { color: filme.cor }]}>🎥 Direção</Text>
        <Text style={styles.sectionContent}>{filme.diretor}</Text>

        <Text style={[styles.sectionLabel, { color: filme.cor }]}>🎭 Elenco Principal</Text>
        <Text style={styles.sectionContent}>{filme.elenco}</Text>

        <Text style={[styles.sectionLabel, { color: filme.cor }]}>📖 Sinopse</Text>
        <Text style={styles.sinopse}>{filme.sinopse}</Text>

        <Text style={[styles.sectionLabel, { color: filme.cor }]}>🏆 Prêmios</Text>
        <Text style={styles.sectionContent}>{filme.premios}</Text>

        <TouchableOpacity style={styles.voltarBtn} onPress={() => router.back()}>
          <Text style={styles.voltarBtnText}>← Voltar para CineList</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F1A' },
  content: { padding: 22, paddingBottom: 40 },
  notFound: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  notFoundText: { color: '#FFFFFF', fontSize: 18, marginBottom: 20 },
  banner: {
    width: '100%', height: 180, borderRadius: 20,
    justifyContent: 'center', alignItems: 'center',
    marginBottom: 20, borderWidth: 1,
  },
  bannerEmoji: { fontSize: 76 },
  genreBadge: {
    alignSelf: 'flex-start', borderRadius: 8,
    paddingHorizontal: 12, paddingVertical: 4, marginBottom: 12,
  },
  genreText: { color: '#FFF', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  titulo: {
    fontSize: 28, fontWeight: 'bold', color: '#FFFFFF',
    marginBottom: 12, lineHeight: 34,
  },
  metaRow: { flexDirection: 'row', gap: 8, marginBottom: 16, flexWrap: 'wrap' },
  metaTag: {
    backgroundColor: '#1A1A2E', borderRadius: 8, paddingHorizontal: 10,
    paddingVertical: 4, borderWidth: 1, borderColor: '#2D2D4E',
  },
  metaTagText: { color: '#9CA3AF', fontSize: 13 },
  notaBox: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: '#1A1A2E', borderRadius: 12, padding: 14,
    marginBottom: 20, borderWidth: 1,
  },
  notaEstrela: { fontSize: 28 },
  notaLabel: { fontSize: 11, color: '#6B7280', marginBottom: 2, letterSpacing: 1 },
  notaValor: { fontSize: 22, fontWeight: 'bold', color: '#F59E0B' },
  divider: { height: 1, backgroundColor: '#1F2937', marginBottom: 20 },
  sectionLabel: {
    fontSize: 11, fontWeight: '700',
    letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6,
  },
  sectionContent: { fontSize: 15, color: '#D1D5DB', marginBottom: 20, fontWeight: '500' },
  sinopse: { fontSize: 15, color: '#D1D5DB', lineHeight: 24, marginBottom: 20 },
  voltarBtn: {
    backgroundColor: '#374151', borderRadius: 12, padding: 14,
    alignItems: 'center', marginTop: 8,
  },
  voltarBtnText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 },
});
