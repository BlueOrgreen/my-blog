import React from 'react';
import logoUrl from '../assets/assets/images/logo.jpg';
import { connect } from 'react-redux';
import classnames  from 'classnames';
import './index.less';

interface LogoContentProps {
    moon: boolean;
}

const LogoContent:React.FC<LogoContentProps> = ({ moon }) => {
    const hiddenMoon = moon;
    return (
        <div id="logocontent">
            <div className={classnames({logo_name: true, hiddenMoon})}>
                <i className="meun iconfont icon-caidan"></i>
                <img src={logoUrl} alt=""/>
                <i className="search iconfont icon-search"></i>
            </div>
        </div>
    )
}

export default connect(
    (state: LogoContentProps) => { return { moon: state.moon } },
    () => { return {} }
)(LogoContent);