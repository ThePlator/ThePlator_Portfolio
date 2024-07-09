'use client';

import { FaLocationArrow } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data';
import { CardBody, CardContainer, CardItem } from './ui/3d-pin';
import Link from 'next/link';

const RecentProjects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="py-40 mb-[20rem]">
      <h1 className="heading">
        A small selection of{' '}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="h-[40rem] flex flex-wrap items-center justify-center md-w-[40rem] p-4 gap-20 mt-10">
        {projects.map((item) => (
          <CardContainer className="inter-var" key={item.id}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="lg:text-2xl md:text-xl text-base line-clamp-1 text-neutral-600 dark:text-white">
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2 lg:text-xl">
                {item.des}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.img}
                  width="1000"
                  height="600"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}>
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  <div className="flex justify-center items-center">
                    <a
                      className="flex lg:text-xl md:text-xs text-sm text-purple-700"
                      href={item.link}>
                      Check Live Site
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
