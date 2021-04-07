import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from "formik";
import {Input, InputNumber, Radio, Button, Space, Row, Col, Typography, Spin, Select} from "antd";
import { RecipeIngredientInput } from "./recipeIngredientInput/recipeIngredientInput";
import "./recipe.scss";

const {Text, Title} = Typography;
const {Option} = Select;

function RecipeForm({
  recipe,
  buttonName = 'Add',
  onSubmitAction,
  onDeleteAction,
}) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      difficulty: 5,
      description: "",
      food: [],
      ...recipe ?? {}
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
              <Text>Сложность от 1 до 10</Text><br/>
              <InputNumber
                min={1}
                max={10}
                name={"difficulty"}
                value={formik.values.difficulty}
                onChange={value => {
                  formik.setFieldValue("difficulty", value);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Описание</Text>
              <Input name={"description"} size="large"
                     onChange={formik.handleChange}
                     value={formik.values.description}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Продукты</Text>
              <RecipeIngredientInput
                value={formik.values.food}
                onChange={(v) => {formik.setFieldValue('food', v)}}
              />
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

export {RecipeForm};
