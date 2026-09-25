var categoryTrack = document.querySelector(".category-track");
var prevButton = document.querySelector(".category-prev");
var nextButton = document.querySelector(".category-next");

var currentIndex = 1;

nextButton.addEventListener("click",function(){
    currentIndex++;
    categoryTrack.style.transform = "translateX(-" + (currentIndex * 180)+"px)";
    if(currentIndex === 11){
        setTimeout(function(){
            categoryTrack.style.transition = "none";
            currentIndex = 1;
            categoryTrack.style.transform = "translateX(-180px)";
            setTimeout(function(){
                categoryTrack.style.transition = "transform 0.5s ease";
            },50);
        },500);
    }
});

/*prevButton.addEventListener("click",function(){
    categoryTrack.scrollLeft -= 180;
});*/