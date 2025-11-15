import { motion } from "framer-motion";
import AdminHeader from "../../components/Admin/AdminHeader";
import ProfileContent from "../../components/Profile/ProfileContent";
import Footer from "../../components/Footer";

function Profile() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <AdminHeader />
      <ProfileContent />
      <Footer />
    </motion.div>
  );
}

export default Profile;
