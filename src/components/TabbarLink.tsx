import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './index.less';

interface TabbarLinkProps {
    night: boolean;
    moon: boolean;
}

const TabbarLink: React.FC<TabbarLinkProps> = ({ night, moon }) => {
    return (
        <div id="TabbarLink" >
            <div className={classnames({ moonTabbarLink: moon, nightTabbarLink: night })}>
                <Link to="/"><Icon type="home" /><span>首页</span></Link>
                <Link to="/home/article"><Icon type="unordered-list" /><span>文章列表</span></Link>
                <Link to="/profile"><Icon type="user" /><span>个人信息</span></Link>
                <Link to="/message"><Icon type="form" /><span>留言板</span></Link>
                <a href="https://github.com/BlueOrgreen/my-blog"><Icon type="github" /><span>GitHub</span></a>
                <Link to="/admin/login"><Icon type="login" /><span>登录/注册</span></Link>
            </div>
        </div>
    )
}

export default connect(
    (state: TabbarLinkProps) => { return { night: state.night, moon: state.moon } },
    () => { return {} }
)(TabbarLink);