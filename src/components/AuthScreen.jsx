import { useState } from "react";
import { S } from "../styles.js";
import { createPhoneAccount, signInPhoneAccount } from "../auth.js";

export default function AuthScreen({ t, lang, onLanguageToggle, onSignedIn }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signInWithPhone(e) {
    e.preventDefault();
    if (phone.trim().length < 6 || password.length < 6) {
      setMessage(t.auth.phoneError || "Please enter a valid phone number and password.");
      return;
    }

    setLoading(true);
    setMessage("");
    const result = isCreating
      ? await createPhoneAccount(phone, password)
      : await signInPhoneAccount(phone, password);
    setLoading(false);

    if (!result.ok) {
      const messages = {
        "wrong_phone_or_password": t.auth.wrongPassword || "Wrong password for this phone number.",
        "invalid_phone_or_password": t.auth.phoneError || "Please enter a valid phone number and password.",
        "account_exists": t.auth.accountExists || "An account already exists for this phone number. Sign in instead.",
        "request_timeout": "The server did not answer. Check the server IP and Windows Firewall.",
        "network_error": "Could not reach the clinic server. Make sure the phone and PC are on the same network.",
      };
      const friendly = messages[result.error] || t.auth.phoneError || "Please check your phone number, password, or server connection.";
      setMessage(result.detail ? `${friendly}\n\n${result.detail}` : friendly);
      return;
    }

    onSignedIn(result.user);
  }

  return (
    <div style={{ ...S.authPage, direction: lang === "ar" ? "rtl" : "ltr" }}>
      <div style={S.authCard}>
        <div style={S.logoCircle}>Lab</div>
        <div style={S.authTitle}>{isCreating ? (t.auth.createTitle || "Create account") : t.auth.title}</div>
        <div style={S.authSubtitle}>{isCreating ? (t.auth.createSubtitle || "Create your patient account with phone number and password.") : t.auth.subtitle}</div>
        <button style={{ ...S.btnSecondary, marginBottom: 12, width: "100%" }} onClick={onLanguageToggle}>
          {t.languageButton}
        </button>

        <form onSubmit={signInWithPhone}>
          <label style={S.formLabel} htmlFor="auth-phone">{t.auth.phone}</label>
          <input
            id="auth-phone"
            type="tel"
            style={S.formInput}
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder={t.auth.phonePlaceholder}
          />

          <label style={S.formLabel} htmlFor="auth-password">{t.auth.password || "Password"}</label>
          <input
            id="auth-password"
            type="password"
            style={S.formInput}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={t.auth.passwordPlaceholder || "At least 6 characters"}
          />

          {message && <div style={{ ...S.formMessage, whiteSpace: "pre-wrap" }}>{message}</div>}

          <button style={{ ...S.btnPrimary, ...S.bookingSubmit }} type="submit" disabled={loading}>
            {loading ? "..." : (isCreating ? (t.auth.createButton || "Create account") : t.auth.phoneButton)}
          </button>
        </form>

        <button
          style={{ ...S.authProviderBtn, marginTop: 10 }}
          onClick={() => {
            setIsCreating(current => !current);
            setMessage("");
          }}
        >
          {isCreating ? (t.auth.haveAccount || "I already have an account") : (t.auth.createButton || "Create account")}
        </button>

        <div style={S.authNote}>{t.auth.note}</div>
      </div>
    </div>
  );
}
