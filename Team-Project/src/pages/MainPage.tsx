import React from "react";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

const require = [
  {
    title: "여러분을 위한 피켓팅",
    desc: "그래서 피켓팅이 뭔데요?",
  },
  {
    title: "쉽게 플레이하는 피켓팅",
    desc: "그래서 어떻게 하는 건데요?",
  },
  {
    title: "원하는 극장을 선택하자!",
    desc: "그래서 어디서 플레이 해요?",
  },
  {
    title: "지금까지의 기록 확인!",
    desc: "전적은 또 어디서 봐요?",
  },
];

interface mainltem {
  title: string;
  desc: string;
}

const MainPage = (): JSX.Element => {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      mousewheel={{
        forceToAxis: false,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      modules={[Mousewheel, Pagination]}
      pagination={{
        el: ".swiper-pagination",
        type: "progressbar",
      }}
      watchOverflow={true}
      className="swiper"
    >
      {require.map((item: mainltem, idx: number) => {
        return (
          <>
            <SwiperSlide>
              <div
                key={item.title}
                className={`carousel-slide slide-image-${idx}`}
              >
                <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container py-4 px-4 md:px-64 px-auto main-content">
                  <h2 className="text-4xl lg:text-6xl font-bold text-white">
                    {item.title}
                  </h2>
                  <p className="my-2 text-2xl text-white">{item.desc}</p>
                  <Link
                    to={`/${item.title}`}
                    className="btn btn-sm lg:btn-md mt-3 bg-gray-500 text-gray-50 border-none"
                  >
                    자세히보기
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default MainPage;
