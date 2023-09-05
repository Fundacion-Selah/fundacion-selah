import Hero from "../molecules/Hero";
import Navbar from "../molecules/Navbar";

export default function Header() {
  return (
    <header className="bg-gradient-blue flex justify-center w-full">
      <div className="container">
        <Navbar />
        <Hero/>
      </div>
    </header>
  );
}
