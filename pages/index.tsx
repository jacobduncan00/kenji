import Layout from "../components/Layout";
import Image from "next/image";
import Centered from "../components/Centered";
import Header from "../components/Header";
import StartButton from "../components/StartButton";
import SubHeader from "../components/SubHeader";

const Homepage = () => (
  <Layout title="Kenji | A Song Guessing Game">
    <Centered>
      <Header text="Dro Kenji Song Guessing Game" />
      <SubHeader text="5 songs, guess after each, view results." />
      <Image
        src="/images/dro.png"
        alt="Image of Dro Kenji"
        width={400}
        height={400}
      />
      <StartButton />
    </Centered>
  </Layout>
);

export default Homepage;
