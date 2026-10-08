export const SERVICES = [
  { name: "General Service", price: 2500, desc: "Full vehicle check-up, oil & filter change" },
  { name: "Oil Change", price: 1200, desc: "Engine oil and oil filter replacement" },
  { name: "Brake Repair", price: 3500, desc: "Brake pad and disc inspection / replacement" },
  { name: "Tyre & Wheel Care", price: 1800, desc: "Rotation, balancing and alignment" },
  { name: "AC Service", price: 2200, desc: "AC gas refill and cooling check" },
  { name: "Car Wash & Detailing", price: 800, desc: "Exterior wash, interior vacuum and polish" },
];

export const priceOf = (name) => SERVICES.find((s) => s.name === name)?.price ?? 0;
