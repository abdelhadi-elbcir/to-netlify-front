import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [responseMessage, setResponseMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8080/api/contact", {
                email,
                subject,
                message,
            });

            setResponseMessage("Votre message a été envoyé avec succès !");
        } catch (error) {
            console.error(error);
            setResponseMessage("Une erreur s'est produite lors de l'envoi du message.");
        }
    };

    return (
        <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Contactez-nous
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Vous avez un problème technique ? Vous souhaitez envoyer des commentaires sur une
                    fonctionnalité bêta ? Besoin de détails sur notre plan Business ? Faites-le-nous
                    savoir.
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="nom@exemple.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Sujet
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Indiquez comment nous pouvons vous aider"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Laissez un commentaire..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300"
                    >
                        Envoyer
                    </button>
                </form>
                {responseMessage && (
                    <p className="mt-4 text-center text-sm font-medium text-gray-900">
                        {responseMessage}
                    </p>
                )}
            </div>
        </section>
    );
};

export default ContactForm;
