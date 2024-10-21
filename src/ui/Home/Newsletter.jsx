import { Form } from "react-router-dom";
import styles from "./Newsletter.module.scss";
import Button from "../Button";

function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.title}>Join Our Newsletter</h2>
      <p className={styles.text}>
        Sign up for deals, new products and promotions
      </p>
      <Form className={styles.form}>
        <img src="./icons/email.svg" alt="Email icon" className={styles.icon} />
        <input
          type="text"
          placeholder="Email address"
          className={styles.input}
        />
        <Button styles={styles.button}>Signup</Button>
      </Form>
    </section>
  );
}

export default Newsletter;
