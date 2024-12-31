// app/layout.tsx

import './globals.css'
import { ReactNode } from 'react'
import Script from 'next/script'

export const metadata = {
  title: "FrameWise: AI Business Consultant for McKinsey-Level Insights",
  description: "Leverage time-tested frameworks—like Porter’s 5 Forces and SWOT—at a fraction of the cost. FrameWise empowers solopreneurs, small businesses, and startups to validate ideas, refine strategy, and scale with accessible AI-driven consulting.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect & Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* 
          We won't put <script> tags directly in the head. Instead, we'll use Next's <Script> component 
          for Google Analytics. 
        */}
      </head>
      <body>
        {children}

        {/* Google Analytics Tag (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-N87RH6EZ86"
          strategy="afterInteractive"
        />
        
        {/* Inline script to configure gtag */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N87RH6EZ86');
          `}
        </Script>
      </body>
    </html>
  )
}
