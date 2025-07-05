"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  { img: "/portfolio/img1.jpg" },
  { img: "/portfolio/img2.jpg" },
  { img: "/portfolio/img3.jpg" },
  { img: "/portfolio/img4.jpg" },
  { img: "/portfolio/img5.jpg" },
  { img: "/portfolio/img6.jpg" },
  { img: "/portfolio/img7.jpg" },
  { img: "/portfolio/img8.jpg" },
  { img: "/portfolio/img9.jpg" },
  { img: "/portfolio/img10.jpg" },
  { img: "/portfolio/img11.jpg" },
  { img: "/portfolio/img12.jpg" },
  { img: "/portfolio/img13.jpg" },
  { img: "/portfolio/img14.jpg" },
];

const Portfolio = () => {
  useEffect(() => {
    // Inject CSS
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "/carousel/css/carousel.css";
    document.head.appendChild(style);

    // Inject Glide.js
    const scriptGlide = document.createElement("script");
    scriptGlide.src = "/carousel/js/glide.js";
    scriptGlide.async = false;
    document.body.appendChild(scriptGlide);

    // Inject index.js after Glide.js loads
    scriptGlide.onload = () => {
      const scriptIndex = document.createElement("script");
      scriptIndex.src = "/carousel/js/index.js";
      scriptIndex.async = false;
      document.body.appendChild(scriptIndex);
    };

    return () => {
      document.head.removeChild(style);
      document.body.removeChild(scriptGlide);
      // Optionally remove index.js if needed
    };
  }, []);

  return (
    <div className="my-carousel">
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex flex-col items-center py-24 px-4 mt-12"
      >
        <div className="text-center">
          <span className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent">
            Portfolio
          </span>
          <span
            className="text-5xl block font-extrabold mb-10 bg-gradient-to-r from-[#A084DC] to-[#F6C6EA] bg-clip-text text-transparent drop-shadow heading"
          >
            Look What I Did
          </span>
        </div>
        <div className="space space--xlarge">
          <div className="hero" data-component="fadereveal">
            <div className="hero__wrapper container">
              <div className="slider slider--big glide" data-component="hero">
                <div className="slider__arrows flex flex-row gap-4 justify-center items-center" data-glide-el="controls">
                  <button
                    className="slider__arrow slider__arrow--prev glide__arrow glide__arrow--prev flex items-center justify-center"
                    data-ref="fadereveal[el]"
                    data-glide-dir="<"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z" />
                    </svg>
                  </button>

                  <button
                    className="slider__arrow slider__arrow--next glide__arrow glide__arrow--next flex items-center justify-center"
                    data-ref="fadereveal[el]"
                    data-glide-dir=">"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                    </svg>
                  </button>
                </div>

                <div
                  className="frames glide__track"
                  data-component="slidereveal"
                  data-glide-el="track"
                >
                  <ul className="frames__list glide__slides">
                    {portfolioItems.map((item, idx) => (
                      <li className="frames__item glide__slide" key={idx}>
                        <div data-ref="slidereveal[el]">
                          <div className="frame" data-ref="hero[el]">
                            <img
                              src={item.img}
                              alt={`Portfolio item ${idx + 1}`}
                              className="w-full h-64 object-cover rounded-xl shadow-lg"
                            />
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
