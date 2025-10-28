import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

function Admin() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <Footer />
    </motion.div>
  );
}

export default Admin;
