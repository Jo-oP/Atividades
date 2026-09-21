import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Platform } from 'react-native';

import PaginaInterestelar from '../app/Atividade 10-Navegacao/_tabs/Pagina01';
import PaginaParasita from '../app/Atividade 10-Navegacao/_tabs/Pagina02';
import PaginaCidadeDeDeus from '../app/Atividade 10-Navegacao/_tabs/Pagina03';
import PaginaMatrix from '../app/Atividade 10-Navegacao/_tabs/Pagina04';

const Tab = createBottomTabNavigator();

export function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Interestelar"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#64748B',
        tabBarStyle: {
          backgroundColor: '#0A0A14',
          borderTopColor: '#1E1B35',
          borderTopWidth: 1.5,
          height: Platform.OS === 'ios' ? 86 : 68,
          paddingBottom: Platform.OS === 'ios' ? 24 : 10,
          paddingTop: 8,
          elevation: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.35,
          shadowRadius: 6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          marginTop: 2,
        },
      }}
    >
      <Tab.Screen
        name="Interestelar"
        component={PaginaInterestelar}
        options={{
          tabBarLabel: 'Interestelar',
          tabBarActiveTintColor: '#6366F1',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapperInter]}>
              <Ionicons
                name={focused ? 'planet' : 'planet-outline'}
                size={focused ? size + 1 : size}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Parasita"
        component={PaginaParasita}
        options={{
          tabBarLabel: 'Parasita',
          tabBarActiveTintColor: '#10B981',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapperParasita]}>
              <Ionicons
                name={focused ? 'bug' : 'bug-outline'}
                size={focused ? size + 1 : size}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cidade de Deus"
        component={PaginaCidadeDeDeus}
        options={{
          tabBarLabel: 'Cidade de Deus',
          tabBarActiveTintColor: '#F97316',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapperCidade]}>
              <Ionicons
                name={focused ? 'camera' : 'camera-outline'}
                size={focused ? size + 1 : size}
                color={color}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Matrix"
        component={PaginaMatrix}
        options={{
          tabBarLabel: 'Matrix',
          tabBarActiveTintColor: '#22C55E',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapperMatrix]}>
              <Ionicons
                name={focused ? 'code-slash' : 'code-slash-outline'}
                size={focused ? size + 1 : size}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    padding: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconWrapperInter: {
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
  },
  activeIconWrapperParasita: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
  },
  activeIconWrapperCidade: {
    backgroundColor: 'rgba(249, 115, 22, 0.15)',
  },
  activeIconWrapperMatrix: {
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
  },
});

export default BottomRoutes;
