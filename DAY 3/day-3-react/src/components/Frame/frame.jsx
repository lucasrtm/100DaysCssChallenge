import React from "react";
import './frame.css'

import Sun from '../Sun/sun'
import PyramideLeft from "../Pyramide/LeftSide/pyramideLeft";
import PyramideRight from "../Pyramide/RightSide/pyramideRight";
import Shadow from "../Shadow/shadow";

export default function Frame() {
    return (
        <div className="Frame">
            <Sun/>
            <PyramideLeft/>
            <PyramideRight/>
            <Shadow />
        </div>
    )
}