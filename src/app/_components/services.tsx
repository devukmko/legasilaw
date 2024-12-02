import Container from "@/components/core/container";
import Typography from "@/components/core/typography";

const Services = () => {
    return (
      <section className="min-h-screen bg-white" id="services">
        <Container>
          <div className="max-w-md">
            <Typography variant="h1">
              LEGASI LAW FIRM 
            </Typography>
            <Typography variant="h2" className="text-secondary">
              Real Estate Specialist
            </Typography>
          </div>
        </Container>
      </section>
    );
  };  
  
  export default Services;