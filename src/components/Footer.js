import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "../styles/footer.css";
function Footer(props) {
  return (
    <div>
      <footer>
        <ul>
          <li>Accounts</li>
          <li>Transfer Fund</li>
          <li>Transaction</li>
        </ul>

        <div className="icons">
          <i>
            <AiFillGithub size={40} />
          </i>
          <i>
            <AiFillLinkedin size={40} />
          </i>
          <i>
            <AiFillInstagram size={40} />
          </i>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
