import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from "formik";
import {Input, InputNumber, Radio, Button, Space, Row, Col, Typography, Spin, Select } from "antd";
import { IngredientsTypes } from "./IngredientsTypes";
import "./Ingredients.scss";

const {Text, Title} = Typography;
const { Option } = Select;

function IngredientsForm({
  ingredient,
  buttonName = 'Add',
  onSubmitAction,
  onDeleteAction,
}) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      expiresAt: "",
      average_cost: 0,
      type: 0,
      withGluten: false,
      ...ingredient ?? {}
    },
    onSubmit: async (values, actions) => {
      await new Promise((res) => {
        dispatch(onSubmitAction(values, actions, res));
      });
    }
  });

  const onDelete = React.useCallback(async () => {
    await new Promise((res) => {
      formik.setSubmitting(true)
      dispatch(onDeleteAction(formik.values, {}, res));
    });
    formik.setSubmitting(false);
  }, [])

  return (
    <div className={"ingredientsForm_container"}>
      {formik.isSubmitting ? (
        <Spin size={"large"}/>
      ) : (
        <div>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Название</Text>
              <Input name={"name"} size="large"
                     onChange={formik.handleChange}
                     value={formik.values.name}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Годен до</Text>
              <input
                style={{marginLeft: "20px"}}
                type="date" onChange={(value) => {
                  formik.setFieldValue('expiresAt', value.target.value);
                }}
                value={formik.values.expiresAt}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Стоимость</Text><br/>
              <InputNumber
                min={0}
                name={"averag_cost"}
                value={formik.values.average_cost}
                onChange={value => {
                  formik.setFieldValue("average_cost", value);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Тип продукта</Text><br/>
              <Select defaultValue="0" value={String(formik.values.type)} style={{ width: 120 }} onChange={value => formik.setFieldValue('type', Number(value))}>
                {IngredientsTypes.map((type, idx) => (
                  <Option key={idx} value={String(idx)}>{type}</Option>
                ))}
              </Select>
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>С глютеном?</Text><br/>
              <Radio.Group onChange={e => formik.setFieldValue('withGluten', e.target.value)} value={formik.values.withGluten}>
                <Radio value={true}>Да</Radio>
                <Radio value={false}>Нет</Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row justify="end">
            {onDeleteAction && (
              <Col>
                <Space size="middle">
                  <Button
                    type="danger"
                    onClick={onDelete}
                    size="large"
                    loading={formik.isSubmitting}
                  >{"delete"}</Button>
                </Space>
              </Col>
            )}
            <Col>
              <div style={{width: '10px'}}/>
            </Col>
            <Col>
              <Space size="middle">
                <Button
                  type="primary"
                  onClick={formik.handleSubmit}
                  size="large"
                  loading={formik.isSubmitting}
                >{buttonName}</Button>
              </Space>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export { IngredientsForm };
