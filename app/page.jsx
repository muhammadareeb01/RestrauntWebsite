import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <div>
      {/* Hero Section  */}
      <section id="home" className="">
        <Hero className="" />
      </section>

      {/* About  */}
      <section id="about" className="">
        <About />
      </section>

      {/* Menu  */}
      <section id="menu" className="">
        <Menu />
      </section>

      {/* Contact  */}
      <section id="contact" className="">
        <div>
          <Contact />
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
