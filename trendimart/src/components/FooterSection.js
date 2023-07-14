import React from "react";
import { logot as logo } from "../styles/components/assets/images";
import { fb, insta, twiter, whtsap } from "../styles/components/assets/icons";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const FooterSection = () => {
  return (
    <>
      <div className="sec-bottom info">
        <section className="footer-wrapper">
          <div className="footer-logo-wrapper flex">
            <img src={logo} alt="logo" className="logo-brand" />
            <span className="logo-heading font-weight-700 ml-7">
              Trendimart
            </span>
          </div>

          <div className="footer-content flex">
            <ul className="">
              <li className="heading"> Women</li>

              <li className="text">
                <a href="#" className="text">
                  {" "}
                  All Women
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  Skirts{" "}
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  T- Shirts
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  Tops
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  Jackets{" "}
                </a>
              </li>
            </ul>

            <ul className="">
              <li className="heading"> Men</li>
              <li className="text">
                <a href="#" className="text">
                  All Men{" "}
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  Shirts
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  T- Shirts
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  Shorts
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  Jackets
                </a>
              </li>
            </ul>

            <ul className="">
              <li className="heading"> Kids</li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  All Kids
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  Shirts{" "}
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  T- Shirts{" "}
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  Shorts{" "}
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  Jackets{" "}
                </a>
              </li>
            </ul>

            <ul className="">
              <li className="heading">Shopping </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  Your cart
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  your orders{" "}
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  Compared items
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  Wishlist{" "}
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  Shipping Details{" "}
                </a>
              </li>
            </ul>

            <ul className="">
              <li className="heading"> More links</li>
              <li className="text">
                <a href="#" className="text">
                  Blogs{" "}
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  Gift center{" "}
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  Buying guides
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  {" "}
                  New arrivals
                </a>
              </li>
              <li className="text">
                <a href="#" className="text">
                  Clearance{" "}
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li className="heading"> Stay In Touch</li>
              <li className="text">
                {" "}
                Stay in touch to get special offers, free giveaways and once in
                a lifetime deals
              </li>
              <li className="flex">
                <div className="form-wrapper mt-4">
                  <form className="flex">
                    <MailOutlinedIcon className="box-icon"></MailOutlinedIcon>

                    <input
                      type="text-type"
                      placeholder="Enter your email"
                      className="input-box pl-8"
                    />
                  </form>
                </div>
              </li>
            </ul>
          </div>
          <hr className="footer-line" />

          <div className="footer-icons">
            <a href="#" className="text">
              <span>Terms & Conditions</span>
            </a>
            <a href="#" className="text">
              {" "}
              <span>Privacy Policy</span>
            </a>
            <div className="icons align-items">
              <a href="#" className="icons">
                {" "}
                <img src={fb} alt="logo" className="logo-brand" />
              </a>
              <a href="#" className="icons">
                {" "}
                <img src={insta} alt="logo" className="logo-brand" />
              </a>
              <a href="#" className="icons">
                {" "}
                <img src={twiter} alt="logo" className="logo-brand" />
              </a>
              <a href="#" className="icons">
                {" "}
                <img src={whtsap} alt="logo" className="logo-brand whtsap" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FooterSection;
