import "./globals.css";

export const metadata = {
  title: "Veloura Street",
  description: "Premium fashion storefront",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}