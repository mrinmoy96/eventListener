// let thisOne="mrinmoy";
// console.log(thisOne);
// console.log(document.getElementById("thisOne"));

// console.log(document.getElementsByClassName("okey"));

// const thisOne1=document.getElementsByName("email");

// const clickMe=document.getElementById("myBtn");
// clickMe.style.color="yellow";
// clickMe.style.backgroundColor="blue";


// const btn=document.querySelector(".okey");
// btn.innerText="none";

// console.log(myBtn.setAttribute("class", "thisisBtn"));
// console.log(document.documentElement);//all html
// console.log(document.body.firstElementChild);  //only h1 tag we get
// console.log(document.body.children);
// const arr=document.body.children;
// const newArr=Array.from(arr);   //now this form an array

// console.log(arr);  //HTMLCollection(4) [h1, div, div, script]
// console.log(newArr);  //(4) [h1, div, div, script]




// myBtn.font="100 1.5rem 'Roboto'"  //js dont know that is it element or not

// const myBtn=document.getElementById("myBtn");  // now js kmow the myBtn element
// myBtn.style.color='pink';
// myBtn.style.backgroundColor='navy';
// myBtn.style.padding="2vmax 4vmax"; //2vmax is length 4vmax is breath
// myBtn.style.cursor="pointer";  //now become pointer
// console.log(myBtn);


// const myFunc=(a,b)=>{
// 	console.log(a+b);
// }
// myFunc(6,5)

// const arr=[1,2,3,4,5];

// const result=arr.filter((value, index)=>{
// 	if(value>2){
// 		return value;
// 	}
// })
// console.log(result);

// const arr=[1,2,3,4,15];
// const result=arr.some((value, index)=>{
	
// 		return value<4;
	
// })
//  console.log(result);





// let total=0;
// const arr=[1,2,3,4,15];
// arr.forEach((value, index)=>{
// 	total+=value;
// 	console.log(total);
// })

// console.log("the total is:"+total);
// console.log(total);

// const arr=[1,2,3,4,15];
// const res=arr.map((value, index)=>{
// 	return value+=20;
	
// })
// console.log(res);


const heading=document.getElementById("heading");
const box1=document.getElementById("box1");
const btn=document.getElementById("myBtn");

btn.addEventListener("click", ()=> {
	box1.style.color="red";
	box1.style.backgroundColor="aqua"
	console.log("click");
});

btn.addEventListener("contextmenu",(e)=>{
	e.preventDefault();
	btn.style.backgroundColor="purple";
})


box1.addEventListener("mouseover",()=>{
	btn.style.transform="scale(1.1)";
	heading.style.backgroundColor="pink"
});

box1.addEventListener("mouseout",()=>{
	heading.style.backgroundColor="";
	btn.style.transform="";
})

