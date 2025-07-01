'use client'

import { motion } from 'framer-motion'
import { Icons } from './ui/Icons'
import MaxWidthWrapper from './MaxWidthWrapper'

const IMAGES = [
  '/testimonials/1.jpg',
  '/testimonials/2.jpg',
  '/testimonials/3.jpg',
  '/testimonials/4.jpg',
  '/testimonials/5.jpg',
  '/testimonials/6.jpg',
]

function InfiniteScrollColumn({
  images,
  reverse = false,
  speed = 30,
}: {
  images: string[]
  reverse?: boolean
  speed?: number
}) {
  const scrollDistance = 1000

  return (
    <div className="overflow-hidden h-[500px] w-full">
      <motion.div
        initial={{ y: reverse ? -scrollDistance : 0 }}
        animate={{ y: reverse ? 0 : -scrollDistance }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: speed,
        }}
        className="flex flex-col gap-4"
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="w-64 h-96 bg-white rounded-xl shadow mx-auto overflow-hidden"
          >
            <img
              src={src}
              alt={`img-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Reviews() {
  const col1 = IMAGES.slice(0, 3)
  const col2 = IMAGES.slice(3, 6)
  const col3 = IMAGES.slice(0, 3)

  return (
    <section className="bg-slate-100 py-16 relative">
      <MaxWidthWrapper>
        {/* ✅ Heading ABOVE the photos */}
        <div className="tracking-tight text-center items-center text-balance leading-tight font-bold text-gray-900 text-4xl sm:text-5xl md:text-6xl mb-12">
          <h2 className="inline-block">
            Our{' '}
            <span className="text-blue-900 relative px-2">
              Products
              <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-blue-800" />
            </span>
          </h2>
          <div className="mt-4 flex justify-center">
        
          </div>
        </div>

        {/* 🔁 Animated scroll columns below the heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <InfiniteScrollColumn images={col1} />
          <InfiniteScrollColumn images={col2} reverse />
          <InfiniteScrollColumn images={col3} />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
