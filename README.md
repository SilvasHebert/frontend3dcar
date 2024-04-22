**Bibliotecas utilizadas:**

- @react-navigation/native, @react-navigation/native-stack, react-native-screens react-native-safe-area-context:
  Usada para navegação entre as telas

- i18next, react-i18next:
  Usada para internacionalizar os textos

- react-native-maps:
  Usada para o mapa

- babel-plugin-module-resolver:
  Usada para definir import de modules custom como @components

- eslint-plugin-simple-import-sort:
  Usada para sortear os import

- react-native-reanimated:
  Usada para as animações do veiculo no mapa

  **Estrutura Baseada no Tipo do Arquivo**:

      app/
      |-- assets/
      | |-- Images/
      | | |-- carIcon.png
      | | |-- flagIcon.png
      | | |-- vehiclesSprite.png
      |-- components/
      | |-- Button/
      | | |-- index.tsx
      | | |-- styles.ts
      | |-- SafeArea/
      | | |-- index.tsx
      | | |-- styles.ts
      |-- configs/
      | |-- i18n.ts
      |-- consts/
      | |-- colors.ts
      | data/
      | |-- sources/
      | | |-- local/
      | | | |-- gpsData.json
      |-- screens/
      | |-- CoursesSelection/
      | | |-- index.tsx
      | | |-- styles.ts
      | | |-- components/
      | | | |-- CoursesListItem/
      | | | | |-- index.tsx
      | | | | |-- styles.ts
      | | | | |-- CourseInfo/
      | | | | | |-- index.tsx
      | | | | | |-- styles.ts
      | |-- FollowCourse/
      | | |-- index.tsx
      | | |-- styles.ts
      | | |-- components/
      | | | |-- VehiclesSprite/
      | | | | |-- index.tsx
      | | | | |-- styles.tsx
      |-- routes/
      | |-- app.routes.tsx
      |-- translations/
      | |-- pt.json
      |-- types/
      | |-- routes.ts
      | |-- gpsData.ts
