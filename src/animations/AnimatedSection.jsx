import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection = ({
  children,
  className = "",
  element = "div",
  id = "",
}) => {
  const MotionTag = motion[element] || motion.div;

  return (
    <MotionTag
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={className}
      id={id}
    >
      {children}
    </MotionTag>
  );
};

export default AnimatedSection;
