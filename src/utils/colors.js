const colorScheme = {
  background: "#1A1A1A", // Russian Black
  
  // A soft, accessible off-white for text
  paragraph: "#F5F5DC", // Beige 
  
  // A clean, pure white for headings and high-impact elements
  heading: "#FFFFFF", // Pure White
  
  // A slightly muted white for subtle borders and dividers
  border: "#C0C0C0", // Silver
  
  // The primary brand color: a vibrant orange
  brand: {
    primary: "#f48020", // A vibrant, accessible Orange
    secondary: "#FF9800", // A slightly lighter orange for secondary highlights
  },

  button: {
    primary: {
      background: "#f48020", // A vibrant, accessible Orange
      text: "#1A1A1A", // Russian Black
      hover: "#E64A19", // A darker orange for hover state
    },
    secondary: {
      background: "#C0C0C0", // Silver
      text: "#1A1A1A", // Russian Black
      hover: "#A9A9A9", // Dark Gray
    },
  },
  
  // An optional accent color for links, to differentiate from buttons
  link: "#FF9800", // A slightly lighter orange
};

export default colorScheme;