let data = [
  {
    title: "Smartphone",
    product: [
      {
        imgManz:
          "https://www.geekmall.eu/6639-thickbox_default/xiaomi-mi-a3-464go-androidone-blanc.jpg",
        ism: "Redmi A3",
        price: 1800,
        color: "black",
      },
      {
        imgManz:
          "https://diamondelectric.ru/images/4620/4619214/xiaomi_redmi_note_11_4g_6__128_gb__chernii_black__global_rom_1.jpg",
        ism: "Redmi A4",
        price: 2000,
        color: "blue",
      },
      {
        imgManz: "https://cdn1.ozone.ru/s3/multimedia-o/6542852160.jpg",
        ism: "Redmi A5",
        price: 2800,
        color: "cilver",
      },
      {
        imgManz: "https://ir.ozone.ru/s3/multimedia-h/c1000/6678076877.jpg",
        ism: "Redmi A6",
        price: 3200,
        color: "gold",
      },
      {
        imgManz:
          "https://cdn.chv.me/images/thumbnails/Xiaomi-Redmi-Note-7-Pro-6GB-BsPvFavt.jpg.thumb_800x800.jpg",
        ism: "Redmi A7",
        price: 1400,
        color: "silver",
      },
    ],
    product2: [
      {
        imgManz:
          "https://www.geekmall.eu/6639-thickbox_default/xiaomi-mi-a3-464go-androidone-blanc.jpg",
        ism: "Redmi A3",
        price: 1800,
        color: "black",
      },
      {
        imgManz:
          "https://diamondelectric.ru/images/4620/4619214/xiaomi_redmi_note_11_4g_6__128_gb__chernii_black__global_rom_1.jpg",
        ism: "Redmi A4",
        price: 2000,
        color: "blue",
      },
      {
        imgManz: "https://cdn1.ozone.ru/s3/multimedia-o/6542852160.jpg",
        ism: "Redmi A5",
        price: 2800,
        color: "cilver",
      },
      {
        imgManz: "https://ir.ozone.ru/s3/multimedia-h/c1000/6678076877.jpg",
        ism: "Redmi A6",
        price: 3200,
        color: "gold",
      },
      {
        imgManz:
          "https://cdn.chv.me/images/thumbnails/Xiaomi-Redmi-Note-7-Pro-6GB-BsPvFavt.jpg.thumb_800x800.jpg",
        ism: "Redmi A7",
        price: 1400,
        color: "silver",
      },
    ],
  },
];

let ulList = document.querySelector("#ulList");
let htmlProduct = "";
data.forEach((item) => {
  item.product.forEach(({ imgManz, ism, price, color }) => {
    let li = `<li class="liList">
    <img src=${imgManz} alt="" width = '200' height = '200'/>
    <h2>${ism}</h2>
    <p>${price}</p>
    <span style = 'background: ${color}'; class="color"></span>
  </li>`;
    htmlProduct += li;
  });
});

ulList.innerHTML = htmlProduct;
