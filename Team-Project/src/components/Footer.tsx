import React from "react";

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="px-20 py-10 bg-white border-solid border-t-black border-2">
        <div className="flex items-center w-full xl:container xl:m-auto">
          <p className="text-black text-3xl">피켓팅</p>
          <p className="text-black text-xl mx-8">
            피켓팅은 여러분의 성공적인 티켓팅을 응원합니다.
          </p>
        </div>
        <div className="flex flex-col w-full xl:container xl:m-auto">
          <p className="text-black mt-10 mb-5">문의</p>
					<p className="text-black">tel: <a href="tel:">010-8719-3863</a></p>
					<p className="text-black">email: <a href="mailto:kdj993863@gmail.com">kdj993863@gmail.com</a></p>
					<p className="text-black mt-5">Copyright(c) BASE All Right Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
