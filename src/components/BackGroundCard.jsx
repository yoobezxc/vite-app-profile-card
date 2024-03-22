import bgPatternTop from "../../src/images/bg-pattern-top.svg";
import bgPatternBottom from "../../src/images/bg-pattern-bottom.svg";
import Card from "./Card.jsx";

function BackGroundCard() {
  return (
    <>
      <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#19a2ae] font-['Kumbh_Sans']">
        <img
          className="absolute -left-16 -top-44 w-[400px]"
          src={bgPatternTop}
          alt=""
        />
        <img
          className="absolute -bottom-44 -right-16 w-[400px]"
          src={bgPatternBottom}
          alt=""
        />
        <Card />
      </main>
    </>
  );
}

export default BackGroundCard;
