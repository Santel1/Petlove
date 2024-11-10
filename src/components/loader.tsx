import React, { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + Math.random() * 10, 100);
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-40">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-[200px] h-[200px] border-[#f6b83d] border-r-2 border-b-2 rounded-full animate-spin flex items-center justify-center"></div>
        <span className="text-[50px] font-bold tracking-tighter absolute top-[50%] right-[50%] -translate-y-[50%] translate-x-[50%] text-white">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};

export default Loader;
