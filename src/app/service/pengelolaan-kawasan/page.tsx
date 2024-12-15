import Container from "@/components/core/container";
import Typography from "@/components/core/typography";

export const metadata = {
  title: "Pengelolaan Kawasan - Konsultasi dan Layanan Properti",
  description:
    "Kami memberikan layanan komprehensif dari perencanaan hingga pengelolaan proyek properti operasional, membantu pengembang properti pemula dengan arahan dan koneksi layanan pendukung.",
  openGraph: {
    title: "Pengelolaan Kawasan - Konsultasi dan Layanan Properti",
    description:
      "Kami memberikan layanan komprehensif dari perencanaan hingga pengelolaan proyek properti operasional, membantu pengembang properti pemula dengan arahan dan koneksi layanan pendukung.",
    url: "https://www.legasilaw.com/service/pengelolaan-kawasan",
    type: "website",
    images: [
      {
        url: "/images/bg-kawasan.jpg",
        width: 1200,
        height: 630,
        alt: "Pengelolaan Kawasan Properti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pengelolaan Kawasan - Konsultasi dan Layanan Properti",
    description:
      "Kami memberikan layanan komprehensif dari perencanaan hingga pengelolaan proyek properti operasional, membantu pengembang properti pemula dengan arahan dan koneksi layanan pendukung.",
    images: ["/images/bg-kawasan.jpg"],
  },
};

const PengelolaanKawasanIcon = () => {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_252_552"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="49"
        height="49"
      >
        <rect x="0.5" y="0.5" width="48" height="48" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_252_552)">
        <path
          d="M2.5 24.55C2.5 23.8833 2.65 23.2667 2.95 22.7C3.25 22.1333 3.66667 21.6667 4.2 21.3L14.2 14.15C14.5667 13.8833 14.9417 13.6917 15.325 13.575C15.7083 13.4583 16.1 13.4 16.5 13.4C16.9 13.4 17.2917 13.4583 17.675 13.575C18.0583 13.6917 18.4333 13.8833 18.8 14.15L28.8 21.3C29.3333 21.6667 29.75 22.1333 30.05 22.7C30.35 23.2667 30.5 23.8833 30.5 24.55V38.5C30.5 39.6 30.1083 40.5417 29.325 41.325C28.5417 42.1083 27.6 42.5 26.5 42.5H24.5C23.4 42.5 22.4583 42.1083 21.675 41.325C20.8917 40.5417 20.5 39.6 20.5 38.5V33.5C20.5 32.6667 20.2083 31.9583 19.625 31.375C19.0417 30.7917 18.3333 30.5 17.5 30.5H15.5C14.6667 30.5 13.9583 30.7917 13.375 31.375C12.7917 31.9583 12.5 32.6667 12.5 33.5V38.5C12.5 39.6 12.1083 40.5417 11.325 41.325C10.5417 42.1083 9.6 42.5 8.5 42.5H6.5C5.4 42.5 4.45833 42.1083 3.675 41.325C2.89167 40.5417 2.5 39.6 2.5 38.5V24.55ZM46.5 10.5V38.5C46.5 39.6 46.1083 40.5417 45.325 41.325C44.5417 42.1083 43.6 42.5 42.5 42.5H36.5C35.9333 42.5 35.4583 42.3083 35.075 41.925C34.6917 41.5417 34.5 41.0667 34.5 40.5V22.55C34.5 21.8833 34.3583 21.2667 34.075 20.7C33.7917 20.1333 33.3833 19.6667 32.85 19.3L22.4 11.8C21.9667 11.4667 21.6167 11.0667 21.35 10.6C21.0833 10.1333 20.95 9.66667 20.95 9.2C20.95 8.36667 21.2167 7.70833 21.75 7.225C22.2833 6.74167 23 6.5 23.9 6.5H42.5C43.6 6.5 44.5417 6.89167 45.325 7.675C46.1083 8.45833 46.5 9.4 46.5 10.5ZM35.5 18.5H37.5C37.7667 18.5 38 18.4 38.2 18.2C38.4 18 38.5 17.7667 38.5 17.5V15.5C38.5 15.2333 38.4 15 38.2 14.8C38 14.6 37.7667 14.5 37.5 14.5H35.5C35.2333 14.5 35 14.6 34.8 14.8C34.6 15 34.5 15.2333 34.5 15.5V17.5C34.5 17.7667 34.6 18 34.8 18.2C35 18.4 35.2333 18.5 35.5 18.5ZM35.5 26.5H37.5C37.7667 26.5 38 26.4 38.2 26.2C38.4 26 38.5 25.7667 38.5 25.5V23.5C38.5 23.2333 38.4 23 38.2 22.8C38 22.6 37.7667 22.5 37.5 22.5H35.5C35.2333 22.5 35 22.6 34.8 22.8C34.6 23 34.5 23.2333 34.5 23.5V25.5C34.5 25.7667 34.6 26 34.8 26.2C35 26.4 35.2333 26.5 35.5 26.5ZM35.5 34.5H37.5C37.7667 34.5 38 34.4 38.2 34.2C38.4 34 38.5 33.7667 38.5 33.5V31.5C38.5 31.2333 38.4 31 38.2 30.8C38 30.6 37.7667 30.5 37.5 30.5H35.5C35.2333 30.5 35 30.6 34.8 30.8C34.6 31 34.5 31.2333 34.5 31.5V33.5C34.5 33.7667 34.6 34 34.8 34.2C35 34.4 35.2333 34.5 35.5 34.5Z"
          fill="#BF936A"
        />
      </g>
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
        backgroundImage: "url('/images/bg-kawasan.jpg')",
        minHeight: "calc(100vh - 68px)",
      }}
      id="perizinan"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/80"></div>

      <Container>
        <div className="relative z-10 flex flex-col items-center py-10  gap-8 max-w-[795px] m-auto">
          <div className="flex flex-row gap-4">
            <PengelolaanKawasanIcon />
            <Typography
              variant="h1"
              className="text-center text-secondary md:text-left"
            >
              Pengelolaan Kawasan
            </Typography>
          </div>
          <Typography
            variant="body1"
            className="text-center text-white text-xl"
          >
            Kami berupaya mengakomodir kebutuhan klien dari awal perencanaan
            hingga pengelolaan proyek properti yang telah beroperasional.
            Khususnya bagi pengembang properti pemula yang membutuhkan arahan
            dan koneksi terkait layanan pendukung di dalam kawasan proyek,
            sehingga klien dapat mengendalikan operasional dan biaya secara
            efisien. Tim kami mempunyai pengalaman signifikan di bidang
            pengelolaan kawasan hunian, gedung, dan komersil, akan memberikan
            arahan sesuai kebutuhan.
          </Typography>
        </div>

        <div className="relative z-10 flex flex-col p-6 gap-2 max-w-[795px] m-auto border-dashed border-2 border-secondary rounded-lg">
          <Typography variant="body1" className="text-white text-left text-xl">
            Layanan Kami meliputi:
          </Typography>
          {[
            "Memberikan konsultasi mengenai hal-hal yang dibutuhkan terkait pengelolaan kawasan hunian, gedung, dan komersil, serta memberi pemahaman mengenai standar pengelolaan kawasan yang baik dan efisien.",
            "Membantu klien dalam hal perencanaan dan pengadaan tenaga keamanan (security), tenaga housekeeping, dan tenaga maintenance lainnya, serta memberikan rekomendasi pihak pelaksana yang tepat.",
            "Melakukan monitoring dan evaluasi terhadap kinerja pelaksana agar tetap sesuai dengan kebutuhan prinsipal / klien.",
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
