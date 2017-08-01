//写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组
//换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值
//非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序
//例：unite([1, 3, 2], [5, 2, 1, 4], [2, 1]) 应该返回 [1, 3, 2, 5, 4]

//1.================================================================
function unite(arr1, arr2, arr3) {
  var finalArray = [];
  for (var i = 0 ; i < arguments.length ; i++) {
    var arrayArguments = arguments[i];
    for (var j = 0 ; j < arrayArguments.length ; j++) {
      var indexValue = arrayArguments[j];
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//代码说明：
  //创建空数组finalResult来存储最终结果。
  //循环遍历外部循环中的arguments对象，并将其存储在arrayArguments中。
  //内循环用于循环单个数组元素。
  //如果元素在finalArray中不存在，请添加它。
  //返回finalArray
  
//2.===================================================================
function uniteUnique(arr1, arr2, arr3) {
  var newArr;
  var args = Array.prototype.slice.call(arguments);
  newArr = args.reduce(function(arrA,arrB){
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });
   return newArr;                    
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//代码说明：
  //arguments对象被转换成使用的数组slice()。
  //reduce() 函数用于平坦化数组，即对于数组（或嵌套数组）中的每个元素，将其元素提取为一维数组。
  //在平整数组之后，filter()用于从newArr中删除重复的元素
  
//3.===============================================================================================
function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//代码说明
  //参数数量可以动态地改变，所以我们不需要麻烦地提供我们的函数uniteUnique（）和参数
  //我们使用while循环将所有参数连接成一个名为concatArr的数组
  //我们使用filter（）通过检查每个元素的索引并删除不同位置的相同元素来删除重复的元素
