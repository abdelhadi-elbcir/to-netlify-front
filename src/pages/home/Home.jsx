import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Search, MapPin, Compass, Users } from 'lucide-react';
import MainSection from '../../components/home/Main';
import TripAnnouncementCarousel from '../../components/annoucement/tripAnnouncementCarousel/TripAnnouncementCarousel';
import AnnouncementList from '../../components/annoucement/announcementList/AnnouncementList';
import CityFilterBar from '../../components/search/CityFilterBar';

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative">
      <MainSection />
      
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="py-8 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <CityFilterBar />
        </div>
      </motion.section>

      <section className="py-16 bg-white w-full">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-primary text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Découvrez nos voyages populaires
          </motion.h2>
          <TripAnnouncementCarousel />
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnnouncementList />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-primary text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pourquoi choisir notre plateforme ?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Recherche facile", description: "Trouvez rapidement le voyage parfait" },
              { icon: MapPin, title: "Destinations uniques", description: "Découvrez des lieux extraordinaires" },
              { icon: Users, title: "Communauté de voyageurs", description: "Partagez vos expériences" },
              { icon: Compass, title: "Aventures sur mesure", description: "Des voyages adaptés à vos envies" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="mx-auto mb-4 text-secondary" size={48} />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Prêt pour votre prochaine aventure ?
          </motion.h2>
          <motion.p 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Inscrivez-vous à notre newsletter pour recevoir nos meilleures offres
          </motion.p>
          <motion.form 
            className="max-w-md mx-auto flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input 
              type="email" 
              placeholder="Votre adresse email" 
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary text-black"
            />
            <button 
              type="submit" 
              className="bg-secondary text-white px-6 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors duration-300"
            >
              S'inscrire
            </button>
          </motion.form>
        </div>
      </section>

     <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-primary text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Partagez vos moments de voyage
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${index + 1}.jpg`} // Chemin corrigé
                alt={`Travel moment ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
     </section>

      
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Home;