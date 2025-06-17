"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon, Terminal } from "lucide-react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+84) 935 826 194",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "lhqthanh1809@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description:
      "04 Cau Ao Street, Dien Son Commune, Dien Khanh District, Khanh Hoa Province",
  },
];

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6 relative"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              // action="https://formsubmit.co/lhqthanh1809@gmail.com"
              // method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Got a project or idea in mind? Let's build something great
                together — I'm just a message away.
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              {/* Select */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* Btn */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* <Alert className="absolute w-fit right-3">
        <CheckCircle2Icon width={20} height={20}/>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your message has been sent successfully.
        </AlertDescription>
      </Alert> */}
    </motion.section>
  );
}

export default Contact;
