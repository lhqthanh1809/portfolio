"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface BtnProps {
  containerStyles: string;
  btnStyle: string;
  iconsStyles: string;
}

const WorkSliderBtns: React.FC<BtnProps> = ({ containerStyles, btnStyle, iconsStyles }) => {
  const swiper = useSwiper();
  
  return (
    <div className={containerStyles}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
