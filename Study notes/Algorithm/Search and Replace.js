function myReplace(str, before, after) {
  var index = str.indexOf(before);
  if (/[A-Z]/.test(before)) {
    after = after.replace(/\w/,after[0].toUpperCase());
  }
  var reg = new RegExp(before);
  str = str.replace(reg,after);
  return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//用正则来查找替换字符中是否含有首字母大写
//如果要用正则来传参，就不能使用 /reg/ 的方式，要用构造式，var reg = new regExp(para);
