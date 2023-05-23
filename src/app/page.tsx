/* eslint-disable react/jsx-key */
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RestoCard from '@/components/RestoCard';

const restaurants = [
  {
    resto_name: 'The Grill Station',
    resto_img_url: '/the-grill-station.png',
  },
  {
    resto_name: 'The Youth Bar',
    resto_img_url: '/the-youth-bar.png',
  },
  {
    resto_name: 'MCSquare',
    resto_img_url: '/mc-square.png',
  },
];

export default function Page() {
  return (
    <div>
      <Header />
      <div className=" mb-10 flex h-fit flex-wrap justify-center p-1">
        {restaurants.map((resto) => (
          <RestoCard
            resto_name={resto.resto_name}
            resto_img_url={resto.resto_img_url}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
