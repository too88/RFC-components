import HeroImage from "~/images/market-place/hero.jpg";
import heroStyle from "./index.module.scss";

const Hero = () => {
  return (
    <div className={heroStyle.container}>
      <img className={heroStyle.image} src={HeroImage} alt="hero" />
    </div>
  );
};

export default Hero;
