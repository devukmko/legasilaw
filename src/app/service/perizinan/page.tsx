import Container from "@/components/core/container";
import Typography from "@/components/core/typography";

const PerizinanIcon = () => {
  return (
    <svg
      width="33"
      height="41"
      viewBox="0 0 33 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 40.5C3.4 40.5 2.45833 40.1083 1.675 39.325C0.891667 38.5417 0.5 37.6 0.5 36.5V4.5C0.5 3.4 0.891667 2.45833 1.675 1.675C2.45833 0.891667 3.4 0.5 4.5 0.5H18.85C19.3833 0.5 19.8917 0.6 20.375 0.8C20.8583 1 21.2833 1.28333 21.65 1.65L31.35 11.35C31.7167 11.7167 32 12.1417 32.2 12.625C32.4 13.1083 32.5 13.6167 32.5 14.15V36.5C32.5 37.6 32.1083 38.5417 31.325 39.325C30.5417 40.1083 29.6 40.5 28.5 40.5H4.5ZM18.5 12.5C18.5 13.0667 18.6917 13.5417 19.075 13.925C19.4583 14.3083 19.9333 14.5 20.5 14.5H28.5L18.5 4.5V12.5ZM14.35 26.75L11.55 23.95C11.35 23.75 11.1333 23.6 10.9 23.5C10.6667 23.4 10.425 23.35 10.175 23.35C9.925 23.35 9.675 23.4 9.425 23.5C9.175 23.6 8.95 23.75 8.75 23.95C8.35 24.35 8.15 24.825 8.15 25.375C8.15 25.925 8.35 26.4 8.75 26.8L13 31.1C13.2 31.3 13.4167 31.4417 13.65 31.525C13.8833 31.6083 14.1333 31.65 14.4 31.65C14.6667 31.65 14.9167 31.6083 15.15 31.525C15.3833 31.4417 15.6 31.3 15.8 31.1L24.25 22.65C24.65 22.25 24.85 21.7667 24.85 21.2C24.85 20.6333 24.65 20.15 24.25 19.75C23.85 19.35 23.3667 19.15 22.8 19.15C22.2333 19.15 21.75 19.35 21.35 19.75L14.35 26.75Z"
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
      id="perizinan"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/80"></div>

      <Container>
        <div className="relative z-10 flex flex-col items-center py-10 gap-8 max-w-[795px] m-auto">
          <div className="flex flex-row gap-4">
            <PerizinanIcon />
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
            Kami memahami dampak positif proyek konstruksi klien terhadap
            ekonomi dan masyarakat. Tim kami mempunyai pengalaman signifikan
            dalam mewakili dan membantu klien menangani legalitas perizinan
            proyek properti perumahan, apartemen, komersial, dan industri.
          </Typography>
        </div>

        <div className="relative z-10 flex flex-col py-10 p-4 gap-8 max-w-[795px] m-auto border-dashed border-2 border-secondary rounded-lg">
          <Typography variant="body1" className="text-white text-left text-xl">
            Layanan Kami meliputi:
          </Typography>
          {[
            "Sertifikasi lahan mulai dari tahap perencanaan, pengadaan, hingga pengelolaan sertifikat proyek properti diantaranya pendaftaran hak, pemisahan/pemecahan bidang, dan pengalihan hak.",
            "Pemenuhan persyaratan izin untuk melakukan konstruksi bangunan sesuai dengan peraturan perundang-undangan termasuk Izin Prinsip, Rekomendasi, dan Pengesahan Siteplan.",
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
