import { S } from "../styles.js";
import { CATEGORIES } from "../data.js";

export default function HomeScreen({ onNavigate, t }) {
  const totalTests = CATEGORIES.reduce((a, c) => a + c.tests.length, 0);
  const exclusiveCount = CATEGORIES.reduce((a, c) => a + c.tests.filter(t => t.exclusive).length, 0);

  const featured = [
    { catId: "molecular", testIdx: 2 },
    { catId: "thrombo", testIdx: 3 },
    { catId: "autoimmune", testIdx: 7 },
  ].map(({ catId, testIdx }) => {
    const cat = CATEGORIES.find(c => c.id === catId);
    return { cat, test: cat.tests[testIdx] };
  });

  return (
    <div>
      <div style={S.heroBanner}>
        <div style={S.heroEyebrow}>{t.home.eyebrow}</div>
        <div style={S.heroTitle}>{t.home.title}</div>
        <div style={S.heroSub}>{t.home.subtitle}</div>
        <div style={S.heroStats}>
          {[
            { num: `${totalTests}+`, label: t.home.stats[0] },
            { num: `${exclusiveCount}+`, label: t.home.stats[1] },
            { num: "35", label: t.home.stats[2] },
            { num: "45min", label: t.home.stats[3] },
          ].map((s, i) => (
            <div key={i} style={S.heroStat}>
              <div style={S.heroStatNum}>{s.num}</div>
              <div style={S.heroStatLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...S.alertCard, borderLeft: "4px solid #27AE60" }}>
        <div style={{ ...S.alertDot, background: "#27AE60" }} />
        <div style={S.alertText}>
          <strong>{t.home.bookingAlertTitle}</strong> - {t.home.bookingAlertText}
        </div>
        <div style={S.alertAction} onClick={() => onNavigate("booking")}>{t.home.book}</div>
      </div>
      <div style={S.sectionTitle}>{t.home.quickAccess}</div>
      <div style={S.quickGrid}>
        {[
          { icon: "+", label: t.home.quickCards.booking[0], sub: t.home.quickCards.booking[1], tab: "booking" },
          { icon: "T", label: t.home.quickCards.tests[0], sub: `${totalTests}+ ${t.home.quickCards.tests[1]}`, tab: "tests" },
          { icon: "C", label: t.home.quickCards.chat[0], sub: t.home.quickCards.chat[1], tab: "chat" },
          { icon: "R", label: t.home.quickCards.reports[0], sub: t.home.quickCards.reports[1], tab: "reports" },
        ].map((c, i) => (
          <div
            key={i}
            style={S.quickCard}
            onClick={() => onNavigate(c.tab)}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(27,92,138,0.16)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "0 1px 5px rgba(0,0,0,0.06)";
            }}
          >
            <div style={S.quickCardIcon}>{c.icon}</div>
            <div style={S.quickCardLabel}>{c.label}</div>
            <div style={S.quickCardSub}>{c.sub}</div>
          </div>
        ))}
      </div>

      <div style={S.sectionTitle}>{t.home.featured}</div>
      {featured.map(({ cat, test }, i) => (
        <div
          key={i}
          style={S.testCard}
          onClick={() => onNavigate("tests", { cat, test })}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(27,92,138,0.13)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
          }}
        >
          <div style={{ ...S.testIconBox, background: cat.color + "1A" }}>{cat.icon}</div>
          <div style={S.testMeta}>
            <div style={S.testName}>{test.name}</div>
            <div style={S.testDesc}>{test.indication.substring(0, 85)}...</div>
          </div>
          <div style={S.exclusiveBadge}>{t.home.exclusive}</div>
        </div>
      ))}
    </div>
  );
}
