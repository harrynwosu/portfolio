"use client"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../../public/github-icon.svg";
import LinkedinIcon from "../../../../public/linkedin-icon.svg";

const EmailSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")

  const form = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message,
    };

    setIsLoading(true);
    
    emailjs.init({publicKey: process.env.PUBLIC_EMAILJS_USER_ID});
    
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      ).then((response) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        
        setIsLoading(false);
        setSuccess("Your message has been sent successfully. I will get back to you soon!")
      }).catch((error) => {
        setError("Some error occured. Please send me a direct email at harold.nwosu@gmail.com");
        console.log(error);
      });
      setIsLoading(false);
      setTimeout(() => setSuccess(""), 5000);
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative z-20">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m always looking for new available opportunities and my inbox is
          always open. If you have a question, any new opportunity, or just want
          to connect, feel free to reach out. I&apos;ll try my best to get back to
          you as soon as I can! 😉
        </p>
        <div className="socials flex flew-row gap-2">
          <Link href="https://github.com/harrynwosu">
            <Image src={GithubIcon} alt="github" />
          </Link>
          <Link href="https://www.linkedin.com/in/harold-nwosu/">
            <Image src={LinkedinIcon} alt="linkedin" />
          </Link>
        </div>
      </div>
      <div>
        <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block text-sm mb-2 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="John Doe"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="johndoe@slack-corp.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="I do love an unorthodox subject. Spice it up!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Leave your nice message here..."
            ></textarea>
          </div>
          {error && <div className="p-2 w-full text-center text-red-500 text-sm">{error}</div>}
          {success && <div className="p-2 w-full text-center text-green-500 text-sm">{success}</div>}
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 rounded-lg w-full"
          >
            {isLoading ? (
              <div className="animate-spin h-5 w-5 border-t-2 border-gray-200 border-solid rounded-full mx-1"></div>
            ) : success ? (
              "Sent!"
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
