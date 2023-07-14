import React from "react";
import Button from "@mui/material/Button";
import CallIcon from "@mui/icons-material/Call";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Container } from "@mui/material";

const ContactUs = () => {
  return (
    <>
      <Container maxWidth="false" sx={{ maxWidth: "1520px" }} className="filter-sec-wrapper">
        <div className="contact-us flex mt-10">
          <div className="flex detail">
            <div className="content">
              <div className="heading">
                <h2>Contact Us</h2>
                <p className="">
                  {" "}
                  Don't hesitate to contact us. We value your input and look
                  forward to hearing from you.
                </p>
              </div>

              <form
                action="https://formspree.io/f/mbjvjqko"
                method="POST"
                className="form-data"
              >
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="display-block width-100 mt-10 height-52"
                  autoComplete="off"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="display-block width-100 mt-10 height-52"
                  autoComplete="off"
                  required
                />

                <textarea
                  name="message"
                  className="display-block width-100 mt-10 height-52"
                  placeholder="Enter your query here"
                  rows="5"
                  autoComplete="off"
                  required
                ></textarea>

                <Button
                  type="submit"
                  variant="contained"
                  className="width-100 pay-button mt-5"
                >
                  SEND
                </Button>
              </form>

              <div className="personel-detail flex mt-12">
                <div className="icon-wrapper flex">
                  <CallIcon></CallIcon>
                  <div className="data">
                    <span className="display-block">PHONE</span>
                    <span className="display-block">889365336754</span>
                  </div>
                </div>

                <div className="icon-wrapper flex">
                  <EmailOutlinedIcon></EmailOutlinedIcon>

                  <div className="data">
                    <span className="display-block">EMAIL</span>
                    <span className="display-block">
                      ContactUstrendimart@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7044729.242125128!2d67.88989682500001!3d30.441510299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f23824fa916db%3A0x67c9e32f58755378!2sIndian%20Institute%20Of%20Management%E2%80%93Sirmaur%20(IIM%E2%80%93Sirmaur)!5e0!3m2!1sen!2sin!4v1689146367481!5m2!1sen!2sin"
                width="545"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="empty-box"></div>
        </div>
      </Container>
    </>
  );
};

export default ContactUs;
