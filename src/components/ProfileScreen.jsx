import { S } from "../styles.js";

export default function ProfileScreen({ t, user, onSignOut }) {
  const menuItems = [
    { icon: "P", label: t.profile.personal, value: user.name },
    { icon: "M", label: t.profile.method, value: t.auth[user.provider] || user.provider },
    { icon: "T", label: t.profile.phone, value: user.phone || t.profile.noPhone },
    { icon: "R", label: t.profile.reports },
    { icon: "L", label: t.profile.language, value: "English / العربية" },
    { icon: "S", label: t.profile.security },
  ];

  return (
    <div>
      <div style={S.profileHero}>
        <div style={S.profileAvatarBox}>{(user.name || "U").slice(0, 2).toUpperCase()}</div>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 3 }}>{user.name}</div>
        <div style={{ fontSize: 12, opacity: 0.8 }}>{t.profile.signedInWith}: {t.auth[user.provider] || user.provider}</div>
        <div style={{ fontSize: 11, opacity: 0.65, marginTop: 4 }}>{t.profile.member}</div>
      </div>

      <div style={S.menuCard}>
        {menuItems.map((row, i) => (
          <div key={i} style={{ ...S.menuRow, borderBottom: i < menuItems.length - 1 ? "1px solid #F5F8FC" : "none" }}>
            <div style={S.menuLeft}>
              <span style={{ fontSize: 14, fontWeight: 800 }}>{row.icon}</span>
              <span>{row.label}</span>
            </div>
            <span style={{ color: "#8A9BB0", fontSize: 12 }}>{row.value || ">"}</span>
          </div>
        ))}
      </div>

      <div style={S.menuCard}>
        <button style={{ ...S.menuRow, color: "#C0392B", borderBottom: "none", width: "100%", background: "transparent", border: "none" }} onClick={onSignOut}>
          <div style={S.menuLeft}>
            <span style={{ fontSize: 14, fontWeight: 800 }}>X</span>
            <span style={{ fontWeight: 700 }}>{t.profile.signOut}</span>
          </div>
          <span style={{ color: "#E8B4B8" }}>&gt;</span>
        </button>
      </div>

      <div style={{ textAlign: "center", fontSize: 11, color: "#C0C8D0", marginTop: 14, lineHeight: 1.8 }}>
        Al-Zahrawi Laboratory App v1.0.0<br />
        Dr. Mazin J. Mousa - 07601429003<br />
        mazin.mousa@gmail.com
      </div>
    </div>
  );
}
