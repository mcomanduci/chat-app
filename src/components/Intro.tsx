import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="mb-2">
      <div className="grid grid-cols-[auto_auto] gap-2">
        {/* TODO: ADD JS */}
        <div className="h-10 w-10 col-auto"></div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#1E293B] p-4 rounded-md shadow text-left self-start">
            <Image
              className="rounded-md max-w-[680px] max-h-[200px] object-cover"
              src="/doctor.jpg"
              alt="Doctor"
              width={680}
              height={200}
            />
          </div>
          <div className="bg-[#1E293B] px-4 py-2 rounded-md shadow text-left self-start">
            <p className="">
              Preencha o formulário até o final para que possamos entender a
              forma mais assertiva de te ajudarmos.
            </p>
          </div>
          <div className="bg-[#1E293B] px-4 py-2 rounded-md shadow text-left self-start">
            <p className="">
              Revise os campos com cuidado e preencha até o final, só iremos te
              chamar caso o formulário seja totalmente preenchido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
