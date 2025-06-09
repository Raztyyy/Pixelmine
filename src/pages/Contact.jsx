import ContactUsForm from "../ui/contactus/ContactUsForm";
import SEOHelmet from "../ui/SEOHelmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/pro-solid-svg-icons";
import AnimatedSection from "../animations/AnimatedSection";

function Contact() {
  return (
    <>
      <SEOHelmet
        title="Contact Us | Pixelmine Japan OPC"
        description="Get in touch with Pixelmine for inquiries, support, or partnership opportunities. We're here to help!"
        url="https://www.pixelmine.org/contact-us"
        image="/contact-social-sharing.jpg"
      />

      <AnimatedSection
        element="section"
        className="pt-[3rem] pb-[6rem] sm:pb-[4rem]"
      >
        {/* Hero Section */}
        <div className="flex flex-col items-center p-6 mx-auto text-center max-w-7xl">
          <h1 className="text-lg font-medium uppercase">Contact Us</h1>
          <hr className="mx-auto mt-2 mb-4 border-b-4 w-14 border-primary" />
        </div>

        <div className="flex flex-col gap-10 p-6 mx-auto lg:flex-row max-w-7xl ">
          <div className="flex-1 text-center lg:text-start">
            {/* Contact Details */}
            <div className="flex flex-col mt-4 ">
              <div className="flex flex-row items-center gap-3">
                <p className="text-3xl font-medium">Pixelmine Japan</p>
              </div>
              <div className="flex flex-row items-center gap-3 mt-5 text-start">
                <span>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-primary size-4 "
                  />
                </span>
                <p className="text-base leading-loose text-slate-950 ">
                  1-27-8 Higashi-Azabu, Minato-ku, Tokyo 106-0044, Japan
                </p>
              </div>
              <div className="flex flex-row items-center gap-3 mt-5 text-start">
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-primary size-4 "
                  />
                </span>
                <p className="text-base text-slate-950 ">pixie@pixelmine.org</p>
              </div>
              <div className="flex flex-row items-center gap-3 mt-5 text-start">
                <span>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-primary size-4 "
                  />
                </span>
                <p className="text-base text-slate-950">+81-3-6401-4100</p>
              </div>
            </div>

            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.8233129885016!2d139.73846327698587!3d35.65672457259517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ba2be66b0ad%3A0x5e5d80667b85f219!2sHigashiazabu%2C%20Minato%20City%2C%20Tokyo%20106-0044%2C%20Japan!5e0!3m2!1sen!2sph!4v1749013000148!5m2!1sen!2sph"
              width="100%"
              height="520"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-8 rounded"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col items-center justify-center ">
              <div className="p-10 bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center flex-col items-center">
                <h2 className="mb-10 text-3xl">Get Connected</h2>
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

export default Contact;
