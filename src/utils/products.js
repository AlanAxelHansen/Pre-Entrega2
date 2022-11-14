const products = [
  {
    id: 10,
    name: "Papas",
    stock: 100,
    cost: 540,
    description: "Papas 100% Bolivianas al mejor precio, cada unidad representa 1kg de Papas",
    capacity: 1000,
    image: [
      "https://t4.ftcdn.net/jpg/02/97/36/57/360_F_297365796_tzAe7Q0kMi2K0zS1A40OkCyLpENFLzD5.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-12",
    updatedAt: "2022-11-12",
    categoryId: 3,
    packingId: null,
    category: {
      name: "Verdura",
      id: 3
    }
  },
  {
    id: 9,
    name: "Lechuga",
    stock: 34,
    cost: 88,
    description: "Lechuga crespa bien fresca, cada unidad representa 1 planta de lechuga    ",
    capacity: 1,
    image: [
      "https://images.ecestaticos.com/8llVkYpZo9gN11fmBvjFeOQd10U=/0x109:2121x1301/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F5cc%2Fef6%2F068%2F5ccef6068a457cdae460a5469d4af804.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-12",
    updatedAt: "2022-11-12",
    categoryId: 3,
    packingId: null,
    category: {
      name: "Verdura",
      id: 3
    },
  },
  {
    id: 8,
    name: "Cebolla",
    stock: 92,
    cost: 450,
    description: "Cebolla blanca 100% Boliviana. Cada unidad seleccionada representa 1kg    ",
    capacity: 1,
    image: [
      "https://images.ecestaticos.com/x6SJaQ3RX4tccB9VvAXYW_mB2xQ=/181x80:1954x1411/1200x899/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F9b0%2F5ec%2Fd2b%2F9b05ecd2bd735da8ddcc19dd8516072b.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-12",
    updatedAt: "2022-11-12",
    categoryId: 3,
    packingId: null,
    category: {
      name: "Verdura",
      id: 3
    },
    
  },
  {
    id: 7,
    name: "Manzana",
    stock: 69,
    cost: 310,
    description: "Manzanas rojas, dulces y jugosas. Cada unidad seleccionada representa 1kg ",
    capacity: 1,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy60Ucqb9IEFwriSBRAfPhUvOVzQq5yy5DEGj5Lq4ARgAaXSlGlJfpx9_Ou1Ij0LMg9fo&usqp=CAU"
    ],
    sales: 0,
    createdAt: "2022-11-12",
    updatedAt: "2022-11-12",
    categoryId: 2,
    packingId: null,
    category: {
      name: "Fruta",
      id: 2
    },
  },
  {
    id: 6,
    name: "Banana",
    stock: 90,
    cost: 317,
    description: "Las mejores bananas de Brazil. Cada unidad seleccionada representa 1kg    ",
    capacity: 1,
    image: [
      "https://www.cucinare.tv/wp-content/uploads/2020/08/Bananas1.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-12",
    updatedAt: "2022-11-12",
    categoryId: 2,
    brandId: 10,
    packingId: null,
    category: {
      name: "Fruta",
      id: 2
    },
  },
  {
    id: 5,
    name: "Mandarina",
    stock: 78,
    cost: 300,
    description: "Las mandarinas mas dulces de la ciudad. Cada unidad representa 1kg        ",
    capacity: 1,
    image: [
      "https://s1.eestatic.com/2020/12/18/ciencia/nutricion/544456424_167853288_1706x960.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-12",
    updatedAt: "2022-11-12",
    categoryId: 2,
    packingId: null,
    category: {
      name: "Fruta",
      id: 2
    },
  },
  {
    id: 4,
    name: "Pechuga de pollo",
    stock: 89,
    cost: 205,
    description: "Pechugas de pollo de corrales locales sin congelar. Se venden por unidad  ",
    capacity: 1,
    image: [
      "https://gastronomiaycia.republica.com/wp-content/uploads/2017/06/pechugas_madera.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-12",
    updatedAt: "2022-11-12",
    categoryId: 1,
    packingId: null,
    category: {
      name: "Carne",
      id: 1
    },
  },
  {
    id: 3,
    name: "Pecho de cerdo",
    stock: 100,
    cost: 640,
    description: "Pecho de cerdo de criaderos locales. Cada unidad representa 1kg           ",
    capacity: 1,
    image: [
      "https://granjaelpaisanito.com.ar/wp-content/uploads/2021/05/RIBS-e1621077452403.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-12",
    updatedAt: "2022-11-12",
    categoryId: 1,
    packingId: null,
    category: {
      name: "Carne",
      id: 1
    },
  },
  {
    id: 2,
    name: "Costillar de vaca",
    stock: 54,
    cost: 870,
    description: "Costillas de vaca de mataderos locales. Cada unidad representa 1kg        ",
    capacity: 1,
    image: [
      "https://cdn.shopify.com/s/files/1/1547/6619/products/Ultimate_Short_Rib.jpg?v=1632766066"
    ],
    sales: 0,
    createdAt: "2022-11-12",
    updatedAt: "2022-11-12",
    categoryId: 1,
    packingId: null,
    category: {
      name: "Carne",
      id: 1
    },
  },
  {
    id: 1,
    name: "Pata de cordero",
    stock: 51,
    cost: 480,
    description: "beePatas de cordero de productores locales. Cada unidad representa 1kg       eeee",
    capacity: 1,
    image: [
      "http://1.bp.blogspot.com/-sFgT2ovexmE/VCQ2y8t9tXI/AAAAAAAAKpw/qHke_wmOhdA/s1600/cuixadexai.jpg"
    ],
    sales: 0,
    createdAt: "2022-11-12",
    updatedAt: "2022-11-12",
    categoryId: 1,
    packingId: null,
    category: {
      name: "Carne",
      id: 1
    },
  }
];

module.exports = {
  products,
}