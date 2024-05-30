import Image from 'next/image';

export default function Header() {
  return (
    <header className="py-2">
      <div className="container mx-auto flex items-center justify-center">
        <Image
          src="/logos/main-logo.png"
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
