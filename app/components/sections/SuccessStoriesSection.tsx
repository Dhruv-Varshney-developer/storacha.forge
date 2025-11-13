import Image from "next/image";

export default function SuccessStoriesSection() {
  const testimonials = [
    {
      quote:
        "Storacha Forge has enabled us to upload PiBs of data with ZERO FRICTION backed up on Filecoin. No approval chains. No corporate gatekeepers. Our data can't be censored or held hostage.",
      author: "Clara Tsao",
      role: "Co-Founder/Founding Officer",
      company: "Filecoin Foundation",
    },
    {
      quote:
        "Storacha Forge lets us back up Solana's full network state with full integrity and instant accessibility. Node operators can retrieve any block by byte range, reducing storage costs dramatically, no slow restores, no cold storage limits, no compromise on verifiability.",
      author: "Miles S.",
      role: "Senior Engineer",
      company: "Triton",
    },
    {
      quote:
        "Storacha Forge lets us store auditable transactional data and network analytics with guaranteed data integrity. We get compliance-grade verifiability, no vendor lock-in, no surprise fees, just low-cost archival storage that stays accessible when regulators or auditors need it.",
      author: "Sylvan Z.",
      role: "Co-Founder",
      company: "Parasail",
    },
    {
      quote:
        "Storacha Forge backs up our historical blockchain state on verifiable storage at a fraction of cloud costs. During network upgrades, state data is accessible immediately not locked in cold storage. Cryptographic proofs give our backups the same integrity guarantees as the chains themselves.",
      author: "Josh D.",
      role: "Head of Infrastructure",
      company: "Chainsafe",
    },
  ];

  return (
    <section id="stories" className="bg-[#C5DFFD] py-10 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="space-y-6 md:space-y-10 lg:space-y-12">
          <div className="text-center space-y-3 md:space-y-4 lg:space-y-6">
            <h2 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] text-[#0176CE] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
              Success Stories
            </h2>
            <p className="font-dm-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#0176CE] tracking-normal md:tracking-[-0.5px] lg:tracking-[-1.12px]">
              Hear from leaders building on Storacha Forge
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card !p-5 md:!p-8 lg:!p-10"
              >
                <div className="space-y-5 md:space-y-8 lg:space-y-10">
                  <Image
                    src="/forge/testimonials/quote.svg"
                    alt="Quote"
                    width={42}
                    height={40}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                  />

                  <p className="font-dm-sans italic text-sm sm:text-base md:text-lg lg:text-xl text-[#0176CE] leading-relaxed">
                    {testimonial.quote}
                  </p>

                  <div className="space-y-1 md:space-y-2">
                    <p className="font-epilogue font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-[#0176CE]">
                      {testimonial.author}
                    </p>
                    <p className="font-dm-sans text-xs sm:text-sm md:text-base text-[#0176CE]">
                      {testimonial.role}
                    </p>
                    <span className="inline-block bg-[#0176CE] text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full font-dm-sans font-semibold text-xs sm:text-sm md:text-base">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
