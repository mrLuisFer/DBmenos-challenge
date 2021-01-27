export const truncate = (str, length = "100") => {
  if (str.length >= length) {
    return str.length > 10 ? str.substring(0, length) + "..." : str;
  } else {
    return str + "";
  }
};
