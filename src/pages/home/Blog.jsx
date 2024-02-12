import BlogCard from "../../components/widgets/BlogCard";
import {
  blogCard1,
  blogCard2,
  blogCard3,
  thumbnail1,
  thumbnail2,
  thumbnail3,
} from "../../assets";

const Blog = () => {
  return (
    <section className="w-[1086px] mx-auto mt-[260px]">
      <h1 className="font-[700] text-[40px] text-center text-[#6246EA] font-inter">
        Blog
      </h1>
      <p className="font-[400] text-[18px] font-inter text-[#6A6A6A] text-center mt-[21px] mb-[47px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="w-full grid grid-cols-3 gap-[28px]">
        <BlogCard
          videoId="S8-z26rBPLw?si=R6oRiCNX3Wik6dLj"
          thumbnailImg={thumbnail1}
          title="6 Strategies to Find Your Conference Keynote and Other Speakers"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore laboriosam nesciunt hic ipsam in aspernatur"
        />
        <BlogCard
          videoId="OZafwTE1q4Q?si=TGqdisTrUx-lgyFZ"
          thumbnailImg={thumbnail2}
          title="How Successfully Used Paid Marketing to Drive Incremental Ticket Sales"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore laboriosam nesciunt hic ipsam in aspernatur"
        />
        <BlogCard
          videoId="W5b-a8Nzmag?si=0ArwYIiU8qpa3H6v"
          thumbnailImg={thumbnail3}
          title="Introducing Workspaces: Work smarter, not harder with new navigation"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore laboriosam nesciunt hic ipsam in aspernatur"
        />
      </div>
    </section>
  );
};

export default Blog;
