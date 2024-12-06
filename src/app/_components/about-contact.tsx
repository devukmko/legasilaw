import Image from "next/image";
import OurPeople from "./our-people";
import Contact from "./contact";

const AboutContact = () => {
  return (
    <div className="relative min-h-screen  overflow-hidden bg-neutral z-10">  
      <Image
        src="/images/vector1.png"
        alt="vector1"
        width={400}
        height={836}
        className="absolute left-0 bottom-0 -z-10 hidden md:block"
      />
      <Image
        src="/images/vector2.png"
        alt="vector2"
        width={200}
        height={836}
        className="absolute bottom-0 right-0 -z-10 hidden md:block"
      />
      <OurPeople />
      <Contact />
    </div>
  );
};

export default AboutContact;
