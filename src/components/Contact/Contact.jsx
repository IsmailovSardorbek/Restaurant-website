import "./contact.css";
import mapImage from "../../images/map-img.png";

export default function Contact() {
  return (
    <div className="contact-us" id="contact">
      <div className="contacts-wrapper">
        <h1>Contact us</h1>
        <div className="contact-sections">
          <div className="c-left">
            <p className="contact-label">Phone number</p>
            <div className="phone-label">
              <a href="tel:+420606600161" className="phone-number">
                +420 606 600 161
              </a>
            </div>
            <p className="contact-label">Email</p>

            <div className="email-label">
              <a href="mailto:sayyod_3366@mail.ru" className="phone-number">
                matoka.konevova@gmail.com
              </a>
            </div>
            <p className="address-label">Address</p>
            <p className="l-text">Koněvova 61, 130 00 Praha 3-Žižkov</p>
          </div>
          <div className="c-right">
            <div className="box">
              <div className="top-left"></div>
              <div className="bottom-right"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.852885845269!2d14.458894415262874!3d50.0890411794271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93aaa314d0f1%3A0xcdd99d0eda9fa772!2sMATOKA%20Georgian!5e0!3m2!1sru!2sus!4v1670508056847!5m2!1sru!2sus"
                width={350}
                height="200"
                frameBorder={0}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
