import { motion } from "motion/react";
import { data } from "../data";

export default function BlogList({
  selectedCategory,
}: {
  selectedCategory: string | null;
}) {
  return (
    <motion.div>
      {data.map((item) => {
        if (item.title === selectedCategory) {
          return (
            <motion.div>
              <motion.div>{item.title}</motion.div>
              {item.blog?.map((blog) => (
                <motion.div>{blog.title}</motion.div>
              ))}
            </motion.div>
          );
        }
      })}
    </motion.div>
  );
}
