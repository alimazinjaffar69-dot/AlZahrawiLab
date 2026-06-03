import { useState } from "react";
import { S } from "./styles.js";
import HomeScreen from "./components/HomeScreen.jsx";
import TestsScreen from "./components/TestsScreen.jsx";
import BookingScreen from "./components/BookingScreen.jsx";
import ChatScreen from "./components/ChatScreen.jsx";
import ReportsScreen from "./components/ReportsScreen.jsx";
import AboutScreen from "./components/AboutScreen.jsx";
import ProfileScreen from "./components/ProfileScreen.jsx";
import AuthScreen from "./components/AuthScreen.jsx";
import { clearUser, readUser } from "./auth.js";
import { getText } from "./i18n.js";

const TABS = [
  { id: "home", icon: "" },
  { id: "tests", icon: "" },
  { id: "booking", label: "Booking", icon: "+" },
  { id: "chat", icon: "" },
  { id: "reports", icon: "" },
  { id: "about", icon: "" },
  { id: "profile", icon: "" },
];

export default function App() {
  const [tab, setTab] = useState("home");
  const [lang, setLang] = useState("en");
  const [user, setUser] = useState(readUser);
  const [testDetail, setTestDetail] = useState(null);
  const [reportDetail, setReportDetail] = useState(null);
  const t = getText(lang);
  const isArabic = lang === "ar";

  function navigate(targetTab, payload) {
    setTab(targetTab);
    setTestDetail(null);
    setReportDetail(null);
    if (targetTab === "tests" && payload) setTestDetail(payload);
    if (targetTab === "reports" && payload) setReportDetail(payload);
  }

  function goToChat() {
    setTab("chat");
    setTestDetail(null);
    setReportDetail(null);
  }

  function signOut() {
    clearUser();
    setUser(null);
    setTab("home");
  }

  if (!user) {
    return <AuthScreen t={t} lang={lang} onLanguageToggle={() => setLang(current => current === "en" ? "ar" : "en")} onSignedIn={setUser} />;
  }

  return (
    <div style={{ ...S.root, direction: isArabic ? "rtl" : "ltr" }} lang={lang} dir={isArabic ? "rtl" : "ltr"}>
      <div style={S.topBar}>
        <div style={S.topBarInner}>
          <div style={S.logoBox}>
            <div style={S.logoCircle}>Lab</div>
            <div style={S.logoText}>
              <div style={S.logoName}>{t.appName}</div>
              <div style={S.logoTagline}>{t.tagline}</div>
            </div>
          </div>
          <nav style={S.navTabs}>
            {TABS.map(t => (
              <button
                key={t.id}
                style={{ ...S.navTab, ...(tab === t.id ? S.navTabActive : {}) }}
                onClick={() => navigate(t.id)}
              >
                {t.icon ? `${t.icon} ${getText(lang).tabs[t.id]}` : getText(lang).tabs[t.id]}
              </button>
            ))}
            <button
              style={{ ...S.navTab, ...S.languageToggle }}
              onClick={() => setLang(current => current === "en" ? "ar" : "en")}
            >
              {t.languageButton}
            </button>
          </nav>
        </div>
      </div>

      <div style={S.body}>
        {tab === "home" && <HomeScreen onNavigate={navigate} lang={lang} t={t} />}
        {tab === "tests" && (
          <TestsScreen
            key={testDetail ? JSON.stringify(testDetail.test.name) : "list"}
            initialDetail={testDetail}
            onChat={goToChat}
            lang={lang}
            t={t}
          />
        )}
        {tab === "booking" && <BookingScreen lang={lang} t={t} user={user} />}
        {tab === "chat" && <ChatScreen lang={lang} t={t} />}
        {tab === "reports" && (
          <ReportsScreen
            key={reportDetail ? reportDetail.id : "list"}
            initialReport={reportDetail}
            onChat={goToChat}
            lang={lang}
            t={t}
            user={user}
          />
        )}
        {tab === "about" && <AboutScreen onNavigateTests={() => navigate("tests", null)} lang={lang} t={t} />}
        {tab === "profile" && <ProfileScreen lang={lang} t={t} user={user} onSignOut={signOut} />}
      </div>
    </div>
  );
}
