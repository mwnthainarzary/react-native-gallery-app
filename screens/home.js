import React, { useState } from "react";

import { View, FlatList, Button, SafeAreaView } from "react-native";
import Gallery from "../components/gallery";
import Slider from "../components/slider";

export default function Home() {
  const [colLength, setColLength] = useState(3);

  const [gallery, setGallery] = useState([
    {
      name: "Gallery 1",
      image: require("../assets/gallery1.jpg"),
      id: Math.random().toString(),
    },
    {
      name: "Gallery 2",
      image: require("../assets/gallery3.jpg"),
      id: Math.random().toString(),
    },
    {
      name: "Gallery 3",
      image: require("../assets/gallery2.webp"),
      id: Math.random().toString(),
    },
  ]);

  return (
    <SafeAreaView>
      {/* Slider Hero Image */}
      <Slider />
      <View style={{ padding: 10 }}>
        {/* Gallery */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            numColumns={colLength}
            data={gallery}
            style={{ marginBottom: 10 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Gallery item={item} />}
          />
        </View>

        <Button title="Go to About Page" />
      </View>
    </SafeAreaView>
  );
}
