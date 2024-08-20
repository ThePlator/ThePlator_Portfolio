'use client';
import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
  {
    title: 'SnapGram',
    description:
      'Snapgram is your go-to social media companion, offering a familiar yet refreshing experience akin to Instagram. With its sleek interface and seamless functionalities, Snapgram enables users to connect, share moments, and engage with content effortlessly.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/snapgram.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Youtube Clone',
    description:
      'Developing a YouTube clone: A comprehensive video-sharing platform enabling users to upload, view, and interact with content. Features include user profiles, search functionality, playlists, likes, comments, and a robust recommendation system to enhance user engagement and experience.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/yt.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Namaste🙏Food',
    description:
      "Namaste Food is a highly scalable food ordering application that leverages Swiggy's API to retrieve restaurant information. It provides users with a seamless experience for discovering and ordering from a wide variety of local eateries.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/namastefood.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

function WhyChooseMe() {
  return (
    <div className="p-0">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseMe;
