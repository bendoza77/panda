import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useLenis } from '@/hooks/useLenis'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Loader from '@/components/layout/Loader'
import PageTransition, { TransitionVeil } from '@/components/layout/PageTransition'

const Home = lazy(() => import('@/pages/Home'))
const Destinations = lazy(() => import('@/pages/Destinations'))
const Tours = lazy(() => import('@/pages/Tours'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const Bespoke = lazy(() => import('@/pages/Bespoke'))
const GiftCards = lazy(() => import('@/pages/GiftCards'))
const PressKit = lazy(() => import('@/pages/PressKit'))
const Careers = lazy(() => import('@/pages/Careers'))
const Sustainability = lazy(() => import('@/pages/Sustainability'))
const FAQ = lazy(() => import('@/pages/FAQ'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const Terms = lazy(() => import('@/pages/Terms'))

function Pages() {
  const location = useLocation()

  useEffect(() => {
    const titles = {
      '/': 'Panda — Crafted Journeys Around The World',
      '/destinations': 'Destinations — Panda',
      '/tours': 'Tours — Panda',
      '/bespoke': 'Bespoke journeys — Panda',
      '/gift-cards': 'Gift cards — Panda',
      '/about': 'About — Panda',
      '/press-kit': 'Press kit — Panda',
      '/careers': 'Careers — Panda',
      '/sustainability': 'Sustainability — Panda',
      '/faq': 'FAQ — Panda',
      '/privacy': 'Privacy policy — Panda',
      '/terms': 'Terms of service — Panda',
      '/contact': 'Contact — Panda',
    }

    document.title = titles[location.pathname] ?? 'Panda'
  }, [location.pathname])

  return (
    <PageTransition>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/bespoke" element={<Bespoke />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/about" element={<About />} />
          <Route path="/press-kit" element={<PressKit />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </PageTransition>
  )
}

export default function App() {
  useLenis()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Loader />
      <ScrollProgress />
      <TransitionVeil />
      <Navbar />
      <Pages />
      <Footer />
    </div>
  )
}
