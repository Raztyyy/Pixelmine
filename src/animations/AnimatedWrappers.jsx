import { AnimatePresence, motion } from "framer-motion";

// Fade in and slide up (common section entrance)
const fadeSlideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Fade in and slide left (slide in from left to right)
const fadeSlideLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

// Fade in and slide right (slide in from right to left)
const fadeSlideRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

// Simple fade in (for subtle content)
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Scale + fade in (buttons or cards)
const fadeScaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Rotate in from left (for icons or accent elements)
const rotateInVariants = {
  hidden: { opacity: 0, rotate: -90 },
  visible: { opacity: 1, rotate: 0 },
};

// Flip in on Y-axis (for hero images or testimonials)
const flipInVariants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0 },
};

// Bounce up entrance (attention grabbing)
const bounceUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

// Stagger container for lists (nice for lists, cards, nav links)
const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // slower stagger between items
      delayChildren: 0.2, // first child waits 0.2s
    },
  },
};

// Staggered items inside stagger container
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // slow fade+slide
      ease: "easeOut",
    },
  },
};

// Helper factory to create reusable animated components
function createAnimatedComponent(
  variants,
  defaultTransition = { duration: 0.6 }
) {
  return ({ children, className = "", element = "div", id = "" }) => {
    const MotionTag = motion[element] || motion.div;
    return (
      <MotionTag
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={defaultTransition}
        className={className}
        id={id}
      >
        {children}
      </MotionTag>
    );
  };
}

// Export reusable animation wrappers
export const FadeSlideUp = createAnimatedComponent(fadeSlideUpVariants); // slide up & fade in
export const FadeSlideLeft = createAnimatedComponent(fadeSlideLeftVariants); // slide left & fade in
export const FadeSlideRight = createAnimatedComponent(fadeSlideRightVariants); // slide right & fade in
export const FadeIn = createAnimatedComponent(fadeInVariants, {
  duration: 0.5,
}); // simple fade in
export const FadeScale = createAnimatedComponent(fadeScaleVariants); // scale & fade in
export const RotateIn = createAnimatedComponent(rotateInVariants); // rotate in
export const FlipIn = createAnimatedComponent(flipInVariants, {
  duration: 0.7,
}); // flip in on Y axis
export const BounceUp = createAnimatedComponent(bounceUpVariants, {
  duration: 0.8,
}); // bounce up entrance

// Staggered container wrapper (for lists)
export const StaggerContainer = ({
  children,
  className = "",
  element = "div",
  id = "",
}) => {
  const MotionTag = motion[element] || motion.div;
  return (
    <MotionTag
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      id={id}
    >
      {children}
    </MotionTag>
  );
};

// Staggered child item wrapper (for individual list items)
// export const StaggerItem = createAnimatedComponent(staggerItemVariants);

export const StaggerItem = ({
  children,
  className = "",
  element = "div",
  id = "",
}) => {
  const MotionTag = motion[element] || motion.div;
  return (
    <MotionTag variants={staggerItemVariants} className={className} id={id}>
      {children}
    </MotionTag>
  );
};

// Backdrop (dark overlay)
export const Backdrop = ({ children }) => (
  <motion.div
    className="fixed inset-0 z-[60] bg-black/30"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);

// Drawer (slide-in panel)
const drawerVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export const Drawer = ({ children, className = "" }) => (
  <motion.div
    variants={drawerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={className}
  >
    {children}
  </motion.div>
);

// Collapse (expand / collapse height + fade)
const collapseVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export const Collapse = ({
  children,
  className = "",
  element = "div",
  id = "",
}) => {
  const MotionTag = motion[element] || motion.div;
  return (
    <MotionTag
      variants={collapseVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={className + " overflow-hidden"}
      id={id}
    >
      {children}
    </MotionTag>
  );
};
