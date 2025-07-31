import { motion } from "motion/react";
import { Data } from "./data";
import { RefObject, useState, useRef } from "react";

export default function CategoryItem({
  item,
  parentRef,
  level,
}: {
  item: Data;
  parentRef?: RefObject<HTMLDivElement>;
  level: number;
}) {
  const [showChildren, setShowChildren] = useState(false);
  const thisRef = useRef<HTMLDivElement>(null);

  const size = Math.max(2, 10 - level * 2);

  return (
    <motion.div
      className="bg-slate-200 flex justify-center items-center rounded-lg"
      animate={{
        width: showChildren ? `${size * 2}em` : `${size}em`,
        height: showChildren ? `${size * 2}em` : `${size}em`,
      }}
      transition={{ duration: 0.5, type: "spring" }}
      ref={thisRef}
    >
      <motion.div
        drag
        dragConstraints={mainRef}
        whileDrag={{ scale: 1.1 }}
        className={`
          rounded-full bg-blue-500
          flex flex-col justify-center items-center
          h-full w-full p-2 relative
        `}
      >
        <button className="z-10" onClick={() => setShowChildren(!showChildren)}>
          {item.id}
        </button>
        {showChildren && (
          <div className="absolute inset-0 flex flex-wrap gap-1 justify-center items-center p-4 pt-8">
            {item.children?.map((child) => (
              <CategoryItem
                key={child.id}
                item={child}
                level={level + 1}
                parentRef={thisRef}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
