import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, View } from "react-native"

import Button from "../../atoms/Button"
import ScreenHeader from "../../atoms/ScreenHeader"

const StartQuiz = ({ onPlayPress }) => {
  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Ready to take on the quiz?"
        subtitle={`Take the quiz, and if you answer correctly to at least 4 out of 5 questions,${"\n"}WIN A PRIZE!`}
        titleStyle={{ fontSize: 48 }}
        subtitleStyle={{ fontSize: 19 }}
      />
      <View style={styles.button}>
        <Button
          style={{ height: 66, borderRadius: 18, borderWidth: 2 }}
          textStyle={{ fontSize: 44, color: "#ffffff", fontFamily: "RobotoBold" }}
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
    top: -30,
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
