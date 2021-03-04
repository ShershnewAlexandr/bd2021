import React from 'react';
import { Login } from '../../login/login';
import "./LoginPage.scss";
import {Typography} from "antd";

const { Title } = Typography;

function LoginPage() {
    return (
        <div className="login-page__main-container">
            <Title level={2}>Sign-in</Title>
            <Login />
        </div>
    );
}

export default LoginPage;