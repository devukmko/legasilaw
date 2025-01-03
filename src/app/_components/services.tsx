import Container from "@/components/core/container";
import { Image } from "@/components/core/image";
import Typography from "@/components/core/typography";
import Link from "next/link";
import React from "react";

const ServiceCard: React.FC<{ title: string; image: string; href: string }> = ({ title, image, href }) => {
  return (
    // Ensure the hover class applies to the correct element
    <Link href={href} className="shadow-md rounded-lg overflow-hidden group transition-shadow duration-300 hover:shadow-2xl cursor-pointer">
      <Image src={image} alt="Services 1" fill className="aspect-square" style={{ aspectRatio: '64/53' }} />
      <div className="text-left p-4 bg-primary flex-row flex">
        <Typography variant="h2" className="text-white flex-1">
          {title}
        </Typography>
        {/* Arrow button will move when the card is hovered */}
        <div
          className="p-4 cursor-pointer transform transition-transform duration-300 group-hover:translate-x-2"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.175 8.99999H1C0.716667 8.99999 0.479167 8.90415 0.2875 8.71249C0.0958333 8.52082 0 8.28332 0 7.99999C0 7.71665 0.0958333 7.47915 0.2875 7.28749C0.479167 7.09582 0.716667 6.99999 1 6.99999H12.175L7.275 2.09999C7.075 1.89999 6.97917 1.66665 6.9875 1.39999C6.99583 1.13332 7.1 0.899987 7.3 0.699987C7.5 0.516654 7.73333 0.420821 8 0.412487C8.26667 0.404154 8.5 0.499987 8.7 0.699987L15.3 7.29999C15.4 7.39999 15.4708 7.50832 15.5125 7.62499C15.5542 7.74165 15.575 7.86665 15.575 7.99999C15.575 8.13332 15.5542 8.25832 15.5125 8.37499C15.4708 8.49165 15.4 8.59999 15.3 8.69999L8.7 15.3C8.51667 15.4833 8.2875 15.575 8.0125 15.575C7.7375 15.575 7.5 15.4833 7.3 15.3C7.1 15.1 7 14.8625 7 14.5875C7 14.3125 7.1 14.075 7.3 13.875L12.175 8.99999Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};


const Services = () => {

  return (
    <section className="bg-white pb-10 pt-10" id="services">
      <Container gutter>
        <div className="gap-8 flex-col flex">
          <div className="max-w">
            <Typography variant="h1" className="text-center md:text-left text-2xl md:text-5xl"
            style={{
              // WebkitTextStroke: "1px #000",
            }}
            >
              LEGASI LAW FIRM 
            </Typography>
            <Typography variant="subtitle" className="text-primary text-center md:text-left text-xl md:text-2xl">
              Real Estate Specialist
            </Typography>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <ServiceCard title="Perizinan" image="/images/image1.png" href="/service/perizinan" />
            <ServiceCard title="Advokasi" image="/images/image2.png" href="/service/advokasi" />
            <ServiceCard title="Pengelolaan Properti" image="/images/image3.png" href="/service/pengelolaan-kawasan"/>
          </div>
        </div>
      </Container>
    </section>
  );
};  
  
  export default Services;