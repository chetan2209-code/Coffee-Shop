import Img1 from '../assets/coffee-white.png';
import Img2 from '../assets/coffee2.png';

export const categories = [
  "All", 
  "Hot Coffee", 
  "Cold Brews", 
  "Bakery & Snacks", 
  "Desserts"
];

export const menuItems = [
  // --- Hot Coffees ---
  {
    id: 1,
    name: "Espresso Roast",
    category: "Hot Coffee",
    basePrice: 3.50,
    img: Img2,
    description: "Rich and bold single-origin double shot with a thick golden crema layer.",
    sizes: [
      { label: "Single", price: 0 },
      { label: "Double", price: 1.00 }
    ],
    customizations: [
      { name: "Extra Shot", price: 0.80 },
      { name: "Oat Milk", price: 0.50 }
    ]
  },
  {
    id: 2,
    name: "Americano Classic",
    category: "Hot Coffee",
    basePrice: 3.75,
    img: Img1,
    description: "Espresso shots diluted with hot water for a smooth, balanced flavor profile.",
    sizes: [
      { label: "Regular", price: 0 },
      { label: "Large", price: 0.50 }
    ],
    customizations: [
      { name: "Sugar Free Syrup", price: 0.40 },
      { name: "Extra Crema", price: 0.30 }
    ]
  },
  {
    id: 3,
    name: "Velvet Cappuccino",
    category: "Hot Coffee",
    basePrice: 4.50,
    img: Img2,
    description: "Dark espresso combined with steamed milk and a rich layer of microfoam.",
    sizes: [
      { label: "Medium", price: 0 },
      { label: "Large", price: 0.75 }
    ],
    customizations: [
      { name: "Almond Milk", price: 0.60 },
      { name: "Cinnamon Dust", price: 0.20 }
    ]
  },
  {
    id: 4,
    name: "Hazelnut Latte",
    category: "Hot Coffee",
    basePrice: 4.90,
    img: Img1,
    description: "Espresso blended with creamy milk and rich roasted hazelnut syrup.",
    sizes: [
      { label: "Medium", price: 0 },
      { label: "Large", price: 0.70 }
    ],
    customizations: [
      { name: "Whipped Cream", price: 0.50 },
      { name: "Extra Espresso Shot", price: 0.80 }
    ]
  },

  // --- Cold Brews & Iced ---
  {
    id: 5,
    name: "Iced Caramel Macchiato",
    category: "Cold Brews",
    basePrice: 5.25,
    img: Img1,
    description: "Freshly pulled espresso over vanilla syrup, cold milk, ice, and caramel drizzle.",
    sizes: [
      { label: "Tall", price: 0 },
      { label: "Grande", price: 0.80 }
    ],
    customizations: [
      { name: "Extra Caramel Drizzle", price: 0.40 },
      { name: "Soy Milk", price: 0.50 }
    ]
  },
  {
    id: 6,
    name: "Nitro Cold Brew",
    category: "Cold Brews",
    basePrice: 5.50,
    img: Img2,
    description: "Slow-steeped cold brew infused with nitrogen for a naturally sweet, velvety taste.",
    sizes: [
      { label: "Regular", price: 0 },
      { label: "Large", price: 0.90 }
    ],
    customizations: [
      { name: "Vanilla Cold Foam", price: 0.75 }
    ]
  },

  // --- Bakery & Snacks ---
  {
    id: 7,
    name: "Butter Croissant",
    category: "Bakery & Snacks",
    basePrice: 3.25,
    img: Img1, // Image path according to your assets
    description: "Flaky, golden French croissant freshly baked with premium French butter.",
    sizes: [
      { label: "Single", price: 0 },
      { label: "Pack of 2", price: 2.75 }
    ],
    customizations: [
      { name: "Warm Up", price: 0.00 },
      { name: "Side Nutella Butter", price: 0.80 }
    ]
  },
  {
    id: 8,
    name: "Avocado Sourdough Toast",
    category: "Bakery & Snacks",
    basePrice: 6.50,
    img: Img2,
    description: "Toasted artisanal sourdough topped with mashed avocado, chili flakes, and seeds.",
    sizes: [
      { label: "Standard", price: 0 }
    ],
    customizations: [
      { name: "Add Poached Egg", price: 1.20 },
      { name: "Extra Feta Cheese", price: 0.90 }
    ]
  },

  // --- Desserts ---
  {
    id: 9,
    name: "Classic Tiramisu Slice",
    category: "Desserts",
    basePrice: 5.80,
    img: Img1,
    description: "Espresso-soaked ladyfingers layered with mascarpone cream and cocoa dust.",
    sizes: [
      { label: "Single Slice", price: 0 }
    ],
    customizations: [
      { name: "Add Espresso Shot on Top", price: 0.80 }
    ]
  },
  {
    id: 10,
    name: "Dark Chocolate Muffin",
    category: "Desserts",
    basePrice: 3.90,
    img: Img2,
    description: "Decadent dark chocolate muffin loaded with molten Belgian chocolate chips.",
    sizes: [
      { label: "Standard", price: 0 }
    ],
    customizations: [
      { name: "Warm Up", price: 0.00 }
    ]
  }
];