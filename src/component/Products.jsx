import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      heading: "Opening Ceremony",
      description:
        "The official kickoff of the fest featuring introductions, keynote addresses, and a vibrant atmosphere that sets the tone for two exciting days ahead.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c621a3aa0ee3ae147d692_arqitel-bg-p-2000.webp",
      vid: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
    },
    {
      heading: "Tech Talk 1.1",
      description:
        "An engaging technical session where industry professionals share real-world experiences, emerging trends, and practical insights to inspire students and developers.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41319bda140bccae204ae_bg%202.png",
      vid: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
    },
    {
      heading: "Workshop 1.2",
      description:
        "A hands-on workshop designed to build practical skills through guided exercises, interactive problem-solving, and collaborative learning with mentors.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f11502e2fa59425089e2e6_Work%20Background-p-2000.png",
      vid: "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
    },
    {
      heading: "Competition 1.3",
      description:
        "A high-energy competitive event where participants test their skills under pressure, solve challenging problems, and compete for prizes and recognition.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64b754980b23ab2f2f2ff9e2_Work%20Background%20(1)-p-2000.jpg",
      vid: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
    },
    {
      heading: "Day 2 Keynote",
      description:
        "The second day begins with an inspiring keynote focused on innovation, personal growth, and future opportunities across technology and entrepreneurship.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2ccf5af18668cfbd3a8d6_bg%201-p-1600.png",
      vid: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
    },
    {
      heading: "Panel Discussion 2.2",
      description:
        "A thought-provoking panel discussion featuring multiple speakers sharing diverse perspectives, answering audience questions, and debating current industry challenges.",
      live: true,
      caseStudy: false,
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png",
      vid: "https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",
    },
    {
      heading: "DJ Night",
      description:
        "A grand musical finale featuring a live DJ, energetic beats, lighting effects, and an electrifying crowd celebrating memories and the success of the fest.",
      live: true,
      
      bgimg:
        "https://assets-global.website-files.com/6334198f239547f2fccd84c1/6450586e80fac7eb1655014f_yir2022%E2%80%93bg-p-2000.png",
      vid: "https://cdn.refokus.com/website/2022/videos/yahoo.webm",
    },
  ];

  const [top, setTop] = useState(0);
  const [vidTop, setVidTop] = useState(0);

  const changeTop = (id) => {
    setVidTop(id * 20);
    setTop(id * 14);
  };

  return (
    <div className="relative mt-28">
      {products.map((item, i) => (
        <Product changeTop={changeTop} data={item} key={i} id={i} />
      ))}

      {/* Floating Video Preview */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: top + "rem" }}
          className="absolute left-[20%] h-80 -mt-8 w-[35%] overflow-hidden rounded-md"
        >
          {products.map((v, i) => (
            <motion.video
              key={i}
              animate={{ y: -vidTop + "rem" }}
              className="h-full w-full object-cover"
              muted
              autoPlay
              loop
              src={v.vid}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
