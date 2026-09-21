import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function PaginaInterestelar() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* Banner */}
        <View style={[styles.banner, { borderColor: '#6366F1' }]}>
          <Text style={styles.bannerEmoji}>🚀</Text>
          <View style={[styles.bannerGlow, { backgroundColor: 'rgba(99,102,241,0.12)' }]} />
        </View>

        {/* Badge gênero */}
        <View style={[styles.genreBadge, { backgroundColor: '#6366F1' }]}>
          <Text style={styles.genreText}>FICÇÃO CIENTÍFICA</Text>
        </View>

        <Text style={styles.titulo}>Interestelar</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaTag}><Text style={styles.metaTagText}>📅 2014</Text></View>
          <View style={styles.metaTag}><Text style={styles.metaTagText}>⏱ 2h 49min</Text></View>
          <View style={styles.metaTag}><Text style={styles.metaTagText}>🌍 EUA</Text></View>
        </View>

        {/* Nota */}
        <View style={[styles.notaBox, { borderColor: '#F59E0B' }]}>
          <Text style={styles.notaEstrela}>⭐</Text>
          <View>
            <Text style={styles.notaLabel}>NOTA IMDB</Text>
            <Text style={styles.notaValor}>9.3 / 10</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionLabel}>🎥 Direção</Text>
        <Text style={styles.sectionContent}>Christopher Nolan</Text>

        <Text style={styles.sectionLabel}>🎭 Elenco Principal</Text>
        <Text style={styles.sectionContent}>Matthew McConaughey · Anne Hathaway · Jessica Chastain</Text>

        <Text style={styles.sectionLabel}>📖 Sinopse</Text>
        <Text style={styles.sinopse}>
          Em um futuro próximo, a Terra enfrenta colapso ambiental. Um grupo de astronautas atravessa
          um buraco de minhoca próximo a Saturno para encontrar um novo planeta habitável para a
          humanidade, enquanto o tempo flui de forma diferente em cada mundo visitado.
        </Text>

        <Text style={styles.sectionLabel}>🏆 Prêmios</Text>
        <Text style={styles.sectionContent}>Oscar 2015 — Melhores Efeitos Visuais</Text>

        <TouchableOpacity style={styles.voltarBtn} onPress={() => router.push('/')}>
          <Text style={styles.voltarBtnText}>← Voltar ao Hub</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F1A' },
  content: { padding: 22, paddingBottom: 40 },
  banner: {
    width: '100%', height: 180, borderRadius: 20,
    backgroundColor: '#16213E', justifyContent: 'center', alignItems: 'center',
    marginBottom: 20, borderWidth: 1, overflow: 'hidden',
  },
  bannerGlow: {
    position: 'absolute', width: '100%', height: '100%', borderRadius: 20,
  },
  bannerEmoji: { fontSize: 76, zIndex: 1 },
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
    fontSize: 11, color: '#6366F1', fontWeight: '700',
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
