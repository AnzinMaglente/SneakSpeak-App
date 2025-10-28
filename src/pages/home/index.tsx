import NavBar from "../../components/NavBar";
import IndexContent from "../../components/IndexContent";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <IndexContent />
      <Footer />
    </motion.div>
  );
}

export default Home;
