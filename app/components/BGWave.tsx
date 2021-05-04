import React from "react";
import Svg, { Path } from "react-native-svg";

interface waveProps {
    color?: string,
    width?: number,
    height?: number
}

const BGWave = ({ color = "#647362", width = 2000000, height = 3000} : waveProps) => {
    return (
        <Svg height={height} viewBox="0 0 1440 320">
            <Path fill={color} fillOpacity="1" d="M0,256L80,256C160,256,320,256,480,250.7C640,245,800,235,960,229.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"/>
        </Svg>
    )
}

export default BGWave;
{/* <Path 
    fill={color} 
    fillOpacity="1" 
    d="M0,192L80,192C160,192,320,192,480,197.3C640,203,800,213,960,208C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
/> */}