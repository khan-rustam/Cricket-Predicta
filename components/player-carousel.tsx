"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Player data
const players = [
  {
    id: 1,
    name: "Virat Kohli",
    role: "Batsman",
    stats: "Average: 53.5",
    image: "https://resources.pulse.icc-cricket.com/players/284/164.png",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    role: "Batsman / Captain",
    stats: "Centuries: 30+",
    image: "https://resources.pulse.icc-cricket.com/players/284/107.png",
  },
  {
    id: 3,
    name: "Jasprit Bumrah",
    role: "Fast Bowler",
    stats: "Economy: 4.5",
    image: "https://resources.pulse.icc-cricket.com/players/284/1124.png",
  },
  {
    id: 4,
    name: "Ravindra Jadeja",
    role: "All-rounder",
    stats: "Wickets: 250+",
    image: "https://resources.pulse.icc-cricket.com/players/284/9.png",
  },
  {
    id: 5,
    name: "KL Rahul",
    role: "Wicketkeeper-Batsman",
    stats: "Average: 44.7",
    image: "https://resources.pulse.icc-cricket.com/players/284/1125.png",
  },
  {
    id: 6,
    name: "Hardik Pandya",
    role: "All-rounder",
    stats: "Strike Rate: 145+",
    image: "https://resources.pulse.icc-cricket.com/players/284/2740.png",
  }
]

export default function PlayerCarousel() {
  const [currentPlayer, setCurrentPlayer] = useState(0)

  // Auto-rotate players
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlayer((prev) => (prev + 1) % players.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextPlayer = () => {
    setCurrentPlayer((prev) => (prev + 1) % players.length)
  }

  const prevPlayer = () => {
    setCurrentPlayer((prev) => (prev - 1 + players.length) % players.length)
  }

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-xl bg-muted/20">
        {players.map((player, index) => (
          <div
            key={player.id}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
              index === currentPlayer 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="relative w-full h-full">
              <Image 
                src={player.image} 
                alt={player.name} 
                fill 
                className="object-contain p-4" 
                {...(index === currentPlayer ? { priority: true } : { loading: "lazy" })}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 bg-background/80 backdrop-blur-sm p-4 rounded-b-xl">
        <div className="text-center">
          <h3 className="text-xl font-bold">{players[currentPlayer].name}</h3>
          <p className="text-sm text-muted-foreground">{players[currentPlayer].role}</p>
          <p className="text-sm font-medium">{players[currentPlayer].stats}</p>
        </div>
      </div>

      <div className="flex justify-between w-full mt-4">
        <Button variant="outline" size="icon" onClick={prevPlayer} aria-label="Previous player">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-1">
          {players.map((_, index) => (
            <span
              key={index}
              className={`block h-2 w-2 rounded-full ${index === currentPlayer ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={nextPlayer} aria-label="Next player">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

