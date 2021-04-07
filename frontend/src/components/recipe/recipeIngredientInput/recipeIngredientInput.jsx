import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import {Input, InputNumber, Radio, Button, Space, Row, Col, Typography, Spin, Select } from "antd";
import recipesActions from "../../../ducks/ingredients/actions";

const { Option } = Select;

export const RecipeIngredientInput = ( { value = [], onChange } ) => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => (state.ingredients.ingredients));

  const [selectValue, setSelectValue] = React.useState();

  React.useEffect(() => {
    dispatch(recipesActions.getIngredientsRequest());
  }, []);

  const onAdd = () => {
    onChange(value.concat(ingredients[selectValue]));
  }

  return (
    <div>
      {
        value.map((v, idx) => (
          <div key={idx}>
            {v.name}
          </div>
        ))
      }
      <Select value={selectValue} style={{ width: 120 }} onChange={setSelectValue} >
        {ingredients.map(({_id, name}, idx) => (
          <Option key={_id} value={idx}>{name}</Option>
        ))}
      </Select>
      <Button
        type="primary"
        onClick={onAdd}
        size="large"
      >add</Button>
    </div>
  );
}
