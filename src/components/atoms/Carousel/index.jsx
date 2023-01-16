import React, { useCallback, useMemo, useRef, useState } from "react"
import { Dimensions, View } from "react-native"
import ConfettiCannon from "react-native-confetti-cannon"
import RNRCarousel from "react-native-reanimated-carousel"

import questions from "../../../mock/questions"
import { shuffleArray } from "../../../utils/common"
import FinishQuiz from "../../molecules/FinishQuiz"
import QuestionWrapper from "../../molecules/QuestionWrapper"
import StartQuiz from "../../molecules/StartQuiz"
import ProgressBar from "../ProgressBar"

const Carousel = () => {
  const WIDTH = Dimensions.get("window").width

  const shuffleQuestionsAndAnswers = useCallback(() => {
    return shuffleArray(questions).map(item => ({ ...item, answers: shuffleArray(item.answers) }))
  }, [questions])

  const [showProgressBar, setShowProgressBar] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showConfetti, setShowConfetti] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState(shuffleQuestionsAndAnswers())

  const carouselRef = useRef()
  const confettiRef = useRef()

  const successfullyCompleted = selectedAnswers.filter(item => item.correct).length >= 4

  const handleAnswerPress = useCallback(
    answerObj => {
      setSelectedAnswers(prev => [...prev, answerObj])

      const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1
      if (isLastQuestion) {
        setShowProgressBar(false)
        if (successfullyCompleted) {
          setShowConfetti(true)
        }
      } else {
        setCurrentQuestionIndex(prev => prev + 1)
      }

      goToNextItem()
    },
    [currentQuestionIndex, shuffledQuestions],
  )

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers([])
    setShuffledQuestions(shuffleQuestionsAndAnswers())
  }

  const carouselData = useMemo(() => {
    return [
      <StartQuiz
        onPlayPress={() => {
          goToNextItem()
          setShowProgressBar(true)
        }}
      />,
      ...shuffledQuestions.map((question, index) => {
        return (
          <QuestionWrapper
            question={question}
            onAnswerPress={handleAnswerPress}
            selectedAnswers={selectedAnswers}
            questionNumber={index + 1}
          />
        )
      }),
      <FinishQuiz
        carouselRef={carouselRef}
        resetQuiz={resetQuiz}
        setShowProgressBar={setShowProgressBar}
        successfullyCompleted={successfullyCompleted}
      />,
    ]
  }, [shuffledQuestions, handleAnswerPress, selectedAnswers, currentQuestionIndex])

  const goToNextItem = () => {
    carouselRef.current.next()
  }

  const renderCarouselItem = ({ item }) => {
    return item
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {showConfetti && (
        <ConfettiCannon
          ref={confettiRef}
          count={300}
          origin={{ x: 0, y: 0 }}
          fadeOut
          autoStart
          colors={["#ffc562"]}
          onAnimationEnd={() => setShowConfetti(false)}
        />
      )}

      <ProgressBar
        questions={shuffledQuestions}
        currentQuestionIndex={currentQuestionIndex}
        selectedAnswers={selectedAnswers}
        visible={showProgressBar}
      />
      <RNRCarousel
        ref={carouselRef}
        width={WIDTH}
        mode="parallax"
        enabled={false}
        loop={false}
        data={carouselData}
        scrollAnimationDuration={1000}
        renderItem={renderCarouselItem}
        modeConfig={{
          parallaxAdjacentItemScale: 0.65,
          parallaxScrollingOffset: 80,
          rotateZDeg: 300,
        }}
      />
    </View>
  )
}

export default Carousel
