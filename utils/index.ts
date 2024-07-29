export const calculateBytes = (str: string) => {
  let count = 0;
  let character = "";
  for (let i = 0; i < str.length; i++) {
    character = str.charAt(i);
    if (escape(character).length > 4) {
      count += 2;
    } else {
      count++;
    }
  }
  return count;
};
