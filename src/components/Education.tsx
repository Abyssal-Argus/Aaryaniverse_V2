import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Education() {
  const data = [
    {
      title: "2009-2019",
      content: (
<div className="flex flex-col justify-center items-center">
          <p className="mb-2 text-xl font-bold text-neutral-200 libre-bodoni">
            GEMS School
          </p>
          <p className="mb-2 text-md font-normal text-neutral-200 poppins-medium">
            NEB (Science)
          </p>
          <p className="mb-2 text-sm font-normal text-neutral-200 poppins-medium">
            DLE & SEE Certificates
          </p>
          <div className="hidden md:block">
            <img
              src="/images/gems.png"
              alt="hero template"
              className="h-16 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-32 mt-0 md:mt-10"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019-2021",
      content: (
        <div className="flex flex-col justify-center items-center">
          <p className="mb-2 text-xl font-normal text-neutral-200 libre-bodoni">
            St. Xavier&apos;s College
          </p>
          <p className="mb-2 text-md font-normal text-neutral-200 poppins-medium">
            NEB +2 Science (Physics)
          </p>
          <p className="mb-2 text-sm font-normal text-neutral-200 poppins-medium">
            SLC
          </p>
          <div className="hidden md:block">
            <img
              src="images/sxc.png"
              alt="hero template"
              className="md:mt-10 h-16 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-32"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024-Present",
      content: (
<div className="flex flex-col justify-center items-center">
          <p className="mb-2 text-xl font-normal text-neutral-200 libre-bodoni">
            IIMS College (Taylor&apos;s University)
          </p>
          <p className="mb-2 text-md font-normal text-neutral-200 poppins-medium">
            Bachelors in Computer Science (Hons)
          </p>
          <div className="hidden md:block">
            <img
              src="images/iims.png"
              alt="hero template"
              className="h-16 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-32 mt-0 md:mt-10"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div data-aos='fade-in' data-aos-duration='1000' data-aos-delay='1500' id="smoll" className="relative w-full overflow-clip h-[165vh] md:h-auto bottom-44 bg-black">
      <Timeline data={data} />
    </div>
  );
}
