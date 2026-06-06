import { FiCalendar, FiClock, FiMapPin, FiNavigation } from "react-icons/fi";
import SectionShell from "./SectionShell";
import locationQr from "../assets/location-qr.svg";

export default function NikahDetails({ event }) {
  const detailRows = [
    { icon: <FiCalendar />, label: "Date", value: event.displayDate },
    { icon: <FiClock />, label: "Time", value: event.time },
    { icon: <FiMapPin />, label: "Venue", value: event.venue },
    { icon: <FiNavigation />, label: "Address", value: event.address },
  ];

  return (
    <SectionShell
      id="details"
      className="two-tone-section"
      eyebrow="The Nikah"
      // title="An evening filled with love, mercy, and Allah's blessings"
    >
      <div className="mx-auto max-w-2xl">
        <p className="mb-6 text-center text-base leading-7 text-cocoa">
          As Allah ﷻ brings two hearts together in faith and companionship, we
          humbly request the honor of your presence as we gather to witness and
          celebrate their Nikah.
        </p>
        <div className="gold-border-card relative overflow-hidden rounded-[8px] bg-ivory p-6 shadow-luxury">
          <div className="space-y-4">
            {detailRows.map((row) => (
              <div
                className="flex items-center gap-4 rounded-[6px] border border-champagne/45 bg-ivory p-4"
                key={row.label}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-champagne/15 text-champagne">
                  {row.icon}
                </span>
                <span>
                  <span className="block text-[0.65rem] font-bold uppercase tracking-[0.28em] text-olive">
                    {row.label}
                  </span>
                  <span className="mt-1 block font-heading text-2xl font-semibold leading-tight text-ink">
                    {row.value}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-base leading-7 text-cocoa">
            Please keep the couple in your du&apos;as as they begin this
            beautiful journey together.
          </p>
          <div className="mt-5 rounded-[8px] border border-champagne/45 bg-ivory p-4 text-center shadow-paper">
            <div className="mx-auto w-40 rounded-[6px] border border-champagne/25 bg-ivory p-3">
              <img
                className="block h-auto w-full"
                src={locationQr}
                alt={`QR code for ${event.venue} location`}
              />
            </div>
            <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-olive">
              Scan to view the location
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3">
            <a className="luxury-button secondary" href={event.mapsUrl} target="_blank" rel="noreferrer">
              <FiMapPin />
              Open Location
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
