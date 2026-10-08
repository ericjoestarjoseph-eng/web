export const SERVICES = [
  {
    id: 1,
    emoji: "🔧",
    name: "General Service",
    price: 2800,
    desc: "Complete car inspection, fluid check, and basic maintenance for smooth daily use.",
  },
  {
    id: 2,
    emoji: "🛢️",
    name: "Engine Oil Change",
    price: 1800,
    desc: "Premium engine oil and filter replacement to improve efficiency and engine health.",
  },
  {
    id: 3,
    emoji: "🛑",
    name: "Brake Service",
    price: 4200,
    desc: "Brake pad, disc, and fluid inspection with repair or replacement as needed.",
  },
  {
    id: 4,
    emoji: "🚗",
    name: "Tyre Rotation & Balancing",
    price: 1600,
    desc: "Tyre rotation, wheel balancing, and pressure optimization for better grip and safety.",
  },
  {
    id: 5,
    emoji: "⚙️",
    name: "Wheel Alignment",
    price: 2600,
    desc: "Precision wheel alignment to enhance tyre life and improve steering control.",
  },
  {
    id: 6,
    emoji: "❄️",
    name: "AC Service",
    price: 3200,
    desc: "Air-conditioning check, gas refill, and cooling system inspection for comfort.",
  },
  {
    id: 7,
    emoji: "🔋",
    name: "Battery Check & Replacement",
    price: 4500,
    desc: "Battery diagnostics, charging test, and replacement for dependable startup power.",
  },
  {
    id: 8,
    emoji: "🛠️",
    name: "Suspension Repair",
    price: 3800,
    desc: "Shock absorber and suspension component inspection with repair and tuning.",
  },
  {
    id: 9,
    emoji: "✨",
    name: "Car Wash & Detailing",
    price: 1500,
    desc: "Exterior wash, interior vacuuming, and polishing for a fresh showroom look.",
  },
  {
    id: 10,
    emoji: "💡",
    name: "Electrical Diagnostics",
    price: 2200,
    desc: "Fault detection for lights, wiring, sensors, and electrical systems.",
  },
  {
    id: 11,
    emoji: "🏁",
    name: "Complete Vehicle Care Package",
    price: 9800,
    desc: "All-in-one premium maintenance including oil change, filter check, tyre care, AC check, and full inspection.",
  },
];

export const priceOf = (id) => {
  const service = SERVICES.find((service) => service.id === id);
  return service?.price ?? 0;
};
