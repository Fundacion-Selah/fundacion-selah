import { Hero, Navbar } from "@/components/molecules";

function Header() {
  return (
    <header className="bg-gradient-blue flex justify-center w-full">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </header>
  );
}

export default Header;