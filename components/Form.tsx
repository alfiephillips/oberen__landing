import { useState } from "react";

import styles from "../styles/Home.module.css";
import validator from "validator";

export default function Form() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submit = async (event: any) => {
    event.preventDefault();

    const response = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email: email }),
    });

    if (response.ok) {
      setHasSubmitted(true);
    } else {
      const error: string = await response.text();
      setError(error);
    }
  };

  if (hasSubmitted) {
    return (
      <div className={styles.formWrapper}>
        <span className={styles.subtitle}>
          Thanks for signing up! We will be in touch soon.
        </span>
      </div>
    );
  }

  return (
    <form className={styles.formWrapper} onSubmit={submit}>
      <input
        type="email"
        required
        placeholder="Email"
        className={[styles.formInput, styles.formTextInput].join(" ")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        type="submit"
        className={[styles.formInput, styles.formSubmitButton].join(" ")}
        disabled={validator.isEmail(email) ? false : true}
      >
        Join Waitlist
      </button>

      {error ? <div className={styles.error}>{error}</div> : null}
    </form>
  );
}
