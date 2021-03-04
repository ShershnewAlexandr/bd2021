import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";
import { Input, Button, Space, Row, Col, Typography } from "antd";
import { Link } from 'react-router-dom';
import loginActions from "../../ducks/login/actions";
import {routes} from "../../utils/constants";

const { Text } = Typography;

function Register(props) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, actions) => {
            await new Promise((res) => {
                dispatch(loginActions.registerRequest(values, actions, res));
            });
        }
    });
    console.log(formik)

    return (
        <div className="login__main-container">
            { formik.errors.common && (
                <Text type="danger">{formik.errors.common}</Text>
            )}
            <Row gutter={[0, 20]} justify="end">
                <Col span={24}>
                    <Input name={"email"} size="large" placeholder="email"
                           onChange={formik.handleChange}
                           value={formik.values.email}
                    />
                </Col>
            </Row>
            <Row gutter={[0, 20]} justify="end">
                <Col span={24}>
                    <Input.Password name={"password"} size="large" placeholder="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                    />
                </Col>
            </Row>
            <Row gutter={[0, 20]} justify="end">
                <Col>
                    <Space size="middle">
                        <Link to={routes.SIGNIN}>
                            <Button type="primary" size="large">Sign in</Button>
                        </Link>
                        <Button type="submit"
                                onClick={formik.handleSubmit}
                                size="large"
                                loading={formik.isSubmitting}
                        >Sign up</Button>
                    </Space>
                </Col>
            </Row>
        </div>
    );
}

export { Register };
