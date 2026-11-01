import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import ScrollFadeUp from "./ScrollFadeUp";
import ScrollZoomMotion from "./ScrollZoomMotion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const formRef = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2e9ya1x",
      "template_k9xsqhm",
      formRef.current,
      "2kLy2Ah8ZJCIBGgFh"
    ).then(
      () => {
        alert("Üzenet elküldve!");
        formRef.current.reset();
      },
      (error) => {
        alert("Hiba történt az üzenet küldésekor, próbáld újra később.");
        console.error("Email küldési hiba:", error);
      }
    );
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-wrapper">
        {/* BAL OLDAL */}
        <ScrollFadeUp>
        <div className="contact-info">
          <h2>{t("contact.contacttitle")}</h2>
          <p><strong>{t("contact.contactcall")}</strong><br />+36 20 416 1510</p>
          <p><strong>{t("contact.contactwrite")}</strong><br />info@pontpage.hu</p>
          <p><strong>{t("contact.contactsocial")}</strong></p>
          <div className="social-icons">
  <a href="https://www.facebook.com/erik.sasfalvi" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://www.facebook.com/erik.sasfalvi" target="_blank" rel="noopener noreferrer">
    <SiTiktok />
  </a>
  <a href="https://www.instagram.com/erik_sasfalvi/" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
</div>
        </div>
        </ScrollFadeUp>

        {/* JOBB OLDAL - ŰRLAP */}
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <ScrollZoomMotion>
          <h3>{t("contact.contactask")}</h3>
          <div className="form-row">
            <input type="text" name="name" placeholder={t("contact.contactname")} required />
            <input type="tel" name="phone" placeholder={t("contact.contactphone")} />
          </div>
          <input type="email" name="email" placeholder="Email*" required />
          <input type="text" name="company" placeholder={t("contact.contactcompany")} />
          <select name="package">
            <option value="">{t("contact.contactpackage")}</option>
            <option value="mini">{t("contact.contactbasic")}</option>
            <option value="pro">{t("contact.contactpro")}</option>
            <option value="business">{t("contact.contactbooking")}</option>
            <option value="full">{t("contact.contactweband3d")}</option>
          </select>
          <textarea name="message" placeholder={t("contact.contactmessage")} required />

          <div className="checkbox-field">
            <input
              type="checkbox"
              name="termsAccepted"
              id="termsAccepted"
              checked={true}
              readOnly
              required
            />
            <label htmlFor="termsAccepted">
              Elolvastam és elfogadom a{" "}
              <a href="/aszf" target="_blank" rel="noopener noreferrer">
                feltételeket & adatvédelmi szabályzatot
              </a>.
            </label>
          </div>
          </ScrollZoomMotion>

          <button type="submit">Üzenet küldése ↗</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
