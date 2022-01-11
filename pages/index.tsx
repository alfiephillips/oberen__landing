import type { NextPage } from "next";
import LeftSide from "../components/LeftSide";
import Meta from "../components/Meta";
import RightSide from "../components/RightSide";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta
        title="Landing"
        description="The Oberen waitlist page."
        keywords="waitlist, oberen, landing page"
        url="/"
      />

      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Home;
