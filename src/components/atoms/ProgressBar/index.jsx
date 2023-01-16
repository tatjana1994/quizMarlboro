import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, View } from "react-native"

import Icon from "../Icon"
import StyledText from "../StyledText"

const ProgressBar = ({ questions, currentQuestionIndex, selectedAnswers }) => {
  const getProgressBarItemBg = (index, id) => {
    if (currentQuestionIndex < index) {
      return "transparent"
    }

    if (currentQuestionIndex === index) {
      return "#ffffff"
    }

    return selectedAnswers.find(item => item.questionId === id)?.correct ? "#edb465" : "#8e8e8e"
  }

  return (
    <View style={styles.container}>
      <Icon style={{ marginLeft: 20 }} name="bookmark" width={40} height={40} fill="#ffffff" />
      <View style={styles.progressBar}>
        {questions.map((item, index) => {
          const isFirst = index === 0
          const isLast = index === questions.length - 1
          return (
            <View
              key={index}
              style={[
                styles.progressBarItem,
                {
                  borderTopLeftRadius: isFirst ? 8 : 0,
                  borderBottomLeftRadius: isFirst ? 8 : 0,
                  borderTopRightRadius: isLast ? 8 : 0,
                  borderBottomRightRadius: isLast ? 8 : 0,
                  backgroundColor: getProgressBarItemBg(index, item.id),
                },
              ]}
            />
          )
        })}
      </View>
      <StyledText
        style={{
          color: "#ffffff",
          fontSize: 26,
          paddingRight: 20,
          fontFamily: "RobotoBold",
        }}
      >
        {`${currentQuestionIndex + 1}/${questions.length}`}
      </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 50,
  },
  progressBar: {
    height: 28,
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
  },
  progressBarItem: {
    flex: 1,
  },
})

ProgressBar.propTypes = {
  questions: PropTypes.instanceOf(Array),
  currentQuestionIndex: PropTypes.number,
  selectedAnswers: PropTypes.instanceOf(Object),
}

ProgressBar.defaultProps = {
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswers: {},
}

export default ProgressBar
