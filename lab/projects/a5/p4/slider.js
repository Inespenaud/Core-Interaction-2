const slider = document.querySelector('.slider')

const sliderDuration = 5000;

var count = 1;

var timer = setTimeout(slideImage, sliderDuration)

function slideImage() {
    if(count == slider.children.length) {
        slider.style.left = 0 + 'px'
        count = 1;
        timer = setTimeout(slideImage, sliderDuration)
        return
    }
    
    slider.style.left = -800 * count + 'px'
    timer = setTimeout(slideImage, sliderDuration)
    count = count + 1;
}
