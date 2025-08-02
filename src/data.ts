export type Data = {
  title: string;
  blog?: { title: string }[];
  children?: Data[];
};

export const data: Data[] = [
  {
    title: "공부",
    blog: [{ title: "Blog Post 1-1" }, { title: "Blog Post 1-2" }],
    children: [
      {
        title: "알고리즘",
        blog: [{ title: "Child 1-1 Blog" }],
        children: [
          {
            title: "자료구조",
            blog: [{ title: "Grandchild 1-1-1 Blog" }],
          },
        ],
      },
      {
        title: "CS",
        children: [{ title: "intro to TCS" }],
      },
    ],
  },
  {
    title: "일기",
    children: [
      {
        title: "2025년",
        blog: [{ title: "Child 2-1 Blog" }, { title: "Child 2-2 Blog" }],
      },
      { title: "2024년" },
    ],
  },
  {
    title: "리뷰",
    blog: [{ title: "Blog Post 3-1" }],
    children: [
      {
        title: "영화",
        blog: [{ title: "영화1" }, { title: "영화2" }, { title: "영화3" }],
      },
      {
        title: "책",
        blog: [{ title: "책1" }, { title: "책2" }, { title: "책3" }],
      },
    ],
  },
  {
    title: "여행",
    children: [
      {
        title: "국내여행",
        blog: [{ title: "Child 6-1 Blog" }],
        children: [
          {
            title: "제주도",
            blog: [{ title: "Grandchild 6-1-1 Blog" }],
            children: [
              {
                title: "맛집",
                blog: [{ title: "Great-grandchild 6-1-1-1 Blog" }],
              },
            ],
          },
          {
            title: "강원도",
            blog: [{ title: "Grandchild 6-1-2 Blog" }],
          },
        ],
      },
      {
        title: "해외여행",
        blog: [{ title: "Child 6-2 Blog" }],
      },
    ],
  },
  {
    title: "개발",
    blog: [{ title: "Blog Post 8-1" }],
    children: [
      {
        title: "프로젝트 기록",
        children: [{ title: "yoon-pf" }, { title: "motion-test" }],
      },
    ],
  },
];
