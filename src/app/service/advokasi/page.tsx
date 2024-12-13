import Container from "@/components/core/container";
import Typography from "@/components/core/typography";

export const metadata = {
  title: "Advokasi Properti - Penyelesaian Sengketa dan Konsultasi",
  description:
    "Tim Advokasi kami berkomitmen membantu menyelesaikan sengketa properti klien dan memberikan pemahaman komprehensif terkait transaksi properti yang dihadapi.",
  openGraph: {
    title: "Advokasi Properti - Penyelesaian Sengketa dan Konsultasi",
    description:
      "Tim Advokasi kami berkomitmen membantu menyelesaikan sengketa properti klien dan memberikan pemahaman komprehensif terkait transaksi properti yang dihadapi.",
    url: "https://www.legasilaw.com/service/advokasi",
    type: "website",
    images: [
      {
        url: "/images/bg-services.jpg",
        width: 1200,
        height: 630,
        alt: "Background image for Advokasi Properti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advokasi Properti - Penyelesaian Sengketa dan Konsultasi",
    description:
      "Tim Advokasi kami berkomitmen membantu menyelesaikan sengketa properti klien dan memberikan pemahaman komprehensif terkait transaksi properti yang dihadapi.",
    images: ["/images/bg-services.jpg"],
  },
};


const AdvokasiIcon = () => {
  return (
    <svg
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 32.5H22.5C23.0667 32.5 23.5417 32.6917 23.925 33.075C24.3083 33.4584 24.5 33.9334 24.5 34.5C24.5 35.0667 24.3083 35.5417 23.925 35.925C23.5417 36.3084 23.0667 36.5 22.5 36.5H2.5C1.93333 36.5 1.45833 36.3084 1.075 35.925C0.691667 35.5417 0.5 35.0667 0.5 34.5C0.5 33.9334 0.691667 33.4584 1.075 33.075C1.45833 32.6917 1.93333 32.5 2.5 32.5ZM8.95 23.95L3.3 18.3C2.53333 17.5334 2.14167 16.5917 2.125 15.475C2.10833 14.3584 2.48333 13.4167 3.25 12.65L4.7 11.2L16.1 22.5L14.65 23.95C13.8833 24.7167 12.9333 25.1 11.8 25.1C10.6667 25.1 9.71667 24.7167 8.95 23.95ZM24.5 14.1L13.2 2.70004L14.65 1.25004C15.4167 0.483377 16.3583 0.108377 17.475 0.125044C18.5917 0.14171 19.5333 0.533377 20.3 1.30004L25.95 6.95004C26.7167 7.71671 27.1 8.66671 27.1 9.80004C27.1 10.9334 26.7167 11.8834 25.95 12.65L24.5 14.1ZM32.3 33.1L7.6 8.40004L10.4 5.60004L35.1 30.3C35.4667 30.6667 35.65 31.1334 35.65 31.7C35.65 32.2667 35.4667 32.7334 35.1 33.1C34.7333 33.4667 34.2667 33.65 33.7 33.65C33.1333 33.65 32.6667 33.4667 32.3 33.1Z"
        fill="#BF936A"
      />
    </svg>
  );
};

const CheckListIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="none" />
      <path
        d="M9.54972 15.15L18.0247 6.675C18.2247 6.475 18.4581 6.375 18.7247 6.375C18.9914 6.375 19.2247 6.475 19.4247 6.675C19.6247 6.875 19.7247 7.1125 19.7247 7.3875C19.7247 7.6625 19.6247 7.9 19.4247 8.1L10.2497 17.3C10.0497 17.5 9.81639 17.6 9.54972 17.6C9.28305 17.6 9.04972 17.5 8.84972 17.3L4.54972 13C4.34972 12.8 4.25389 12.5625 4.26222 12.2875C4.27055 12.0125 4.37472 11.775 4.57472 11.575C4.77472 11.375 5.01222 11.275 5.28722 11.275C5.56222 11.275 5.79972 11.375 5.99972 11.575L9.54972 15.15Z"
        fill="white"
      />
    </svg>
  );
};

const PerizinanPage = () => {
  return (
    <section
      className="h-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/bg-services.jpg')",
        height: "calc(100vh - 68px)",
      }}
      id="advokasi"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/80"></div>

      <Container>
        <div className="relative z-10 flex flex-col items-center py-10 gap-8 max-w-[795px] m-auto">
          <div className="flex flex-row gap-4">
            <AdvokasiIcon />
            <Typography
              variant="h1"
              className="text-center text-secondary md:text-left"
            >
              Advokasi
            </Typography>

          </div>
          <Typography
            variant="body1"
            className="text-center text-white text-xl"
          >
            Dinamika dalam transaksi properti terkadang menimbulkan permasalahan
            yang dapat merugikan salah satu pihak. Tim kami berkomitmen membantu
            menyelesaikan sengketa properti klien dan memberikan pemahaman yang
            komprehensif terkait permasalahan transaksi properti yang dihadapi.
          </Typography>
        </div>

        <div className="relative z-10 flex flex-col py-10 p-4 gap-8 max-w-[795px] m-auto border-dashed border-2 border-secondary rounded-lg">
          <Typography variant="body1" className="text-white text-left text-xl">
            Layanan Kami meliputi:
          </Typography>
          {[
            "Konsultasi permasalahan yang dihadapi klien terkait transaksi properti dan memberikan advice terbaik dari sudut pandang yang komprehensif.",
            "Mewakili klien dalam hal penyelesaian sengketa di luar pengadilan, mulai dari pengajuan tuntutan, somasi, serta pertemuan dan negosiasi dengan pihak pengembang dalam rangka mempertahankan hak klien.",
            "Mewakili klien dalam hal penyelesaian sengketa secara litigasi.",
          ].map((item, index) => (
            <div key={index} className="flex flex-row gap-2">
              <div>
                <CheckListIcon />
              </div>
              <Typography variant="body1" className="text-white text-xl">
                {item}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PerizinanPage;
