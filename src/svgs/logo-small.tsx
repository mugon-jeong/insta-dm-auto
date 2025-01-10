import React from 'react'

const LogoSmall = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <defs>
        <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#F58529', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#DD2A7B', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8134AF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Background Rectangle */}
      <rect x="10" y="10" width="80" height="80" fill="url(#instagramGradient)" rx="10" ry="10" />

      {/* Paper Plane */}
      <g transform="translate(20, 30)">
        <path
          d="M27,22.2l-4.8,10.012l8.391-7.115L22.2,32.212V20.4L61.375,1.125L22.2,20.4l-21-1.9c-0.9-0.3-1.4-1.3-1.1-2.3L60.8,0
          c0.9,0.3,1.4,1.3,1.1,2.3L43.8,32.8c-0.3,0.9-1.3,1.4-2.3,1.1L27,22.2z"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default LogoSmall