import { Image } from "../../lib/external-components";

const HeroImage = ({ data }) => {
  return (
    <div className="w-full">
      <Image
        src={data.sourceUrl}
        alt={data.altText}
        width={1615}
        height={891}
        priority
      />
    </div>
  );
};

export default HeroImage;
