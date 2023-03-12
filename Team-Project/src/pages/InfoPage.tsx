/* eslint-disable no-useless-escape */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

const InfoPage = (): JSX.Element => {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      mousewheel={{
				forceToAxis: true,
				sensitivity: 0,
				releaseOnEdges: true
			}}
      modules={[Mousewheel, Pagination]}
			pagination={{
        el: ".swiper-pagination",
        type: "progressbar",
      }}
			watchOverflow={true}
      className="swiper"
    >
      <SwiperSlide className="bg-white">
        <div className="info-wrapper">
          <div className="title-area-wrapper flex flex-row items-center justify-between">
            <div className="title-area p-24 lg:p-28 xl:p-32 mx-auto flex flex-col text-black">
              <p className="title-title text-xl lg:text-2xl xl:text-3xl">
                짧은 순간에 정해지는 결과, 티켓팅 <br />
                <br />
              </p>
              <p className="title-desc text-lg lg:text-xl xl:text-2xl">
                지금은 바야흐로 2초 전석 매진의 시대... <br />더 이상 실패의
                눈물로 경험을 쌓지 마세요.
              </p>
            </div>
            <img
              className="alert-image"
              src="https://via.placeholder.com/450x200"
              alt="첫 번째 이미지"
            />
          </div>
          <div className="p-32 mx-auto  text-black description-area">
            <p className="desc-title ml-2.5 relative lg:text-2xl xl:text-3xl">
              {`\'피켓팅\'`}은 뭔가요?
            </p>
            <p className="desc-desc mt-7 text-lg lg:text-xl xl:text-2xl">
              그동안의 티켓팅 실패로 눈물 흘려온 뮤지컬 덕후가 만든 티켓팅
              연습용 사이트입니다.
              <br />
              <br />
              대기열도 길고 매크로가 지배한 이 시국에 순발력이 없으면 그나마
              잡을 수 있는 좌석도 놓쳐버린답니다... <br />
              {`\'피켓팅\'`}으로 원하는 좌석을 선택하는 감각을 익혀보세요.
              반복을 통해 티켓팅 실력을 늘려보세요.
            </p>
          </div>
          <p className="text-black text-2xl text-center">아래로 스크롤하기</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-white">
        <div className="info-wrapper">
          <div className="title-area-wrapper flex flex-row items-center justify-between">
            <div className="title-area p-32 mx-auto flex flex-col text-black">
              <p className="title-title text-3xl">
                끝없는 연습을 통해서 <br />
                <br />
              </p>
              <p className="title-desc text-2xl">
                원하는 극장으로 몇 번이든 연습하세요.<br/>
								필요한 건 오직 시간입니다.
              </p>
            </div>
            <img
              className="alert-image"
              src="https://via.placeholder.com/450x200"
              alt="두 번째 이미지"
            />
          </div>
          <div className="p-32 mx-auto  text-black description-area">
            <p className="desc-title ml-2.5 relative text-3xl">
              왜 {`\'피켓팅\'`}인가요?
            </p>
            <p className="desc-desc mt-7 text-2xl">
              극장 홈페이지나 티켓팅 사이트들은 보통 이미 좌석 일부가 예매되어 있습니다.<br />
							선택할 수 없는 좌석을 클릭해봐도 감각을 익히기엔 어렵죠.
              <br />
              <br />
              {`\'피켓팅\'`}에서는 원하는 좌석을 대기열 없는 최적의 조건에서 연습할 수 있답니다.
            </p>
          </div>
          <p className="text-black text-2xl text-center">아래로 스크롤하기</p>
        </div>
      </SwiperSlide>
			<div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default InfoPage;
