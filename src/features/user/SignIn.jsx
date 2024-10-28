import { Form } from "react-router-dom";
import Logo from "../../ui/Logo";
import styles from "./SignIn.module.scss";

function SignIn() {
  return (
    <div className={`container ${styles.signIn}`}>
      <div className={styles.leftBlock}>
        <Logo />
      </div>
      <div className={styles.rightBlock}>
        <Form className={styles.form}>
          <h2>Sign In</h2>
          <p>Don’t have an accout yet? Sign Up</p>
          <input type="text" placeholder="Your username or email address" />
          <input type="password" name="password" placeholder="Password" />
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
          <button>Sign In</button>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
