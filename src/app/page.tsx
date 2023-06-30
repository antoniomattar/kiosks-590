/* eslint-disable react/jsx-key */
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RestoCard from '@/components/RestoCard';

const restaurants = [
  {
    resto_name: 'The Grill Station',
    resto_img_url: '/the-grill-station-2.webp',
    resto_menu_path: '/the-grill-station-menu.pdf',
  },
  {
    resto_name: 'The Youth Bar',
    resto_img_url: '/the-youth-bar.webp',
    resto_menu_path: '/the-youth-bar-menu.pdf',
  },
  {
    resto_name: 'Frozen Smiles',
    resto_img_url: '/frozen-smiles.webp',
    resto_menu_path: '/frozen-smiles-menu.pdf',
  },
  {
    resto_name: 'The Wrapery',
    resto_img_url: '/the-wrapery.png',
    resto_menu_path: '/menu.pdf',
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
            resto_menu_path={resto.resto_menu_path}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
