export type Data = {
  id: number;
  blog?: { id: number; title: string }[];
  children?: Data[];
};

export const data: Data[] = [
  {
    id: 1,
    blog: [
      { id: 101, title: "Blog Post 1-1" },
      { id: 102, title: "Blog Post 1-2" },
    ],
    children: [
      {
        id: 11,
        blog: [{ id: 111, title: "Child 1-1 Blog" }],
        children: [
          {
            id: 111,
            blog: [{ id: 1111, title: "Grandchild 1-1-1 Blog" }],
          },
        ],
      },
      {
        id: 12,
      },
    ],
  },
  {
    id: 2,
    children: [
      {
        id: 21,
        blog: [
          { id: 211, title: "Child 2-1 Blog" },
          { id: 212, title: "Child 2-2 Blog" },
        ],
      },
    ],
  },
  {
    id: 3,
    blog: [{ id: 301, title: "Blog Post 3-1" }],
  },
  {
    id: 4,
  },
  {
    id: 5,
    blog: [
      { id: 501, title: "Blog Post 5-1" },
      { id: 502, title: "Blog Post 5-2" },
      { id: 503, title: "Blog Post 5-3" },
    ],
  },
  {
    id: 6,
    children: [
      {
        id: 61,
        blog: [{ id: 611, title: "Child 6-1 Blog" }],
        children: [
          {
            id: 611,
            blog: [{ id: 6111, title: "Grandchild 6-1-1 Blog" }],
            children: [
              {
                id: 61111,
                blog: [{ id: 611111, title: "Great-grandchild 6-1-1-1 Blog" }]
              }
            ]
          },
          {
            id: 612,
            blog: [{ id: 6121, title: "Grandchild 6-1-2 Blog" }]
          }
        ],
      },
      {
        id: 62,
        blog: [{ id: 621, title: "Child 6-2 Blog" }]
      },
    ],
  },
  {
    id: 7,
  },
  {
    id: 8,
    blog: [{ id: 801, title: "Blog Post 8-1" }],
  },
];