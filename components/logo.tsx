import { cn } from '../lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
  return (
    <svg
      viewBox="0 0 200 80" // Adjusted for text height and width
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-foreground h-10 w-auto', className)} // Optimized size for visibility
    >
      <g fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold" letterSpacing="0.5">
        <text x="20" y="50" fill={uniColor ? 'currentColor' : '#1E3A8A'}>DR</text>
        <text x="80" y="50" fill={uniColor ? 'currentColor' : '#4A5568'}>FLOW</text>
      </g>
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#1E3A8A" /> {/* Deep blue-green */}
          <stop offset="50%" stopColor="#2D6B5F" /> {/* Mid-tone green */}
          <stop offset="100%" stopColor="#4A5568" /> {/* Darker shade */}
        </linearGradient>
      </defs>
    </svg>
  )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-5', className)}
    >
      <text
        x="5"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
      >
        DRF
      </text>
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="50%" stopColor="#2D6B5F" />
          <stop offset="100%" stopColor="#4A5568" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn('size-7 w-7', className)}
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="10"
        y="50"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="bold"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        DRF
      </text>
    </svg>
  )
}