import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("NAshu");
  const [email, setEmail] = useState("NAshu@gmail.com");
  const [text, setText] = useState("NAshu");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log("name", event.target[0].value);
    console.log("email", event.target[1].value);
    console.log("text", event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhone fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<IoMailSharp fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="10" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>
          <div>
            <div>
              {name} - {email} - {text}
            </div>
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact_us.svg" alt="contact us image" />
      </div>
    </section>
  );
};

export default ContactForm;
