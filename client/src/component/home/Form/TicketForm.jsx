import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { FiUser, FiUsers } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuPlaneTakeoff } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

import Classes from '../../../styles/home/TicketForm.module.css';
const TicketForm = () => {
  return (
    <div>
      <Form>
        {/* ticket details row */}
        <Row className="align-items-center">
          <Col md={100} lg={4} className="my-1">
            <Form.Label className={Classes.inputLabel}>Departure Airport * <i className="text-danger">(Required)</i>
            </Form.Label>
            <InputGroup>
              <InputGroup.Text><LuPlaneTakeoff size={23} />
              </InputGroup.Text>
              <Form.Select size="lg" required>
                <option>Select Airport or City</option>
              </Form.Select>
            </InputGroup>
          </Col>
          <Col md={100} lg={4} className="my-1">
            <Form.Label className={Classes.inputLabel}>Flight Date * <i className="text-danger">(Required)</i>
            </Form.Label>
            <InputGroup>
              <InputGroup.Text><IoCalendarClearOutline size={23} />
              </InputGroup.Text>
              <Form.Control
                required
                type='date'
                size="lg"
                id="inlineFormInputGroupUsername"
              />
            </InputGroup>
          </Col>
          <Col md={100} lg={4} className="my-1">
            <Form.Label className={Classes.inputLabel}>Passengers * <i className="text-danger">(Required)</i>
            </Form.Label>
            <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
              Username
            </Form.Label>
            <InputGroup>
              <InputGroup.Text><FiUsers size={23} />
              </InputGroup.Text>
              <Form.Select size="lg" required>
                <option>1</option>
                <option>2</option>
                <option>4</option>
                <option>5</option>
              </Form.Select>
            </InputGroup>
          </Col>
        </Row>

        {/* user details row */}
        <Row className="align-items-center my-lg-2 my-0">
          <Col md={100} lg={3} className="my-1">
            <InputGroup>
              <InputGroup.Text><FiUser size={23} />
              </InputGroup.Text>
              <Form.Select size="lg">
                <option>Mr</option>
              </Form.Select>
            </InputGroup>
          </Col>
          <Col md={100} lg={5} className="my-1">
            <InputGroup>
              <Form.Control
                required
                size='lg'
                placeholder="First Name *"
                aria-label="First Name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col md={100} lg={4} className="my-1">
            <InputGroup>
              <Form.Control
                required
                size='lg'
                placeholder="Last Name *"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>

        {/* Email row */}
        <Row className="align-items-center my-lg-2 my-0">
          <Col className="my-1">
            <Form.Label className={Classes.inputLabel}>Your Email* (Our tickets will be sent to this Email) * <i className="text-danger">(Required)</i>
            </Form.Label>
            <InputGroup>
              <InputGroup.Text><MdOutlineEmail size={23} />
              </InputGroup.Text>
              <Form.Control
                required
                size='lg'
                placeholder="Email*"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>


        {/* ticket package row */}
      </Form>
    </div>
  );
};

export default TicketForm;