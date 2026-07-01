"use client";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";
import Padding from "../Padding";
import { FaEnvelope, FaPhone, FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } as const,
  },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" } as const,
  },
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        router.push("/contact/formsent");
      } else {
        console.error("Form submission failed:", data);
        setLoading(false);
      }
    } catch (err) {
      console.error("Form error:", err);
      setLoading(false);
    }
  };
  return (
    <section className="pt-12">
      <Padding />
      <div className="px-4 md:px-8 lg:px-13">
        <motion.div
          className="mx-auto flex w-full max-w-7xl flex-col sm:justify-center lg:flex-row sm:items-center lg:justify-start lg:items-start gap-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Info */}
          <div className="lg:w-1/2 flex flex-col gap-4 sm:items-center lg:items-start">
            <motion.div
              className="uppercase flex flex-col gap-4 sm:text-center lg:text-start"
              variants={containerVariants}
            >
              <motion.h3
                className="text-base font-normal tracking-[-5%] uppercase"
                variants={itemVariants}
              >
                Contact
              </motion.h3>
              <motion.h2
                className="-mt-2 text-[40px] leading-10 font-semibold tracking-[-5%] text-white sm:leading-none"
                variants={itemVariants}
              >
                Just a{" "}
                <span className="text-[#FFD600] italic">
                  call or <br className="hidden xl:block" />
                  message
                </span>{" "}
                away
              </motion.h2>
              <motion.p
                className="text-[14px] normal-case leading-5 font-light tracking-[-5%] w-[90%] sm:w-full lg:text-[16px] xl:w-[70%]"
                variants={itemVariants}
              >
                If you're unsure which session, class or membership is right for you, send us a
                message and we'll point you in the right direction.
              </motion.p>
            </motion.div>

            {/* Contact Buttons */}
            <motion.div
              className="flex flex-col gap-4 w-fit sm:flex-row sm:flex-wrap lg:flex-col"
              variants={containerVariants}
            >
              {/* Contact 1 */}
              <motion.div className="flex items-center gap-4" variants={itemVariants}>
                <div className="bg-[#D9D9D9] w-fit p-2 rounded-full text-black">
                  <IoLocationSharp className="text-[24px]" />
                </div>
                <span className="normal-case leading-5 font-normal tracking-[-5%]">
                  Newcastle upon Tyne
                </span>
              </motion.div>

              {/* Contact 2 */}
              <motion.a
                href="mailto:jobesboxinggym@gmail.com"
                className="flex items-center gap-4 cursor-pointer border border-transparent hover:border-[#FFD600] rounded-full hover:bg-[#78787858] transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-[#D9D9D9] w-fit p-2 rounded-full text-black">
                  <FaEnvelope className="text-[24px]" />
                </div>
                <span className="normal-case leading-5 font-normal tracking-[-5%] pr-2">
                  jobesboxinggym@gmail.com
                </span>
              </motion.a>

              {/* Contact 3 */}
              <motion.a
                href="tel:07701394066"
                className="flex items-center gap-4 cursor-pointer border border-transparent hover:border-[#FFD600] rounded-full hover:bg-[#78787858] transition-colors duration-300 w-fit pr-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-[#D9D9D9] w-fit p-2 rounded-full text-black">
                  <FaPhone className="text-[24px]" />
                </div>
                <span className="normal-case leading-5 font-normal tracking-[-5%]">
                  07701394066
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-4 text-black rounded-3xl py-10 w-full max-w-180"
            variants={formVariants}
          >
            <form onSubmit={onSubmit}>
              <input type="hidden" name="access_key" value="8a3d9061-225f-4abc-801b-180d93b9eaea" />
              <div className="flex flex-col gap-8">
                {/* Name Field */}
                <div className="flex flex-col gap-2 text-[14px] normal-case leading-5 tracking-[-5%]">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="Name"
                    required
                    placeholder="Your full name"
                    className="bg-[#D9D9D9] px-4 py-4 rounded-lg placeholder:text-[#aba9a9]"
                  />
                </div>
                {/* Email Field */}
                <div className="flex flex-col gap-2 text-[14px] normal-case leading-5 tracking-[-5%]">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name="Email"
                    required
                    placeholder="you@example.com"
                    className="bg-[#D9D9D9] px-4 py-4 rounded-lg placeholder:text-[#aba9a9]"
                  />
                </div>
                {/* Number Field */}
                <div className="flex flex-col gap-2 text-[14px] normal-case leading-5 tracking-[-5%]">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="text"
                    name="Phone Number"
                    required
                    placeholder="+44 71 2345 6789"
                    className="bg-[#D9D9D9] px-4 py-4 rounded-lg placeholder:text-[#aba9a9]"
                  />
                </div>
                {/* Message Field */}
                <div className="flex flex-col gap-2 text-[14px] normal-case leading-5 tracking-[-5%]">
                  <label htmlFor="">Message</label>
                  <textarea
                    required
                    name="Message"
                    rows={8}
                    placeholder="Write your message here..."
                    className="bg-[#D9D9D9] px-4 py-4 rounded-lg resize-none placeholder:text-[#aba9a9]"
                  />
                </div>
                <span>
                  <motion.button
                    className="uppercase bg-[#FFD600] p-4 px-8 font-semibold rounded-lg cursor-pointer hover:bg-[#ffe14b] transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                  >
                    {loading ? <FaSpinner className="text-2xl animate-spin" /> : "Submit"}
                  </motion.button>
                </span>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
      <Padding />
    </section>
  );
}
