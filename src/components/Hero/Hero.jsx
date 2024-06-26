import { FeatureCard, Navbar } from "..";
const Hero = ({ article, index }) => {
  return (
    <div>
      {article && <FeatureCard article={article} index={index} />} <Navbar />
    </div>
  );
};

export default Hero;
