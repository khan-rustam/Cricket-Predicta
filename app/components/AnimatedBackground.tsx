/**
 * Animated background component with cricket-themed elements
 * Creates visual interest with cricket balls, bats, and other decorative elements
 */
export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="cricket-bg absolute inset-0 opacity-10"></div>
      
      {/* Animated cricket ball */}
      <div className="absolute w-24 h-24 rounded-full bg-primary/20 animate-bounce-slow top-20 left-[10%]"></div>
      
      {/* Animated cricket bat */}
      <div className="absolute w-8 h-32 bg-secondary/20 rounded-b-3xl left-[20%] top-40 rotate-45 animate-pulse-slow"></div>
      
      {/* Animated pattern elements */}
      <div className="absolute w-40 h-40 rounded-full border-4 border-dashed border-primary/10 right-[15%] top-32 animate-spin-slow"></div>
      <div className="absolute w-64 h-64 rounded-full border border-primary/5 right-[25%] bottom-20 animate-pulse-slow"></div>
    </div>
  )
} 