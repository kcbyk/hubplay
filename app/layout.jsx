import "./globals.css";

export const metadata = {
  title: "HubPlay - Ana Sayfa",
  description: "HubPlay Web Arayüzü",
  icons: {
    icon: "https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="netflix-dark">{children}</body>
    </html>
  );
}
