import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from "formik";
import {Input, InputNumber, Radio, Button, Space, Row, Col, Typography, Spin} from "antd";
import ingredientsActions from "../../ducks/ingredients/actions";
import { IngredientsForm } from "./IngredientsForm";
import "./Ingredients.scss";

const {Text, Title} = Typography;

function Ingredients(props) {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => (state.ingredients.ingredients));
  React.useEffect(() => {
    dispatch(ingredientsActions.getIngredientsRequest());
  }, []);


  return (
    <div className={"ingredients_container"}>
      <Title>Ингредиенты</Title>
      {ingredients === null ? (
        <Spin size={"large"}/>
      ) : (
        <div>
          <IngredientsForm
            onSubmitAction={ingredientsActions.addIngredientsRequest}
          />
        </div>
      )}
    </div>
  );
}

export { Ingredients };
