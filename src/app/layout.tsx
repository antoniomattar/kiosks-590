import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Welcome to Kiosks-590, the ultimate food court destination in Hasroun, North Lebanon! Indulge in delectable flavors while immersing yourself in a world of fun and parties. Discover a vibrant culinary experience where every bite is a celebration. From mouthwatering delights to lively ambiance, Kiosks-590 offers a gastronomic extravaganza that will leave you craving for more. Join us for an unforgettable journey of food, laughter, and good times. Come and taste the joy at Kiosks-590, where every meal is a party!"
        />
        <meta
          name="keywords"
          content="Kiosks-590, food court, Hasroun, North Lebanon, flavors, fun, parties, culinary experience, gastronomic extravaganza"
        />
        <meta name="author" content="Antonio M" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
        <title>Kiosks-590 | Food Court in Hasroun, North Lebanon</title>
      </head>

      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
