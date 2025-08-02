import { motion } from "motion/react";
import { data } from "../data";
import TreeItem from "./tree-item";
import { useEffect, useState } from "react";
import BlogList from "./blog-list";

export default function TreeView() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleSelect = (title: string | null) => {
    setSelectedCategory(title);
  };

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div
        className="
      flex flex-col 
      justify-center items-center 
      bg-white
      "
      >
        {data.map((item) => (
          <TreeItem
            key={item.title}
            data={item}
            level={1}
            handleSelect={handleSelect}
            selectedCategory={selectedCategory}
          />
        ))}
      </div>
      <div>{selectedCategory}</div>
      <BlogList selectedCategory={selectedCategory} />
    </>
  );
}
