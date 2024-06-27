/* eslint-disable react/jsx-key */
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RestoCard from '@/components/RestoCard';

const restaurants = [
  {
    resto_name: 'Porky Way',
    resto_img_url: 'logos/porky-way.png',
    resto_menu_path: 'menus/the-grill-station-menu.pdf',
  },
  {
    resto_name: 'The Youth Bar',
    resto_img_url: 'logos_webp/the-youth-bar.webp',
    resto_menu_path: 'menus/the-youth-bar-menu.pdf',
  },
  {
    resto_name: 'Frozen Smiles',
    resto_img_url: 'logos_webp/frozen-smiles.webp',
    resto_menu_path: 'menus/menu-1.pdf',
  },
  {
    resto_name: 'The Wrapery',
    resto_img_url: 'logos/the-wrapery.png',
    resto_menu_path: 'menus/george-menu.pdf',
  },
];

export default function Page() {
  return (
    <div className=" h-full min-h-screen bg-gray-200">
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
