export const getProductUnit = (product) => {
  if (!product || !product.name) return '1 kg';
  const name = product.name.toLowerCase();
  const category = (product.category || '').toLowerCase();

  // Liquids
  if (name.includes('juice') || name.includes('water') || name.includes('soda')) return '500 ml';
  if (name.includes('milk') || name.includes('oil') || name.includes('lassi') || name.includes('drink')) return '1 L';
  if (category === 'beverages') return '1 L';

  // Solids (grams)
  if (name.includes('chips') || name.includes('biscuit') || name.includes('chocolate') || name.includes('snack') || name.includes('cookie')) return '200 g';
  if (category === 'snacks' || category === 'bakery') return '200 g';

  // Default Solids
  return '1 kg';
};
