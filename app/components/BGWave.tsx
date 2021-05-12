import React from "react";
import Svg, { Path } from "react-native-svg";

interface waveProps {
    color?: string,
    height?: number
}

const BGWave = ({ color = "#647362", height = 3000} : waveProps) => {
    return (
        <Svg height={height} viewBox="0 0 1440 320">
            <Path fill={color} fillOpacity="1" />
        </Svg>
    )
}

export default BGWave;