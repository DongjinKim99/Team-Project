import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

const require = [
  {
    title: "1. 원하는 극장 선택하기",
    image: "첫",
  },
  {
    title: "2. 난이도 선택 후 게임 시작 누르기",
    image: "두",
  },
  {
    title: "3. 난이도 선택 후 게임 시작 누르기",
    image: "세",
  },
];

interface howItem {
  title: string;
  image: string;
}

const HowPage = (): JSX.Element => {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 0,
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
      {require.map((item: howItem) => {
        return (
          <>
            <SwiperSlide className="bg-white">
              <div className="content">
                <p className="title text-4xl text-black">
                  피켓팅 사용법 알아보기
                </p>
                <p className="mt-4 text-2xl text-black">{item.title}</p>
                <img
                  src="https://via.placeholder.com/1280x720"
                  alt={`${item.image} 번째 이미지`}
                  className="mt-3"
                />
              </div>
            </SwiperSlide>
          </>
        );
      })}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default HowPage;
