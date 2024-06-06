import React, { useState } from "react";
import contact from "../../contact.json";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("success");
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (!name || !email || !message) {
      setToastMessage("Please fill in all fields.");
      setToastSeverity("error");
      setOpen(true);
      return;
    }

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_op5gsr9";
    const templateId = "template_vza3drg";
    const publicKey = "spHSiI4Hy9BkTBiWX";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Partik Malasi",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);

        setName("");
        setEmail("");
        setMessage("");
        setToastMessage("Email sent successfully!");
        setToastSeverity("success");
        setOpen(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setToastMessage("Error sending email. Please try again.");
        setToastSeverity("error");
        setOpen(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <section id="contact">
      <div className="flex flex-col items-center justify-center min-h-screen pt-16 ">
        <h1 className="p-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-6xl font-bold mb-8 text-center">
          Contact Me
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:mr-8 w-2/3 sm:max-w-lg md:w-1/2"
          >
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="md:w-1/2">
            <Lottie animationData={contact} />
          </div>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          sx={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <Alert
            onClose={handleClose}
            severity={toastSeverity}
            variant="filled"
            sx={{
              width: "100%",
              maxWidth: "400px",
              fontSize: "1.2rem",
              "& .MuiAlert-icon": {
                fontSize: "1.5rem",
              },
            }}
          >
            {toastMessage}
          </Alert>
        </Snackbar>
      </div>
    </section>
  );
};

export default Contact;
