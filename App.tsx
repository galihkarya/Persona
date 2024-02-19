import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './router/bottomBarNavigaton';

const App = () => {
  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;