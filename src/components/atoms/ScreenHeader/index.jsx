import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, View } from "react-native"

import Icon from "../Icon"
import StyledText from "../StyledText"

const ScreenHeader = ({ title, subtitle, titleStyle, subtitleStyle }) => {
  return (
    <View style={styles.container}>
      <Icon name="bookmark" width={44} height={44} fill="#ffffff" />
      <StyledText style={[styles.title, titleStyle]}>{title}</StyledText>
      <StyledText style={[styles.description, subtitleStyle]}>{subtitle}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 12,
    paddingHorizontal: 30,
    fontFamily: "RobotoBold",
  },
  description: {
    fontSize: 20,
    paddingHorizontal: 40,
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 15,
    fontFamily: "Roboto",
  },
})

ScreenHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  titleStyle: PropTypes.instanceOf(Object),
  subtitleStyle: PropTypes.instanceOf(Object),
}

ScreenHeader.defaultProps = {
  title: "",
  subtitle: "",
  titleStyle: {},
  subtitleStyle: {},
}

export default ScreenHeader
