import { FunctionComponent, useCallback } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Loginpage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/main1-sidebaron-reviewdetail");
  }, [navigate]);

  const handleLoginPageClick = () => {
    navigate("/main1-sidebaron-reviewdetail");
  };

  return (
    <div className="w-full relative bg-background-default-default overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[87px] box-border gap-11 leading-[normal] tracking-[normal] mq700:gap-[22px]">
      <header className="self-stretch flex flex-row items-start justify-start text-left text-base text-text-default-default font-body-base">
        <div className="w-[1920px] bg-background-default-default border-border-default-default border-b-[1px] border-solid box-border h-[99px] overflow-hidden shrink-0 flex flex-row items-center justify-start flex-wrap content-center p-space-800 gap-x-space-600 gap-y-space-600 z-[1]">
          <div className="flex flex-row items-center justify-start gap-6">
            <div className="w-11 rounded-scale-06 bg-background-default-secondary border-border-default-default border-[1px] border-solid box-border overflow-hidden shrink-0 hidden flex-row items-center justify-center p-space-300">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/menu16.svg"
              />
            </div>
            <div className="w-11 rounded-scale-06 bg-background-default-secondary border-border-default-default border-[1px] border-solid box-border overflow-hidden shrink-0 hidden flex-row items-center justify-center p-space-300">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/x16.svg"
              />
            </div>
            <div className="w-10 flex flex-row items-center justify-center">
              <img
                className="h-[35px] w-[23.3px] relative"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
          <div className="w-[870px] hidden flex-row items-start justify-end flex-wrap content-start gap-space-200">
            <div className="rounded-radius-200 bg-background-default-secondary flex flex-row items-center justify-center p-space-200">
              <div className="h-4 w-[68px] relative leading-[100%] flex items-center">
                Products
              </div>
            </div>
            <div className="rounded-radius-200 flex flex-row items-center justify-center p-space-200">
              <div className="h-4 w-[70px] relative leading-[100%] flex items-center">
                Solutions
              </div>
            </div>
            <div className="rounded-radius-200 flex flex-row items-center justify-center p-space-200">
              <div className="h-4 w-[87px] relative leading-[100%] flex items-center">
                Community
              </div>
            </div>
            <div className="rounded-radius-200 flex flex-row items-center justify-center p-space-200">
              <div className="h-4 w-[79px] relative leading-[100%] flex items-center">
                Resources
              </div>
            </div>
            <div className="rounded-radius-200 flex flex-row items-center justify-center p-space-200">
              <div className="h-4 w-[52px] relative leading-[100%] flex items-center">
                Pricing
              </div>
            </div>
            <div className="rounded-radius-200 flex flex-row items-center justify-center p-space-200">
              <div className="h-4 w-[61px] relative leading-[100%] flex items-center">
                Contact
              </div>
            </div>
          </div>
          <div className="w-[178px] hidden flex-row items-center justify-start gap-space-300">
            <div
              className="flex-1 rounded-radius-200 bg-background-neutral-tertiary border-border-neutral-secondary border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center p-space-200 gap-space-200 cursor-pointer"
              onClick={onButtonContainerClick}
            >
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/star2.svg"
              />
              <div className="h-4 w-[51px] relative leading-[100%] inline-block">
                Sign in
              </div>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/x2.svg"
              />
            </div>
            <div className="flex-1 rounded-radius-200 bg-background-brand-default border-background-brand-default border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center p-space-200 gap-space-200 text-background-default-secondary">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/star.svg"
              />
              <div className="h-4 w-[63px] relative leading-[100%] inline-block">
                Register
              </div>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/x.svg"
              />
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[29px] px-0 pb-0 bg-[transparent] flex flex-col items-start justify-start ml-[-1820px]">
          <div className="rounded-radius-200 bg-background-brand-default border-background-brand-default border-[1px] border-solid box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-space-300 gap-space-200">
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
      <main className="self-stretch flex flex-row items-start justify-start py-0 pl-[517px] pr-[518px] box-border max-w-full mq975:pl-[258px] mq975:pr-[259px] mq975:box-border mq700:pl-[129px] mq700:pr-[129px] mq700:box-border">
        <section className="flex-1 bg-lightgray-200 overflow-hidden flex flex-col items-start justify-start pt-24 pb-[162px] pl-[88px] pr-[87px] box-border gap-[95px] max-w-full text-left text-base text-black font-body-base mq450:gap-6 mq450:pt-10 mq450:px-5 mq450:pb-[68px] mq450:box-border mq950:gap-[47px] mq950:pt-[62px] mq950:pb-[105px] mq950:pl-11 mq950:pr-[43px] mq950:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="w-[200px] relative leading-[100%] inline-block">
              아이디를 입력해주세요
            </div>
            <TextField
              className="[border:none] bg-[transparent] self-stretch relative"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "95px",
                  backgroundColor: "#fff",
                  borderRadius: "0px 0px 0px 0px",
                },
              }}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[70px] gap-3.5">
            <div className="w-[200px] relative leading-[100%] inline-block">
              비밀번호를 입력해주세요
            </div>
            <TextField
              className="[border:none] bg-[transparent] self-stretch relative"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "95px",
                  backgroundColor: "#fff",
                  borderRadius: "0px 0px 0px 0px",
                },
              }}
            />
          </div>
          <Button
            className="self-stretch h-[76px] mq450:pl-5 mq450:pr-5 mq450:box-border"
            disableElevation
            variant="text"
            sx={{
              textTransform: "none",
              color: "#f5f5f5",
              fontSize: "16",
              borderRadius: "0px 0px 0px 0px",
              height: 76,
            }}
            onClick={ handleLoginPageClick }
          >
            로그인하기
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Loginpage;
