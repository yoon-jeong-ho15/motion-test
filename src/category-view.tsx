import { useRef } from "react";
import CategoryItem from "./category-item";
import { data } from "./data";

export default function CategoryView() {
  const mainContainerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className="
      flex justify-center items-center
      w-8/12 h-8/12 bg-white/30
      "
      ref={mainContainerRef}
    >
      {data.map((item) => (
        <CategoryItem item={item} mainRef={mainContainerRef} level={1} />
      ))}
    </div>
  );
}
