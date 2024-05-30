export default function Footer() {
  return (
    <div className=" flex w-full justify-center">
      <footer className=" fixed bottom-0 m-2 mx-auto h-10 w-fit items-center justify-center self-center rounded-xl bg-gray-300 p-2 text-center font-mono opacity-90">
        Follow us :{' '}
        <strong>
          <a href="https://www.instagram.com/kiosks590/">
            {' '}
            <u className="text-red-700">@kiosks590</u> !
          </a>
        </strong>
      </footer>
    </div>
  );
}
