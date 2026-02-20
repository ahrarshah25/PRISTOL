import React, { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'

const GermScene = () => {
  const groupRef = useRef()
  const particlesRef = useRef()
  const [germs, setGerms] = useState([])
  const [isAttacking, setIsAttacking] = useState(false)

  useEffect(() => {
    const newGerms = []
    for (let i = 0; i < 15; i++) {
      newGerms.push({
        id: i,
        position: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        ],
        scale: 0.3 + Math.random() * 0.3,
        speed: 0.01 + Math.random() * 0.02,
        color: i % 3 === 0 ? '#ff6b6b' : i % 3 === 1 ? '#feca57' : '#ff9ff3',
        health: 100
      })
    }
    setGerms(newGerms)

    const timer = setTimeout(() => {
      setIsAttacking(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002
    }

    setGerms(prev => prev.map(germ => {
      if (isAttacking) {
        return {
          ...germ,
          scale: Math.max(0, germ.scale - 0.005),
          position: germ.position.map(p => p + (Math.random() - 0.5) * 0.1)
        }
      } else {
        return {
          ...germ,
          position: germ.position.map((p, i) => 
            p + Math.sin(state.clock.elapsedTime * germ.speed + germ.id) * 0.005
          )
        }
      }
    }).filter(germ => germ.scale > 0))
  })

  return (
    <group ref={groupRef}>
      <group position={[0, 0, 0]}>
        
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1, 0.8, 2.5, 32]} />
          <meshPhysicalMaterial 
            color="#22c55e" 
            emissive="#166534"
            transparent 
            opacity={0.9}
            roughness={0.2}
            metalness={0.1}
            clearcoat={1}
          />
        </mesh>
        
        <mesh position={[0, 1.4, 0]} castShadow>
          <cylinderGeometry args={[0.6, 0.6, 0.3, 16]} />
          <meshStandardMaterial color="#16a34a" emissive="#14532d" />
        </mesh>
        
        <mesh position={[0, 0, 1.1]} castShadow>
          <boxGeometry args={[1.2, 1, 0.1]} />
          <meshStandardMaterial color="#ffffff" emissive="#f0fdf4">
            <primitive object={new THREE.Color(0.9, 1, 0.9)} />
          </meshStandardMaterial>
        </mesh>
        
        <Text
          position={[0, 0, 1.2]}
          fontSize={0.3}
          color="#166534"
          anchorX="center"
          anchorY="middle"
        >
          PRISTOL
        </Text>

        <pointLight position={[0, 0, 0]} distance={5} intensity={1} color="#4ade80" />
      </group>

      {germs.map((germ) => (
        <Germ 
          key={germ.id}
          position={germ.position}
          scale={germ.scale}
          color={germ.color}
          isAttacking={isAttacking}
        />
      ))}

      <group ref={particlesRef} position={[0, 0, 0]}>
        {[...Array(30)].map((_, i) => (
          <Particle 
            key={i}
            position={[
              Math.sin(i * 0.5) * 3,
              Math.cos(i * 0.8) * 2,
              Math.sin(i * 0.3) * 3
            ]}
            isAttacking={isAttacking}
          />
        ))}
      </group>

      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#4ade80" 
          emissive="#22c55e"
          transparent 
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#4ade80" 
          emissive="#22c55e"
          transparent 
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

const Germ = ({ position, scale, color, isAttacking }) => {
  const germRef = useRef()
  const [isDying, setIsDying] = useState(false)

  useEffect(() => {
    if (isAttacking) {
      setIsDying(true)
    }
  }, [isAttacking])

  useFrame(() => {
    if (germRef.current && isDying) {
      germRef.current.scale.x *= 0.95
      germRef.current.scale.y *= 0.95
      germRef.current.scale.z *= 0.95
      germRef.current.position.y += 0.01
    }
  })

  if (scale <= 0.1) return null

  return (
    <group ref={germRef} position={position} scale={scale}>
  
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(angle) * 0.7, Math.sin(angle) * 0.7, 0]}>
            <coneGeometry args={[0.1, 0.3, 8]} />
            <meshStandardMaterial color={color} />
          </mesh>
        )
      })}
      
      <mesh position={[0.2, 0.2, 0.4]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[-0.2, 0.2, 0.4]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  )
}

const Particle = ({ position, isAttacking }) => {
  const particleRef = useRef()

  useFrame((state) => {
    if (particleRef.current) {
      if (isAttacking) {
        particleRef.current.position.x += position[0] * 0.02
        particleRef.current.position.y += position[1] * 0.02
        particleRef.current.position.z += position[2] * 0.02
        particleRef.current.scale.x *= 1.02
        particleRef.current.scale.y *= 1.02
        particleRef.current.scale.z *= 1.02
      } else {
        particleRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime) * 0.2
        particleRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime) * 0.2
        particleRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 1.5) * 0.2
      }
    }
  })

  return (
    <mesh ref={particleRef} position={position}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshStandardMaterial 
        color="#4ade80" 
        emissive="#22c55e"
        transparent 
        opacity={0.6}
      />
    </mesh>
  )
}

export default GermScene