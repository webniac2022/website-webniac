import Image from "next/future/image";

const HeroImage = ({ data }) => {
  return (
    <div className="w-full">
      <Image
        src={data.sourceUrl}
        alt={data.altText}
        width={1615}
        height={891}
        style={{ opacity: 0.8 }}
        priority
      />
    </div>
  );
};

export default HeroImage;
