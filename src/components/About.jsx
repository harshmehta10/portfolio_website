import SectionHeading from "./SectionHeading";

const About = () => (
  <section className="band bg-canvas">
    <div className="reveal mx-auto grid max-w-[1080px] gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <SectionHeading title="About" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">
        <p className="t-body-lg text-ink-secondary">
          I'm a fullstack developer at MediaClock, where I built and shipped
          mcTyson — an invoice tracker that reads receipts out of a mailbox and
          turns them into something you can search — in Next.js, TypeScript and
          Supabase.
          It's the kind of product I like: an unglamorous problem that everyone
          has, where most of the work is in the parts nobody sees.
        </p>
        <p className="t-body-lg text-ink-secondary">
          Before that I spent a year and a half shipping responsive React
          applications end to end, through an internship at Techxerro and client
          work built on React, Tailwind CSS, Firebase and third-party APIs. I'm
          comfortable owning a feature from the interface down to the data
          model, and looking for a fullstack role on a product people actually
          use.
        </p>
      </div>
    </div>
  </section>
);

export default About;
