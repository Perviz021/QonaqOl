import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 30, // Adjust this value as needed
  },
  tablet: {
    breakpoint: { max: 1024, min: 480 },
    items: 3,
    partialVisibilityGutter: 20, // Adjust this value as needed
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 3,
  },
};

const CarouselMobile = ({ active, setActive }) => {
  const items = [
    { id: "1", label: "Məlumatlarım" },
    { id: "2", label: "Tədbirlərim" },
    { id: "3", label: "Rezervlərim" },
    { id: "4", label: "Bəyəndiklərim" },
    { id: "5", label: "Şifrəni yenilə" },
  ];

  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      draggable
      partialVisible="right"
      swipeable
    >
      {items.map((el) => (
        <div
          key={el.id}
          onClick={() => setActive(el.id)}
          className={`py-[10px] transition-colors leading-[40px] px-2 cursor-pointer rounded-[8px] ${
            active === el.id ? "bg-white" : "bg-[#F3F4F6]"
          }`}
        >
          {el.label}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselMobile;
