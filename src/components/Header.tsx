import Image from 'next/image';

export default function Header() {
  return (
    <header className=" bg-blue-950 py-4">
      <div className="container mx-auto flex items-center justify-center">
        <Image
          src="/main-logo.png"
          alt="logo"
          height={120}
          width={120}
          className=" rounded-md"
        />
        {/* <h1 className="font-serif text-3xl font-bold text-white">KIOSK-٥٩٠</h1> */}
      </div>
    </header>
  );
}
