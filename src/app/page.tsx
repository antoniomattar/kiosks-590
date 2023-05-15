import Header from '@/components/Header';
import Item from '@/components/Item';

export default function Page() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center p-3">
        <Item
          item_name="Mexican Beer"
          item_descp="Shi ktir tayib, 3anjad."
          item_price="6.99"
          item_img_url="https://www.thespruceeats.com/thmb/F2AcQzlDQM36muy9kUdKa6YNQqE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-chelada-beer-recipe-353185-hero-1-a6f5cf9344004854ac86654ad171d947.jpg"
        />
        <Item
          item_name="Tacos"
          item_descp="ingredients."
          item_price="5.99"
          item_img_url="https://www.challenges.fr/assets/img/2019/02/06/cover-r4x3w1200-5c5aed2c6ccc2-1d3c7813b898535d94b7ed0dae45e72a.jpg"
        />
      </div>
    </div>
  );
}
