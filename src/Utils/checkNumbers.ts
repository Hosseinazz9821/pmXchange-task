const reg = /(?:\d*\.)?\d+/;

export const checkIsNumber = (value: string): boolean => {
  if (value.includes(".")) {
    const phraseArr = value.split("");
    if (phraseArr.indexOf(".") !== phraseArr.lastIndexOf(".")) {
      return false;
    } else {
      return true;
    }
  } else {
    const finalVal = value.split(",").join("");
    return reg.test(finalVal);
  }
};
