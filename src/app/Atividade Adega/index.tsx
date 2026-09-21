import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

import TelaInicio from './TelaInicio';
import TelaCatalogo from './TelaCatalogo';
import TelaContato from './TelaContato';
import { styles, COLORS } from './styles';

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused ? COLORS.textLight : COLORS.tabInactive;

        return (
          <TouchableOpacity
            key={route.key}
            activeOpacity={0.8}
            onPress={onPress}
            style={[
              styles.tabItem,
              isFocused ? styles.tabItemActive : styles.tabItemInactive,
            ]}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color,
                size: 20,
              })}
            <Text style={[styles.tabLabel, { color }]}>
              {typeof options.tabBarLabel === 'string'
                ? options.tabBarLabel
                : options.title || route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function AtividadeAdega() {
  return (
    <>
      <StatusBar style="light" />
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: COLORS.textLight,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.push('/')}
              style={styles.voltarHeaderBtn}
              accessibilityLabel="Voltar ao Hub"
            >
              <Feather name="arrow-left" size={22} color={COLORS.textLight} />
            </TouchableOpacity>
          ),
        }}
      >
        <Tab.Screen
          name="Início"
          component={TelaInicio}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Catálogo"
          component={TelaCatalogo}
          options={{
            tabBarLabel: 'Catálogo',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="wine-glass-alt" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="address-card" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
