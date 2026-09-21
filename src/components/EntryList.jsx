// One feature card per list; rows split by hairlines inside it.
const EntryList = ({ entries }) => (
  <ul className="stagger divide-y divide-hairline rounded-lg border border-hairline bg-canvas px-6 shadow-card">
    {entries.map(({ logo, alt, title, subtitle, meta }, i) => (
      <li
        key={`${title}-${meta}`}
        style={{ "--i": i }}
        className="flex items-start gap-4 py-6"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-md border border-hairline bg-white">
          <img
            src={logo}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="size-7 object-contain"
          />
        </span>
        <div className="min-w-0 flex-1">
          <p className="t-heading-sm text-ink">{title}</p>
          <p className="t-body-md text-ink-mute">{subtitle}</p>
          <p className="t-caption tnum pt-1 text-ink-mute sm:hidden">{meta}</p>
        </div>
        <p className="t-caption tnum hidden shrink-0 pt-1 text-ink-mute sm:block">{meta}</p>
      </li>
    ))}
  </ul>
);

export default EntryList;
