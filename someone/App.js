import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
     <Text>Body</Text>
    </View>
  );
}

class Header  extends React.Component {
  render() {
    return (
      <View style={{padding:  100}}>
     <Text>đầu trang</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
