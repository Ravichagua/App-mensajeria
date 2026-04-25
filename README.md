# Aplicacion MENSAJERO

Una aplicación móvil de mensajería construida con **React Native** y **Expo**.
## Tecnologías Utilizadas

*   **React Native** (`0.81.5`): Framework principal para construir la interfaz de usuario nativa.
*   **Expo** (`~54.0.33`): Conjunto de herramientas y servicios para simplificar el desarrollo, compilación y pruebas en React Native.
*   **React Navigation** (`v7`): Librería empleada para la gestión del ruteo y la navegación dentro de la app.

## Algunas dependencias utilizadas

*   `@react-navigation/native`: Núcleo de la navegación.
*   `@react-navigation/native-stack`: Navegación mediante apilamiento (Stack) para manejar el flujo general (ej. Login -> Inicio -> Chat).
*   `@react-navigation/bottom-tabs`: Menú de navegación inferior (Tabs) usado en la pantalla principal.
*   `@expo/vector-icons`: Colección de íconos (como `Ionicons` y `FontAwesome`) para decorar los Tabs y otros componentes.

## Estructura de Carpetas

La arquitectura del proyecto está pensada para separar la lógica, las vistas y los estilos:

```text
App-mensajeria/
├── App.js                 # Punto de entrada principal y configuración de navegación
├── index.js               
├── package.json           # Dependencias y scripts de configuración
├── assets/                # Recursos estáticos (imagenes)
└── src/
    ├── components/        # Componentes (falta implementar)
    ├── screens/           # Pantallas 
    │   ├── Chat.js        # Chat de conversacion
    │   ├── Inicio.js      # Lista general de chats
    │   ├── Login.js       # Inicio de sesión
    │   ├── Perfil.js      # Pantalla de perfil
    │   └── Registro.js    # Registro
    └── styles/            # Estilos
        ├── ChatStyles.js
        ├── InicioStyles.js
        ├── LoginStyles.js
        ├── PerfilStyles.js
        └── RegistroStyles.js
```

## Pantallas (Screens)

*   **Login**: Autenticación del usuario.
*   **Registro**: Creación de una cuenta nueva.
*   **Inicio**: Vista principal donde se listan las conversaciones activas.
*   **Perfil**: Permite visualizar y gestionar la información del usuario logueado.
*   **Chat**: Interfaz de mensajería (burbujas de texto) con otro usuario.

## Componentes Fundamentales

Entre los componentes fundamentales que hemos utilizado.

React Native:
* View
* Text
* TextInput
* Image
* TouchableOpacity
* StyleSheet
* ScrollView

React Navigation:

* Stack
* Tab
---
> **Nota para el desarrollador:** Para iniciar este proyecto en desarrollo, corre `npm install` y luego inicializa la app con `npx expo start`.