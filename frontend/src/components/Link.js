import { useMemo } from "react";
//THIS COMPONENT IS FOR THE FAQ SECTION


const Link = ({
  doIGetACertificateByCompl,
  propGap,
  propWidth,
  propDisplay,
  onLinkContainerClick,
}) => {
  const linkStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const doIGetStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div
      className="w-[843.4px] rounded-2xl bg-whitesmoke-200 flex flex-row items-start justify-between py-6 px-5 box-border gap-[20px] cursor-pointer text-left text-xl text-gray-300 font-open-sans"
      onClick={onLinkContainerClick}
      style={linkStyle}
    >
      <a
        className="relative leading-[28px] text-[inherit] [text-decoration:none] mq450:text-base mq450:leading-[22px]"
        href={`https://www.figma.com/file/ufG5mpOkgzCMfV7VMPK3ER?type=design&node-id=9-2421&mode=design`}
        target="_blank"
        style={doIGetStyle}
      >
        {doIGetACertificateByCompl}
      </a>
      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
        <img
          className="w-[25px] h-[25px] relative rounded-6xl"
          loading="lazy"
          alt=""
          src="/divfaqcircle.svg"
        />
      </div>
    </div>
  );
};

export default Link;
