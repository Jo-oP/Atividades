import { StyleSheet, Platform } from 'react-native';

export const COLORS = {
  primary: '#400303',       // Vinho escuro / Bordeaux característico da barra
  primaryDark: '#2D0202',
  cardVinho: '#AB887D',     // Tom rosê/marrom suave dos cards do catálogo
  background: '#FFFFFF',
  textDark: '#1A1A1A',
  textMuted: '#4A4A4A',
  textLight: '#FFFFFF',
  tabInactive: '#737373',
  tabBorder: '#DCDCDC',
  cardBorder: '#E2E8F0',
};

export const styles = StyleSheet.create({
  // --- TELA INÍCIO ---
  inicioContainer: {
    flex: 1,
  },
  capaBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  inicioContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    zIndex: 1,
  },
  inicioTitulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textLight,
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  inicioSubtitulo: {
    fontSize: 16,
    color: COLORS.textLight,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },

  // --- TELA CATÁLOGO ---
  catalogoContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  catalogoContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 30,
  },
  catalogoTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 10,
  },
  catalogoDescricao: {
    fontSize: 14,
    color: COLORS.textMuted,
    lineHeight: 22,
    marginBottom: 20,
  },
  cardVinho: {
    backgroundColor: COLORS.cardVinho,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  cardVinhoImagem: {
    width: 48,
    height: 95,
    resizeMode: 'contain',
    marginRight: 14,
  },
  cardVinhoInfo: {
    flex: 1,
  },
  cardVinhoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textLight,
    marginBottom: 6,
  },
  cardVinhoTexto: {
    fontSize: 12,
    color: COLORS.textLight,
    lineHeight: 17,
  },

  // --- TELA CONTATO ---
  contatoContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contatoContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 30,
  },
  contatoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textDark,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 24,
  },
  cardContato: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  cardContatoIcone: {
    marginBottom: 8,
  },
  cardContatoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  cardContatoValor: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
  },

  // --- TAB BAR CUSTOMIZADA ---
  tabBar: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 70 : 58,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: COLORS.tabBorder,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  tabItemActive: {
    backgroundColor: COLORS.primary,
  },
  tabItemInactive: {
    backgroundColor: COLORS.background,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 4,
  },

  // --- BOTÃO VOLTAR HUB DISCRETO ---
  voltarHeaderBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
