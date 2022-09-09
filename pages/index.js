import FirstSection from "../components/first-section/first-section";
import SecondSection from "../components/second-section/second-section";
import ThirdSection from "../components/third-section/third-section";

export default function Home() {
  return (
    <div className="p-1">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
