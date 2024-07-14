import React from "react";
import { ButtonIcon } from "../../icons/button-icon";
import { Button } from "../../button";
import { AboutIcon } from "../../icons/about-icon";
import { AboutIcon2 } from "../../icons/about-icon2";
import { Product } from "../data/products";
export const Home = () => {
  return (
    <>
      <section
        style={{ backgroundImage: " url(../home/home.jpeg) " }}
        className="w-[1519px] h-screen bg-cover bg-center bg-no-repeat "
      >
        <div className="container pt-[247px]">
          <i className="text-secondary text-[30px] pb-[8px] font-serif">
            100% Natural Food
          </i>
          <h1 className="mb-[23px] text-primary text-[60px] w-[480px] font-bold">
            Choose the best <br />
            healthier way <br /> of life
          </h1>
          <Button
            variant="primary"
            className="flex transition-transform transform hover:scale-105 hover:shadow-lg "
            endIcon={<ButtonIcon />}
            type="submit"
          >
            Explore Now
          </Button>
        </div>
      </section>
      <section className="py-[145px]">
        <div className="container ">
          <ul className="flex gap-[20px]">
            <li
              style={{ backgroundImage: " url(../home/home2.png) " }}
              className="w-[680px] rounded-[20px] h-[367px] bg-no-repeat pt-[115px] pl-[60px]   "
            >
              <i className="text-white text-[36px] font-serif">Natural!!</i>
              <h1 className="text-white text-[40px] w-[270px] font-bold">
                Get Garden Fresh Fruits
              </h1>
            </li>
            <li
              className="w-[680px] rounded-[20px] h-[367px] bg-no-repeat pt-[115px] pl-[60px] "
              style={{ backgroundImage: " url(../home/home3.png) " }}
            >
              <i className="text-secondary text-[36px] font-serif">Offer!!</i>
              <h1 className="text-primary text-[40px] w-[250px] font-bold">
                Get 10% off on Vegetables
              </h1>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-#F9F8F8">
        <div className="container  flex">
          <ul className="flex gap-[10px] ">
            <li>
              <img src="../home/home4.png" alt="img" />
            </li>
            <li className="w-[700px] mt-[100px]">
              <i className="text-secondary text-xl font-serif ">About Us</i>
              <p className="  text-3xl text-primary font-bold font-sans ">
                We Believe in Working Accredited Farmers
              </p>
              <p className="text-fourth pb-[40px] ">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>{" "}
              <li className="flex">
                <div className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-[20px] mb-[5px] mr-[5px]">
                  {" "}
                  <AboutIcon />
                </div>
                <span>
                  <h1 className="text-primary font-bold text-sm">
                    Organic Foods Only
                  </h1>
                  <p className="text-fourth">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </span>
              </li>
              <li className="flex pb-[30px]">
                <div className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-[20px] mr-[5px]">
                  {" "}
                  <AboutIcon2 />
                </div>

                <span>
                  <h1 className="text-primary font-bold text-sm">
                    Quality Standards{" "}
                  </h1>
                  <p className="text-fourth">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </span>
              </li>
              <Button
                variant="secondary"
                className="flex transition-transform transform hover:scale-105 hover:shadow-lg "
                endIcon={<ButtonIcon />}
                type="submit"
              >
                Shop Now
              </Button>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-[176px]">
        <div className="container text-center ">
          <i className="font-serif text-secondary text-xl ">Categories </i>
          <p className="text-primary text-3xl font-bold">Our Products</p>
        </div>
      </section>
    </>
  );
};
