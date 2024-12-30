function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const s1copy=s1.toUpperCase();
	const s2copy=s2.toUpperCase();
	for(let i=0;i<s1copy.length;i++){
		let check=false;
		if(s1copy[i]==s2copy[0]){
			for(let j=0;j<s2copy.length;j++){
				if(s1copy[i+j]!=s2copy[j]){
					check=false
					break;
				}else{
					check=true;
				}
			}
			if(check===true){
				return i;
			}
		}
	}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
