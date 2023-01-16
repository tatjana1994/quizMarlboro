import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import SvgIcon from "react-native-svg-icon"

import Svgs from "../../../constants/SVGS"

const Icon = ({ name, fill, style, viewBox, width, height }) => {
  const svgViewBox = Svgs[`${name}ViewBox`] || viewBox
  return (
    <View style={{ overflow: "hidden" }}>
      <SvgIcon
        viewBox={svgViewBox}
        name={name}
        width={width}
        height={height}
        svgs={Svgs}
        fill={fill}
        style={[
          {
            alignSelf: "center",
            justifyContent: "center",
          },
          style,
        ]}
      />
    </View>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  fill: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  viewBox: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

Icon.defaultProps = {
  name: "",
  fill: "",
  style: {},
  viewBox: "",
  width: 22,
  height: 22,
}

export default Icon
