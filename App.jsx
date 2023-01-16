import * as React from "react"
import { ImageBackground, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import Carousel from "./src/components/atoms/Carousel"
import useCachedResources from "./src/hooks/useCachedResources"
import backgroundImage from "./src/media/background/background-image.png"

const App = () => {
  const fontLoaded = useCachedResources()

  if (!fontLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
        <Carousel />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
})

export default App
