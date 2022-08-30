export type TBrand = {
  id: number;
  name: string;
};

export const fakeBrands: Array<TBrand> = [
  { id: 1, name: "Dell" },
  { id: 2, name: "Lenovo" },
  { id: 3, name: "Acer" },
];

export type TComputer = {
  id: number;
  cpu: string;
  ram: number;
  gpu: string;
  storage: number;
  price: number;
};

export const fakeComputers: Array<TComputer> = [
  {
    id: 1,
    cpu: "Core i7 12700",
    ram: 16,
    gpu: "RTX 3060",
    storage: 1024,
    price: 6599,
  },
  {
    id: 2,
    cpu: "Core i5 12400",
    ram: 16,
    gpu: "Radeon 6400",
    storage: 512,
    price: 4799,
  },
  {
    id: 3,
    cpu: "Ryzen 5600G",
    ram: 8,
    gpu: "integrated",
    storage: 240,
    price: 2999,
  },
];
