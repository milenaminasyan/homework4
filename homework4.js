//2.
const getStars = function (num){
	let stars = ' ';
	while (num > 0){
		num = num - 1;
		stars = stars + '*' ;
	};
	return (stars);
};

const getSpace = function(num){
	let space = ' ';
	while (num > 0) {
		num = num - 1;
		space = space + ' ' ;
	};
	return (space);
};

const triangleStars = function(height){
	let line = ' ';
	let spaceNum = height;
	while (height > 0) {
		line = getSpace (spaceNum - height) + getStars(height * 2 - 1);
		height = height - 1;
		console.log(line);
	};
}; triangleStars(8);





//3.

const multiToSingle = function(parentArr){
	let base = [];
	let parentindex = 0;
	while(parentindex < parentArr.length){
		let childindex = 0;
		let childArr = parentArr[parentindex];
		while (childindex < childArr.length){
			base[base.length] = childArr[childindex];
			childindex++ ;
		}
		parentindex++ ;
	} return(base);
}
multiToSingle([[1, 2, 3], [4, 5]]);



//4.

const findMinMax = function(arr, boo){
	if (boo === true){
		let max = arr[0];
		let index1 = 1;
		while(index1 < arr.length){
			if(max < arr[index1]){
				max = arr[index1];
			}
			index1++;
		} return max;
		if(boo = false){
			let min = arr[0];
			let index2 = 1;
			while (index2 < arr.length){
				if(min > arr[index2]){
					min = arr[index2];
				}
				index2++ ; 

			} return(min);
		}
	}
} 
findMinMax([1, 4, 3, 2], true);



//6.

const sum = function(arr){
	let sum = 0;
	let index = 0;
	while(index < arr.length) {
		sum = sum + arr[index];
		index++;
	} return(sum);
}
sum([1, 2, 3]);




//7.
const reverse = function (string){
  let newStr = '';
  let index = string.length - 1;
  while(index >= 0){
    newStr = newStr + string[index];
    index = index - 1;
  }
  return newStr;
};
console.log(reverse('abc'));
