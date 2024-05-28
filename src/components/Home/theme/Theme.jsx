import { useEffect, useState } from "react";
import { getThemeList } from "../../../lib/apis/studyRoom/theme";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./Theme.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function ThemeComponent() {
  // theme 정보를 가져와서 상태로 관리
  const [themeList, setThemeList] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect를 이용해서 theme 정보를 가져오는 함수

  useEffect(() => {
    // theme 정보 가져오기
    const v = getThemeList();
    setThemeList(v);
    if (v.length > 0) {
      setBackgroundImage(v[0].imageUrl);
    }
  }, []);

  useEffect(() => {
    if (themeList.length > 0) {
      const url = themeList[activeIndex].imageUrl;
      console.log(url);
      setBackgroundImage(url);
    }
  }, [activeIndex]);

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {themeList.map((theme) => {
          return (
            <SwiperSlide
              style={{ maxWidth: "500px", overflow: "hidden" }}
              key={theme._id}
            >
              {/* <img src={theme.imageUrl} alt={theme.themeName} /> */}
              <div>
                <img
                  src={theme.imageUrl}
                  alt={theme.themeName}
                  style={{ objectFit: "cover" }}
                />
                <p style={{ display: "absolute" }}>{theme.themeName}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
