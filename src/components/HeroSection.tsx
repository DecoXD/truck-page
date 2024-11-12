
import ContactButton from './ContactButton';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full hero-truck overflow-hidden">
      {/* Video Background */}
      
      
      {/* Overlay */}
      
      
      {/* Truck Image */}
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-left">
          ZB Transportes e Logística
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-right">
          Conectando o Brasil com eficiência e segurança, entregando mais que cargas: entregando compromisso.
        </p>
        <ContactButton className="animate-fade-in-left" />
      </div>
    </div>
  );
};

export default HeroSection;