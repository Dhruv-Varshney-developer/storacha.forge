import Image from "next/image";
import Link from "next/link";

export default function UseCasesSection() {
  const useCases = [
    {
      category: "Financial, Healthcare, Legal",
      icon: "/forge/use-cases/compliance-archives.svg",
      title: "Compliance & Archives",
      description:
        "Retain data for years with cryptographic proof of integrity. Instant access for audits. After 18 months, drop to $1/TiB cold storage, compliant and cost-effective.",
    },
    {
      category: "DevOps, Infrastructure",
      icon: "/forge/use-cases/disaster-recovery.svg",
      title: "Multi-Cloud Disaster Recovery",
      description:
        "Store once, retrieve to any cloud in seconds. No proprietary APIs. No vendor can lock you in when you need to failover.",
    },
    {
      category: "Satellite, Drone, GIS",
      icon: "/forge/use-cases/geospatial.png",
      title: "Geospatial Data at Scale",
      description:
        "Cryptographic verification on every image, critical for legal evidence, compliance and verifiable AI training.",
      isImage: true,
    },
  ];

  return (
    <section id="use-cases" className="bg-white py-10 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="text-center space-y-6 md:space-y-10 lg:space-y-12">
          <h2 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] text-[#0176CE] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
            Use Cases
          </h2>

          <div className="grid lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="border border-[#0176CE] rounded-[20px] overflow-hidden"
              >
                <div className="bg-[#0176CE] px-4 py-3 sm:px-6 sm:py-4 md:px-9 md:py-5">
                  <p className="font-dm-sans font-medium text-xs sm:text-sm md:text-base lg:text-[18px] text-white leading-tight">
                    {useCase.category}
                  </p>
                </div>

                <div className="p-4 sm:p-6 md:p-9 space-y-4 md:space-y-6 lg:space-y-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] bg-[#C5DFFD] rounded-full flex items-center justify-center mx-auto ">
                    <Image
                      src={useCase.icon}
                      alt={useCase.title}
                      width={40}
                      height={40}
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                    />
                  </div>

                  <h3 className="font-epilogue font-medium text-lg sm:text-xl md:text-2xl lg:text-[30px] leading-none text-[#0176CE] tracking-[-1.6px]">
                    {useCase.title}
                  </h3>

                  <p className="font-dm-sans text-sm sm:text-base md:text-lg lg:text-xl text-[#0176CE] leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="https://docs.storacha.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0176CE] text-white px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 rounded-full font-semibold text-base sm:text-lg md:text-xl lg:text-2xl flex items-center gap-2 md:gap-2.5 hover:bg-[#0089F0] transition-colors w-fit"
            >
              <Image
                src="/forge/use-cases/arrow.svg"
                alt=""
                width={24}
                height={24}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
              <span>View our documentation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}