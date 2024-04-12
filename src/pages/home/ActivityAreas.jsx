import { Link } from "react-router-dom";
import { category } from "../../mock/static";
import { getEventsByCategory } from "../../utils/apiUtils";
import { useMediaQuery } from "@uidotdev/usehooks";

const ActivityAreas = () => {
  const isMobile = useMediaQuery("only screen and (max-width: 480px)");

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
      <div
        className={`${
          isMobile
            ? "w-full space-y-[32px]"
            : "w-[1194px] mx-auto flex justify-between"
        }  mt-[40px]`}
      >
        {category.map((el, i) => (
          <Link
            to={`/events/category/${el.id}`}
            onClick={() => filteredcategoryFn(el.id)}
            key={i}
            className="w-[96px] mx-auto xl:inline-flex cursor-pointer flex flex-col items-center space-y-[16px] lg:space-y-[12px]"
          >
            <img src={el.imageUrl} alt="" />
            <p
              className={`font-[500] ${el.id === "COOKING" ? "w-[142px]" : ""}`}
            >
              {el.categoryName}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ActivityAreas;
