const content_certificate1 = document.getElementById("content_certificate1");
const close_certificate1 = document.getElementById("close_certificate1");

const content_certificate2 = document.getElementById("content_certificate2");
const close_certificate2 = document.getElementById("close_certificate2");

const content_certificate3 = document.getElementById("content_certificate3");
const close_certificate3 = document.getElementById("close_certificate3");

// CERTIFICATE 1
const course1 = document.getElementById("course1").addEventListener("click", () => {
    content_certificate1.style.display = "block";
});

close_certificate1.addEventListener("click", () => {
    content_certificate1.style.display = "none";
});

// CERTIFICATE 2
const course2 = document.getElementById("course2").addEventListener("click", () => {
    content_certificate2.style.display = "block";
});

close_certificate2.addEventListener("click", () => {
    content_certificate2.style.display = "none";
});
 
// CERTIFICATE 3
const course3 = document.getElementById("course3").addEventListener("click", ()=> {
    content_certificate3.style.display = "block";
});

close_certificate3.addEventListener("click", () => {
    content_certificate3.style.display = "none";
});