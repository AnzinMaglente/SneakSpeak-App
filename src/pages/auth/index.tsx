import NavBar from "../../components/NavBar";
import AuthContent from "../../components/Auth/AuthContent";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

function Auth() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <AuthContent />
      <Footer />
    </motion.div>
  );
}

export default Auth;
