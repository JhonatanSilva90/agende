import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/theme.js";
import Main from "../screens/main/main";
import Service from "../screens/services/services.jsx";
import Schedule from "../screens/schedule/schedule.jsx";

const Stack = createNativeStackNavigator();
function RoutesPrivate() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="services"
        component={Service}
        options={{
          headerTitle: "Serviços",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: COLORS.white,
          headerStyle: { backgroundColor: COLORS.blue },
        }}
      />
      <Stack.Screen
        name="schedule"
        component={Schedule}
        options={{
          headerTitle: "Fazer uma Reserva",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: COLORS.blue,
        }}
      />
    </Stack.Navigator>
  );
}

export default RoutesPrivate;
