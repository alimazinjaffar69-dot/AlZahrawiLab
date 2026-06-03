import { useEffect, useState } from "react";
import { S } from "../styles.js";
import { apiFileUrl, apiJson } from "../apiClient.js";
import { readToken } from "../auth.js";

export const RESULTS_KEY = "alzahrawi-results";

export function readResults() {
  try {
    return JSON.parse(localStorage.getItem(RESULTS_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveResults(results) {
  localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
}

async function fetchResultBlob(result) {
  const url = apiFileUrl(`results/download.php?id=${encodeURIComponent(result.id)}`);
  console.log("[AlZahrawi API]", "GET", url);
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${readToken()}` },
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`URL: ${url}\nHTTP: ${response.status} ${response.statusText}\nBody: ${body}`);
  }
  return response.blob();
}

async function downloadResult(result) {
  const blob = await fetchResultBlob(result);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = result.pdfName || `${result.id}.pdf`;
  link.click();
  URL.revokeObjectURL(url);
}

function ResultDetail({ result, onBack, t }) {
  const [pdfUrl, setPdfUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    fetchResultBlob(result)
      .then(blob => {
        if (active) setPdfUrl(URL.createObjectURL(blob));
      })
      .catch(error => {
        if (active) setError(error.message || t.reports.noPdf || "No PDF attached");
      });
    return () => {
      active = false;
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [result.id]);

  return (
    <div>
      <div style={S.detailBack} onClick={onBack}>{t.reports.back}</div>
      <div style={S.detailCard}>
        <div style={{ ...S.detailHeaderBase, background: "linear-gradient(135deg, #1B3A5C, #1B5C8A)" }}>
          <div style={S.detailEyebrow}>{result.dept || t.reports.results}</div>
          <div style={S.detailTitle}>{result.test}</div>
          <div style={S.detailSub}>{t.reports.ref}: {result.id} - {result.uploadedAt}</div>
        </div>
        <div style={S.detailBody}>
          <div style={S.infoBlock}>
            <div style={S.infoLabel}>{t.booking.patientName}</div>
            <div style={S.infoPara}>{result.patientName}</div>
          </div>
          {pdfUrl ? (
            <iframe
              title={result.pdfName || result.test}
              src={pdfUrl}
              style={S.pdfFrame}
            />
          ) : (
            <div style={S.emptyBooking}>
              <div style={{ fontWeight: 800, color: "#1B3A5C" }}>{error || "Loading PDF..."}</div>
            </div>
          )}
          <div style={S.reportBtns}>
            <button style={S.btnPrimary} onClick={() => downloadResult(result)}>{t.reports.download}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReportsScreen({ initialReport, t, user }) {
  const [results, setResults] = useState(readResults);
  const [selected, setSelected] = useState(initialReport || null);
  const [message, setMessage] = useState("");
  const visibleResults = results.filter(result => !user?.phone || result.phone === user.phone);

  useEffect(() => {
    let active = true;
    async function refresh() {
      try {
        const result = await apiJson("results/index.php");
        if (active) {
          setResults(result.results || []);
          setMessage("");
        }
      } catch (error) {
        if (active) setMessage(error.detail || error.message || "Could not load results from the clinic server.");
      }
    }

    refresh();
    return () => {
      active = false;
    };
  }, []);

  if (selected) {
    return <ResultDetail result={selected} onBack={() => setSelected(null)} t={t} />;
  }

  return (
    <div>
      <div style={S.sectionTitle}>{t.reports.section}</div>
      {message && <div style={{ ...S.formMessage, marginBottom: 12, whiteSpace: "pre-wrap" }}>{message}</div>}
      {visibleResults.length === 0 ? (
        <div style={S.emptyBooking}>
          <div style={{ fontWeight: 800, color: "#1B3A5C" }}>{t.reports.emptyTitle}</div>
          <div style={{ fontSize: 12, color: "#8A9BB0", marginTop: 4 }}>{t.reports.emptyText}</div>
        </div>
      ) : (
        visibleResults.map(result => (
          <div key={result.id} style={S.reportCard}>
            <div style={S.reportTop}>
              <div style={S.reportName}>{result.test}</div>
              <div style={S.statusReady}>{t.reports.ready}</div>
            </div>
            <div style={S.reportDate}>{result.patientName} - {result.uploadedAt}</div>
            <div style={S.reportId}>{t.reports.ref} # {result.id}</div>
            <div style={S.reportBtns}>
              <button style={S.btnSecondary} onClick={() => setSelected(result)}>{t.reports.viewResults}</button>
              <button style={S.btnPrimary} onClick={() => downloadResult(result)}>{t.reports.download}</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
