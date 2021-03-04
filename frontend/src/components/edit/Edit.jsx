import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { useFormik } from "formik";
import { Input, Button, Space, Row, Col, Typography } from "antd";
import userActions from "../../ducks/user/actions";
import loginActions from "../../ducks/login/actions";
import { createRoute } from "../../utils/constants";

const { Text, Title, Link } = Typography;

function Edit(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector((state) => (state.user.user));
    React.useEffect(() => {
      dispatch(userActions.getUserRequest(id));
    }, []);

    const onLogout = () => (dispatch(loginActions.logoutRequest()))


    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            patronymic: "",
            avatarURL: "",
            email: "",
            phone: "",
            vk: "",
            github: "",
            content: "",
        },
        onSubmit: async (values, actions) => {
            await new Promise((res) => {
                dispatch(userActions.updateUserRequest(values, actions, res));
            });
        }
    });

    React.useEffect(() => {
        formik.setValues(user);
    }, [JSON.stringify(user)]);

    const aboutLink = `${window.location.origin}${createRoute.ABOUT(id)}`

    return (
        <div>
            <Row gutter={[0, 20]} justify="end">
                <Link onClick={onLogout}>Выход</Link>
            </Row>
            <Title level={3}>ссылка профиля</Title>
            <RouterLink to={createRoute.ABOUT(id)}>
                <Link>{aboutLink}</Link>
            </RouterLink>
            <Title>Редакитрование информации</Title>

            <Title level={3}>Обо мне</Title>
            <Row gutter={[0, 20]} justify="end">
                <Col span={24}>
                    <Text>Фамилия</Text>
                    <Input name={"lastname"} size="large"
                       onChange={formik.handleChange}
                       value={formik.values.lastname}
                    />
                </Col>
            </Row>
            <Row gutter={[0, 20]} justify="end">
                <Col span={24}>
                    <Text>Имя</Text>
                    <Input name={"firstname"} size="large"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                    />
                </Col>
            </Row>
            <Row gutter={[0, 20]} justify="end">
                <Col span={24}>
                    <Text>Отчество</Text>
                    <Input name={"patronymic"} size="large"
                           onChange={formik.handleChange}
                           value={formik.values.patronymic}
                    />
                </Col>
            </Row>
            <Row gutter={[0, 20]} justify="end">
                <Col span={24}>
                    <Text>Ссылка на фото</Text>
                    <Input name={"avatarURL"} size="large"
                           onChange={formik.handleChange}
                           value={formik.values.avatarURL}
                    />
                </Col>
            </Row>

            <Title level={3}>Контакты</Title>
            <Row gutter={[0, 20]} justify="end">
                <Col span={24}>
                    <Text>Почта</Text>
                    <Input name={"email"} size="large"
                           onChange={formik.handleChange}
                           value={formik.values.email}
                    />
                </Col>
            </Row>
            <Row gutter={[0, 20]} justify="end">
                <Col span={24}>
                    <Text>Телефон</Text>
                    <Input name={"phone"} size="large"
                           onChange={formik.handleChange}
                           value={formik.values.phone}
                    />
                </Col>
            </Row>
            <Row gutter={[0, 20]} justify="end">
                <Col span={24}>
                    <Text>Вк</Text>
                    <Input name={"vk"} size="large"
                           onChange={formik.handleChange}
                           value={formik.values.vk}
                    />
                </Col>
            </Row>
            <Row gutter={[0, 20]} justify="end">
                <Col span={24}>
                    <Text>GitHub</Text>
                    <Input name={"github"} size="large"
                           onChange={formik.handleChange}
                           value={formik.values.github}
                    />
                </Col>
            </Row>

            <Title level={3}>Контент</Title>
            <Row gutter={[0, 20]} justify="end">
                <Col span={24}>
                    <Text>Контент в формате html</Text>
                    <Input.TextArea name={"content"}
                           rows={25}
                           onChange={formik.handleChange}
                           value={formik.values.content}
                    />
                </Col>
            </Row>

            <Row gutter={[0, 20]} justify="end">
                <Col>
                    <Space size="middle">
                        <Button
                            type="primary"
                            onClick={formik.handleSubmit}
                            size="large"
                            loading={formik.isSubmitting}
                        >Save</Button>
                    </Space>
                </Col>
            </Row>
        </div>
    );
}

export { Edit };
