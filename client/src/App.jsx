import { lazy, Suspense } from 'react'
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

function Pages() {
  const location = useLocation()
  return (
    <PageTransition>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
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
