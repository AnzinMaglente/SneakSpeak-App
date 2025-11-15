import { motion } from "framer-motion";
import ArticleEditorContent from "../../components/ArticleEditor/ArticleEditorContent";
import Footer from "../../components/Footer";
import AdminHeader from "../../components/Admin/AdminHeader";

function ArticleEditor() {
  return (
    <motion.div
      initial={{}}
      animate={{}}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <AdminHeader />
      <ArticleEditorContent />
      <Footer />
    </motion.div>
  );
}

export default ArticleEditor;
