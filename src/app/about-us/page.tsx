import Container from "@/components/core/container";
import Typography from "@/components/core/typography";

export const metadata = {
  title: "About Us - Mitra Properti Anda",
  description:
    "Mitra terpercaya dalam pengembangan proyek properti dan penyelesaian sengketa properti, memberikan layanan menyeluruh dari perencanaan hingga operasional.",
  openGraph: {
    title: "Mitra Properti Anda - Pengembangan dan Penyelesaian Sengketa",
    description:
      "Layanan profesional dari perencanaan proyek hingga penyelesaian sengketa properti. Kami membantu pengembang mencapai tujuan mereka dengan efisiensi.",
    url: "https://www.legasilaw.com/about-us",
    type: "website",
    images: [
      {
        url: "/images/bg-about-us.jpg",
        width: 1200,
        height: 630,
        alt: "Mitra Properti Anda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitra Properti Anda - Pengembangan dan Penyelesaian Sengketa",
    description:
      "Layanan profesional dari perencanaan proyek hingga penyelesaian sengketa properti. Kami membantu pengembang mencapai tujuan mereka dengan efisiensi.",
    images: ["/images/bg-about-us.jpg"],
  },
};

const AboutUsPage = () => {
  return (
    <section
      className="h-full bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/bg-about-us.jpg')",
        minHeight: "calc(100vh - 68px)",
      }}
      id="about-us"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90"></div>

      <Container>
        <div className="relative z-10 flex flex-col py-10 gap-4 max-w-[998px] mx-auto">
          <Typography variant="h1" className="text-secondary text-left">
            Mitra dalam Pengembangan Proyek Properti
          </Typography>
          <Typography variant="body1" className="text-white text-lg">
            Kami memahami bahwa industri properti terus berkembang, dan kami
            selalu mengikuti perkembangan terkini terkait industri ini. Tim kami
            berkomitmen untuk menyediakan layanan hukum terbaik bagi klien dan
            memastikan bahwa proyek properti yang dijalankan berhasil. Selain
            itu, kami senantiasa mengoptimalkan sumber daya yang kami miliki
            agar dapat menyediakan layanan terbaik dengan biaya rendah, terutama
            yang berkaitan dengan perizinan dan sertifikasi proyek properti.
            Kami memiliki misi untuk menjadi mitra kepercayaan bagi semua
            kalangan pengembang properti, baik yang telah lanjut maupun
            pengembang pemula yang turut berkontribusi bagi kemajuan ekonomi dan
            masyarakat.
          </Typography>

          <Typography variant="body1" className="text-white text-lg">
            Kami berkomitmen menyediakan layanan yang dibutuhkan klien sejak
            masa prencanaan hingga pengelolaan proyek properti yang telah
            beroperasi. Dengan pengalaman yang kami miliki, kami akan membantu
            klien mencapai tujuan mereka dan memastikan pengelolaan properti
            dilakukan secara tepat dan efisien.
          </Typography>

          <Typography variant="h1" className="text-secondary text-left mt-14">
            Mitra dalam Penyelesaian Sengketa Properti
          </Typography>
          <Typography variant="body1" className="text-white text-lg">
            Dinamika dalam transaksi properti terkadang menimbulkan permasalahan
            yang dapat merugikan salah satu pihak. Kami menyadari banyak pihak
            yang tidak mengerti bagaimana mempertahankan haknya. Tim kami
            berkomitmen membantu menyelesaikan sengketa properti Anda dan
            memberikan pemahaman yang komprehensif terkait permasalahan
            transaksi properti yang dihadapi.
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsPage;
