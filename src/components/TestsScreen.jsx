import { useState } from "react";
import { S } from "../styles.js";
import { CATEGORIES } from "../data.js";

function TestDetail({ cat, test, onBack, onChat, t }) {
  return (
    <div>
      <div style={S.detailBack} onClick={onBack}>{t.tests.back}</div>
      <div style={S.detailCard}>
        <div style={{ ...S.detailHeaderBase, background: `linear-gradient(135deg, ${cat.color}DD, ${cat.color})` }}>
          <div style={S.detailEyebrow}>{cat.label}</div>
          <div style={S.detailTitle}>{test.name}</div>
          {test.sample && <div style={S.detailSub}>{t.tests.sampleType}: {test.sample}</div>}
        </div>
        <div style={S.detailBody}>
          {test.exclusive && <div style={S.exclusiveBlock}>{t.tests.exclusive}</div>}

          <div style={{ ...S.infoBlock, marginTop: test.exclusive ? 16 : 0 }}>
            <div style={S.infoLabel}>{t.tests.indications}</div>
            <div style={S.infoPara}>{test.indication}</div>
          </div>

          <div style={S.infoBlock}>
            <div style={S.infoLabel}>{t.tests.interpretation}</div>
            <div style={S.infoPara}>{test.interpretation}</div>
          </div>

          <div style={{ ...S.infoBlock, ...S.infoBlockLast }}>
            <div style={S.infoLabel}>{t.tests.department}</div>
            <div style={S.infoPara}>{cat.label}</div>
            {test.sample && (
              <>
                <div style={{ ...S.infoLabel, marginTop: 12 }}>{t.tests.sampleRequired}</div>
                <div style={S.sampleChip}>{test.sample}</div>
              </>
            )}
          </div>

          <button style={S.askBtn} onClick={onChat}>{t.tests.ask}</button>
        </div>
      </div>
    </div>
  );
}

export default function TestsScreen({ initialDetail, onChat, t }) {
  const [selectedTest, setSelectedTest] = useState(initialDetail || null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");

  if (selectedTest) {
    return (
      <TestDetail
        cat={selectedTest.cat}
        test={selectedTest.test}
        onBack={() => setSelectedTest(null)}
        onChat={onChat}
        t={t}
      />
    );
  }

  const filteredCategories = CATEGORIES
    .filter(c => activeCat === "all" || c.id === activeCat)
    .map(c => ({
      ...c,
      tests: c.tests.filter(test =>
        !searchQuery ||
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.indication.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(c => c.tests.length > 0);

  return (
    <div>
      <div style={S.sectionTitle}>{t.tests.section}</div>

      <div style={S.searchWrap}>
        <span style={S.searchIcon}>S</span>
        <input
          style={S.searchInput}
          placeholder={t.tests.search}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div style={S.pillRow}>
        <div
          style={{ ...S.pill, ...(activeCat === "all" ? S.pillActive : {}) }}
          onClick={() => setActiveCat("all")}
        >
          {t.tests.all}
        </div>
        {CATEGORIES.map(c => (
          <div
            key={c.id}
            style={{ ...S.pill, ...(activeCat === c.id ? S.pillActive : {}) }}
            onClick={() => setActiveCat(c.id)}
          >
            {c.short}
          </div>
        ))}
      </div>

      {filteredCategories.map(cat => (
        <div key={cat.id} style={{ marginBottom: 22 }}>
          <div style={{ ...S.catHeader, color: cat.color }}>
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
            <span style={{ ...S.catCount, background: cat.color + "18", color: cat.color }}>
              {cat.tests.length}
            </span>
          </div>
          {cat.tests.map((test, i) => (
            <div
              key={i}
              style={S.testCard}
              onClick={() => setSelectedTest({ cat, test })}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(27,92,138,0.13)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
              }}
            >
              <div style={{ ...S.testIconBox, background: cat.color + "18" }}>{cat.icon}</div>
              <div style={S.testMeta}>
                <div style={S.testName}>{test.name}</div>
                <div style={S.testDesc}>{test.indication.substring(0, 72)}...</div>
              </div>
              {test.exclusive && <div style={S.exclusiveBadge}>{t.home.exclusive}</div>}
            </div>
          ))}
        </div>
      ))}

      {filteredCategories.length === 0 && (
        <div style={{ textAlign: "center", padding: 48, color: "#A0AABB" }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>S</div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>{t.tests.noResults}</div>
          <div style={{ fontSize: 12, marginTop: 4 }}>{t.tests.tryAgain}</div>
        </div>
      )}
    </div>
  );
}
