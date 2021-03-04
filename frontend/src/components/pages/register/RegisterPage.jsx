import React from 'react';
import { Register } from "../../register/Register";
import { Typography } from "antd";
import "./RegisterPage.scss";

const { Title } = Typography;

function RegisterPage() {
    return (
        <div className="register-page__main-container">
            <Title level={2}>Sign-up</Title>
            <Register />
        </div>
    );
}

export default RegisterPage;