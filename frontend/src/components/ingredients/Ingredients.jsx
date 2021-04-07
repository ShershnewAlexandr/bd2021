import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Typography, Spin, Collapse } from "antd";
import ingredientsActions from "../../ducks/ingredients/actions";
import { IngredientsForm } from "./IngredientsForm";
import "./Ingredients.scss";
import {IngredientsTypes} from "./IngredientsTypes";

const { Text, Title} = Typography;
const { Panel } = Collapse;

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
          {ingredients?.length && (
            <Collapse>
              {ingredients.map((ingredient) => (
                <Panel header={`${IngredientsTypes[ingredient.type]} ${ingredient.name} годен до ${ingredient.expiresAt} стоит ${ingredient.average_cost} ${ingredient.withGluten ? 'с глютеном' : ''}`} key={ingredient._id}>
                  <IngredientsForm
                    ingredient={ingredient}
                    buttonName={'update'}
                    onSubmitAction={ingredientsActions.updateIngredientsRequest}
                    onDeleteAction={ingredientsActions.deleteIngredientsRequest}
                  />
                </Panel>
              ))}
            </Collapse>
          )}
          <hr/>
          <IngredientsForm
            onSubmitAction={ingredientsActions.addIngredientsRequest}
          />
        </div>
      )}
    </div>
  );
}

export { Ingredients };
