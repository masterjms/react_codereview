import { FunctionComponent, useCallback } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main2SidebarOffSolution: FunctionComponent = () => {
  const navigate = useNavigate();

  const onChevronsRightIconClick = useCallback(() => {
    navigate("/main1-sidebaron-reviewdetail");
  }, [navigate]);

  return (
    <div className="w-full h-[1080px] relative bg-background-default-default overflow-hidden leading-[normal] tracking-[normal] text-left text-base text-text-neutral-default font-body-base mq1425:h-auto mq1425:min-h-[1080]">
      <header className="absolute top-[0px] left-[0px] bg-miscellaneous-floating-tab-text-unselected w-full overflow-hidden flex flex-row items-start justify-start pt-[19px] px-7 pb-6 box-border gap-7 max-w-full">
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="w-10 flex flex-row items-center justify-center">
            <img
              className="h-[35px] w-[23.3px] relative"
              loading="lazy"
              alt=""
              src="/icon1.svg"
            />
          </div>
        </div>
        <button className="cursor-pointer border-background-brand-default border-[1px] border-solid p-space-300 bg-background-brand-default rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-space-200 z-[1]">
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
            alt=""
            src="/star.svg"
          />
          <div className="relative text-base leading-[100%] font-body-base text-background-default-secondary text-left">
            Home
          </div>
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
            alt=""
            src="/x.svg"
          />
        </button>
      </header>
      <div className="absolute top-[123px] left-[1057px] w-60 flex flex-row items-center justify-start gap-space-400">
        <div className="flex-1 rounded-radius-200 bg-background-default-default overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200">
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
            alt=""
            src="/star2.svg"
          />
          <div className="w-16 relative leading-[100%] inline-block">
            리뷰 세부
          </div>
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
            alt=""
            src="/x2.svg"
          />
        </div>
        <div className="flex-1 rounded-radius-200 bg-background-brand-default border-background-brand-default border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200 text-background-default-secondary">
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
            alt=""
            src="/star1.svg"
          />
          <div className="w-[59px] relative leading-[100%] inline-block">
            모범답안
          </div>
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
            alt=""
            src="/x1.svg"
          />
        </div>
      </div>
      <main className="absolute top-[106px] left-[0px] w-[1850px] h-[940px] flex flex-row items-start justify-end max-w-full">
        <section className="self-stretch w-[1782px] flex flex-row items-start justify-start gap-[187px] max-w-full text-left text-base text-black font-body-base mq1425:flex-wrap">
          <div className="w-[781px] flex flex-col items-start justify-start gap-6 max-w-full mq825:min-w-full mq1425:flex-1">
            <div className="self-stretch h-[159px] bg-lightgray-100 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-3 px-[15px] pb-[23px] box-border gap-3.5 max-w-full z-[1]">
              <div className="flex flex-row items-start justify-start py-0 pl-0 pr-5 gap-3.5">
                <Button
                  className="w-[70px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#f5f5f5",
                    fontSize: "16",
                    background: "#2c2c2c",
                    border: "#2c2c2c solid 1px",
                    borderRadius: "8px",
                    "&:hover": { background: "#2c2c2c" },
                    width: 70,
                    height: 40,
                  }}
                >
                  URL
                </Button>
                <button className="cursor-pointer border-background-brand-default border-[1px] border-solid p-space-300 bg-background-brand-default w-[70px] rounded-radius-200 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center gap-space-200">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/star.svg"
                  />
                  <div className="relative text-base leading-[100%] font-body-base text-background-default-secondary text-left">
                    typing
                  </div>
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/x.svg"
                  />
                </button>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-background-default-default overflow-hidden max-w-full" />
              </div>
            </div>
            <div className="self-stretch h-[393px] flex flex-row items-start justify-start max-w-full">
              <div className="bg-miscellaneous-tab-unselected overflow-hidden flex flex-col items-start justify-start pt-[17px] px-2.5 pb-6 gap-[15px] opacity-[0] shrink-0">
                <img
                  className="w-12 h-12 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-px relative">
                  <img
                    className="h-[893px] flex-1 relative max-w-full overflow-hidden"
                    loading="lazy"
                    alt=""
                  />
                  <img
                    className="h-12 w-12 absolute !m-[0] top-[399px] left-[-11px] overflow-hidden shrink-0 cursor-pointer z-[1]"
                    alt=""
                    src="/chevrons-right.svg"
                    onClick={onChevronsRightIconClick}
                  />
                </div>
              </div>
              <div className="self-stretch w-[781px] bg-lightgray-100 overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[15px] px-5 pb-[13px] box-border gap-[18px] max-w-full z-[1]">
                <div className="self-stretch flex-1 relative bg-background-default-default overflow-hidden" />
                <Button
                  className="w-[92px] h-12"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#f5f5f5",
                    fontSize: "16",
                    background: "#2c2c2c",
                    border: "#2c2c2c solid 1px",
                    borderRadius: "8px",
                    "&:hover": { background: "#2c2c2c" },
                    width: 92,
                    height: 48,
                  }}
                >
                  검사
                </Button>
              </div>
            </div>
            <div className="self-stretch h-[340px] bg-lightgray-100 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-4 px-[15px] pb-3.5 box-border gap-[11px] max-w-full z-[1]">
              <div className="w-[120px] relative leading-[100%] inline-block">
                피드백 요약
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-[3px] pr-0.5 box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-background-default-default overflow-hidden max-w-full" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 bg-lightgray-100 overflow-hidden flex flex-col items-start justify-start pt-5 px-6 pb-[23px] box-border gap-[19px] max-w-full z-[1] text-text-neutral-default mq825:min-w-full">
            <div className="w-60 flex flex-row items-center justify-start gap-space-400 z-[2]">
              <div className="flex-1 rounded-radius-200 bg-background-default-default overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/star2.svg"
                />
                <div className="w-16 relative leading-[100%] inline-block">
                  리뷰 세부
                </div>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/x2.svg"
                />
              </div>
              <div className="flex-1 rounded-radius-200 bg-background-brand-default border-background-brand-default border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200 text-background-default-secondary">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/star1.svg"
                />
                <div className="w-[59px] relative leading-[100%] inline-block">
                  모범답안
                </div>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/x1.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-[838px] relative bg-background-default-default overflow-hidden shrink-0" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main2SidebarOffSolution;
