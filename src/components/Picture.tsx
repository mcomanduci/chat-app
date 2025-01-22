import Image from "next/image";
import React from "react";

const Picture = () => {
  return (
    <div className="h-6 w-6 mob:h-10 mob:w-10 bg-slate-300 rounded-full self-end">
      <Image
        className="rounded-full"
        src="/placeholder.png"
        alt="placeholder"
        width={40}
        height={40}
      />
    </div>
  );
};

export default Picture;
