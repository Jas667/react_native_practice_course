import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusHidden, setIsStatusHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar style="auto" hidden={isStatusHidden} />
      {/* <Text>
        <Text style={{ color: "white" }}>Hello </Text>
        World!
      </Text> */}
      <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />
      <ActivityIndicator size="large" color="black" animating={isLoading} />
      <Pressable onPress={() => setIsStatusHidden(!isStatusHidden)}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Button title="Loading" color="midnightblue" onPress={() => setIsLoading(!isLoading)} />
      <Button title="Alert" color="midnightblue" onPress={() => Alert.alert("Invalid data!", "DOB Incorrect", [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "OK", onPress: () => console.log("OK Pressed"), style: "cancel" },

      ])} />
      {/* <Image source={{uri: "https://picsum.photos/300"}} style={{ width: 300, height: 300 }} /> */}
      {/* <ImageBackground source={logoImg} style={{ flex: 1}}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground> */}
      <Modal visible={isModalVisible} animationType="slide" onRequestClose={() => setIsModalVisible(false)} >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>MODAL TEXT</Text>
          <Button title="Close" color="midnightblue" onPress={() => setIsModalVisible(false)} />

        </View>
      </Modal>
    </View>
  );
}
