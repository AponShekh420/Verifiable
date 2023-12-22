import HeadingSection from '../component/home/HeadingSection';
import Classes from "../styles/home/Container.module.css";
const Home = () => {
  return (
    <div className={Classes.container}>
      <HeadingSection />
    </div>
  );
};

export default Home;