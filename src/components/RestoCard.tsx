/* eslint-disable @next/next/no-img-element */
export default function RestoCard(props: any) {
  return (
    <div className="m-3 mx-auto w-80 rounded-md bg-teal-600 p-3 font-mono text-white shadow-lg  shadow-black ">
      <a href="https://sd.keepcalms.com/i/new-menu-is-coming-soon.png">
        <div className="grid justify-center">
          <img
            src={props.resto_img_url}
            width={128}
            height={128}
            className="h-32 w-32 rounded object-cover"
            alt="food"
          />
          <div className="ml-4 flex flex-col justify-between">
            <p className="mt-2 text-center text-lg font-bold">
              {props.resto_name}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
