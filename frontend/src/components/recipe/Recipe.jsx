import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Typography, Spin, Collapse } from "antd";
import recipesActions from "../../ducks/recipes/actions";
import { RecipeForm } from "./RecipeForm";
import "./recipe.scss";

const { Text, Title} = Typography;
const { Panel } = Collapse;

function Recipe(props) {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => (state.recipes.recipes));
  React.useEffect(() => {
    dispatch(recipesActions.getRecipesRequest());
  }, []);

  return (
    <div className={"recipe_container"}>
      <Title>Мои рецепты</Title>
      {recipes === null ? (
        <Spin size={"large"}/>
      ) : (
        <div>
          {recipes?.length && (
            <Collapse>
              {recipes.map((recipe) => {
                return (
                  <Panel header={`${recipe.name}`} key={recipe._id}>
                    <RecipeForm
                      recipe={recipe}
                      buttonName={'update'}
                      onSubmitAction={recipesActions.updateRecipesRequest}
                      onDeleteAction={recipesActions.deleteRecipesRequest}
                    />
                  </Panel>
                );
              })}
            </Collapse>
          )}
          <hr/>
          <RecipeForm
            onSubmitAction={recipesActions.addRecipesRequest}
          />
        </div>
      )}
    </div>
  );
}

export { Recipe };
