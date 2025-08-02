import { motion } from "motion/react";
import { Data } from "../data";
import { RefObject, useState, useRef } from "react";

export default function CategoryItem({
  item,
  parentRef,
  level,
}: {
  item: Data;
  parentRef?: RefObject<HTMLDivElement | null>;
  level: number;
}) {
  const [showChildren, setShowChildren] = useState(false);
  const thisRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      drag={level == 1 ? true : false}
      dragConstraints={parentRef}
      transition={{ duration: 1, type: "spring" }}
      className={`
          rounded-2xl bg-blue-200
          flex items-center
          ${level % 2 === 0 ? "flex-col" : "flex-col"}
          p-3 border border-blue-500
        `}
      ref={thisRef}
    >
      <button
        className="hover:cursor-pointer hover:bg-black/10"
        onClick={() => setShowChildren(!showChildren)}
      >
        {item.title}
      </button>
      {
        showChildren &&
          // <div className="inset-0 flex flex-wrap gap-1 justify-center items-center p-4 pt-8">
          item.children?.map((child) => (
            <CategoryItem
              key={child.title}
              item={child}
              level={level + 1}
              parentRef={thisRef}
            />
          ))
        // </div>
      }
    </motion.div>
  );
}
