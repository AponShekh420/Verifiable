import { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import Classes from "../../styles/home/TicketCheckout.module.css";
import TicketForm from "./Form/TicketForm";
const TicketCheckout = () => {
  const [radioValue, setRadioValue] = useState('0');
  const radios = [
    { name: 'One-Way', value: '0' },
    { name: 'Round Trip (+$7)', value: '7' },
  ];
  return (
    <div className={Classes.sectionBox}>
      <div>
        <p className={Classes.titleLabel}>Choose your route:</p>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              size="lg"
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-success' : 'outline-warning'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div style={{ marginTop: "10px" }}>
        <TicketForm />
      </div>
    </div>
  );
};

export default TicketCheckout;