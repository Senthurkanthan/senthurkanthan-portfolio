import "./globals.css";

export const metadata = {
  title: "Senthurkanthan | DevOps Engineer",
  description:
    "Portfolio of Senthurkanthan - DevOps Engineer and Linux Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
