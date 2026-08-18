import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Altavia | Global Food Trading',
  description:
    'Altavia is a Hong Kong-based international food trading company specializing in poultry, beef and lamb products. We source from the Middle East, North Africa, and Europe, delivering to Southeast Asia.',
  keywords: [
    'Altavia',
    'food trading',
    'poultry',
    'chicken feet',
    'beef',
    'lamb',
    'international trade',
    'Hong Kong',
    'Southeast Asia',
    'Middle East',
    'North Africa',
    'Europe',
  ],
  openGraph: {
    title: 'Altavia | Global Food Trading',
    description:
      'Hong Kong-based international food trading company. Sourcing premium poultry, beef and lamb from the Middle East, North Africa, and Europe to Southeast Asia.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-cream text-[#1A1A1A] font-sans">
        {children}
      </body>
    </html>
  );
}
