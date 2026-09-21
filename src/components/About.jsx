import SectionHeading from "./SectionHeading";

const About = () => (
  <section className="band bg-canvas">
    <div className="reveal mx-auto grid max-w-[1080px] gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <SectionHeading title="About" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">
        <p className="t-body-lg text-ink-secondary">
          I'm a fullstack developer with 1 year of hands-on experience,
          including a three-month internship built around React, Tailwind CSS,
          Firebase, and API integration. Across that internship and my own
          projects I've shipped responsive web applications end to end, and I
          work comfortably with Git, GitHub, and deployments on Netlify and
          Vercel.
        </p>
        <p className="t-body-lg text-ink-secondary">
          Three months of corporate exposure alongside that sharpened the parts
          that aren't code: communication, collaboration, and time management.
          I'm now looking for a frontend role where I can go deeper into Next.js
          and TypeScript and contribute to products people actually use, on the
          way to becoming a well-rounded fullstack developer.
        </p>
      </div>
    </div>
  </section>
);

export default About;
