import {Button, Menu} from 'antd';
import React, {useState} from "react";
import {SettingOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {selectAuth} from "./redux/auth-Selectors";
import {logout} from "./redux/auth-reduser";

const {SubMenu} = Menu;

export default function Horizont() {
   /* const [mail, setMail] = useState("mail")*/
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType>(selectAuth)
    const logoutCallback = () => {
        dispatch(logout())
    }
    /*const handleClick = e => {
        console.log('click ', e);
        setMail(e.key);
    };*/
    return (
        //@ts-ignore
        <Menu mode="horizontal">

            <SubMenu key="SubMenu" icon={<SettingOutlined/>} title="Navigation SN">
                <Menu.ItemGroup title="My Profile">
                    <Menu.Item key="setting:1"><Link to="/profile">Profile</Link></Menu.Item>
                    <Menu.Item key="setting:2"><Link to="/dialogs">Messages</Link></Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Developers">
                    <Menu.Item key="setting:3"><Link to="/developers">Users</Link></Menu.Item>
                    {/*<Menu.Item key="setting:4">Option 4</Menu.Item>*/}
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Log-in-out">
                    {isAuth && <Menu.Item key="setting:4">
                        <Button onClick={logoutCallback}>Log Out</Button></Menu.Item>}
                </Menu.ItemGroup>
            </SubMenu>

        </Menu>
    );
}
