import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-green-500 flex justify-between items-center py-4 px-6 text-white">
      <Image src="/logo.png" alt="EarthWise Logo" width={150} height={150} />
      <p className="ml-auto">Copyright © EarthWise. All rights reserved</p>
    </footer>
  );
}
