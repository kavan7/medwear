"use client";

import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import { Icons } from "./ui/Icons";
import { IconUser } from "@tabler/icons-react";
import Reviews from '@/components/Reviews'


const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "/Example1.png",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "/Sheet2MainF.png",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "/Sheet2MainM.png",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "/Example3.png",
  },
];

export default function HomeClient() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
    <section>
      <MaxWidthWrapper className="pb-24 pt-6 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-10 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-5xl lg:text-6xl">
              Excellence in Every Stitch.
            </h1>
            <p className="uppercase text-sm mt-3 tracking-wider text-neutral-800">
              <span className="bg-blue-950 px-1.5 py-0.5 text-white rounded-sm">
                Premium Medical Uniforms
              </span>{" "}
              with free Global Shipping
            </p>

            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              <li className="flex gap-1.5 items-center text-left">
                <Check className="text-blue-900" />
                Premium, breathable fabrics designed for long shifts
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="text-blue-900" />
                Tailored fit for a polished, professional look
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="text-blue-900" />
                Fade-resistant, wrinkle-free, and ultra-durable
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="text-blue-900" />
                Free worldwide shipping on every order
              </li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex -space-x-4">
                <img className="h-10 w-10 rounded-full ring-2 ring-slate-100" src="/user-1.png" />
                <img className="h-10 w-10 rounded-full ring-2 ring-slate-100" src="/user-2.png" />
                <img className="h-10 w-10 rounded-full ring-2 ring-slate-100" src="/user-3.png" />
                <img className="h-10 w-10 rounded-full ring-2 ring-slate-100" src="/user-4.jpg" />
                <img className="h-10 w-10 rounded-full ring-2 ring-slate-100" src="/user-5.jpg" />
              </div>
              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-0.5">
                  <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
                  <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
                  <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
                  <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
                  <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
                </div>
                <p>
                  <span className="font-semibold">Verified</span> customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block col-span-1 relative w-full top-20 rounded-xl overflow-hidden">
          <div className="relative w-full h-screen">
            {slideData.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.title}
                className={`absolute inset-0 p-4 h-2/3 object-cover transition-all duration-700 ease-in-out rounded-xl ${
                  index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                }`}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
     <section className="bg-slate-100 py-24">
  <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
    
    {/* HEADLINE + IMAGE */}
    <div className="mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-gray-900 flex flex-col text-5xl md:text-6xl lg:flex-row items-center gap-4 sm:gap-6">
      <h2>
        What our <span className="text-blue-900 relative px-2">customers 
        <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-blue-800" /></span> say.
      </h2>
      <img src={'/icons.png'} className="w-24 mt-5 lg:order-2 rounded-full" />
    </div>

    {/* TESTIMONIAL GRID */}
    <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
      <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
        <div className="flex gap-0.5 mb-2">
          <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
          <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
          <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
          <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
          <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
        </div>
        <p className="text-lg text-gray-700">
         “MedWear has completely changed the way our staff feels on shift. The uniforms are <span className="text-blue-800 p-0.5 bg-slate-200 font-semibold">unbelievably comfortable</span> and hold up perfectly after countless washes.”
        </p>
     
      </div>
       <div className='flex gap-4 mt-2'>
              <IconUser className="rounded-full h-12 w-12 object-cover border-3 p-1"/>
                <div className='flex flex-col'>
                  <p className='font-semibold'>Jason L, Head Nurse</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
             </div>
    </div>
      <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
        <div className="flex gap-0.5 mb-2">
          <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
          <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
          <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
          <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
          <Star className="h-4 w-4 text-blue-900 fill-blue-900" />
        </div>
        <p className="text-lg text-gray-700">
      Ordering for our entire team was simple and the <span className="text-blue-800 p-0.5 bg-slate-200 font-semibold">shipping was lightning fast</span>. We’ll definitely be coming back for more
        </p>
     
      </div>
       <div className='flex gap-4 mt-2'>
              <IconUser className="rounded-full h-12 w-12 object-cover border-3 p-1"/>
                <div className='flex flex-col'>
                  <p className='font-semibold'>Marcus R, Hospital Procurement Officer</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
             </div>
    </div>
    </div>

  </MaxWidthWrapper>

  <div className="pt-16">
       <Reviews />
  </div>
</section>
    </section>
  );
}
