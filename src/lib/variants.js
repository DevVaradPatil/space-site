
export const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 25 },
  },
};

export const cardVariant = (direction = "left") => {
  return {
    hidden: { opacity: 0, x: direction === "left" ? -200 : 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 25 },
    },
  };
};
