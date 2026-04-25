import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/Login";
import Registro from "./src/screens/Registro";
import Inicio from "./src/screens/Inicio";
import Perfil from "./src/screens/Perfil";
import ChatScreen from "./src/screens/Chat";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Chats") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Perfil") {
            iconName = focused ? "user" : "user-o";
            return <FontAwesome name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Chats"
        component={Inicio}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Inicio"
          component={MainTabs}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route }) => ({ title: route.params.chatName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
