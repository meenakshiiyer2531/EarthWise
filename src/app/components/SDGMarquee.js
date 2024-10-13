import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const sdgData = [
  { id: 1, logo: "/images/sdg1.png" },
  { id: 2, logo: "/images/sdg2.png" },
  { id: 3, logo: "/images/sdg3.png" },
  { id: 4, logo: "/images/sdg4.png" },
  { id: 5, logo: "/images/sdg5.png" },
  { id: 6, logo: "/images/sdg6.png" },
  { id: 7, logo: "/images/sdg7.png" },
  { id: 8, logo: "/images/sdg8.png" },
  { id: 9, logo: "/images/sdg9.png" },
  { id: 10, logo: "/images/sdg10.png" },
  { id: 11, logo: "/images/sdg11.png" },
  { id: 12, logo: "/images/sdg12.png" },
  { id: 13, logo: "/images/sdg13.png" },
  { id: 14, logo: "/images/sdg14.png" },
  { id: 15, logo: "/images/sdg15.png" },
  { id: 16, logo: "/images/sdg16.png" },
  { id: 17, logo: "/images/sdg17.png" },
];

export default function SDGMarquee() {
  return (
    <Marquee gradient={false} speed={50}>
      {sdgData.map((sdg) => (
        <div key={sdg.id} className="p-4">
          <Image src={sdg.logo} alt={`SDG ${sdg.id}`} width={100} height={100} />
        </div>
      ))}
    </Marquee>
  );
}
