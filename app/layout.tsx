import "./globals.css";

export const metadata = {
  title: "Zondiwe&apos;s Funeral Website",
  description: "In memory of Zondiwe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
