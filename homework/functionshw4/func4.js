const duplicates = [5, 5, 6, 8, 7, 9, 6, 2, 3, 4, 5, 4, 5, 1];

function removeDuplicates(arr,target) {

	return arr.filter((element) => element !== target);
}

console.log(duplicates);

console.log(removeDuplicates( duplicates,5));

