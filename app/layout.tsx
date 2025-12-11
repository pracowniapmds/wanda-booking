import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Montserrat } from 'next/font/google';
import React from 'react';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Wanda i Banda – Booking',
  description: 'Rezerwacja terminów koncertów Wanda i Banda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html lang="pl">
      <head>
        {isProduction && (
          <>
            {/* Cookiebot */}
            <Script
              id="cookiebot"
              src="https://consent.cookiebot.com/uc.js"
              data-cbid="78e2b339-92ff-4140-b0d7-b57fa38dc396"
              type="text/javascript"
              strategy="beforeInteractive"
            />

            {/* Loader gtag.js - GA4 (G-1DM1EEPP83) - wspólny z wandaibanda.pl */}
            <Script
              id="ga-gtag-loader"
              src="https://www.googletagmanager.com/gtag/js?id=G-1DM1EEPP83"
              strategy="afterInteractive"
            />
          </>
        )}
      </head>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        {isProduction && (
          <Script id="ga-ads" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              // GA4 - wspólny tag + cross-domain
              gtag('config', 'G-1DM1EEPP83', {
                linker: {
                  domains: ['wandaibanda.pl', 'booking.wandaibanda.pl']
                }
              });

              // Google Ads - remarketing / konwersje
              gtag('config', 'AW-17783263323');
            `}
          </Script>
        )}

        {children}
      </body>
    </html>
  );
}
