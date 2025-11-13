"use client";

import Image from "next/image";

export default function WhyStorachaSection() {
  const features = [
    {
      icon: "/forge/features/verifiable-security.svg",
      title: "Verifiable Security",
      description:
        "Cryptographically proven integrity and end-to-end encryption keep your backups tamper-proof, private, and independently verifiable.",
    },
    {
      icon: "/forge/features/data-ownership.svg",
      title: "True Data Ownership",
      description:
        "Every file belongs to you, not a provider, governed by open protocol and user-controlled permissions.",
    },
    {
      icon: "/forge/features/transparent-pricing.svg",
      title: "Transparent, Low-Cost Pricing",
      description:
        "Up to 80% cheaper than AWS Glacier or Google Coldline, with predictable billing and transparent egress.",
    },
    {
      icon: "/forge/features/no-vendor-lock.svg",
      title: "No Vendor Lock-In",
      description:
        "Retrieve or migrate freely with open standards—no proprietary APIs or hidden exit fees.",
    },
    {
      icon: "/forge/features/global-coverage.svg",
      title: "Global Coverage & Compliance",
      description:
        "Enterprise-grade resilience across EU, US, and Asia, built to meet ISO 27001 and GDPR requirements under unified global standards.",
    },
    {
      icon: "/forge/features/data-lifecycle.svg",
      title: "Intelligent Data Lifecycle Management",
      description:
        "Manage retention and deletion through intelligent, policy-aware controls optimizing cost, integrity, and compliance over time.",
    },
    {
      icon: "/forge/features/fast-retrieval.svg",
      title: "Fast, Reliable Retrieval",
      description:
        "Retrieve data in seconds for audits, restores, or analytics without cold-storage delays.",
    },
    {
      icon: "/forge/features/share-without-middlemen.svg",
      title: "Share Without Middlemen",
      description:
        "Grant and revoke permissions directly between users or systems—no centralized gateways or intermediaries.",
    },
  ];

  return (
    <section id="why" className="bg-white py-10 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="space-y-6 md:space-y-10 lg:space-y-12">
          <div className="text-center space-y-3 md:space-y-4 lg:space-y-6">
            <h2 className="font-epilogue font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] text-[#0176CE] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.88px]">
              Why Storacha?
            </h2>
            <p className="font-dm-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-[#0176CE] tracking-normal md:tracking-[-0.5px] lg:tracking-[-1.12px]">
              Built for enterprises that demand security, control, and
              transparency.
            </p>
          </div>

          <div className="bg-[#0176CE] rounded-[16px] md:rounded-[20px] p-4 md:p-6 lg:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-[12px] md:rounded-[16px] p-3 sm:p-4 md:p-5 flex flex-col h-full"
                >
                  <div className="h-auto">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={36}
                      height={36}
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9"
                    />
                    <h3 className="font-epilogue font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-[#0176CE] mt-2 md:mt-4">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-dm-sans text-xs sm:text-sm md:text-[15px] text-[#0176CE] mt-2 md:mt-4">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}