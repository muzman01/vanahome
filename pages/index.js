import Bikes from "../components/bikes/Bikes";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Roadmap from "../components/roadmap/Roadmap";
import Team from "../components/team/Team";
export default function Home() {
  return (
    <div className="BACKGROUND">
      <Header />
      <Bikes />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}
