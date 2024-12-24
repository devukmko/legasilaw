import Home from "./_components/home";

export const metadata = {
  title: "Legasi Law Firm",
  description: "Tenang dan nyaman, properti Anda terlindungi.",
  openGraph: {
    title: "Legasi Law Firm",
    description: "Tenang dan nyaman, properti Anda terlindungi.",
    url: "/images/logo.png", 
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Lawfirm properti terlindungi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legasi Law Firm",
    description: "Tenang dan nyaman, properti Anda terlindungi.",
    images: ["/images/logo.png"],
  },
};

export default function HomePage() {
  

  return (
    <main>
      <Home />
    </main>
  );
}
