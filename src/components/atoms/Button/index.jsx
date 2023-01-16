import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"

import StyledText from "../StyledText"

const Button = ({ buttonText, style, textStyle, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[styles.container, style]}>
      <StyledText style={textStyle}>{buttonText}</StyledText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 6,
  },
})

Button.propTypes = {
  buttonText: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  textStyle: PropTypes.instanceOf(Object),
  onPress: PropTypes.func,
}

Button.defaultProps = {
  buttonText: "",
  style: {},
  textStyle: {},
  onPress: () => {},
}

export default Button
