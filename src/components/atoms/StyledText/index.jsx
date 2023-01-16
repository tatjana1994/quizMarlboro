import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, Text } from "react-native"

const StyledText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
  },
})

StyledText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  style: PropTypes.instanceOf(Object),
}

StyledText.defaultProps = {
  style: {
    fontFamily: "Roboto",
  },
}

export default StyledText
