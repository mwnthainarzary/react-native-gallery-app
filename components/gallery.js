import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function Gallery({ item }) {
  return (
    <TouchableOpacity>
      <View
        style={{
          justifyContent: "space-around",
          marginBottom: 10,
          marginRight: 10,
        }}
      >
        <View>
          <Image
            source={item.image}
            style={{ width: 100, borderRadius: 5, height: 100 }}
          />
          <Text style={{ marginLeft: 10 }}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
