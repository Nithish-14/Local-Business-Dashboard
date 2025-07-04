const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover {name}: The Hidden Gem of {location}",
  "How {name} Became the Talk of {location}",
  "{location} Loves {name} – Here's Why!",
];

export const generateHeadline = (name: string, location: string) => {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace('{name}', name).replace('{location}', location);
};

export const generateBusinessData = (name: string, location: string) => ({
  rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)),
  reviews: Math.floor(Math.random() * 500 + 50),
  headline: generateHeadline(name, location),
});
