import React from "react";
import { render } from "react-dom";
import Div from './Div'
import './style.less'
import H1 from "./H1";
import Button from "./Button";

render(
    <Div>
        <H1 toWhat="Костя!!!!"/>
        <Button msg="123456"/>
    </Div>,
    document.getElementById('app')
)