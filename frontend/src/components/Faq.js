import { useCallback } from "react";
import Link from "./Link";
import Help from "./Frontpage/Help";
//HERE CHANGE ONCLICK TO OPEN ACCORDING ANSWERS,
// I WAS NOT GIVEN ANSWERS SO I LINKED EVERYTHING TO THE WEBSITE
// YOU SHOULD HAVE GIVEN ME ANSWERS, ANYWAYS YOUR LOSS!

const Faq = () => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.summerschools.com/");
  }, []);

  const onLinkContainer1Click = useCallback(() => {
    window.open("https://www.summerschools.com/");
  }, []);

  const onLinkContainer3Click = useCallback(() => {
    window.open("https://www.summerschools.com/");
  }, []);

  const onLinkContainer4Click = useCallback(() => {
    window.open("https://www.summerschools.com/");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("https://www.summerschools.com/");
  }, []);

  const onLinkContainer5Click = useCallback(() => {
    window.open("https://www.summerschools.com/");
  }, []);

  const onLinkContainer6Click = useCallback(() => {
    window.open("https://www.summerschools.com/");
  }, []);

  const onLinkContainer7Click = useCallback(() => {
    window.open("https://www.summerschools.com/");
  }, []);

  return (
    <div className="self-stretch flex flex-row items-start justify-end py-0 px-[13px] box-border max-w-full text-left text-22xl-6 text-gray-300 font-domine">
      <div className="w-[1296px] flex flex-col items-start justify-start gap-[30.5px] max-w-full mq800:gap-[15px]">
        <div className="w-[578.8px] relative leading-[56.2px] flex items-center shrink-0 [debug_commit:1de1738] max-w-full mq800:text-14xl mq800:leading-[45px] mq450:text-6xl mq450:leading-[34px]">
          FAQs about Winter Schools
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[60px] shrink-0 [debug_commit:1de1738] max-w-full text-xl font-open-sans mq800:gap-[30px] mq1150:flex-wrap">
          <div className="flex-1 overflow-x-auto flex flex-col items-start justify-start gap-[30px] max-w-full mq800:min-w-full">
            <Link
              doIGetACertificateByCompl="Do I get a certificate by completing a winter course?"
              onLinkContainerClick={onLinkContainerClick}
            />
            <Link
              doIGetACertificateByCompl="What is the minimum academic standard for your winter courses?"
              propGap="20px"
              propWidth="632.3px"
              propDisplay="flex"
              onLinkContainerClick={onLinkContainer1Click}
            />
            <div
              className="w-[843.4px] rounded-2xl bg-whitesmoke-200 flex flex-row items-end justify-start pt-[23.5px] px-5 pb-[24.5px] box-border gap-[27.5px] cursor-pointer"
              onClick={onLinkContainer2Click}
            >
              <a
                className="flex-1 relative leading-[28px] text-[inherit] inline-block [text-decoration:none] max-w-full mq450:text-base mq450:leading-[22px]"
                href={`https://www.figma.com/file/ufG5mpOkgzCMfV7VMPK3ER?type=design&node-id=9-2421&mode=design`}
                target="_blank"
              >
                <p className="m-0">
                  Will this winter course help me get a place at partner
                  universities or give me
                </p>
                <p className="m-0">credits with my school?</p>
              </a>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[15px]">
                <img
                  className="w-[25px] h-[25px] relative rounded-6xl"
                  alt=""
                  src="/divfaqcircle.svg"
                />
              </div>
            </div>
            <Link
              doIGetACertificateByCompl="How do I prepare for attending my chosen course?"
              propGap="20px"
              propWidth="unset"
              propDisplay="unset"
              onLinkContainerClick={onLinkContainer3Click}
            />
            <Link
              doIGetACertificateByCompl="My area of interest isn't covered by the courses on offer. Can you still help me?"
              propGap="46.2px"
              propWidth="unset"
              propDisplay="unset"
              onLinkContainerClick={onLinkContainer4Click}
            />
            <div
              className="w-[843.4px] rounded-2xl bg-whitesmoke-200 flex flex-row items-end justify-between pt-[20.4px] pb-[25.5px] pr-5 pl-[19px] box-border gap-[20px] cursor-pointer"
              onClick={onLinkContainer5Click}
            >
              <div className="w-[281.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.1px] box-border">
                <a
                  className="self-stretch relative leading-[28px] text-[inherit] [text-decoration:none] mq450:text-base mq450:leading-[22px]"
                  href={`https://www.figma.com/file/ufG5mpOkgzCMfV7VMPK3ER?type=design&node-id=9-2421&mode=design`}
                  target="_blank"
                >
                  How long is a winter school?
                </a>
              </div>
              <img
                className="h-[25px] w-[25px] relative rounded-6xl"
                alt=""
                src="/divfaqcircle.svg"
              />
            </div>
            <div
              className="w-[843.4px] h-[76px] rounded-2xl bg-whitesmoke-200 flex flex-row items-end justify-start pt-0 px-0 pb-[12.6px] box-border cursor-pointer"
              onClick={onLinkContainer6Click}
            >
              <img
                className="h-[25px] w-[25px] relative rounded-6xl hidden"
                alt=""
                src="/divfaqcircle.svg"
              />
              <div
                className="flex-1 rounded-2xl bg-whitesmoke-200 flex flex-row items-start justify-between py-6 px-5 box-border max-w-full gap-[20px] cursor-pointer z-[1]"
                onClick={onLinkContainer7Click}
              >
                <a
                  className="w-[280.1px] relative leading-[28px] text-[inherit] flex items-center shrink-0 [text-decoration:none] mq450:text-base mq450:leading-[22px]"
                  href={`https://www.figma.com/file/ufG5mpOkgzCMfV7VMPK3ER?type=design&node-id=9-2421&mode=design`}
                  target="_blank"
                >
                  What is a winter school like?
                </a>
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <img
                    className="w-[25px] h-[25px] relative rounded-6xl"
                    alt=""
                    src="/divfaqcircle.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* THE NEED HELP FORM */}
          <Help />
        </div>
      </div>
    </div>
  );
};

export default Faq;
