window.addEventListener("load", e => {
    const box_1 = document.body.querySelectorAll("[span-1]");
    box_1.forEach(element => {
        console.log(element);
        element.classList.add("load_page_1");
    });

    const box_2 = document.body.querySelectorAll("[span-2]");
    box_2.forEach(element => {
        element.classList.add("load_page_2");
    });

    const box_3 = document.body.querySelectorAll("[span-3]");
    box_3.forEach(element => {
        element.classList.add("load_page_3");
    });

    const box_4 = document.body.querySelectorAll("[span-4]");
    box_4.forEach(element => {
        element.classList.add("load_page_4");
    });

    const box_5 = document.body.querySelectorAll("[span-5]");
    box_5.forEach(element => {
        element.classList.add("load_page_5");
    });
});