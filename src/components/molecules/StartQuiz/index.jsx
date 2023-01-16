import PropTypes from "prop-types"
import React from "react"
import { Platform, StyleSheet, View } from "react-native"

import Button from "../../atoms/Button"
import ScreenHeader from "../../atoms/ScreenHeader"

const StartQuiz = ({ onPlayPress }) => {
  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Ready to take on the quiz?"
        subtitle={`Take the quiz, and if you answer correctly to at least 4 out of 5 questions,${"\n"}WIN A PRIZE!`}
        titleStyle={{ fontSize: Platform.OS === "ios" ? 40 : 30 }}
        subtitleStyle={{ fontSize: Platform.OS === "ios" ? 18 : 14 }}
      />
      <View style={styles.button}>
        <Button
          style={{ height: 50, borderRadius: 18, borderWidth: 2 }}
          textStyle={{ fontSize: 36, color: "#ffffff", fontFamily: "RobotoBold" }}
          buttonText="PLAY"
          onPress={onPlayPress}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -50,
  },
  button: {
    paddingHorizontal: 50,
  },
})

StartQuiz.propTypes = {
  onPlayPress: PropTypes.func,
}

StartQuiz.defaultProps = {
  onPlayPress: () => {},
}

export default StartQuiz
