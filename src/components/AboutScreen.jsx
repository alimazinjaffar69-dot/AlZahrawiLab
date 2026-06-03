import { S } from "../styles.js";
import { CATEGORIES, LAB_INFO } from "../data.js";

export default function AboutScreen({ onNavigateTests, t }) {
  const totalTests = CATEGORIES.reduce((a, c) => a + c.tests.length, 0);
  const exclusiveCount = CATEGORIES.reduce((a, c) => a + c.tests.filter(test => test.exclusive).length, 0);

  return (
    <div>
      <div style={S.aboutHeaderCard}>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 3 }}>{t.about.title}</div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>{t.about.subtitle}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 18 }}>
          {[
            { num: `${totalTests}+`, label: t.about.tests },
            { num: `${exclusiveCount}+`, label: t.about.exclusive },
            { num: "35", label: t.about.departments },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center", background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "12px 8px" }}>
              <div style={{ fontSize: 22, fontWeight: 800 }}>{stat.num}</div>
              <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={S.directorRow}>
          <div style={S.directorAvatar}>Dr</div>
          <div>
            <div style={S.directorName}>{LAB_INFO.director}</div>
            <div style={S.directorCred}>{LAB_INFO.credentials}</div>
            <div style={{ fontSize: 10, opacity: 0.72, marginTop: 3 }}>{t.about.board}</div>
          </div>
        </div>
        <div style={{ ...S.directorRow, marginTop: 12 }}>
          <div style={{ ...S.directorAvatar, fontSize: 18 }}>Lab</div>
          <div>
            <div style={S.directorName}>{LAB_INFO.chemist}</div>
            <div style={S.directorCred}>{LAB_INFO.chemistCred}</div>
          </div>
        </div>
      </div>

      <div style={S.aboutCard}>
        <div style={S.infoLabel}>{t.about.aboutLabel}</div>
        <div style={S.infoPara}>{t.about.aboutText}</div>
      </div>

      <div style={S.aboutCard}>
        <div style={S.infoLabel}>{t.about.contact}</div>
        {[
          { label: t.about.phone, val: LAB_INFO.phone },
          { label: t.about.email, val: LAB_INFO.email },
        ].map((item, i) => (
          <div key={i} style={S.contactRow}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 11, color: "#8A9BB0", marginBottom: 1 }}>{item.label}</div>
              <div style={{ fontSize: 13, color: "#1B3A5C", fontWeight: 600 }}>{item.val}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={S.aboutCard}>
        <div style={S.infoLabel}>{t.about.deptLabel} ({CATEGORIES.length})</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 8 }}>
          {CATEGORIES.map(category => (
            <div
              key={category.id}
              style={{ ...S.deptTag, background: category.color + "18", color: category.color }}
              onClick={() => onNavigateTests(category.id)}
            >
              {category.short}
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...S.aboutCard, borderLeft: "4px solid #0D6E6E" }}>
        <div style={S.infoLabel}>{t.about.filmTitle}</div>
        <div style={S.infoPara}>{t.about.filmText}</div>
      </div>

      <div style={S.aboutCard}>
        <div style={S.infoLabel}>Developer</div>
        <div style={S.infoPara}>
          <strong>Developed by Ali Mazin</strong><br />
          IT &amp; Cybersecurity Developer
        </div>
      </div>
    </div>
  );
}
