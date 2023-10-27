import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Profile from './components/Profile'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={headerStyle} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const headerStyle = {
  title: "Perfil",
  headerStyle: {
    backgroundColor: "#64CFCA",
    paddingLeft: "100px"
  },
  headerTintColor: "#fff",
  headerTitleAlign: "center",
}

export default App;
