const IngredientsCard: React.FC<[]> = (props) => {
  return (
    <div className="p-2 flex items-center justify-between bg-white rounded-lg">
      <div className="flex items-start space-x-2 w-[60%]">
        <img
          className="rounded-lg w-[16%] object-contain "
          src={props.data.image}
          alt="ingredient_image"
        />
        <div className="space-y-1">
          <h3 className="font-semibold">
            {props.data.food.charAt(0).toUpperCase() + props.data.food.slice(1)}
          </h3>
          <p className=" text-gray-500 ">{props.data.text}</p>
        </div>
      </div>
      <div className="w-[30%] space-y-1 text-right">
        <button className="rounded-lg border-none px-3 py-1 outline-none bg-green-600 text-white">
          {props.data.foodCategory}
        </button>
        <p className="text-gray-500 italic">
          Qty:{" "}
          {Number.isInteger(props.data.quantity)
            ? props.data.quantity
            : props.data.quantity.toFixed(1)}{" "}
          {props.data.measure}
        </p>
      </div>
    </div>
  );
};

export default IngredientsCard;
