import { View, StyleSheet } from "react-native";
import ComponentePizzas from "../../ComponentePizzas";
import { useNavigation } from "@react-navigation/native";

export default function () {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <ComponentePizzas />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
