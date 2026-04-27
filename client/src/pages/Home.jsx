import Hero from '@/sections/home/Hero'
import Marquee from '@/sections/home/Marquee'
import Stats from '@/sections/home/Stats'
import ScrollStory from '@/sections/home/ScrollStory'
import FeaturedDestinations from '@/sections/home/FeaturedDestinations'
import PopularTours from '@/sections/home/PopularTours'
import WhyUs from '@/sections/home/WhyUs'
import Testimonials from '@/sections/home/Testimonials'
import Newsletter from '@/sections/home/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <ScrollStory />
      <FeaturedDestinations />
      <PopularTours />
      <WhyUs />
      <Testimonials />
      <Newsletter />
    </>
  )
}
