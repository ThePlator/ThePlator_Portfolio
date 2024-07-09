'use client';
import React from 'react';
import { socialMedia } from '@/data';

function IconFooter() {
  return (
    <div className="px-5 flex mt-16 md:flex-row flex-col justify-between items-center">
      <p className="md:text-base text-sm md:font-normal font-light">
        Copyright © 2024 Sameer
      </p>

      <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <a
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            href={info.link}>
            <img src={info.img} alt="icons" width={20} height={20} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default IconFooter;
