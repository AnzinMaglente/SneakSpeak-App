import AdminContent from "../../components/Admin/AdminContent";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import AdminHeader from "../../components/Admin/AdminHeader";

function Admin() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <AdminHeader />
      <AdminContent />
      <Footer />
    </motion.div>
  );
}

export default Admin;
