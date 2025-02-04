import { FunctionComponent, useCallback } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main1SidebarOnReviewDetail: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onArchiveIconClick = useCallback(() => {
    navigate("/main2-sidebaroff-solution");
  }, [navigate]);

  return (
    <div className="w-full relative bg-background-default-default overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="self-stretch bg-miscellaneous-floating-tab-text-unselected overflow-hidden flex flex-row items-start justify-start pt-6 px-[21px] pb-[19px] gap-8 top-[0] z-[99] sticky">
        <div className="w-10 flex flex-row items-center justify-center">
          <img
            className="h-[35px] w-[23.3px] relative"
            loading="lazy"
            alt=""
            src="/icon1.svg"
          />
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start z-[1]"
          onClick={onHomeButtonClick}
        >
          <div className="rounded-radius-200 bg-background-brand-default border-background-brand-default border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200">
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
          </div>
        </button>
      </header>
      <main className="self-stretch h-[997px] flex flex-row items-start justify-start py-0 pl-0 pr-[17px] box-border gap-[31px] max-w-full text-left text-base text-black font-body-base mq725:gap-[15px]">
        <div className="self-stretch w-[246px] bg-miscellaneous-tab-unselected overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[17px] px-2.5 pb-6 box-border gap-[15px] mq1000:pt-5 mq1000:pb-5 mq1000:box-border">
          <img
            className="w-12 h-12 relative overflow-hidden shrink-0 cursor-pointer"
            loading="lazy"
            alt=""
            src="/archive.svg"
            onClick={onArchiveIconClick}
          />
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/history-area.svg"
          />
        </div>
        <div className="h-[963px] w-[781px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
            <div className="self-stretch h-[159px] bg-lightgray-100 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-3 px-[15px] pb-[23px] box-border gap-3.5 max-w-full">
              <div className="flex flex-row items-start justify-start gap-3.5">
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
            <div className="self-stretch flex-1 bg-lightgray-100 overflow-hidden flex flex-col items-end justify-start pt-[15px] px-5 pb-[13px] gap-[18px]">
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
            <div className="self-stretch h-[340px] bg-lightgray-100 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-4 px-[15px] pb-3.5 box-border gap-[11px] max-w-full">
              <div className="w-[120px] relative leading-[100%] inline-block">
                피드백 요약
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-[3px] pr-0.5 box-border max-w-full">
                <div className="self-stretch flex-1 relative bg-background-default-default overflow-hidden max-w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[963px] flex-1 flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border max-w-full text-background-default-secondary mq725:min-w-full">
          <div className="self-stretch flex-1 bg-lightgray-100 overflow-hidden flex flex-col items-start justify-start pt-[17px] px-[21px] pb-[19px] box-border gap-[22px] max-w-full">
            <div className="w-60 flex flex-row items-center justify-start gap-space-400 z-[2]">
              <Button
                className="flex-1"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#303030",
                  fontSize: "16",
                  background: "#fff",
                  borderRadius: "8px",
                  "&:hover": { background: "#fff" },
                }}
              >
                리뷰 세부
              </Button>
              <div className="flex-1 rounded-radius-200 bg-background-brand-default border-background-brand-default border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200">
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
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-0.5 pr-[3px] box-border max-w-full">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[46px] max-w-full mq450:gap-[23px]">
                <div className="self-stretch flex flex-col items-end justify-start gap-[39px] max-w-full mq450:gap-[19px]">
                  <img
                    className="self-stretch h-[89px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/output21.svg"
                  />
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                    loading="lazy"
                    alt=""
                    src="/output21.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full">
                    <img
                      className="h-[89px] flex-1 relative max-w-full overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/output21.svg"
                    />
                  </div>
                </div>
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                  loading="lazy"
                  alt=""
                  src="/output24.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main1SidebarOnReviewDetail;
