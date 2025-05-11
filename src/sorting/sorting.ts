// SORTING ONLY FOR NUMBERS
// Array.from({length: 2000}, () => Math.floor(Math.random() * 256))

export function asc(arr: Array<number>) {
  const copyArr = arr.slice();
  copyArr.sort((a,b) => a - b);
  return copyArr;
}

export function desc(arr: Array<number>) {
  const copyArr = arr.slice();
  copyArr.sort((a,b) => a + b);
  return copyArr;
}

export function BubbleSort(arr: Array<number>): Array<number> {
  const copyArr = arr.slice();
  const length = copyArr.length;
  let step = 1;
  while (step < length ) {
    for(let position = 0; position < length - step; position++) {
      const currentPositionValue = copyArr[position];
      const nextPositionValue = copyArr[position + 1];
      if (copyArr[position] > copyArr[position + 1]) {
        copyArr[position] = nextPositionValue;
        copyArr[position + 1] = currentPositionValue;
      }
    }
    step++;
  }
  return copyArr;
}

export function CountingSort(arr: Array<number>): Array<number> {
  const finalArray: Array<number> = [];
  const countArray: Array<number> = [];
  for (let position = 0; position < arr.length; position++) {
    if (!countArray[arr[position]]) {
      countArray[arr[position]] = 1;
      continue;
    }
    countArray[arr[position]]++;
  }
  for (let position = 0; position < countArray.length; position++) {
    const numbers = countArray[position];
    let counter = 1
    while (counter <= numbers) {
      finalArray.push(position);
      counter++;
    }
  }
  return finalArray;
}

export function QuickSort(arr: Array<number>): Array<number> {
  console.time('QuickSort');
  const length = arr.length;
  const middlePosition = Math.floor(length/2);
  const pivot = [arr[0], arr[middlePosition], arr[length - 1]].sort()[1];
  let upper = [];
  let lower = [];
  // En realidad recorrer todo el array, pero aqui estoy recorriendo la mitad mirando a ambos lados
  for (let step = 1; step <= middlePosition; step++) {
    // Right Direction
    if (arr[middlePosition + step]) {
      if (arr[middlePosition + step] > pivot) {
        upper.push(arr[middlePosition + step]);
      } else {
        lower.push(arr[middlePosition + step]);
      }
    }
    // Left Direction
    if (arr[middlePosition - step]) {
      if (arr[middlePosition - step] > pivot) {
        upper.push(arr[middlePosition - step]);
      } else {
        lower.push(arr[middlePosition - step]);
      }
    }
  }
  // Sort upper and lower
  upper.sort((a,b) => a - b);
  lower.sort((a,b) => a - b);
  // console.log('Pivot', pivot);
  // console.log('MiddlePosition', middlePosition);
  // console.log('Lower', lower.length);
  // console.log('Upper', upper.length);
  console.timeEnd('QuickSort');
  return [...lower,pivot,...upper];
}

export function MergeSort(arr: number[]): number[] {
  // const copyArr = arr.slice();
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length/2);

  // Example: [7,1,5,4]
  const left = MergeSort(arr.slice(0, middle)); // [7,1] -> l[7], r[1]
  const right = MergeSort(arr.slice(middle)); // [5,4] -> l[5], r[4]

  const finalArray = [];
  let positionLeft = 0;
  let positionRight = 0;
  
  console.log('left', left, 'right', right);

  while (positionLeft < left.length && positionRight < right.length) {
    if (left[positionLeft] < right[positionRight]) {
      finalArray.push(left[positionLeft]);
      positionLeft++;
    } else {
      finalArray.push(right[positionRight]);
      positionRight++;
    }
  }
  // Siempre se va a quedar uno vacio, el derecho o el izquierdo
  return finalArray.concat(left.slice(positionLeft)).concat(right.slice(positionRight));
}