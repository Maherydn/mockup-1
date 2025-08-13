"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactFormulaire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs
    .send(
      "service_ydqojc9",
      "template_3ccsy1p",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: "maherydn@gmail.com",
      },
      "OF0N9BE5cfNcHS8yW"
    )
    .then(() => {
      // alert("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error(error);
      alert("Erreur lors de l'envoi du message.");
    })
    .finally(() => {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000); 
    });
};


  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name1"
            className="uppercase text-yellow text-xs font-semibold"
          >
            Name
          </label>
          <input
            required
            id="name1"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 bg-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="uppercase text-yellow text-xs font-semibold"
          >
            Email
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 bg-white"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="uppercase text-yellow text-xs font-semibold"
        >
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 bg-white"
          placeholder="Entrer votre message"
        ></textarea>
      </div>

      <div className="w-full flex justify-center">
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-48 h-12 bg-yellow text-xl rounded-xl capitalize cursor-pointer hover:bg-yellow-300 duration-300 overflow-hidden"
        >
          send message{" "}
          <span
            className={`inline-block transform transition-transform duration-300 ${
              isSubmitting ? "translate-x-10" : "translate-x-0"
            }`}
          >
            {" "}
            &rarr;{" "}
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactFormulaire;
