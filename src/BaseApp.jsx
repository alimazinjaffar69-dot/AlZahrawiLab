import { useState } from "react";
import { S } from "./styles.js";
import ClinicPhoneScreen from "./components/ClinicPhoneScreen.jsx";
import { BASE_PASSCODE, isBaseUnlocked, lockBase, unlockBase } from "./auth.js";
import { getText } from "./i18n.js";

export default function BaseApp() {
  const [lang, setLang] = useState("en");
  const [unlocked, setUnlocked] = useState(isBaseUnlocked);
  const [passcode, setPasscode] = useState("");
  const [message, setMessage] = useState("");
  const t = getText(lang);

  function submitPasscode(e) {
    e.preventDefault();
    if (passcode === BASE_PASSCODE) {
      unlockBase();
      setUnlocked(true);
      setMessage("");
      return;
    }
    setMessage(t.base.denied);
  }

  function signOut() {
    lockBase();
    setUnlocked(false);
    setPasscode("");
  }

  if (!unlocked) {
    return (
      <div style={{ ...S.authPage, direction: lang === "ar" ? "rtl" : "ltr" }} lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
        <div style={S.authCard}>
          <div style={S.logoCircle}>Base</div>
          <div style={S.authTitle}>{t.base.title}</div>
          <div style={S.authSubtitle}>{t.base.subtitle}</div>
          <form onSubmit={submitPasscode}>
            <label style={S.formLabel} htmlFor="base-passcode">{t.base.passcode}</label>
            <input
              id="base-passcode"
              type="password"
              style={S.formInput}
              value={passcode}
              onChange={e => setPasscode(e.target.value)}
              placeholder={t.base.placeholder}
            />
            {message && <div style={{ ...S.formMessage, background: "#FFF5F5", color: "#C0392B" }}>{message}</div>}
            <button style={{ ...S.btnPrimary, ...S.bookingSubmit }} type="submit">{t.base.unlock}</button>
          </form>
          <button style={{ ...S.btnSecondary, marginTop: 10, width: "100%" }} onClick={() => setLang(current => current === "en" ? "ar" : "en")}>
            {t.languageButton}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...S.root, direction: lang === "ar" ? "rtl" : "ltr" }} lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div style={S.topBar}>
        <div style={S.topBarInner}>
          <div style={S.logoBox}>
            <div style={S.logoCircle}>Base</div>
            <div style={S.logoText}>
              <div style={S.logoName}>Base</div>
              <div style={S.logoTagline}>{t.base.privateTagline}</div>
            </div>
          </div>
          <nav style={S.navTabs}>
            <button style={S.navTab} onClick={() => setLang(current => current === "en" ? "ar" : "en")}>{t.languageButton}</button>
            <button style={S.navTab} onClick={signOut}>{t.base.lock}</button>
          </nav>
        </div>
      </div>
      <div style={S.body}>
        <ClinicPhoneScreen lang={lang} t={t} />
      </div>
    </div>
  );
}
