

export const disabledDate = (current) => {
 
  const today = new Date();
  
  const twoYearsAgo = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
  
  return current && current < twoYearsAgo;
};