import { useEffect, useMemo, useState } from "react";
import { S } from "../styles.js";
import { apiJson } from "../apiClient.js";

export const STORAGE_KEY = "alzahrawi-bookings";

export default function BookingScreen({ lang, t, user }) {
  const [patientName, setPatientName] = useState("");
  const [sickness, setSickness] = useState("");
  const [phone, setPhone] = useState(user?.phone || "");
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [message, setMessage] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;
    async function loadBookings() {
      try {
        const result = await apiJson("bookings/index.php");
        if (active) setBookings(result.bookings || []);
      } catch (error) {
        if (active) setMessage(error.detail || error.message || "Could not load bookings from the clinic server.");
      }
    }

    loadBookings();
    return () => {
      active = false;
    };
  }, []);

  const canSubmit = useMemo(() => {
    return (
      patientName.trim().length > 1 &&
      sickness.trim().length > 1 &&
      phone.trim().length > 5 &&
      visitDate &&
      visitTime
    );
  }, [patientName, sickness, phone, visitDate, visitTime]);
  const visibleBookings = bookings.filter(booking =>
    !user?.phone ||
    booking.accountPhone === user.phone ||
    booking.bookedBy === user.id ||
    booking.phone === user.phone
  );

  function resetForm() {
    setPatientName("");
    setSickness("");
    setPhone(user?.phone || "");
    setVisitDate("");
    setVisitTime("");
  }

  async function submitBooking(e) {
    e.preventDefault();

    if (!canSubmit) {
      setMessage(t.booking.missing);
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const result = await apiJson("bookings/index.php", {
        method: "POST",
        body: {
          patientName: patientName.trim(),
          sickness: sickness.trim(),
          phone: phone.trim(),
          visitDate,
          visitTime,
        },
      });

      setBookings(prev => [result.booking, ...prev]);
      setMessage(`${t.booking.saved} ${result.booking.patientName}.`);
      resetForm();
    } catch (error) {
      setMessage(error.detail || error.message || "Booking could not be saved to the clinic server.");
    } finally {
      setLoading(false);
    }
  }

  async function removeBooking(id) {
    try {
      await apiJson(`bookings/index.php?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      setBookings(prev => prev.filter(booking => booking.id !== id));
    } catch (error) {
      setMessage(error.detail || error.message || "Could not delete this booking from the clinic server.");
    }
  }

  return (
    <div>
      <div style={S.sectionTitle}>{t.booking.section}</div>

      <div style={S.bookingLayout}>
        <form style={S.bookingForm} onSubmit={submitBooking}>
          <div style={S.bookingHeader}>
            <div>
              <div style={S.bookingTitle}>{t.booking.newTitle}</div>
              <div style={S.bookingSubtitle}>{t.booking.newSubtitle}</div>
            </div>
            <div style={S.bookingCount}>{visibleBookings.length}</div>
          </div>

          <label style={S.formLabel} htmlFor="patient-name">{t.booking.patientName}</label>
          <input
            id="patient-name"
            style={S.formInput}
            value={patientName}
            onChange={e => setPatientName(e.target.value)}
            placeholder={t.booking.patientPlaceholder}
          />

          <label style={S.formLabel} htmlFor="patient-sickness">{t.booking.sickness}</label>
          <textarea
            id="patient-sickness"
            style={{ ...S.formInput, ...S.formTextarea }}
            value={sickness}
            onChange={e => setSickness(e.target.value)}
            placeholder={t.booking.sicknessPlaceholder}
          />

          <div style={S.formGrid}>
            <div>
              <label style={S.formLabel} htmlFor="patient-phone">{t.booking.phone}</label>
              <input
                id="patient-phone"
                type="tel"
                style={S.formInput}
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder={t.booking.phonePlaceholder}
                required
              />
            </div>
            <div>
              <label style={S.formLabel} htmlFor="visit-date">{t.booking.date}</label>
              <input
                id="visit-date"
                type="date"
                style={S.formInput}
                value={visitDate}
                onChange={e => setVisitDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label style={S.formLabel} htmlFor="visit-time">{t.booking.time}</label>
              <input
                id="visit-time"
                type="time"
                style={S.formInput}
                value={visitTime}
                onChange={e => setVisitTime(e.target.value)}
                required
              />
            </div>
          </div>

          {message && <div style={{ ...S.formMessage, whiteSpace: "pre-wrap" }}>{message}</div>}

          <button style={{ ...S.btnPrimary, ...S.bookingSubmit }} type="submit" disabled={loading}>
            {loading ? "..." : t.booking.save}
          </button>
        </form>

        <div style={S.bookingList}>
          <div style={S.bookingTitle}>{t.booking.listTitle}</div>
          <div style={S.bookingSubtitle}>{t.booking.listSubtitle}</div>

          {visibleBookings.length === 0 ? (
            <div style={S.emptyBooking}>
              <div style={{ fontSize: 34, marginBottom: 8 }}>+</div>
              <div style={{ fontWeight: 800, color: "#1B3A5C" }}>{t.booking.emptyTitle}</div>
              <div style={{ fontSize: 12, color: "#8A9BB0", marginTop: 4 }}>
                {t.booking.emptySubtitle}
              </div>
            </div>
          ) : (
            visibleBookings.map(booking => (
              <div key={booking.id} style={S.bookingCard}>
                <div style={S.bookingCardTop}>
                  <div>
                    <div style={S.bookingPatient}>{booking.patientName}</div>
                    <div style={S.bookingRef}>{booking.id} - {booking.createdAt}</div>
                  </div>
                  <button style={S.smallDangerBtn} onClick={() => removeBooking(booking.id)}>
                    {t.booking.delete}
                  </button>
                </div>
                <div style={S.bookingComplaint}>{booking.sickness}</div>
                <div style={S.bookingMetaRow}>
                  <span>{booking.phone || t.booking.noPhone}</span>
                  <span>{booking.visitDate || t.booking.noDate}</span>
                  <span>{booking.visitTime || t.booking.noTime}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
