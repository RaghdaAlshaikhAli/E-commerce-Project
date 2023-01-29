// let btn_top = document.querySelector(".pop-up")
// btn_top.onclick = () => {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     })
// }
// function scrollToTop() {
//     if (window.scrollY >= 300) {
//         btn_top.style.display = "block";
//     }
//     else {
//         btn_top.style.display = "none";
//     }
// }


// let sections = document.querySelectorAll('section');
// let links = document.querySelectorAll('.data2 a')

// window.onscroll = function(){
// sections.forEach(section => {
//       if(window.scrollY >= section.offsetTop -300){
//          links.forEach(element => {
//             if(section.dataset.grop == element.getAttribute('href')){
//                element.classList.add('active');
//             }
//             else{
//                element.classList.remove('active');
//             }
//          });
//       }
// });
// }


// let dark = document.getElementById("dark");
// let body = document.querySelector("body");
// // let section = document.querySelectorAll("section");

// dark.onclick = function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//     if (body.classList.contains("dark-mode")) {
//         dark.innerHTML = '<i class="fa-solid fa-sun"></i>';
//       } else {
//         dark.innerHTML = ' <i class="fa-solid fa-moon"></i>';
//     }
//  }


// // dark.onclick = () => {
// // 	if (body.classList.contains("dark")) {
// //     dark.innerHTML = '<i class="fa-solid fa-sun"></i>';

// // 	// 	document.querySelector("svg").style.fill = "#fff"
// // 	// 	img_company.forEach(img => {
// // 	// 			img.style.fill = "#fff"
// // 	// });
    
// // 		} else
// // 		{
// //     dark.innerHTML = ' <i class="fa-solid fa-moon"></i>';

// // 	// 	document.querySelector("svg").style.fill = "black"
// // 	// 	img_company.forEach(img => {
// // 	// 			img.style.fill = "black"
// // 	// });
// // }
// //   if (body.classList.contains("dark")) {
// //     dark.innerHTML = '<i class="fa-solid fa-sun"></i>';
// //   } else {
// //     dark.innerHTML = ' <i class="fa-solid fa-moon"></i>';
// // }
// // }