import {
  Roboto_400Regular as Roboto,
  Roboto_700Bold as RobotoBold,
  useFonts,
} from "@expo-google-fonts/roboto"

const useCachedResources = () => {
  const [fontLoaded] = useFonts({
    Roboto,
    RobotoBold,
  })

  return fontLoaded
}

export default useCachedResources
