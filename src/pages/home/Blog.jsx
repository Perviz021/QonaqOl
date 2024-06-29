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
          videoId="K_y6CveztZI?si=T1adcIt0YrZ69T15"
          thumbnailImg={thumbnail1}
          title="Evini restorana çevirən aşpaz və səyahətçi Yaqub Zeynalzadə"
          description="Kəndlilərə məhsullarından gəlir əldə etməyi öyrədən, evini restorana çevirərək Bakıda fərqli bir məkan yaradan, İtaliyada aşpazlıq təhsili almış aşpaz və səyahətçi Yaqubun macəraları"
        />
        <BlogCard
          videoId="klSLU23kQeI?si=PVX5TG1cGVXVbrZu"
          thumbnailImg={thumbnail2}
          title="Xanbulan gölündə kamp və yeyib içmək"
          description="Lənkəran rayonu, Hirkan Milli Parkında yerləşən əsrarəngiz mənzərəyə sahib bu göldə kamp etmək üçün sizə nələr lazımdır?"
        />
        <BlogCard
          videoId="K1I7qMa7n9Y?si=khFk5EJQlCV0OKUo"
          thumbnailImg={thumbnail3}
          title="Əsrlərlə yaşı olan ebru sənəti"
          description="Xüsusi boyalarla hazırlanmış naxışların qatlaşdırılmış su üzərinə köçürülməsi ilə hazırlanan sənət. Azərbaycanda bu sənətlə məşğul olan rəssamları “ebruzən” adlandırırlar"
        />
      </div>
    </section>
  );
};

export default Blog;
