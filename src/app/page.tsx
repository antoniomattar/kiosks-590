/* eslint-disable react/jsx-key */
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RestoCard from '@/components/RestoCard';

const restaurants = [
  {
    resto_name: 'Youth Bar',
    resto_img_url:
      'https://media-cdn.tripadvisor.com/media/photo-s/19/e8/5e/5f/wave-bar.jpg',
  },
  {
    resto_name: 'Pork Bar',
    resto_img_url:
      'https://img77.uenicdn.com/image/upload/v1668612590/business/76f7075e-dbc9-4e7f-b99f-d302846546c8.jpg',
  },
  {
    resto_name: 'Frooza Bar',
    resto_img_url:
      'https://portsoyicecream.co.uk/site/wp-content/uploads/ice-cream-collection.jpg',
  },
];

export default function Page() {
  return (
    <div>
      <Header />
      <div className=" mb-52 flex h-fit flex-wrap justify-center p-1">
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
