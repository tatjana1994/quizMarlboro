import { BlurView } from "expo-blur"
import PropTypes from "prop-types"
import React from "react"
import { Platform, StyleSheet, View } from "react-native"

import Button from "../../atoms/Button"
import StyledText from "../../atoms/StyledText"

const QuestionWrapper = ({ question, onAnswerPress, selectedAnswers, currentQuestionIndex }) => {
  const getButtonBgColor = answerId => {
    const selectedAnswer = selectedAnswers.find(answer => answer.questionId === question.id)

    if (selectedAnswer && answerId === selectedAnswer?.answerId) {
      return selectedAnswer.correct ? "#edb465" : "#8e8e8e"
    }

    return "transparent"
  }

  const handleAnswerPress = answerId => {
    onAnswerPress({
      correct: answerId === question.correctAnswer,
      questionId: question.id,
      answerId,
    })
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <BlurView
          style={styles.blurWrapper}
          tint="light"
          intensity={Platform.OS === "ios" ? 40 : 50}
        >
          <View>
            <StyledText style={styles.questionNumber}>{`Question ${
              currentQuestionIndex + 1
            }`}</StyledText>
            <StyledText style={styles.questionText}>{question.question}</StyledText>
          </View>
          <View>
            {question.answers.map(answer => {
              return (
                <Button
                  key={answer.id}
                  onPress={() => handleAnswerPress(answer.id)}
                  style={{
                    height: 50,
                    marginBottom: 10,
                    borderWidth: 2,
                    backgroundColor: getButtonBgColor(answer.id),
                  }}
                  buttonText={answer.value}
                  textStyle={{
                    fontSize: 26,
                    color: "#ffffff",
                    fontFamily: "RobotoBold",
                    textShadowColor: "rgba(0, 0, 0, 1)",
                    textShadowRadius: 3,
                  }}
                />
              )
            })}
          </View>
        </BlurView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
  },

  blurWrapper: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 40,
    paddingLeft: 40,
    borderRadius: 20,
    minHeight: 500,
    justifyContent: "space-between",
  },
  questionNumber: {
    fontSize: 24,
    color: "#262222",
    fontFamily: "RobotoBold",
    textAlign: "center",
  },
  questionText: {
    fontSize: 28,
    color: "#ffffff",
    fontFamily: "RobotoBold",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowRadius: 2,
    marginTop: 10,
  },
})

QuestionWrapper.propTypes = {
  question: PropTypes.instanceOf(Object),
  onAnswerPress: PropTypes.func,
  selectedAnswers: PropTypes.instanceOf(Array),
  currentQuestionIndex: PropTypes.number,
}

QuestionWrapper.defaultProps = {
  question: {},
  onAnswerPress: () => {},
  selectedAnswers: [],
  currentQuestionIndex: 0,
}

export default QuestionWrapper
