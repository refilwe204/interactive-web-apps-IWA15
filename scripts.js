// scripts.js

const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ],
  };
  
  // Only edit below
  
  const [firstList, secondList, thirdList] = data.lists;
  
  const result = [];
  
  const extractBiggest = () => {
    const lastOfFirst = firstList[1][firstList[1].length - 1];
    const lastOfSecond = secondList[1][secondList[1].length - 1];
    const lastOfThird = thirdList[1][thirdList[1].length - 1];
  
    if (lastOfFirst >= lastOfSecond && lastOfFirst >= lastOfThird) {
      return firstList[1].pop();
    }
  
    if (lastOfSecond >= lastOfFirst && lastOfSecond >= lastOfThird) {
      return secondList[1].pop();
    }

    
    return thirdList[1].pop();
  };


  // Only edit above
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  console.log(result);
  
