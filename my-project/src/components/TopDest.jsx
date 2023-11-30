import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const TopDest = () => {
  return (
    <div className=" ">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[150vh] bg-[url('../src/assets/bestdest.jpg')] bg-cover bg-center bg-no-repeat mb-0 pb-0">
      <p className="text-center text-4xl font-[Poppins] font-bold mb-0 pb-0 pt-5">Dream Your next Vacation!</p>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[350px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 text-5xl font-black uppercase text-white backdrop-blur-md">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default TopDest;

const cards = [
  {
    url: "../src/assets/topdestimg/italy.jpg",
    title: "ITALY",
    id: 1,
  },
  {
    url: "../src/assets/topdestimg/brazil.jpg",
    title: "BRAZIL",
    id: 2,
  },
  {
    url: "../src/assets/topdestimg/greece.jpg",
    title: "GREECE",
    id: 3,
  },
  {
    url: "../src/assets/topdestimg/tokyo.jpg",
    title: "TOKYO",
    id: 4,
  },
  {
    url: "../src/assets/topdestimg/india.jpg",
    title: "INDIA",
    id: 5,
  },
  {
    url: "../src/assets/topdestimg/nyc.jpg",
    title: "NYC",
    id: 6,
  },
  {
    url: "../src/assets/topdestimg/dubai.jpg",
    title: "DUBAI",
    id: 7,
  },
];