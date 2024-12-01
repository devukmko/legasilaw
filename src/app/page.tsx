import Button from "@/components/core/button";
import Container from "@/components/core/container";
import Hero from "./_components/hero";
import Services from "./_components/services";

export default function Home() {
  return (
    <Container gutter>
      <Button variant="contained" color="primary" size="medium">
        Hello World
      </Button>
      <Hero />
      <Services />
    </Container >
  );
}
