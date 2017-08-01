//DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。
//对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]
//字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组

function pair(str) {
  var map = {T:'A', A:'T', G:'C', C:'G'};
  strArr = str.split('');
  for (var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i], map[strArr[i]]];
  }
 return strArr;
}
pair("GCG");

//==================================================
function pairElement(str) {
  var paired = [];
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }
  return paired;
}
pairElement("GCG");
