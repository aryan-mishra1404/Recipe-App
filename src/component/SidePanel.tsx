import { useEffect, useState } from "react";
import Search from "./Search";
import { recipeData } from "../assets/recipeData.js";

const SidePanel = (props: {
  querySearch: string;
  setQuerySearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [activeButtons, setActiveButtons] = useState(
    recipeData?.reduce((acc, data) => {
      // Iterate over items in each recipeData entry
      data.items?.forEach((item) => {
        acc[item] = false; // Initialize each item state to false
      });
      return acc;
    }, {})
  );

  // {
  //   Object.entries(activeButtons).forEach(([key, value]) => {
  //     console.log(key, value, ": active button");
  //   });
  // }
  // console.log(activeButtons, ": active buttons");

  const [newRecipeData, setNewRecipeData] = useState(
    recipeData?.map((data) => ({
      ...data,
      open: true,
    }))
  );

  // {
  //   newRecipeData?.map((data) => {
  //     console.log(JSON.stringify(data, null, 2), " : newDATA");
  //   });
  // }

  const toggleAccordian = (index: number): void => {
    // Map through the existing data and toggle the 'open' property for the item at the specified index
    const updatedRecipeData = newRecipeData?.map((data, key) =>
      key === index ? { ...data, open: !data.open } : data
    );
    // console.log(updatedRecipeData, ":updatedRData");

    // Update the state with the new array
    setNewRecipeData(updatedRecipeData);
  };
  const handleButtonClick = (buttonName: string) => {
    // Toggle the individual button's active state
    console.log(props.querySearch?.includes(buttonName), "buttonName");

    if (props.querySearch?.includes(buttonName)) {
      console.log(props.querySearch, "into true");

      // Create a regular expression to match the exact buttonName, considering spaces around it
      const regex = new RegExp(`\\b${buttonName}\\b`, "g");

      // Replace the buttonName and trim any extra spaces
      const updatedQuerySearch = props.querySearch
        .replace(regex, "")
        .replace(/\s\s+/g, " ")
        .trim();

      props.setQuerySearch(updatedQuerySearch);
    } else {
      props.setQuerySearch(props.querySearch + " " + buttonName);
    }
    setActiveButtons((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };
  return (
    <div className="w-[29%] bg-[#DCD9CD] rounded-lg ">
      <Search setQuerySearch={props.setQuerySearch} />

      <div className="h-[89vh] overflow-auto rounded-lg p-4 my-4 space-y-4">
        <h2 className="text-3xl font-semibold text-center">Ingredients</h2>
        {newRecipeData?.map((data, index) => (
          <div
            id="accordion-color"
            data-accordion="collapse"
            data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white text-xl"
          >
            <h2
              id="accordion-color-heading-1"
              onClick={() => toggleAccordian(index)}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-0 border-gray-200 rounded-t-xl dark:text-gray-400  dark:bg-gray-800 gap-3"
                data-accordion-target="#accordion-color-body-1"
                aria-expanded="true"
                aria-controls="accordion-color-body-1"
              >
                {data.title}
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${data.open && "rotate-180"} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-1"
              className={`${!data.open && "hidden"}`}
              aria-labelledby="accordion-color-heading-1"
            >
              <div className=" w-full p-4 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 space-y-2 space-x-2 text-left  ">
                {data?.items?.map((item) => {
                  // console.log(item, ":", activeButtons[item], "Active Item");
                  return (
                    <button
                      className={`ms-2 px-3 py-1 rounded-lg ${
                        activeButtons[item]
                          ? "bg-green-500 text-gray-100"
                          : "bg-gray-400 text-black"
                      }`}
                      onClick={() => handleButtonClick(item)}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidePanel;
