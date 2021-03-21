import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useFormik} from "formik";
import {Input, InputNumber, Radio, Button, Space, Row, Col, Typography, Spin} from "antd";
import userActions from "../../ducks/user/actions";
import "./Author.scss";
const {Text, Title} = Typography;

function Author(props) {
  const dispatch = useDispatch();
  const {id} = useParams();
  const user = useSelector((state) => (state.user.user));
  React.useEffect(() => {
    dispatch(userActions.getUserRequest(id));
  }, []);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      patronymic: "",
      age: 0,
      sex: false,
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

  return (
    <div className={"author_container"}>
      <Title>Блок об авторе</Title>
      {formik.isSubmitting || !user._id ? (
        <Spin size={"large"}/>
      ) : (
        <div>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Фамилия</Text>
              <Input name={"lastname"} size="large"
                     onChange={formik.handleChange}
                     value={formik.values.lastname}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Имя</Text>
              <Input name={"firstname"} size="large"
                     onChange={formik.handleChange}
                     value={formik.values.firstname}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Отчество</Text>
              <Input name={"patronymic"} size="large"
                     onChange={formik.handleChange}
                     value={formik.values.patronymic}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Возраст</Text><br/>
              <InputNumber
                name={"age"}
                min={1}
                max={110}
                value={formik.values.age}
                onChange={value => {
                  formik.setFieldValue("age", value);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Возраст</Text><br/>
              <Radio.Group onChange={e => formik.setFieldValue('sex', e.target.value)} value={formik.values.sex}>
                <Radio value={true}>Человек</Radio>
                <Radio value={false}>Женщина</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row justify="end">
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
      )}
    </div>
  );
}

export {Author};
