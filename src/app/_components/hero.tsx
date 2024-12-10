import Container from "@/components/core/container";
import Typography from "@/components/core/typography";
import Image from "next/image";
import React from "react";
import WhatsappButton from "./whatsapp-button";

const Hero = () => {
  return (
    <div className="hero text-neutral-content bg-neutral xl:bg-inherit relative">
      <div className="absolute h-128 w-full clip-path-custom bg-neutral z-0"></div>
      <Container gutter>
        <div className="align-middle items-center justify-center flex xl:hidden"  style={{ maxWidth: 159, margin: '0 auto' }}>
          <Image width={159} height={74} layout="responsive"  src="/images/logo.png" alt="logo" className="relative xl:absolute left-0 top-0" />
        </div>
      {/* bg didnt show */}
        <div className="flex lg:flex-row w-full items-center flex-col-reverse xl:flex-row gap-10 relative">
        <Image width={200} height={99} src="/images/logo.png" alt="logo" className="hidden xl:block xl:absolute left-0 top-10" />
          {/* Text Content */}
          <div className="flex-1">
            <div className="max-w-lg">
              <Typography variant="h1" className="text-white text-center md:text-left" >
                Tenang dan nyaman, properti Anda terlindungi.
              </Typography>
              <p className="py-6 text-lg text-center md:text-left">
                Kami berkomitmen membantu Anda melindungi properti Anda. Mulai dari
                perizinan hingga sengketa, Kami akan menemani Anda. Konsultasikan
                dengan Kami.
              </p>
              <div className="flex justify-center md:justify-start">
                <WhatsappButton />
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className=" mt-8 lg:mt-0">
            {/* <div className="overflow-hidden aspect-auto top-0 right-0 absolute md:static"> */}
            <div className="overflow-hidden aspect-auto top-0 right-0 mt-8 md:static">
              <Image 
                src="/hero.png"
                alt="hero"
                width={531.94}
                height={116}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
