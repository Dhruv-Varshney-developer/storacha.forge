import Image from 'next/image'

export default function DataOwnershipSection() {
  return (
    <section className="bg-[#0176CE] relative overflow-hidden py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/forge/data-ownership/globe-sphere.png"
              alt="Globe"
              width={500}
              height={400}
              className="rounded-[20px]"
            />
          </div>
          
          <div className="text-white space-y-8">
            <h2 className="font-epilogue font-medium text-5xl lg:text-[72px] leading-[1.2] tracking-[-2.88px]">
              You Own the Data.<br />
              You Control the Access.
            </h2>
            
            <div className="space-y-6 text-[28px] lg:text-[32px] leading-relaxed">
              <p className="font-bold">Your data. Your keys. Your control.</p>
              
              <p>
                Storacha Forge encrypts and replicates every file across independent nodes 
                with cryptographic proof of ownership.
              </p>
              
              <p>
                Share directly without APIs or centralized servers. Enterprise security, 
                decentralized freedom, permanent control.
              </p>
            </div>
            
            <button className="bg-[#E91315] text-white px-7 py-3.5 rounded-full font-semibold text-2xl flex items-center gap-2.5 hover:bg-red-700 transition-colors">
              <Image src="/forge/hero/cta-arrow-icon.svg" alt="" width={24} height={24} />
              <span>Talk to your expert</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
