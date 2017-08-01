//从传递进来的字母序列中找到缺失的字母并返回它；如果所有字母都在序列中，返回undefined

//1.  ================================================
function fearNotLetter(str) {
  for (var i = 0 ; i < str.length ; i++) {
    var code = str.charCodeAt(i);
    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
fearNotLetter("abce");  //d

//2.  ========================================================
function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;
  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
}
fearNotLetter("abce");  //d
//1.首先定义变量来存储字符串中第一个字母的字符代码，并存储可能找到的任何丢失的字
//2.将字符串转换为数组，以便映射它，而不是使用for和while循环
//3.当map通过字母字符代码时，与应该处于这个位置的字符代码进行比较
//4.如果当前字母匹配，我们将比较变量移动到下一个位置，以便我们在下一个周期进行比较
//5.如果没有，将丢失的字母分配给missing变量，这将在map完成后返回
//6.如果没有丢失的字符，返回undefined

//3.  ===========================================================================
function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');
  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);
    return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}
fearNotLetter("abce");
//一个新的字符串allChars被创建。
//创建一个正则表达式，否则选择除str之外的所有内容。
//该for循环用于在范围内的所有字母添加到allChars。
//match()用于从新创建的字符串中删除str字母，并返回。
//如果没有丢失的字符，返回undefined
