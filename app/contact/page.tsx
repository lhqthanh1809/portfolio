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
import { CheckCircle2Icon, Loader2Icon, CircleX } from "lucide-react";
import { useCallback, useState } from "react";
import { appendToGoogleSheet } from "@/lib/action";

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
    description: "04 Cau Ao Street, Dien Dien Commune, Khanh Hoa Province",
  },
];

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    let errorList: string[] = [];
    if (!firstName) errorList.push("Firstname is required.");
    if (!lastName) errorList.push("Lastname is required.");
    if (!email) errorList.push("Email is required.");
    if (!message) errorList.push("Message is required.");
    if (!message && !email)
      errorList.push("Email and message cannot both be empty.");
    if (!message) errorList.push("Message cannot be empty.");
    const showAndHideAlert = () => {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 1800);
    };
    if (errorList.length > 0) {
      setIsSuccess(false);
      setErrors(errorList);
      setLoading(false);
      setTimeout(showAndHideAlert, 1800);
      return;
    }
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      message,
    };
    try {
      const res = await fetch("/api/submit/googlesheet", {
        body: JSON.stringify(data),
        method: "POST",
      });
      if (res.status >= 400) {
        setIsSuccess(false);
        setErrors([`Server error: ${res.status}`]);
      } else {
        setIsSuccess(true);
        setErrors([]);
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhone("");
        setMessage("");
      }
    } catch (err) {
      setIsSuccess(false);
      setErrors(["Network error. Please try again."]);
    }
    setLoading(false);
    setTimeout(showAndHideAlert, 200);
  };

  return (
    <>
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
        className="py-6 relative overflow-hidden"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* Form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                onSubmit={sendMessage}
              >
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                  Got a project or idea in mind? Let's build something great
                  together — I'm just a message away.
                </p>
                {/* Input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="firstname"
                    placeholder="Firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    type="lastname"
                    placeholder="Lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="phone"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {/* Btn */}
                <Button
                  size="md"
                  className="w-fit flex gap-2"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2Icon className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
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
        <motion.div
          className="absolute w-fit top-0 -translate-x-1/2 min-w-96"
          initial={{
            opacity: showAlert ? 0 : 1,
            left: "120%",
            display: "hidden",
          }}
          animate={
            showAlert
              ? {
                  opacity: 1,
                  left: "50%",
                  display: "block",
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }
              : {
                  opacity: 0,
                  left: "120%",
                  // display: "hidden",
                  transition: {
                    duration: 0.4,
                    ease: "easeInOut",
                  },
                }
          }
        >
          {showAlert && (
            <Alert variant={isSuccess ? "default" : "destructive"}>
              {isSuccess ? (
                <CheckCircle2Icon width={20} height={20} />
              ) : (
                <CircleX width={20} height={20} />
              )}
              <AlertTitle>{isSuccess ? "Success!" : "Error!"}</AlertTitle>
              <AlertDescription>
                {isSuccess ? (
                  <>Your message has been sent successfully.</>
                ) : (
                  <ul className="list-disc ml-4">
                    {errors.map((err, idx) => (
                      <li key={idx}>{err}</li>
                    ))}
                  </ul>
                )}
              </AlertDescription>
            </Alert>
          )}
        </motion.div>
      </motion.section>
    </>
  );
}

export default Contact;
