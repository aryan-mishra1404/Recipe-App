import React, { Suspense } from "react";
// import Card from "./Card";

const Card = React.lazy(() => import("./Card"));
const RecipePanel = (props: { recipeData: [] }) => {
  return (
    <div className="w-[71%] bg-[#DCD9CD]">
      <div className="dark:bg-gray-800 p-4">
        <h2 className="text-2xl font-semibold text-center text-white">
          Top Recipes
        </h2>
      </div>
      <div className="flex items-center justify-evenly flex-wrap">
        {props.recipeData?.map((data, index) => (
          // <div key={index}>{data.recipe.dishType[0]}</div>
          <Suspense fallback={<div className="loader"></div>}>
            <Card
              index={index}
              label={data.recipe.label}
              image={data.recipe.image}
              ingredients={data?.recipe.ingredients}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default RecipePanel;
