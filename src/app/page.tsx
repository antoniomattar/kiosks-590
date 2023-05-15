import Header from '@/components/Header';
import Item from '@/components/Item';
import RestoCard from '@/components/RestoCard';

export default function Page() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center p-1">
        <RestoCard
          resto_name="Youth Bar"
          resto_img_url="https://media-cdn.tripadvisor.com/media/photo-s/19/e8/5e/5f/wave-bar.jpg"
        />
        <RestoCard
          resto_name="Pork Bar"
          resto_img_url="https://img77.uenicdn.com/image/upload/v1668612590/business/76f7075e-dbc9-4e7f-b99f-d302846546c8.jpg"
        />
        <RestoCard
          resto_name="Frooza Bar"
          resto_img_url="https://portsoyicecream.co.uk/site/wp-content/uploads/ice-cream-collection.jpg"
        />
      </div>
    </div>
  );
}
