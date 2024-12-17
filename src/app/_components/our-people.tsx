import Container from "@/components/core/container";
import { Image } from "@/components/core/image";
import Typography from "@/components/core/typography";
import WhatsappButton from "./whatsapp-button";

const PartnerCard = ({
  name,
  title,
  image,
}: {
  name: string;
  title: string;
  image: string;
}) => {
  return (
    <div className="max-w-full w-full bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={image}
        fill
        alt="frame1"
        ratio="212/264"
        style={{ aspectRatio: "212/264" }}
      />
      <div className="p-4 bg-secondary flex flex-col gap-0 items-center justify-center">
        <Typography
          variant="body1"
          className="font-bold text-white text-sm mb-1"
          style={{ fontSize: "16px" }}
        >
          {name}
        </Typography>
        <div style={{ height: "1px", backgroundColor: "#67492D", width: "100%", maxWidth: "150px" }}></div>
        <Typography variant="body1" className="text-gray-500 text-sm" style={{ color:"#67492D" }}>{title}</Typography>
      </div>
    </div>
  );
};

const OurPeople = () => {
  return (
    <section
      className=" bg-people-pattern bg-cover overflow-hidden z-20 h-full lg:h-[577px] flex items-center justify-center"
      id="our-people"
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 h-full" ></div> */}
      <Container gutter style={{ zIndex: 10 }}>
        <div className="flex flex-col md:flex-row items-center py-10 p-4 gap-4" style={{ zIndex: '2', height: 'inherit' }}>
          <div className="flex flex-col gap-5 flex-1">
            <Typography
              variant="subtitle"
              className="font-bold text-white text-2xl lg:text-4xl text-center lg:text-left"
            >
              Apapun masalah properti Anda Konsultasikan dengan Kami
            </Typography>
            <div className="flex justify-center md:justify-start">
              <WhatsappButton text="Mulai Konsultasi"/>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-end justify-end gap-4 w-full" style={{ flex: 1.3 }}>
            <PartnerCard
              name="Puja Jannatunna’im, S.H."
              title="Managing Partner"
              image="/images/frame1.png"
            />
            <PartnerCard
              name="Agung Hermansyah, SH"
              title="Partner"
              image="/images/frame3.png"
            />
            <PartnerCard
              name="Marthinus Nelson Rabin"
              title="Partner"
              image="/images/frame2.png"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurPeople;
