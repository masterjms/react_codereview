import { FunctionComponent } from "react";
import { Box, Button, Typography } from "@mui/material";

const Homepage: FunctionComponent = () => {
  return (
    <div className="w-full h-[1080px] relative bg-background-default-default overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[407px] box-border leading-[normal] tracking-[normal]">
      <header className="self-stretch bg-background-default-default border-border-default-default border-b-[1px] border-solid overflow-hidden flex flex-row items-center justify-start flex-wrap content-center p-space-800 gap-x-space-600 gap-y-space-600 shrink-0 text-left text-base text-text-default-default font-body-base">
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
        <div className="flex-1 flex flex-row items-start justify-end flex-wrap content-start gap-space-200">
          <div className="rounded-radius-200 bg-background-default-secondary flex flex-row items-center justify-center p-space-200">
            <div className="relative leading-[100%]">Products</div>
          </div>
          <div className="rounded-radius-200 flex flex-row items-center justify-center p-space-200">
            <div className="relative leading-[100%]">Solutions</div>
          </div>
          <div className="rounded-radius-200 flex flex-row items-center justify-center p-space-200">
            <div className="relative leading-[100%]">Community</div>
          </div>
          <div className="rounded-radius-200 flex flex-row items-center justify-center p-space-200">
            <div className="relative leading-[100%]">Resources</div>
          </div>
          <div className="rounded-radius-200 flex flex-row items-center justify-center p-space-200">
            <div className="relative leading-[100%]">Pricing</div>
          </div>
          <div className="rounded-radius-200 flex flex-row items-center justify-center p-space-200">
            <div className="relative leading-[100%]">Contact</div>
          </div>
        </div>
        <div className="w-[178px] flex flex-row items-center justify-start gap-space-300">
          <Button
            className="flex-1"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#1e1e1e",
              fontSize: "16",
              background: "#e3e3e3",
              border: "#767676 solid 1px",
              borderRadius: "8px",
              "&:hover": { background: "#e3e3e3" },
            }}
          >
            Sign in
          </Button>
          <button className="cursor-pointer border-background-brand-default border-[1px] border-solid p-space-200 bg-background-brand-default flex-1 rounded-radius-200 overflow-hidden flex flex-row items-center justify-center gap-space-200">
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/star.svg"
            />
            <div className="relative text-base leading-[100%] font-body-base text-background-default-secondary text-left">
              Register
            </div>
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/x.svg"
            />
          </button>
        </div>
      </header>
      <section className="self-stretch h-[534px] bg-background-default-secondary flex flex-col items-center justify-center py-space-4000 px-space-600 box-border gap-space-800 shrink-0 text-center text-53xl text-text-default-default font-body-base">
        <div className="flex flex-col items-center justify-start gap-space-200">
          <h1 className="m-0 w-[372px] relative text-inherit tracking-[-0.03em] leading-[120%] font-bold font-[inherit] inline-block">
            알고리뷰
          </h1>
          <h1 className="m-0 w-[372px] relative text-13xl leading-[120%] font-normal font-[inherit] text-text-default-secondary flex items-center justify-center">
            당신의 코드를 리뷰해줄게요
          </h1>
        </div>
        <div className="w-[338px] hidden flex-row items-start justify-start gap-space-300 text-left text-base">
          <div className="flex-1 flex flex-col items-start justify-start gap-space-200">
            <div className="w-60 relative leading-[140%] hidden">
              Email address
            </div>
            <div className="w-60 relative leading-[140%] text-text-default-secondary hidden">
              Description
            </div>
            <div className="self-stretch rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start py-space-300 px-space-400 min-w-[240px]">
              <div className="h-4 w-[217px] relative leading-[100%] inline-block shrink-0">
                you@example.com
              </div>
            </div>
            <div className="relative leading-[140%] hidden">Error</div>
          </div>
          <div className="rounded-radius-200 bg-background-brand-default border-background-brand-default border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200 text-background-default-secondary">
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/star.svg"
            />
            <div className="h-4 w-[53px] relative leading-[100%] inline-block">
              Submit
            </div>
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
              alt=""
              src="/x.svg"
            />
          </div>
        </div>
      </section>
      <Button
        className="w-[125px] shrink-0"
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
          width: 125,
        }}
      >
        Start
      </Button>
      <section className="self-stretch h-[447px] bg-background-default-default border-border-default-default border-t-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start flex-wrap content-start pt-space-800 px-space-800 pb-space-4000 gap-space-400 text-left text-base text-text-default-default font-body-base">
        <div className="w-[262px] flex flex-col items-start justify-start gap-space-600 min-w-[240px]">
          <div className="flex flex-row items-center justify-center">
            <img
              className="h-[35px] w-[23.3px] relative"
              loading="lazy"
              alt=""
              src="/icon-1.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-space-400">
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/x-logo.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/logo-instagram.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/logo-youtube.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/linkedin.svg"
            />
          </div>
        </div>
        <div className="w-[262px] flex flex-col items-start justify-start gap-space-300">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-space-400">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="relative leading-[140%] font-semibold">
                Use cases
              </div>
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              UI design
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              UX design
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Wireframing
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Diagramming
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Brainstorming
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Online whiteboard
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Team collaboration
            </div>
          </div>
        </div>
        <div className="w-[262px] flex flex-col items-start justify-start gap-space-300">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-space-400">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="relative leading-[140%] font-semibold">
                Explore
              </div>
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Design
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Prototyping
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Development features
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Design systems
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Collaboration features
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Design process
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              FigJam
            </div>
          </div>
        </div>
        <div className="w-[262px] flex flex-col items-start justify-start gap-space-300">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-space-400">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="relative leading-[140%] font-semibold">
                Resources
              </div>
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Blog
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Best practices
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Colors
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Color wheel
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Support
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Developers
            </div>
          </div>
          <div className="w-[89px] relative h-[22px]">
            <div className="absolute top-[0%] left-[0%] leading-[140%]">
              Resource library
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
