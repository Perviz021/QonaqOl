import BlogCard from "../../components/widgets/BlogCard";
import { thumbnail1, thumbnail2, thumbnail3 } from "../../assets";

const Blog = () => {
  return (
    <section className="w-full lg:w-[1086px] mx-auto mt-[80px]">
      <div className="px-[20px]">
        <h5 className="unbounded unbounded-600 text-[32px] lg:text-[24px] text-center">
          Bloqlar
        </h5>
        <p className="font-[400] text-[14px] lg:text-[20px] leading-[24px] text-[#6A6A6A] text-center mt-[20px] mb-[60px] lg:mb-[40px]">
          Tədbirlərimiz haqqında ətraflı məlumatları bloq yazılarımızdan əldə
          edə bilərsiniz
        </p>
      </div>
      <div className="w-full grid px-[20px] grid-cols-1 lg:grid-cols-3 gap-[28px]">
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
