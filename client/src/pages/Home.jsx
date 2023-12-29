import HeadingSection from '../component/home/HeadingSection';
import TicketCheckout from '../component/home/TicketCheckout';
import Classes from "../styles/home/Container.module.css";
const Home = () => {
  return (
    <div className={Classes.container}>
      <HeadingSection />
      <TicketCheckout />
    </div>
  );
};

export default Home;