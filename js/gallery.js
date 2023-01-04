document.getElementById("btn_1").addEventListener("click", (e)=>{
    let gallery_1 = document.getElementById("gallery-1");
    while(gallery_1.classList.contains("d-none")==true){
        gallery_1.classList.remove("d-none");
    }
    document.getElementById("gallery-2").classList.add("d-none");
    document.getElementById("gallery-3").classList.add("d-none");
    document.getElementById("gallery-4").classList.add("d-none");
})
document.getElementById("btn_2").addEventListener("click", (e)=>{
    let gallery_2 = document.getElementById("gallery-2");
    while(gallery_2.classList.contains("d-none")==true){
        gallery_2.classList.remove("d-none");
    }    
    document.getElementById("gallery-1").classList.add("d-none");
    document.getElementById("gallery-3").classList.add("d-none");
    document.getElementById("gallery-4").classList.add("d-none");
})
document.getElementById("btn_3").addEventListener("click", (e)=>{
    let gallery_3 = document.getElementById("gallery-3");
    while(gallery_3.classList.contains("d-none")==true){
        gallery_3.classList.remove("d-none");
    }   
    document.getElementById("gallery-1").classList.add("d-none");
    document.getElementById("gallery-2").classList.add("d-none");
    document.getElementById("gallery-4").classList.add("d-none");
})
document.getElementById("btn_4").addEventListener("click", (e)=>{
    let gallery_4 = document.getElementById("gallery-4");
    while(gallery_4.classList.contains("d-none")==true){
        gallery_4.classList.remove("d-none");
    }
    document.getElementById("gallery-1").classList.add("d-none");
    document.getElementById("gallery-2").classList.add("d-none");
    document.getElementById("gallery-3").classList.add("d-none");
})