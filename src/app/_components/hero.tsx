import Container from "@/components/core/container";
import Typography from "@/components/core/typography";
// import Image from "next/image";
import React from "react";
import WhatsappButton from "./whatsapp-button";

const Hero = () => {
  return (
    <div className="hero text-neutral-content  bg-hero-pattern xl:bg-none relative min-h-screen">
      <div className="absolute h-full lg:h-screen w-full bg-neutral z-0 top-0 bg-hero-pattern bg-cover hidden xl:block"></div>
      {/* <div className="absolute h-full lg:h-[704px] w-full inset-0 bg-black bg-opacity-70 z-1  hidden xl:block"></div> */}
      <Container
        gutter
        className="items-center justify-center flex-col xl:flex-row relative"
        style={{ height: "inherit" }}
      >
        <div
          className="align-middle items-center justify-center flex xl:hidden"
          style={{ maxWidth: 159, margin: "0 auto" }}
        >
          {/* <Image
            width={159}
            height={74}
            layout="responsive"
            src="/images/logo.png"
            alt="logo"
            className="relative xl:absolute left-0 top-0"
          /> */}
        </div>
        {/* bg didnt show */}
        <div className="flex lg:flex-row w-full items-center flex-col-reverse xl:flex-row gap-10 relative">
          {/* <Image
            width={200}
            height={99}
            src="/images/logo.png"
            alt="logo"
            className="hidden xl:block xl:absolute left-0 top-10"
          /> */}
          {/* Text Content */}
          <div className="flex-1">
            <div className="max-w-3xl">
              <Typography
                variant="h1"
                className="text-white text-center lg:text-left text-2xl lg:text-5xl max-w-[250px] lg:max-w-[534px]"
                style={{
                  WebkitTextStroke: "1px #FFFFFF",
                  color: "#FFFFFF", // Adjust text color
                }}
              >
                Mitra hukum terpercaya untuk investasi properti Anda
              </Typography>
              <p className="py-6 text-center lg:text-left text-sm lg:text-lg  max-w-[250px] lg:max-w-[534px]">
                Dengan keahlian khusus di bidang properti kami berkomitmen
                membantu klien memperoleh tujuannya.
              </p>
              <div className="flex justify-center md:justify-start">
                <WhatsappButton />
              </div>
            </div>
          </div>
          {/* Image Content */}
          <div className=" mt-8 lg:mt-0 relative">
            {/* <div className="overflow-hidden aspect-auto top-0 right-0 absolute md:static"> */}
            {/* <div className="overflow-hidden aspect-auto top-0 right-0 mt-20 md:static hidden lg:block absolute">
              <Image src="/hero.png" alt="hero" width={531.94} height={116} />
            </div> */}
            <div
              className="overflow-hidden aspect-auto top-0 right-0 mt-8 md:static block lg:hidden "
              style={{ width: 245, height: 250 }}
            >
              {/* <Image
                src="/hero.png"
                alt="hero"
                width={245}
                height={250}
                objectFit="cover"
                className="overflow-hidden"
              /> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
