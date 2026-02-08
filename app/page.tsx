import Image from "next/image";
import "./page.css";
// style={{ animationDelay: `${index * 0.12}s` }}

export default function Home() {
  return (
    <div className="Home animate-slide-in ">
      <div className="about">
        <p className="text-xl font-bold">About me</p>
        <img src="./Line 5.png" alt="line gradient" className="line" />
      </div>
      <div className="about-details">
        Highly skilled and dedicated Fullstack Developer with 3 years of
        experience in building responsive, user-centric web applications.
        Proficient in Node.js, Next.js, React, JavaScript, HTML, CSS, and a
        strong advocate of best practices in UI/UX design and SEO practices.
      </div>

      <h2>What I do!</h2>
      <div className="what-i-do">
        <div className="what-one">
          <div className="what-one-intro">
            <Image
              aria-label="code"
              width={30}
              height={30}
              src="./Vector (3).svg"
              alt=""
            />

            <p className="font-semibold text-lg">Web development</p>
          </div>
          <p>
            I find myself most captivated by the power and flexibility of
            Next.js and React.js. I'm always eager to dive into new projects
            that leverage JavaScript and discover innovative ways to create
            fast, scalable, and user-friendly applications.
          </p>
        </div>

        <div className="what-two">
          <div className="what-one-intro">
            <Image
              aria-label="mobile"
              width={30}
              height={30}
              src="./Vector (3).svg"
              alt=""
            />
            <p className="font-semibold text-lg">
              <p className="text-lg font-semibold">Mobile Development</p>
            </p>
          </div>
          <p>
            I have a strong interest in mobile development, particularly in
            building cross-platform applications using React Native. I enjoy
            creating seamless and intuitive mobile experiences that cater to a
            wide range of users.
          </p>
        </div>
      </div>
    </div>
  );
}
