"use client"

import { motion } from "framer-motion"

interface StickerProps {
  text: string
  bgColor: string
  rotation: number
  top: string
  left: string
  delay: number
}

export function HeroSticker({ text, bgColor, rotation, top, left, delay }: StickerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 100 }}
      className={`absolute ${bgColor} text-xs font-bold px-4 py-2 rounded-full`}
      style={{
        top,
        left,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay }}>
        {text}
      </motion.div>
    </motion.div>
  )
}
