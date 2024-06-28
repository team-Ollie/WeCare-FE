import { NextPage } from "next";
import FlexBox from "../Flexbox";
import PopularChallenge from "./popular";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useGetChallengeAds } from "@/apis/hooks/challenge";

const HomeCarousel: NextPage = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { data } = useGetChallengeAds();

  return (
    <div className="w-full embla overflow-hidden rounded-lg" ref={emblaRef}>
      <FlexBox className="embla__container">
        <PopularChallenge
          challengeInfo={data?.result.mostAttendancedChallenge}
          type="mostAttendancedChallenge"
        />
        <PopularChallenge
          challengeInfo={data?.result.mostParticipatedChallenge}
          type="mostParticipatedChallenge"
        />
        <PopularChallenge
          challengeInfo={data?.result.mostRecentlyStartedChallenge}
          type="mostRecentlyStartedChallenge"
        />
      </FlexBox>
    </div>
  );
};

export default HomeCarousel;
