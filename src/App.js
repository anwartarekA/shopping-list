import { useState } from "react";
import "./App.css";
const fruits = [
  {
    name: "Persimmon",
    id: 52,
    family: "Ebenaceae",
    order: "Rosales",
    genus: "Diospyros",
    price: "50",
    nutritions: {
      calories: 81,
      fat: 0,
      sugar: 18,
      carbohydrates: 18,
      protein: 0,
    },
    img: "https://images.cdn.saveonfoods.com/detail/4427.jpg",
  },
  {
    name: "Strawberry",
    id: 3,
    price: "55",
    family: "Rosaceae",
    order: "Rosales",
    genus: "Fragaria",
    nutritions: {
      calories: 29,
      fat: 0.4,
      sugar: 5.4,
      carbohydrates: 5.5,
      protein: 0.8,
    },
    img: "https://buybc.gov.bc.ca/app/uploads/sites/386/2024/03/Strawberries_115562145.png",
  },
  {
    name: "Banana",
    id: 1,
    price: "40",
    family: "Musaceae",
    order: "Zingiberales",
    genus: "Musa",
    nutritions: {
      calories: 96,
      fat: 0.2,
      sugar: 17.2,
      carbohydrates: 22,
      protein: 1,
    },
    img: "https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg",
  },
  {
    name: "Tomato",
    id: 5,
    price: "33",
    family: "Solanaceae",
    order: "Solanales",
    genus: "Solanum",
    nutritions: {
      calories: 74,
      fat: 0.2,
      sugar: 2.6,
      carbohydrates: 3.9,
      protein: 0.9,
    },
    img: "https://www.lovefoodhatewaste.com/sites/default/files/styles/twitter_card_image/public/2022-08/Tomatoes-sh769524253.jpg.webp?itok=QYFYzSFr",
  },
  {
    name: "Pear",
    id: 4,
    price: "87",
    family: "Rosaceae",
    order: "Rosales",
    genus: "Pyrus",
    nutritions: {
      calories: 57,
      fat: 0.1,
      sugar: 10,
      carbohydrates: 15,
      protein: 0.4,
    },
    img: "https://www.chandigarhayurvedcentre.com/wp-content/uploads/2024/05/3341.png",
  },
  {
    name: "Durian",
    id: 60,
    price: "23",
    family: "Malvaceae",
    order: "Malvales",
    genus: "Durio",
    nutritions: {
      calories: 147,
      fat: 5.3,
      sugar: 6.75,
      carbohydrates: 27.1,
      protein: 1.5,
    },
    img: "https://product.hstatic.net/200000551437/product/monthong_durian___33bdd9b20fa54728ab08711e11521063.png",
  },
  {
    name: "Blackberry",
    id: 64,
    price: "19",
    family: "Rosaceae",
    order: "Rosales",
    genus: "Rubus",
    nutritions: {
      calories: 40,
      fat: 0.4,
      sugar: 4.5,
      carbohydrates: 9,
      protein: 1.3,
    },
    img: "https://promisedlandproduce.com.au/cdn/shop/products/image_1f5df7c2-11d6-4a2e-9e43-9cf27de6b878.jpg?v=1670927296",
  },
  {
    name: "Lingonberry",
    id: 65,
    price: "65",
    family: "Ericaceae",
    order: "Ericales",
    genus: "Vaccinium",
    nutritions: {
      calories: 50,
      fat: 0.34,
      sugar: 5.74,
      carbohydrates: 11.3,
      protein: 0.75,
    },
    img: "https://skinkraft.com/cdn/shop/articles/Evidence-Based_10b84207-29ca-40c9-93ab-1524fbc5519a_1024x1024.jpg?v=1640271143",
  },
  {
    name: "Kiwi",
    id: 66,
    price: "93",
    family: "Actinidiaceae",
    order: "Struthioniformes",
    genus: "Apteryx",
    nutritions: {
      calories: 61,
      fat: 0.5,
      sugar: 9,
      carbohydrates: 15,
      protein: 1.1,
    },
    img: "https://orchardfruit.com/cdn/shop/files/Kiwi-1-Piece-The-Orchard-Fruit-72138634.jpg?v=1751051702&width=1214",
  },

  {
    name: "Pineapple",
    id: 10,
    price: "20",
    family: "Bromeliaceae",
    order: "Poales",
    genus: "Ananas",
    nutritions: {
      calories: 50,
      fat: 0.12,
      sugar: 9.85,
      carbohydrates: 13.12,
      protein: 0.54,
    },
    img: "https://www.dole.com/sites/default/files/styles/1024w768h-80/public/media/2025-01/organic%20pineaple.png?itok=4wB5t6Tk-24IDL_Zc",
  },
  {
    name: "Fig",
    id: 68,
    price: "70",
    family: "Moraceae",
    order: "Rosales",
    genus: "Ficus",
    nutritions: {
      calories: 74,
      fat: 0.3,
      sugar: 16,
      carbohydrates: 19,
      protein: 0.8,
    },
    img: "https://www.newdirections.com.au/WebRoot/Store/Shops/newdirections/5E85/4A5F/85D0/8111/41ED/C0A8/DA57/2D58/EXTR1KFIGPOW-1-kg-Fig-Powder-Fruit-Herbal-Powder-Extracts-L-20200408_ml.jpg",
  },

  {
    name: "Plum",
    id: 71,
    price: "80",
    family: "Rosaceae",
    order: "Rosales",
    genus: "Prunus",
    nutritions: {
      calories: 46,
      fat: 0.28,
      sugar: 9.92,
      carbohydrates: 11.4,
      protein: 0.7,
    },
    img: "https://media.istockphoto.com/id/687478414/photo/red-cherry-plum-with-green-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=vje7nFHGnWl-cHDA8wP_UZHryRT5LkAFwn7_8qKtiyc=",
  },
  {
    name: "Orange",
    id: 2,
    price: "57",
    family: "Rutaceae",
    order: "Sapindales",
    genus: "Citrus",
    nutritions: {
      calories: 43,
      fat: 0.2,
      sugar: 8.2,
      carbohydrates: 8.3,
      protein: 1,
    },
    img: "https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png",
  },
  {
    name: "GreenApple",
    id: 72,
    price: "44",
    family: "Rosaceae",
    order: "Rosales",
    genus: "Malus",
    nutritions: {
      calories: 21,
      fat: 0.1,
      sugar: 6.4,
      carbohydrates: 3.1,
      protein: 0.4,
    },
    img: "https://falconfresh.com/media/catalog/product/cache/0e405ab110ef006cccff6c2150b91e32/9/5/9510.jpg",
  },
  {
    name: "Raspberry",
    id: 23,
    price: "45",
    family: "Rosaceae",
    order: "Rosales",
    genus: "Rubus",
    nutritions: {
      calories: 53,
      fat: 0.7,
      sugar: 4.4,
      carbohydrates: 12,
      protein: 1.2,
    },
    img: "https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/files/willamette-raspberry-bush-2-gallon.jpg?v=1729717126",
  },
  {
    name: "Watermelon",
    id: 25,
    price: "88",
    family: "Cucurbitaceae",
    order: "Cucurbitales",
    genus: "Citrullus",
    nutritions: {
      calories: 30,
      fat: 0.2,
      sugar: 6,
      carbohydrates: 8,
      protein: 0.6,
    },
    img: "https://www.watermelon.org/wp-content/uploads/2020/07/Seeded-Wedge-scaled.jpg",
  },
  {
    name: "Lemon",
    id: 26,
    price: "30",
    family: "Rutaceae",
    order: "Sapindales",
    genus: "Citrus",
    nutritions: {
      calories: 29,
      fat: 0.3,
      sugar: 2.5,
      carbohydrates: 9,
      protein: 1.1,
    },
    img: "https://fruits.today/image/cache/catalog/product/8/Cytryna_ES_05kg-800x800.jpg",
  },
  {
    name: "Mango",
    id: 27,
    price: "100",
    family: "Anacardiaceae",
    order: "Sapindales",
    genus: "Mangifera",
    nutritions: {
      calories: 60,
      fat: 0.38,
      sugar: 13.7,
      carbohydrates: 15,
      protein: 0.82,
    },
    img: "https://cdn.futura-sciences.com/sources/mangue-opti.jpeg",
  },

  {
    name: "Apple",
    id: 6,
    price: "60",
    family: "Rosaceae",
    order: "Rosales",
    genus: "Malus",
    nutritions: {
      calories: 52,
      fat: 0.4,
      sugar: 10.3,
      carbohydrates: 11.4,
      protein: 0.3,
    },
    img: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg",
  },
  {
    name: "Guava",
    id: 37,
    price: "55",
    family: "Myrtaceae",
    order: "Myrtales",
    genus: "Psidium",
    nutritions: {
      calories: 68,
      fat: 1,
      sugar: 9,
      carbohydrates: 14,
      protein: 2.6,
    },
    img: "https://specialtyproduce.com/sppics/24967.png",
  },
  {
    name: "Melon",
    id: 41,
    price: "66",
    family: "Cucurbitaceae",
    order: "Cucurbitaceae",
    genus: "Cucumis",
    nutritions: {
      calories: 34,
      fat: 0,
      sugar: 8,
      carbohydrates: 8,
      protein: 0,
    },
    img: "https://i5.walmartimages.com/asr/2177831d-18f9-464d-9ca4-2c9cfd19c2dc.0562a6ef0a3968b22ef02f8c98b3ef1f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
];
function App() {
  const [products, setProducts] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const totalPrice =
    products.length > 0
      ? products
          .map((product) => Number(product.price) * product.numKilos)
          .reduce((acc, current) => acc + current, 0)
      : 0;
  function handleProducts(value) {
    setProducts((fruits) => {
      const index = fruits.findIndex((fruit) => fruit?.id === value.id);
      const result =
        index !== -1
          ? fruits.map((fruit, i) =>
              i === index
                ? { ...fruit, numKilos: fruit.numKilos + value.numKilos }
                : fruit
            )
          : [...fruits, value];
      return result;
    });
  }
  function handleRemovingProduct(id) {
    setProducts((products) => products.filter((product) => product?.id !== id));
  }
  return (
    <div>
      <Heading
        products={products}
        onRemove={handleRemovingProduct}
        totalPrice={totalPrice}
        showMenu={showMenu}
        onShowMenu={setShowMenu}
        onSearch={setSearchValue}
      />
      <FruitsItems onProducts={handleProducts} searchValue={searchValue} />
      <ContactLinks />
    </div>
  );
}
function Heading({
  products,
  totalPrice,
  onRemove,
  showMenu,
  onShowMenu,
  onSearch,
}) {
  const [search, setSearch] = useState("");
  onSearch(search);
  return (
    <div className="container">
      <div className="heading">
        <h1>F&V</h1>
        <div className="search">
          <input
            type="text"
            placeholder="search for fruits & vegetables"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="shopping_result">
          <div className="total">
            <div className="amount">
              <p>No. of items :{products.length > 0 ? products.length : "0"}</p>
            </div>
            <div className="money">
              <p>Sub total :{totalPrice}</p>
            </div>
          </div>
          <div className="shop">
            <img
              className="result"
              onClick={() => onShowMenu((toggle) => !toggle)}
              src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
              alt="bag-shopping"
            />
            {showMenu && <Menu products={products} onRemove={onRemove} />}
          </div>
        </div>
      </div>
    </div>
  );
}
function Menu({ products, onRemove }) {
  return (
    <div className="bought_products_menu">
      {products.length > 0
        ? products.map((product) => (
            <MenuDetails
              product={product}
              onRemove={onRemove}
              key={product.id}
            />
          ))
        : ""}
      {products.length === 0 && (
        <div className="lock">
          <img
            src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png"
            alt="layout"
          />
          <p>Your cart is empty!</p>
        </div>
      )}
      <div className="procced">
        <button className="checkout">proceed to checkout</button>
      </div>
    </div>
  );
}
function MenuDetails({ product, onRemove }) {
  return (
    <div className="bought_products" key={product.id}>
      <div className="product">
        <div className="product_data">
          <div className="one">
            <img src={product.img} />
          </div>
          <div className="two">
            <p>
              {product.name}- {product.numKilos} keg
            </p>
            <span>{product.price} LE</span>
          </div>
        </div>
        <div className="product_amount_price">
          <div className="amounts">
            <span>{product.numKilos} No.</span>
            <span>LE {product.price}</span>
          </div>
          <span className="exit" onClick={() => onRemove(product.id)}>
            x
          </span>
        </div>
      </div>
    </div>
  );
}
function FruitsItems({ onProducts, onAmouts, searchValue }) {
  console.log(searchValue);
  return (
    <div className="container_fruits_lists">
      <div className="fruits_lists">
        {searchValue === ""
          ? fruits.map((fruit) => (
              <FruitItem
                fruit={fruit}
                key={fruit.id}
                onProducts={onProducts}
                onAmouts={onAmouts}
              />
            ))
          : fruits
              .filter((fruit) => fruit.name.includes(searchValue))
              .map((fruit) => (
                <FruitItem
                  fruit={fruit}
                  key={fruit.id}
                  onProducts={onProducts}
                  onAmouts={onAmouts}
                />
              ))}
      </div>
    </div>
  );
}
function FruitItem({ fruit, onProducts }) {
  const [kilo, setKilo] = useState(1);
  const [showFruitDetails, setShowFruitDetails] = useState(false);
  function handlePlusOne() {
    setKilo((kilo) => Number(kilo) + 1);
  }
  function handleMinusOne() {
    setKilo((kilo) => (kilo === 1 ? Number(kilo) : Number(kilo) - 1));
  }
  function addProductsAndCalculate(e) {
    window.setTimeout(() => {
      e.target.className = "added";
      e.target.textContent = "✔ added";
      window.setTimeout(() => {
        e.target.className = "add_to_card";
        e.target.textContent = "add to card";
      }, 1500);
    }, 0);
    onProducts({ ...fruit, numKilos: kilo });
    setKilo(1);
  }
  // clearInterval(id);
  // e.target.className = "add_to_card";
  function handleShowFruitDetails() {
    setShowFruitDetails((toggle) => !toggle);
  }
  return (
    <div className="fruit_card">
      <img src={fruit.img} onClick={() => handleShowFruitDetails()} />

      {showFruitDetails && (
        <div className="layout">
          <span className="close" onClick={() => handleShowFruitDetails()}>
            x
          </span>
          <span className="name">{fruit.name}</span>
          <div className="benefit">
            <span>
              <span>genus : </span>
              <span>{fruit.genus}</span>
            </span>
            <span>
              <span>calories : </span>
              <span>{fruit.nutritions.calories}</span>
            </span>
            <span>
              <span>fat : </span>
              <span>{fruit.nutritions.fat}</span>
            </span>
            <span>
              <span>sugar : </span>
              <span>{fruit.nutritions.sugar}</span>
            </span>
            <span>
              <span>carbohydrates : </span>
              <span> {fruit.nutritions.carbohydrates}</span>
            </span>
            <span>
              <span>protein : </span>
              <span>{fruit.nutritions.protein}</span>
            </span>
          </div>
        </div>
      )}

      <p className="name">{fruit.name} - 1 keg</p>
      <span className="price">{fruit.price} EGP</span>
      <div className="input">
        <button onClick={() => handleMinusOne()}>-</button>
        <input
          type="text"
          value={kilo}
          onChange={(e) => setKilo(Number(e.target.value))}
        />
        <button onClick={() => handlePlusOne()}>+</button>
      </div>
      <button
        className="add_to_card"
        onClick={(e) => addProductsAndCalculate(e)}
      >
        Add to cart
      </button>
    </div>
  );
}
function ContactLinks() {
  return (
    <div className="footer_container">
      <div className="links">
        <a href="#">github</a>
        <a href="mailto:01212275860">callMe</a>
      </div>
      <p>
        &copy; 2025 (Shopping List) by <b>anwar tarek</b>
      </p>
    </div>
  );
}
export default App;
