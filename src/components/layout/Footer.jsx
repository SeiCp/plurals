import "../../styles/footer.css";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p><FaPhoneAlt /> +34 600 000 000</p>
        <p><FaEnvelope /> info@plurals.org</p>
      </div>

      <div className="footer__social">
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
      </div>
    </footer>
  );
};

export default Footer;