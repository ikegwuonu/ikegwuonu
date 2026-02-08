import React from "react";
import "./Resume.css";
import Image from "next/image";
import { experience } from "@/data/resumeData";

const Resume = () => {
  return (
    <div className="Resume ">
      <div className="contact-one pb-3!">
        <p className="font-bold text-xl">Resume</p>
        <Image
          width={400}
          height={40}
          src="/Line 5.png"
          alt="Line"
          className="line"
        />
      </div>

      <div className="py-3">
        <p className="font-semibold text-lg pb-2">
          Professional Experience & Projects
        </p>

        {experience.map((job, index) => (
          <div key={index} className="pt-4!">
            <p className="text-lg">
              {job.company} | {job.role}
            </p>

            <ul className="list-inside list-disc">
              {job.points.map((point, i) =>
                typeof point === "string" ? (
                  <li key={i}>{point}</li>
                ) : (
                  <li key={i}>
                    {point.title}
                    <ul className="list-inside list-disc ml-4">
                      {point.subPoints.map((sub, j) => (
                        <li key={j}>{sub}</li>
                      ))}
                    </ul>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
