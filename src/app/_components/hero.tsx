import Container from "@/components/core/container";

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-base-200" id="home">
        <Container>
          <div className="hero-content text-center">
              <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                  <span className="text-primary">Hello</span> World
              </h1>
              <p className="py-6 text-xl">
                  This is a simple starter template for a blog powered by{" "}
                  <a
                  href="https://nextjs.org/"
                  className="text-primary underline hover:text-secondary"
                  >
                  Next.js
                  </a>
                  .
              </p>
              </div>
          </div>
          </Container>
    </section>
  );
};  

export default Hero;