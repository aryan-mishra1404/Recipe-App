import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
// import SidePanel from "../component/SidePanel";
import RecipePanel from "../component/RecipePanel";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import IngredientsCard from "../component/IngredientsCard";
import { setCardIndex } from "../redux/slices/cardIndex";

const SidePanel = React.lazy(() => import("../component/SidePanel"));

const Recipe = () => {
  const dispatch = useAppDispatch();
  const [querySearch, setQuerySearch] = useState<string>("");

  let cardIndex = useAppSelector((state) => state.cardIndex);
  const cardIngredients = useAppSelector((state) => state.cardIngredients);

  const dishName = useAppSelector((state) => state.dishName);

  useEffect(() => {
    console.log(cardIndex);

    cardIngredients?.map((data) => {
      console.log(data);
    });
  }, [cardIndex, cardIngredients]);
  const [recipeData, setRecipeData] = useState<string[]>([]);

  useEffect(() => {
    const INGREDIENTS_URL = "https://api.edamam.com/search";
    const APP_KEY = "80f952b56f77c9c9c337086a114ee502";
    const APP_ID = "88fa4779";

    const getIngredients = async () => {
      console.log("calling api");
      try {
        const response = await axios.get(INGREDIENTS_URL, {
          params: {
            q: querySearch,
            app_key: APP_KEY,
            app_id: APP_ID,
          },
        });

        console.log(response.data.hits);
        setRecipeData(response.data.hits);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    getIngredients();
  }, [querySearch]);

  console.log(querySearch);

  return (
    <>
      <div className="flex justify-between h-full w-full] bg-slate-100">
        {/* Side Panel */}
        <Suspense fallback={<div className="loader"></div>}>
          <SidePanel
            querySearch={querySearch}
            setQuerySearch={setQuerySearch}
          />
        </Suspense>
        {/* <Suspense fallback={<div className="loader"></div>}> */}
        <RecipePanel recipeData={recipeData} />
        {/* </Suspense> */}
      </div>

      {cardIndex >= 0 && (
        <div
          id="static-modal"
          data-modal-backdrop="static"
          //   tabIndex="-1"
          aria-hidden="true"
          className=" absolute flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-200">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl w-full font-semibold text-center font-semi bold text-gray-900 dark:text-black ">
                  {dishName}
                </h3>
                <button
                  type="button"
                  onClick={() => dispatch(setCardIndex(-1))}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="static-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  {/* <span className="sr-only">Close modal</span> */}
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5 space-y-4 !h-[50vh] overflow-auto">
                {cardIngredients?.map((data) => (
                  <IngredientsCard data={data} />
                ))}
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recipe;
