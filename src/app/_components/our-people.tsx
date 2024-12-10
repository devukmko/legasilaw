import Container from "@/components/core/container"
import { Image } from "@/components/core/image"
import Typography from "@/components/core/typography"
import WhatsappButton from "./whatsapp-button"

const OurPeople = () => {
    return (
      <section className="pb-10" id="our-people">
        <Container gutter>  
        <div className="flex flex-col md:flex-row items-center py-10 p-4 gap-8">
            <div className="flex flex-col gap-4 flex-1">
              <Typography variant="subtitle" className="font-bold text-white text-4xl">
                Apapun masalah properti Anda
                Konsultasikan dengan Kami
              </Typography>
              <div className="flex justify-center md:justify-start">
                <WhatsappButton />
              </div>
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-end justify-end gap-4">
              <div className="flex-1 flex flex-col gap-4">
                <Image src="/images/frame1.png" fill alt="frame1" ratio="145/146" style={{ aspectRatio: '145/146' }} />
                <Typography variant="body1" className="text-secondary" style={{ fontSize: '1.25rem',  fontWeight: 600 }}>
                  Puja Jannatunna’im, S.H.
                </Typography>
                <Typography variant="body2" className="text-white">
                  Advokat dan konsultan hukum properti. Berpengalaman sebagai Head Legal pada perusahaan pengembang kawasan hunian & komersil, sehingga dapat memberikan pandangan dinamika properti dari kacamata pengembang dan konsumen.
                </Typography>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <Image src="/images/frame2.png" fill alt="frame1" ratio="145/146" style={{ aspectRatio: '145/146' }}/>
                <Typography variant="body1" className="text-secondary"  style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  Marthinus Nelson Rabin
                </Typography>
                <Typography variant="body2" className="text-white">
                Konsultan perencanaan dan pengelolaan kawasan, yang berpengalaman memberikan efektifitas kinerja dan efisiensi bagi pemilik kawasan hunian, gedung, dan komersil.
                </Typography>
              </div>
            </div>
        </div>
        </Container>
      </section>
    )
}

export default OurPeople
