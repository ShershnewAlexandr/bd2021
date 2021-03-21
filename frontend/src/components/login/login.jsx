import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";
import { Input, Button, Space, Row, Col, Typography } from "antd";
import { Link } from 'react-router-dom';
import loginActions from "../../ducks/login/actions";
import "./login.scss";
import {routes} from "../../utils/constants";

const { Text } = Typography;

function Login(props) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, actions) => {
            await new Promise((res) => {
                dispatch(loginActions.loginRequest(values, actions, res));
            });
        }
    });
    console.log(formik)

    return (
        <div className="login__main-container">
            { formik.errors.common && (
                <Text type="danger">{formik.errors.common}</Text>
            )}
            <Row className='mb-20' justify="end">
                <Col span={24}>
                    <Input name={"email"} size="large" placeholder="email"
                           onChange={formik.handleChange}
                           value={formik.values.email}
                    />
                </Col>
            </Row>
            <Row className='mb-20' justify="end">
                <Col span={24}>
                    <Input.Password name={"password"} size="large" placeholder="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </Col>
            </Row>
            <Row className='mb-20' justify="end">
                <Col>
                    <Space size="middle">
                        <Link to={routes.SIGNUP}>
                            <Button size="large">Sign up</Button>
                        </Link>
                        <Button type="primary"
                                onClick={formik.handleSubmit}
                                size="large"
                                loading={formik.isSubmitting}
                        >Sign in</Button>
                    </Space>
                </Col>
            </Row>
        </div>
    );
}

export { Login };
