import { motion } from "motion/react";
import { Data } from "../data";
import { useEffect, useState } from "react";

export default function TreeItem({
  data,
  level,
  handleSelect,
  selectedCategory,
}: {
  data: Data;
  level: number;
  handleSelect: (title: string | null) => void;
  selectedCategory: string | null;
}) {
  const [showChildren, setShowChildren] = useState(level === 1 ? true : false);

  const handleClick = () => {
    // if (level !== 1) {
    //   setShowChildren(!showChildren);
    // }
    if (data.children && data.children.length > 0) {
      setShowChildren(!showChildren);
    }
    if (selectedCategory !== data.title) {
      handleSelect(data.title);
    } else {
      handleSelect(null);
    }
  };

  // useEffect(() => {
  //   if (level !== 1) {
  //     if (selectedCategory === data.title) {
  //       setShowChildren(true);
  //     } else {
  //       setShowChildren(false);
  //     }
  //   }
  // }, [selectedCategory]);

  return (
    <motion.div
      className={`
    flex ${level % 2 === 1 ? "" : "flex-col"}
    mx-1 
    `}
    >
      <div
        onClick={handleClick}
        className="hover:bg-gray-200 hover:cursor-pointer"
      >
        {data.title}
      </div>
      {showChildren && <motion.span>= &#91;</motion.span>}
      {showChildren &&
        data.children?.map((child) => (
          <>
            <TreeItem
              key={child.title}
              data={child}
              level={level + 1}
              handleSelect={handleSelect}
              selectedCategory={selectedCategory}
            />
          </>
        ))}
      {showChildren && <motion.span>&#93;</motion.span>}
    </motion.div>
  );
}
