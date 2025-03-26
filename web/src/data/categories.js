const categoryImageModules = import.meta.glob('/src/assets/categories/*.png', { eager: true });

const categoryImageArray = Object.values(categoryImageModules).map((mod) => mod.default);

export const categories = [
  {
    id: 1,
    img: categoryImageArray[0],
    title: "Abstract",
  },
  {
    id: 2,
    img: categoryImageArray[1], 
    title: "Animal",
  },
  {
    id: 3,
    img: categoryImageArray[2], 
    title: "Citys",
  },
  {
    id: 4,
    img: categoryImageArray[3], 
    title: "No name",
  },
];