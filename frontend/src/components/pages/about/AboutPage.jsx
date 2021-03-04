import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useParams, Link as RouteLink } from "react-router-dom";
import userActions from "../../../ducks/user/actions";
import { Space, Row, Col, Typography } from "antd";
import "./AboutPage.scss";
const { Text, Title, Link } = Typography;

function AboutPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector((state) => (state.user.user));

    React.useEffect(() => {
        dispatch(userActions.getUserRequest(id));
    }, []);

    return (
        <div style={{
            marginTop: "80px"
        }}>
            <Row justify={'center'}>
                <Col span={12} justify={'center'}>
                    <Row justify={'center'} className={"mb-30"}>
                        <img src={user.avatarURL} className={"about-img"}/>
                    </Row>
                    <Row justify={"center"} className={"mb-30"}>
                        <Title level={4}>{user.lastname} {user.firstname} {user.patronymic}</Title>
                    </Row>
                    <Row className={"mb-30"}>
                        <Col span={24}>
                            <Title level={4}>Contacts:</Title>
                            <div className={"mb-5"}>
                                <Text className={"contact-type"}>Email:</Text>
                                <Text>{user.email}</Text>
                            </div>
                            <div className={"mb-5"}>
                                <Text className={"contact-type"}>Phone:</Text>
                                <Text>{user.phone}</Text>
                            </div>
                            <div className={"mb-5"}>
                                <a href={user.vk}>
                                    <Link className={"contact-type"}>
                                        VK
                                    </Link>
                                </a>
                            </div>
                            <div className={"mb-5"}>
                                <a href={user.github}>
                                    <Link className={"contact-type"}>
                                        GitHub
                                    </Link>
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div style={{marginBottom: "100px"}} dangerouslySetInnerHTML={{ __html: user.content }}></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default AboutPage;