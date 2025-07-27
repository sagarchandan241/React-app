import { useRef, useEffect, useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (showItems) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [showItems]);

  return (
    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 rounded">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={setShowIndex}
      >
        <p className="font-bold text-lg">
          {data.title} ({data.itemCards?.length || 0})
        </p>
        <p>{showItems ? "🔼" : "🔽"}</p>
      </div>

      {/* Slide transition wrapper */}
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
