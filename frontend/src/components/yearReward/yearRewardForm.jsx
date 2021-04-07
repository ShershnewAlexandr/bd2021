import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from "formik";
import {Input, InputNumber, Radio, Button, Space, Row, Col, Typography, Spin, Select} from "antd";
import "./yearReward.scss";

const {Text, Title} = Typography;
const {Option} = Select;

function YearRewardForm({
 yearReward,
 buttonName = 'Add',
 onSubmitAction,
 onDeleteAction,
}) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      date: "",
      grandSum: 0,
      voterCount: 0,
      country: "",
      description: "",
      ...yearReward ?? {}
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
              <Text>Дата</Text>
              <input
                style={{marginLeft: "20px"}}
                type="date" onChange={(value) => {
                formik.setFieldValue('date', value.target.value);
              }}
                value={formik.values.date}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Сумма гранта</Text><br/>
              <InputNumber
                min={0}
                name={"grandSum"}
                value={formik.values.grandSum}
                onChange={value => {
                  formik.setFieldValue("grandSum", value);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Кол-во проголосовавших</Text><br/>
              <InputNumber
                min={0}
                name={"voterCount"}
                value={formik.values.voterCount}
                onChange={value => {
                  formik.setFieldValue("voterCount", value);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>Страна</Text>
              <Input name={"country"} size="large"
                     onChange={formik.handleChange}
                     value={formik.values.country}
              />
            </Col>
          </Row>
          <Row className="mb-20" justify="end">
            <Col span={24}>
              <Text>JSON описание</Text>
              <Input name={"description"} size="large"
                     onChange={formik.handleChange}
                     value={formik.values.description}
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

export {YearRewardForm};
