import './globals.css'

export const metadata = {
  title: 'Calorie Tracker',
  description: 'A Journal to rack your daily calorie intake',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
