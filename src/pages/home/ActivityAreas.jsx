import { Link } from "react-router-dom";
import { category } from "../../mock/static";
import { getEventsByCategory } from "../../utils/apiUtils";

const ActivityAreas = () => {
  const filteredcategoryFn = (category) => {
    getEventsByCategory(category).then((res) => console.log(res.data));
  };
  return (
    <section className="w-full bg-[#F2F2F2] py-[96px] lg:py-[50px] lg:mt-[80px]">
      <div className="text-center mx-[30px]">
        <h1 className="unbounded unbounded-600 text-[24px]">Tədbir sahələri</h1>
        <p className="text-[16px] font-[400] mt-[16px] leading-[24px]">
          Fərqli fəaliyyət sahələri ilə müxtəlif tədbirləri bir arada tuturuq
        </p>
      </div>
      <div className="w-full lg:w-[1194px] lg:mx-auto lg:flex lg:justify-between mt-[40px] space-y-[32px]">
        {category.map((el, i) => (
          <Link
            to={`/events/category/${el.id}`}
            onClick={() => filteredcategoryFn(el.id)}
            key={i}
            className="w-[96px] mx-auto xl:inline-flex cursor-pointer flex flex-col items-center space-y-[16px] lg:space-y-[12px]"
          >
            <img src={el.imageUrl} alt="" />
            <p className="font-[500]">{el.categoryName}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ActivityAreas;
