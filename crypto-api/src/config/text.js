export const formatNumber = (num) => {
  return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const getYear = () => {
  return new Date().getFullYear();
};

export const capitalize = (word) => {
  return word?.charAt(0).toUpperCase() + word?.slice(1);
} 