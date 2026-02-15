import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import GermScene from './GermScene'
import { Sparkles, RotateCw, Zap } from 'lucide-react'

const Working = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 to-green-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-green-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-400 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full mb-6 backdrop-blur-sm border border-green-500/30">
            <Zap className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-300">How PRISTOL Works</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Germs Disappear in{' '}
            <span className="text-green-400 relative">
              3D
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C41.5 2 106 0.5 199 1" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg text-green-100/80">
            Watch how PRISTOL's advanced formula eliminates 99.9% of germs in real-time
          </p>
        </div>

        {/* 3D Canvas Container */}
        <div className="relative h-[600px] rounded-3xl overflow-hidden border border-green-500/30 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
          {/* Controls Hint */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2 bg-black/50 rounded-full backdrop-blur-sm border border-green-500/30">
            <RotateCw className="w-4 h-4 text-green-400" />
            <span className="text-xs text-green-300">Drag to rotate • Scroll to zoom</span>
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-4 left-4 z-10 flex gap-4">
            <div className="px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm border border-green-500/30">
              <span className="text-green-400 font-bold">99.9%</span>
              <span className="text-green-300 text-sm ml-2">Germs Eliminated</span>
            </div>
            <div className="px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm border border-green-500/30">
              <span className="text-green-400 font-bold">0.5s</span>
              <span className="text-green-300 text-sm ml-2">Kill Time</span>
            </div>
          </div>

          {/* Three.js Canvas */}
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-green-300">Loading 3D Scene...</p>
              </div>
            </div>
          }>
            <Canvas shadows className="w-full h-full">
              <PerspectiveCamera makeDefault position={[5, 5, 10]} />
              <OrbitControls 
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={1}
                maxPolarAngle={Math.PI / 2}
                minDistance={5}
                maxDistance={20}
              />
              
              {/* Lighting */}
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
              <pointLight position={[-10, 0, -10]} intensity={0.5} color="#4ade80" />
              <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.8} castShadow />
              
              {/* Environment */}
              <Environment preset="night" />
              
              {/* Main Scene */}
              <GermScene />
            </Canvas>
          </Suspense>
        </div>

        {/* Feature Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-green-500/30 group-hover:border-green-400 transition-all duration-500">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-green-100/70 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    title: "Contact",
    description: "PRISTOL formula makes immediate contact with harmful germs and bacteria"
  },
  {
    title: "Penetration",
    description: "Active ingredients penetrate the germ's protective membrane"
  },
  {
    title: "Elimination",
    description: "Germs are completely destroyed within seconds"
  }
]

export default Working