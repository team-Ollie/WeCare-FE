import { NextPage } from "next";
import FlexBox from "../Flexbox";
import { PopularChallenge } from "./popular";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const HomeCarousel: NextPage = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="w-full embla overflow-hidden rounded-lg " ref={emblaRef}>
      <FlexBox className="embla__container">
        <PopularChallenge />
        <PopularChallenge />
        <PopularChallenge />
      </FlexBox>
    </div>
  );
};
