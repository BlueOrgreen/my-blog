import React from 'react';
import LogoContent from '../LogoContent';
import TabbarLink from '../TabbarLink';
import './index.less'

const Header = () => {
    return (
        <div id="Header">
            <div className="logo">
                <LogoContent />
            </div>
            <div className="link_meta">
                <TabbarLink />
            </div>
        </div>
    )
}

export default Header;