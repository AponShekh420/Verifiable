import { Button } from "react-bootstrap";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaStripeS } from "react-icons/fa6";


import Classes from '../../styles/home/HeadingSection.module.css';

const HeadingSection = () => {
  return (
    <div className={Classes.sectionBox}>
      <h1 className={Classes.title}>Onward Ticket with valid PNR</h1>
      <p className={Classes.detailsText}>Verifiable ticket for visa application and Airport proof of return with valid PNR. <br />
        Our tickets are receive instantly and valid up to 14 days.</p>
      <div className={Classes.btnBox}>
        <Button variant="outline-secondary" disabled className={Classes.paymentButton}>
          <div><BiSolidBadgeDollar size={28} color="#17a168" />
          </div>
          <div className={Classes.paymentText}>
            <span style={{ color: "black", fontWeight: "600" }}>14-day </span>
            Money <br />
            back Guarantee
          </div>
        </Button>{' '}
        <Button variant="outline-secondary" disabled className={Classes.paymentButton}>
          <div><FaStripeS size={10} color="white" style={{ borderRadius: "100%", background: "#3f47e0", height: "23px", width: "23px", padding: "5px" }} />
          </div>
          <div className={Classes.paymentText}>
            <span style={{ color: "#3f47e0", fontWeight: "800", fontSize: "13px" }}>Stripe </span>
            <br />
            VERIFIED
          </div>
        </Button>{' '}
      </div>
    </div>
  );
};

export default HeadingSection;