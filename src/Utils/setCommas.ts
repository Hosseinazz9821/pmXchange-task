export function numberWithCommas(value: string) {
  if (value.includes(".")) {
    if (value.indexOf(".") === -1) {
      const finalVal = value.split(".").join("");
      let str = Number(finalVal).toLocaleString("en-US");
      return str + ".";
    } else {
      const finalVal = value.split(".");
      return finalVal[0] + "." + finalVal[1];
    }
  } else {
    const finalVal = value.split(",").join("");
    let str = Number(finalVal).toLocaleString("en-US");
    return str;
  }
}
