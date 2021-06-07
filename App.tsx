import React from "react";
import { StyleSheet, Text, View } from "react-native";

import codePush from "react-native-code-push";

const App = codePush(() => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
