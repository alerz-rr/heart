
const select = document.querySelector('#select');
const image = document.querySelector('#image');

select.addEventListener("change",function (e) {
        var value = e.target.value;

        if (value === "120") {
            image.src = "./img/120.jpg";
        }
        if (value === "480") {
            image.src = "./img/480.jpg";
        }
        
        if (value === "720") {
            image.src = "./img/720.jpg";
        }
        if (value === "1080") {
            image.src = "./img/1080.jpg" ;
        }
        
        if (value === "4k") {
            image.src = "./img/001.jpg";
        }


    });
