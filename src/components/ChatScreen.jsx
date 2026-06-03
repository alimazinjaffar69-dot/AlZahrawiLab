import { S } from "../styles.js";

const PHONE = "07601429003";
const EMAIL = "mazin.mousa@gmail.com";

export default function ChatScreen({ t }) {
  const c = t.contact || {
    section: "Contact Us",
    title: "Contact Al-Zahrawi Lab",
    subtitle: "Reach the clinic by WhatsApp or phone.",
    details: "Contact Information",
    phone: "Phone / WhatsApp",
    email: "Email",
    whatsapp: "Open WhatsApp",
    call: "Call Now",
  };
  const whatsappUrl = `https://wa.me/964${PHONE.slice(1)}`;

  return (
    <div>
      <div style={S.sectionTitle}>{c.section}</div>
      <div style={S.aboutHeaderCard}>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>{c.title}</div>
        <div style={{ fontSize: 13, opacity: 0.84, lineHeight: 1.6 }}>{c.subtitle}</div>
      </div>

      <div style={S.aboutCard}>
        <div style={S.infoLabel}>{c.details}</div>
        <div style={S.contactRow}>
          <div>
            <div style={{ fontWeight: 800, color: "#1B3A5C" }}>{c.phone}</div>
            <div style={{ color: "#6A7A8C", fontSize: 13, marginTop: 3 }}>{PHONE}</div>
          </div>
        </div>
        <div style={S.contactRow}>
          <div>
            <div style={{ fontWeight: 800, color: "#1B3A5C" }}>{c.email}</div>
            <div style={{ color: "#6A7A8C", fontSize: 13, marginTop: 3 }}>{EMAIL}</div>
          </div>
        </div>
      </div>

      <div style={S.reportBtns}>
        <a style={{ ...S.btnPrimary, textDecoration: "none" }} href={whatsappUrl} target="_blank" rel="noreferrer">
          {c.whatsapp}
        </a>
        <a style={{ ...S.btnSecondary, textDecoration: "none" }} href={`tel:${PHONE}`}>
          {c.call}
        </a>
      </div>
    </div>
  );
}
