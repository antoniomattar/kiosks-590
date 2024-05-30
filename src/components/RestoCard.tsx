/* eslint-disable @next/next/no-img-element */
export default function RestoCard(props: any) {
  return (
    <div className="m-3 mx-auto w-80 rounded-xl p-3 font-mono text-white">
      <a href={props.resto_menu_path}>
        <div className="mx-auto grid justify-center">
          <img
            src={props.resto_img_url}
            width={96}
            height={96}
            className=" mx-auto w-32 rounded object-cover"
            alt="food"
          />
          <p className="mt-2 rounded-xl bg-red-700 p-3 text-center text-lg font-bold shadow-lg shadow-black">
            {props.resto_name}
          </p>
        </div>
      </a>
    </div>
  );
}
