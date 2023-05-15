/* eslint-disable @next/next/no-img-element */
export default function Item(props: any) {
  return (
    <div className="m-6 mx-auto w-80 rounded-md bg-yellow-500 p-6 font-mono text-white shadow-lg  shadow-black ">
      <div className="flex justify-between">
        <img
          src={props.item_img_url}
          width={128}
          height={128}
          className="h-32 w-32 rounded object-cover"
          alt="food"
        />
        <div className="ml-4 flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold">{props.item_name}</h1>
            <p className="text-sm">{props.item_descp}</p>
          </div>
          <p className="mt-2 text-lg font-bold">Price: ${props.item_price}</p>
        </div>
      </div>
    </div>
  );
}
