const $ = document;
const choices = [
  {
    title: "تپسی کلاسیک",
    caption:
      "با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.",
    image: "./assets/images/illus-classic.webp",
  },
  {
    title: "تپسی تلفنی",
    caption:
      "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.",
    image: "./assets/images/illus-tel.webp",
  },
  {
    title: "تپسی لاین",
    caption:
      "تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود.",
    image: "./assets/images/illus-line.webp",
  },
  {
    title: "موتوپیک",
    caption:
      "با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.",
    image: "./assets/images/illus-motopeyk.webp",
  },
  {
    title: "اتوپیک",
    caption:
      "اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند. در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد فراهم است.",
    image: "./assets/images/illus-autopeyk.webp",
  },
  {
    title: "تپسی پلاس",
    caption:
      "در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.",
    image: "./assets/images/illus-plus.webp",
  },
  {
    title: "همیار",
    caption:
      "سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا داروخانه مورد نظر شما باشند.",
    image: "./assets/images/illus-hamyar.webp",
  },
];
const mainLine = $.querySelector(".mainLine");
const mobileMenu = $.querySelector(".mobileMenu");
const serviceTitle = $.querySelector(".serviceCaptionTitle");
const serviceText = $.querySelector(".servicesCaptionText");
const serviceImg = $.querySelector(".servicesCaptionsImg");
const servicesChoice = $.querySelectorAll(".servicesChoice");

let isMenuOpen = false;
mainLine.addEventListener("click", () => {
  if (!isMenuOpen) {
    mainLine.classList.add("activeMenu");
    mobileMenu.style.display = "flex";
    mainLine.style.backgroundColor = "transparent";
    isMenuOpen = true;
  } else {
    mainLine.classList.remove("activeMenu");
    mobileMenu.style.display = "none";

    mainLine.style.backgroundColor = "#000";

    isMenuOpen = false;
  }
});
let theChoice;
servicesChoice.forEach((choice) => {
  choice.addEventListener("click", () => {
    servicesChoice.forEach((otherChoices) => {
      otherChoices.classList.remove("activeService");
    });
    choice.classList.add("activeService");
    console.log(choice.childNodes[3].innerHTML);
    theChoice = choices.find((mainChoice) => {
      return mainChoice.title === choice.childNodes[3].innerHTML;
    });
    console.log(theChoice);
    console.log(theChoice.title);
    console.log(theChoice.caption);
    serviceTitle.innerHTML = theChoice.title;
    serviceText.innerHTML = theChoice.caption;
    serviceImg.src = theChoice.image;
  });
});
