import {Menu} from 'antd';
import React, {useState} from "react";
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const {SubMenu} = Menu;

export default function Horizont(){
    const [mail, setMail] = useState("mail")

    const handleClick = e => {
        console.log('click ', e);
        setMail(e.key);
    };
        return (
            //@ts-ignore
            <Menu onClick={handleClick} selectedKeys={mail} mode="horizontal">

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
                        {true? <Menu.Item key="setting:1"><Link to="/login/">Login</Link></Menu.Item>:
                            <Menu.Item key="setting:2"><Link to="/logout">Log Out</Link></Menu.Item>}
                    </Menu.ItemGroup>
                </SubMenu>

            </Menu>
        );
    }
