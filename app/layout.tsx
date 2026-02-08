import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./layout.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Juliet Ikegwuonu | Full-Stack Developer",
    template: "%s | Juliet Ikegwuonu",
  },
  description:
    "Full-Stack Developer specializing in Next.js, React, Node.js, and modern web technologies. Building fast, scalable, and user-focused applications.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Juliet Ikegwuonu",
  ],
  authors: [{ name: "Juliet Ikegwuonu" }],
  creator: "Juliet Ikegwuonu",
  metadataBase: new URL("https://ikegwuonu.vercel.app/"),

  openGraph: {
    title: "Juliet Ikegwuonu | Full-Stack Developer",
    description:
      "Explore projects, experience, and skills of a Full-Stack Developer specializing in Next.js and React.",
    url: "https://ikegwuonu.vercel.app/",
    siteName: "Juliet Ikegwuonu Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Juliet Ikegwuonu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Juliet Ikegwuonu | Full-Stack Developer",
    description:
      "Full-Stack Developer building fast, scalable, user-centric web applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
const svgs = [
  { src: "icons8-bootstrap.svg", top: "10%", left: "5%" },
  { src: "icons8-html.svg", top: "3%", left: "80%" },
  { src: "icons8-react-native.svg", top: "50%", left: "10%" },
  { src: "icons8-redux.svg", top: "65%", left: "80%" },
  { src: "icons8-sass.svg", top: "55%", left: "50%" },
  { src: "icons8-tailwind-css.svg", top: "75%", left: "30%" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} pb-32! relative antialiased App max-xl:px-12! max-lg:px-10! max-sm:px-3!`}
      >
        {svgs.map((svg, index) => (
          <div
            key={index}
            className="absolute animate-float svg-img"
            style={{
              top: svg.top,
              left: svg.left,
              animationDelay: `${index * 0.4}s`,
            }}
          >
            <img
              width={30}
              height={30}
              src={`./${svg.src}`}
              alt=""
              className="h-10 w-10!"
            />
          </div>
        ))}
        {/* <div className="animate-[float_3s_ease-in-out_infinite] svg-img"> */}

        {/* <motion.div
          className="svg-img"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{ ...transition, type: "tween" }}
        >
          <img src="./icons8-bootstrap.svg" alt="" />
        </motion.div> */}
        <Header />
        <div className="Body">
          <Sidebar />
          <div className="right-side max-sm:p-3!">{children}</div>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
