import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, View } from "react-native"

import Button from "../../atoms/Button"
import ScreenHeader from "../../atoms/ScreenHeader"

const FinishQuiz = ({ carouselRef, resetQuiz, setShowProgressBar, successfullyCompleted }) => {
  const handleFinishPress = () => {
    resetQuiz()
    carouselRef.current.scrollTo({ index: 0, animated: true })
  }
  const handleTryAgainPress = () => {
    resetQuiz()
    carouselRef.current.scrollTo({ index: 1, animated: true })
    setShowProgressBar(true)
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title={successfullyCompleted ? "CONGRATUATIONS!" : "WELL DONE!"}
        subtitle={
          successfullyCompleted
            ? `You have completed the quiz successfully.${"\n"} Pick up your prize!`
            : "Try again and improve your score."
        }
        titleStyle={{
          fontSize: successfullyCompleted ? 36 : 40,
          paddingTop: successfullyCompleted ? 30 : 40,
        }}
        subtitleStyle={{ fontSize: 24 }}
      />
      <View style={styles.button}>
        {successfullyCompleted ? (
          <Button
            style={{ height: 55, borderRadius: 18, borderWidth: 2 }}
            textStyle={{ fontSize: 34, color: "#ffffff", fontFamily: "RobotoBold" }}
            buttonText="FINISH"
            onPress={handleFinishPress}
          />
        ) : (
          <>
            <Button
              style={{
                height: 66,
                borderRadius: 18,
                borderWidth: 2,
                marginBottom: 20,
                backgroundColor: "#ffffff",
              }}
              textStyle={{ fontSize: 34, color: "#d8a160", fontFamily: "RobotoBold" }}
              buttonText="TRY AGAIN"
              onPress={handleTryAgainPress}
            />
            <Button
              style={{ height: 66, borderRadius: 18, borderWidth: 2 }}
              textStyle={{ fontSize: 34, color: "#ffffff", fontFamily: "RobotoBold" }}
              buttonText="FINISH"
              onPress={handleFinishPress}
            />
          </>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    top: -20,
  },
  button: {
    paddingHorizontal: 50,
  },
})

FinishQuiz.propTypes = {
  carouselRef: PropTypes.instanceOf(Object),
  resetQuiz: PropTypes.func,
  setShowProgressBar: PropTypes.func,
  successfullyCompleted: PropTypes.bool,
}

FinishQuiz.defaultProps = {
  carouselRef: null,
  resetQuiz: () => {},
  setShowProgressBar: () => {},
  successfullyCompleted: false,
}

export default FinishQuiz
