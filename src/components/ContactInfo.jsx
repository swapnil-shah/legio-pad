import React from "react";
import { PopupButton } from "@typeform/embed-react";

const ContactInfo = () => {
  return (
    <section id="cta">
      <div className="container py-4 rounded-3">
        <div className="row">
          <div className="col-sm-12 m-15 px-tb text-center">
            <div className="contact-info">
              <h4>Want To Launch Your Project On LegioPad?</h4>
              <p>
                We have generous offers available for getting you started right
                away!
              </p>
              <div className="mt-4">
                <PopupButton id="r5JLNVlb" className="px-btn px-btn-dark">
                  Apply to Launch
                </PopupButton>
                {/* <a className="" href="#" >
                  Apply to Launch
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
