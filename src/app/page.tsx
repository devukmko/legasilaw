// import Button from "@/components/core/button";
// import Container from "@/components/core/container";
import Hero from "./_components/hero";
import Services from "./_components/services";
import AboutContact from './_components/about-contact';

export default function Home() {
  return (
    <main>
      {/* <Button variant="contained" color="primary" size="medium">
        Hello World
      </Button> */}
      <Hero />
      <Services />
      {/* <AboutUs /> */}
      <AboutContact />
    </main>
  );
}
