import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import classnames from 'classnames';
import './index.less';

interface HomeProps extends RouteComponentProps {
    moon: boolean;
    night: boolean;
}

const Home = (props: HomeProps) => {
    const { moon, night } = props;

    return (
        <div id="home">
            <div className={classnames({ center: true, moonHome: moon, nightHome: night })}>
                <div className="wrapper">
                    <div className="slash"></div>
                    <div className={classnames({ sides: true, moonHome: moon, nightHome: night })}>
                        <div className="side"></div>
                        <div className="side"></div>
                        <div className="side"></div>
                        <div className="side"></div>
                    </div>
                    <div className="text">
                        <div className="text-backing">BLUEORGREEN</div>
                    </div>
                </div>
                {/* <div className="navigation">
                    <button className="btn">登录注册</button>
                    <button className="btn">文章列表</button>
                    <button className="btn">相册</button>
                    <button className="btn">文章列表</button>
                    <button className="btn">个人信息</button>
                </div> */}
            </div>
        </div>
    )
}

export default Home;