"use client";
import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const Contact = () => {
  const [status, setStatus] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2yh4d51",
        "template_lfkh9f8",
        form.current as HTMLFormElement,
        {
          publicKey: "cDVuHy-VOb1Y9osOD",
        },
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setStatus("Failed to send message. Try again later.");
        },
      );
  };

  return (
    <div className="Contact">
      <div className="contact-one pb-4.5!">
        <p className="font-bold text-xl">Contact</p>
        <Image
          width={400}
          height={40}
          src="/Line 5.png"
          alt="Line"
          className="line"
        />
      </div>
      <div className="form">
        <p>
          I am always eager to discuss <b>new projects, partnerships</b> in the
          tech world.
        </p>
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          {status && <p className="status">{status}</p>}
          <div className="form-name">
            <span>
              <b>Name:</b>{" "}
            </span>
            <input type="text" name="from_name" required className="w-full" />
          </div>
          <div className="form-name">
            <span>
              <b>Email:</b>{" "}
            </span>
            <input type="email" name="from_email" required className="w-full" />
          </div>
          <div className="form-name">
            <span>
              <b>Message:</b>{" "}
            </span>
            <textarea name="message" required className="w-full" />
          </div>
          <button className="submit mt-2!" type="submit">
            Submit
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Contact;
