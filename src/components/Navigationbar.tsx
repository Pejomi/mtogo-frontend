import { AppstoreOutlined, EditOutlined, HomeOutlined, MailOutlined, SettingOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Menu, Row, type MenuProps } from 'antd';
import Home from '../pages/Home';
import { useState } from 'react';
import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const items: MenuProps['items'] = [
        {
            label: 'Restaurants',
            key: 'restaurants',
            icon: <ShopOutlined />,
        },
        {
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            ),
            key: 'alipay',
        },
    ];

    const [current, setCurrent] = useState('1');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>

            {/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
             */}
            <Header style={{ background: 'white' }}>
                <Row justify="space-between">
                    <Col flex="20px" style={{ marginRight: "30px" }}>
                        [logo]
                    </Col>
                    <Col flex="auto">
                        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<HomeOutlined />}>
                                Home
                                <Link to="/" />
                            </Menu.Item>
                            <Menu.Item key="2" icon={<ShopOutlined />}>
                                Restaurants
                                <Link to="/restaurants" />
                            </Menu.Item>
                            <Menu.Item key="3">
                                Login
                                <Link to="/login" />
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col style={{ marginLeft: "30px" }}>
                        <Row align="top">
                            <Col><Avatar icon={<UserOutlined />} /></Col>
                            <Col style={{ marginLeft: "10px" }}>[username]</Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
        </>
    )
}

export default NavigationBar;