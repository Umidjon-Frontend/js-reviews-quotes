window.addEventListener("DOMContentLoaded", () => {
    const dataPersons = [
        {
            fullName: "Susan Smith",
            job: "web developer",
            info: `I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`,
            logo: "img/person-1.jpg",
        },
        {
            fullName: "Anna Johnson",
            job: "WEB DESIGNER",
            info: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.`,
            logo: "img/person-2.jpg",
        },
        {
            fullName: "Peter Jones",
            job: "INTERN",
            info: `Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.`,
            logo: "img/person-3.jpg",
        },
        {
            fullName: "Bill Anderson",
            job: "THE BOSS",
            info: `Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.`,
            logo: "img/person-4.jpg",
        },
    ];

    const btns = document.querySelectorAll(".btn"),
        btnRandom = document.querySelector(".btn-random"),
        avtorImg = document.querySelector(".avtor"),
        avtorName = document.querySelector(".avtor-name"),
        avtorJob = document.querySelector(".avtor-job"),
        avtorInfo = document.querySelector(".avtor-info");
    let count = 0;

    btns.forEach((item, index) => {
        item.addEventListener("click", () => {
            if (index === 0) {
                count--;
                if (count < 0) {
                    count = dataPersons.length - 1;
                    loadReview();
                }
                loadReview();
            } else if (index === 1) {
                count++;
                if (count > dataPersons.length - 1) {
                    count = 0;
                    loadReview();
                }
                loadReview();
            }
        });
    });
    const loadReview = () => {
        let src = dataPersons[count].logo;
        avtorImg.setAttribute("src", src);
        avtorName.innerHTML = dataPersons[count].fullName;
        avtorJob.innerHTML = dataPersons[count].job;
        avtorInfo.innerHTML = dataPersons[count].info;
    };
});
