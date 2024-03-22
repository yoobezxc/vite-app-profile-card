import bgCard from "../../src/images/bg-pattern-card.svg";
import profileCard from "../../src/images/image-victor.jpg";

function Card() {
  return (
    <>
      <div className="relative w-72">
        <div>
          <img className="rounded-t-xl" src={bgCard} alt="" />
        </div>
        <div className="absolute left-24 top-16 inline-block rounded-full ring-4 ring-white">
          <img className="rounded-full" src={profileCard} alt="" />
        </div>
        <div className="rounded-b-lg bg-white text-center">
          <div className="pb-6 pt-16">
            <h1 className="pb-1 text-lg font-bold">
              Victor Crest
              <span className="ml-2  font-normal text-[#6a6f81]">26</span>
            </h1>
            <p className="text-sm text-[#6a6f81]">London</p>
          </div>
          <hr />
          <div className="flex justify-around py-5 text-lg">
            <div>
              <h2 className="font-bold">80K</h2>
              <p className="text-sm">followers</p>
            </div>
            <div>
              <h2 className="font-bold">803K</h2>
              <p className="text-sm">likes</p>
            </div>
            <div>
              <h2 className="font-bold">1.4K</h2>
              <p className="text-sm">photos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
