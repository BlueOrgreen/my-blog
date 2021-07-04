import React from 'react';
import { connect } from 'react-redux';
import './index.less'

const turnLightAction = {type: 'TURNLIGHT'}

interface LightProps {
    moon: boolean;
    night: boolean;
    turnLight: () => void;
}

const Light = (props: LightProps) => {
    const { moon, night, turnLight } = props;
    
    return (
        <div id="lampadario">
                <input type="radio" name="switch" value="on"  checked={moon} onChange={turnLight} />
                <input type="radio" name="switch" value="off" checked={night} onChange={turnLight} />
                <label htmlFor="switch"></label>
                <div id="filo"></div>
                <div id="lampadina">
                    <div className="sorpresa">
                        <div className="footer">.</div>
                    </div>
                </div>
        </div>
    )
}

export default connect(
    (state: LightProps) => {
        return {
            moon: state.moon,
            night: state.night,
        }
    },
    (dispatch) => {
        return ({
            turnLight: () => dispatch(turnLightAction)
        })
    }
)(Light)