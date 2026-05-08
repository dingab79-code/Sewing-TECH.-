export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  image: string;
  price?: string;
  isPopular?: boolean;
}

export const CATEGORIES = [
  "Industrial Sewing Machines",
  "Embroidery Machines",
  "Heat Press Machines",
  "Vinyl Cutters",
  "DTF Printers",
  "Sublimation Equipment",
  "Overlock Machines",
  "Interlock Machines",
  "Buttonhole Machines",
  "Accessories & Supplies"
];

export const PRODUCTS: Product[] = [
  {
    id: "s-7200c",
    name: "Standard Direct Drive Lockstitch",
    category: "Industrial Sewing Machines",
    description: "High-speed industrial lockstitch machine with direct drive motor, automatic thread trimmer, and integrated control panel.",
    features: [
      "Built-in Direct Drive Motor",
      "Automatic Thread Trimmer",
      "Automatic Foot Lift",
      "Integrated LED Work Light"
    ],
    specs: {
      "Max Speed": "5,000 sti/min",
      "Stitch Length": "0-5mm",
      "Needle System": "DBx1",
      "Lubrication": "Automatic"
    },
    image: "https://images.unsplash.com/photo-1605634543202-601614e040f7?auto=format&fit=crop&q=80&w=800",
    price: "From $350",
    isPopular: true
  },
  {
    id: "emb-1501",
    name: "15-Needle Single Head Embroidery Machine",
    category: "Embroidery Machines",
    description: "Multi-needle compact embroidery machine perfect for boutiques, custom garment shops, and home businesses.",
    features: [
      "15 Needles for automatic color change",
      "Max embroidery area: 360 x 200 mm",
      "Automatic thread break detection",
      "10-inch HD touch screen control system"
    ],
    specs: {
      "Number of Heads": "1",
      "Number of Needles": "15",
      "Memory": "20 million stitches",
      "Dimensions": "75 x 75 x 85 cm"
    },
    image: "https://images.unsplash.com/photo-1598971861713-54ad16a7e718?auto=format&fit=crop&q=80&w=800",
    price: "From $3,500",
    isPopular: true
  },
  {
    id: "dtf-pro",
    name: "DTF Pro Printing Solution",
    category: "DTF Printers",
    description: "Complete Direct to Film printing system for high-quality, durable transfers on any fabric type.",
    features: [
      "Dual printhead technology",
      "Integrated white ink circulation",
      "Automatic powder shaker and oven unit",
      "High-resolution photographic quality"
    ],
    specs: {
      "Print Width": "60cm / 24in",
      "Print Resolution": "Up to 2400 dpi",
      "Ink System": "CMYK + White",
      "Rip Software": "Included"
    },
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800",
    price: "Request Quote"
  },
  {
    id: "hp-flat",
    name: "38x38cm Auto-Open Heat Press",
    category: "Heat Press Machines",
    description: "Heavy-duty magnetic auto-open clamshell heat press for t-shirts, hoodies, and flat textiles.",
    features: [
      "Auto-open function prevent scorching",
      "Digital time and temperature control",
      "Uniform heat distribution",
      "Adjustable pressure"
    ],
    specs: {
      "Platen Size": "38 x 38 cm",
      "Max Temp": "220°C",
      "Voltage": "220V",
      "Weight": "25kg"
    },
    image: "https://images.unsplash.com/photo-1621339019200-a544c4b6947d?auto=format&fit=crop&q=80&w=800",
    price: "From $280"
  },
  {
    id: "ov-4thread",
    name: "High Speed 4-Thread Overlocker",
    category: "Overlock Machines",
    description: "Professional overcasting and seaming for light to medium fabrics.",
    features: [
      "Smooth and quiet operation",
      "Differential feed adjustment",
      "Narrow/rolled hem built-in",
      "Easy threading system"
    ],
    specs: {
      "Threads": "4",
      "Speed": "6,500 sti/min",
      "Overedge width": "4mm",
      "Needle gauge": "2mm"
    },
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
    price: "From $420",
    isPopular: true
  }
];
