import React from "react";

import { Link, NavLink } from "react-router-dom";
import { category } from "../../mock/static";
import { getEventsByCategory } from "../../utils/apiUtils";

const ActivityAreas = () => {
  const filteredcategoryFn = (category) => {
    getEventsByCategory(category).then((res) => console.log(res.data));
  };
  return (
    <section className="w-full bg-[#F2F2F2] py-[50px] mt-[80px]">
      <div className="text-center">
        <h1 className="unbounded unbounded-600 text-[24px]">Tədbir sahələri</h1>
        <p className="text-[16px] font-[400] mt-[16px]">
          Fərqli fəaliyyət sahələri ilə müxtəlif tədbirləri bir arada tuturuq
        </p>
      </div>
      <div className="w-[1194px] mx-auto flex justify-between mt-[40px]">
        {category.map((el, i) => (
          <Link
            to={`/events/${el.id}`}
            onClick={() => filteredcategoryFn(el.id)}
            key={i}
            className="inline-flex cursor-pointer flex-col items-center space-y-[12px]"
          >
            <img src={el.imageUrl} alt="" />
            <p>{el.categoryName}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ActivityAreas;
