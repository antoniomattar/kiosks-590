/* eslint-disable @next/next/no-img-element */
export default function RestoCard(props: any) {
  return (
    <div className="m-3 mx-auto w-80 rounded-xl bg-teal-600 p-3 font-mono text-white shadow-lg  shadow-black ">
      <a href="/menu.pdf">
        <div className="mx-auto grid justify-center">
          <img
            src={props.resto_img_url}
            width={96}
            height={96}
            className=" mx-auto w-32 rounded object-cover"
            alt="food"
          />
          <p className="mt-2 text-center text-lg font-bold">
            {props.resto_name}
          </p>
        </div>
      </a>
    </div>
  );
}
