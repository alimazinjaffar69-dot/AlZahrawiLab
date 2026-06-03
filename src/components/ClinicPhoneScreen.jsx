import { useEffect, useMemo, useState } from "react";
import { S } from "../styles.js";
import { apiJson, apiUpload } from "../apiClient.js";

export default function ClinicPhoneScreen({ t }) {
  const [bookings, setBookings] = useState([]);
  const [resultForms, setResultForms] = useState({});
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadBookings();
  }, []);

  async function loadBookings() {
    try {
      const result = await apiJson("bookings/index.php", { base: true });
      setBookings(result.bookings || []);
      setMessage("");
    } catch (error) {
      setMessage(error.detail || error.message || "Could not load bookings. Check the Base API key and server IP.");
    }
  }

  const sortedBookings = useMemo(() => {
    return [...bookings].sort((a, b) => {
      const aTime = `${a.visitDate || "9999-12-31"} ${a.visitTime || "99:99"}`;
      const bTime = `${b.visitDate || "9999-12-31"} ${b.visitTime || "99:99"}`;
      return aTime.localeCompare(bTime);
    });
  }, [bookings]);

  const filteredBookings = sortedBookings.filter(booking => {
    const query = search.trim().toLowerCase();
    if (!query) return true;
    return [booking.patientName, booking.sickness, booking.phone, booking.visitDate, booking.visitTime]
      .filter(Boolean)
      .some(value => value.toLowerCase().includes(query));
  });

  const today = new Date().toISOString().slice(0, 10);
  const todayCount = bookings.filter(booking => booking.visitDate === today).length;

  async function updateStatus(id, status) {
    try {
      await apiJson(`bookings/index.php?id=${encodeURIComponent(id)}`, {
        method: "PUT",
        body: { status },
        base: true,
      });
      setBookings(prev => prev.map(booking => booking.id === id ? { ...booking, status } : booking));
    } catch (error) {
      setMessage(error.detail || error.message || "Could not update booking status on the server.");
    }
  }

  async function deleteBooking(id) {
    try {
      await apiJson(`bookings/index.php?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
        base: true,
      });
      setBookings(prev => prev.filter(booking => booking.id !== id));
    } catch (error) {
      setMessage(error.detail || error.message || "Could not delete booking from the server.");
    }
  }

  function updateResultForm(id, field, value) {
    setResultForms(prev => ({
      ...prev,
      [id]: { ...(prev[id] || {}), [field]: value },
    }));
  }

  function attachPdf(id, file) {
    if (!file) return;
    if (file.type !== "application/pdf") {
      updateResultForm(id, "fileError", t.clinic.pdfOnly || "PDF files only");
      return;
    }

    setResultForms(prev => ({
      ...prev,
      [id]: {
        ...(prev[id] || {}),
        pdfFile: file,
        pdfName: file.name,
        fileError: "",
      },
    }));
  }

  async function sendResult(booking) {
    const form = resultForms[booking.id] || {};
    if (!form.test?.trim() || !form.pdfFile) {
      updateResultForm(booking.id, "fileError", t.clinic.pdfRequired || "Attach a PDF result first");
      return;
    }

    const data = new FormData();
    data.append("bookingId", booking.id);
    data.append("test", form.test.trim());
    data.append("dept", form.dept?.trim() || "Laboratory Result");
    data.append("pdf", form.pdfFile);

    try {
      await apiUpload("results/index.php", data, { base: true });
      await updateStatus(booking.id, t.clinic.resultSent || "Result sent");
      setResultForms(prev => ({ ...prev, [booking.id]: { test: "", dept: "", pdfName: "", pdfFile: null } }));
      setMessage("Result PDF sent to the patient.");
    } catch (error) {
      updateResultForm(booking.id, "fileError", error.detail || error.message || "Could not send this PDF to the server.");
    }
  }

  return (
    <div>
      <div style={S.clinicHero}>
        <div>
          <div style={S.clinicEyebrow}>{t.clinic.eyebrow}</div>
          <div style={S.clinicTitle}>{t.clinic.title}</div>
          <div style={S.clinicSubtitle}>{t.clinic.subtitle}</div>
        </div>
        <div style={S.clinicStats}>
          <div style={S.clinicStatsItem}>
            <strong>{bookings.length}</strong>
            <span>{t.clinic.total}</span>
          </div>
          <div style={S.clinicStatsItem}>
            <strong>{todayCount}</strong>
            <span>{t.clinic.today}</span>
          </div>
        </div>
      </div>

      <div style={S.searchWrap}>
        <span style={S.searchIcon}>S</span>
        <input
          style={S.searchInput}
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={t.clinic.search}
        />
      </div>
      {message && <div style={{ ...S.formMessage, marginBottom: 12, whiteSpace: "pre-wrap" }}>{message}</div>}

      {filteredBookings.length === 0 ? (
        <div style={S.emptyBooking}>
          <div style={{ fontWeight: 800, color: "#1B3A5C" }}>{t.clinic.emptyTitle}</div>
          <div style={{ fontSize: 12, color: "#8A9BB0", marginTop: 4 }}>{t.clinic.emptySubtitle}</div>
        </div>
      ) : (
        <div style={S.clinicList}>
          {filteredBookings.map(booking => (
            <div key={booking.id} style={S.clinicPatientCard}>
              <div style={S.clinicCardTop}>
                <div>
                  <div style={S.bookingPatient}>{booking.patientName}</div>
                  <div style={S.bookingRef}>{booking.id}</div>
                </div>
                <div style={S.clinicTimeBox}>
                  <strong>{booking.visitTime}</strong>
                  <span>{booking.visitDate}</span>
                </div>
              </div>

              <div style={S.clinicComplaint}>
                <span>{t.clinic.sickness}</span>
                {booking.sickness}
              </div>

              <div style={S.clinicPhoneRow}>
                <span>{t.clinic.phone}: {booking.phone}</span>
                <a style={S.callButton} href={`tel:${booking.phone}`}>{t.clinic.call}</a>
              </div>

              <div style={S.clinicActions}>
                <button style={S.btnSecondary} onClick={() => updateStatus(booking.id, t.clinic.notArrived || "Hasn't arrived yet")}>
                  {t.clinic.notArrived || "Hasn't arrived yet"}
                </button>
                <button style={S.btnSecondary} onClick={() => updateStatus(booking.id, t.clinic.arrived)}>{t.clinic.arrived}</button>
                <button style={S.btnPrimary} onClick={() => updateStatus(booking.id, t.clinic.done)}>{t.clinic.done}</button>
                <button style={S.smallDangerBtn} onClick={() => deleteBooking(booking.id)}>{t.booking.delete}</button>
              </div>

              <div style={S.clinicStatus}>{t.clinic.status}: {booking.status || t.booking.waiting}</div>

              <div style={S.baseResultBox}>
                <div style={S.infoLabel}>{t.clinic.sendResult || "Send Result"}</div>
                <input
                  style={S.formInput}
                  value={resultForms[booking.id]?.test || ""}
                  onChange={e => updateResultForm(booking.id, "test", e.target.value)}
                  placeholder={t.clinic.testName || "Test name"}
                />
                <input
                  style={{ ...S.formInput, marginTop: 8 }}
                  value={resultForms[booking.id]?.dept || ""}
                  onChange={e => updateResultForm(booking.id, "dept", e.target.value)}
                  placeholder={t.clinic.department || "Department"}
                />
                <input
                  type="file"
                  accept="application/pdf"
                  style={{ ...S.formInput, marginTop: 8 }}
                  onChange={e => attachPdf(booking.id, e.target.files?.[0])}
                />
                {resultForms[booking.id]?.pdfName && (
                  <div style={{ ...S.formMessage, marginTop: 8 }}>
                    {t.clinic.pdfAttached || "Attached"}: {resultForms[booking.id].pdfName}
                  </div>
                )}
                {resultForms[booking.id]?.fileError && (
                  <div style={{ ...S.formMessage, marginTop: 8, background: "#FFF5F5", color: "#C0392B", whiteSpace: "pre-wrap" }}>
                    {resultForms[booking.id].fileError}
                  </div>
                )}
                <button style={{ ...S.btnPrimary, width: "100%", marginTop: 8 }} onClick={() => sendResult(booking)}>
                  {t.clinic.sendToPatient || "Send to patient"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
