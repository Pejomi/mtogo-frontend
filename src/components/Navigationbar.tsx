import { HomeOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Col, Dropdown, Menu, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import logo from '../assets/images/pizza.png';
import React from 'react';

interface NavigationBarProps {
    user: User | null;
    cart: Cart | null;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ user, cart }) => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link to="/logout">
                    Logout

                </Link>
            ),
        }
    ];

    return (
        <>
            <Header style={{ background: 'white' }}>
                <Row justify="space-between">
                    <Col flex="20px" style={{ marginRight: "30px" }}>
                        <img alt="" src={logo} style={{ paddingTop: "10px", width: "45px", height: "auto" }} />
                    </Col>
                    <Col flex="auto">
                        <Menu mode="horizontal">
                            <Menu.Item key="1" icon={<HomeOutlined />}>
                                Home
                                <Link to="/" />
                            </Menu.Item>
                            {
                                user &&
                                <>
                                    <Menu.Item key="2" icon={<ShopOutlined />}>
                                        Restaurants
                                        <Link to="/restaurants" />
                                    </Menu.Item>
                                    <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
                                        <>
                                            Cart (<span id="cart-size">{cart?.items.length ? cart.items.length : 0}</span>)
                                        </>
                                    </Menu.Item>
                                </>
                            }
                        </Menu>
                    </Col>
                    <Col style={{ marginLeft: "30px" }}>
                        <Row align="top">
                            {!user ?
                                <Col><Button type='primary' href='/login'>Login</Button></Col>
                                :
                                <>
                                    <Col><Avatar style={{ background: "#4592ff" }} icon={<UserOutlined />} /></Col>
                                    <Col>
                                        <Dropdown menu={{ items }} arrow
                                            placement="bottomRight">
                                            <Button style={{ color: "#4592ff" }} type="link" id='user-email'>{user.email}</Button>
                                        </Dropdown>
                                    </Col>
                                </>
                            }
                        </Row>
                    </Col>
                </Row >
            </Header >
        </>
    )
}

export default NavigationBar;