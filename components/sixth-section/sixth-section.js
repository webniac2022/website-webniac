import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  Image,
} from "../../lib/external-components";
// Parallax portfolio carousel
const data = [
  {
    id: "first",
    url: "https://res.cloudinary.com/webniac/image/upload/v1662896183/WEBNIAC/pexels-picjumbocom-196655_qa7rbc.jpg",
  },
  {
    url: "https://res.cloudinary.com/webniac/image/upload/v1662896183/WEBNIAC/pexels-annushka-ahuja-8113852_ofcliv.jpg",
    id: "second",
  },
  {
    url: "https://res.cloudinary.com/webniac/image/upload/v1662896183/WEBNIAC/pexels-yaroslava-borz-10550163_rnw33z.jpg",
    id: "third",
  },

  {
    url: "https://res.cloudinary.com/webniac/image/upload/v1662897453/WEBNIAC/pexels-dom-j-297494_iznofj.jpg",
    id: "fourth",
  },
  {
    url: "https://res.cloudinary.com/webniac/image/upload/v1662897453/WEBNIAC/pexels-lisa-fotios-1812527_bl572p.jpg",
    id: "fifth",
  },
  {
    url: "https://res.cloudinary.com/webniac/image/upload/v1662897453/WEBNIAC/pexels-keegan-checks-12715582_jsh0zb.jpg",
    id: "sixth",
  },
  {
    url: "https://res.cloudinary.com/webniac/image/upload/v1662897454/WEBNIAC/pexels-matheus-viana-2372935_chucfd.jpg",
    id: "seventh",
  },
  {
    url: "https://res.cloudinary.com/webniac/image/upload/v1662570409/WEBNIAC/pexels-felix-mittermeier-956981_f6iecs.jpg",
    id: "eight",
  },
  {
    url: "https://res.cloudinary.com/webniac/image/upload/v1662570568/WEBNIAC/pexels-francesco-ungaro-998641_cn9aj8.jpg",
    id: "ninth",
  },
];

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const SixthSection = () => {
  const optimizedData = data.reduce((resultArr, item, index) => {
    const chunkIndex = Math.floor(index / 4);
    if (!resultArr[chunkIndex]) {
      resultArr[chunkIndex] = [];
    }
    resultArr[chunkIndex].push(item);
    return resultArr;
  }, []);
  const sliderRef = useRef();
  const slidesRef = useRef();
  const [sliderWidth, setSliderWidths] = useState(0);
  const [slidesWidth, setSlidesWidths] = useState(0);

  useEffect(() => {
    const measureSliderWidth = () => {
      setSliderWidths(sliderRef.current.clientWidth);
    };

    const measureSlidesWidth = () => {
      const slidesNode = slidesRef.current.childNodes;
      const slidesArr = Array.from(slidesNode);
      const slidesSumWidth = slidesArr.reduce(
        (acc, node) => acc + node.clientWidth,
        0
      );
      setSlidesWidths(slidesSumWidth);
    };

    measureSliderWidth();
    measureSlidesWidth();

    window.addEventListener("resize", measureSliderWidth);
    window.addEventListener("resize", measureSlidesWidth);

    return () => {
      window.removeEventListener("resize", measureSliderWidth);
      window.removeEventListener("resize", measureSlidesWidth);
    };
  }, [sliderWidth, slidesWidth]);

  console.log(optimizedData);

  return (
    <div className="w-full mt-16 flex flex-col gap-16 items-center">
      <div className="flex flex-row justify-center">
        <h2 className="text-5xl font-bold text-center text-lightContrastText dark:text-darkHeading">
          Portofoliu
        </h2>
      </div>
      {/* carousel */}
      <div
        ref={sliderRef}
        className="w-full overflow-x-hidden hover:cursor-grab active:cursor-grabbing active:scale-[.95]"
      >
        <motion.ul
          className="flex list-none"
          ref={slidesRef}
          drag="x"
          dragConstraints={{
            left: -(slidesWidth - sliderWidth),
            right: 0,
          }}
          dragElastic={0.2}
          dragTransition={{ bounceDamping: 18 }}
        >
          {optimizedData.map((d, i) => {
            return (
              <li key={i} className="">
                <motion.div className="grid gap-2 w-[90vw] flex-shrink-0 h-[40vh] sm:h-[60vh] md:h-[70vh] grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[2fr_1fr_1fr_1fr] p-1">
                  <div className="relative col-start-1 col-end-3 row-start-1 row-end-5">
                    {d.length >= 0 && (
                      <Image
                        src={d[0].url}
                        alt={d[0].id}
                        layout="fill"
                        objectFit="cover"
                        className="rounded pointer-events-none"
                      />
                    )}
                  </div>
                  <div className="relative">
                    {d.length > 1 && (
                      <Image
                        src={d[1].url}
                        alt={d[1].id}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded pointer-events-none"
                      />
                    )}
                  </div>
                  <div className="relative">
                    {d.length > 2 && (
                      <Image
                        src={d[2].url}
                        alt={d[2].id}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded pointer-events-none"
                      />
                    )}
                  </div>
                  <div className="relative col-start-3 col-end-5 row-start-2 row-end-5">
                    {d.length > 3 && (
                      <Image
                        src={d[3].url}
                        alt={d[3].id}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded pointer-events-none"
                      />
                    )}
                  </div>
                </motion.div>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};

export default SixthSection;
