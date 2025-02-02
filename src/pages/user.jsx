import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    fetch(`https://ecommrcebakend-1.onrender.com/product/getall`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data.data || []);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [token]);

  const renderProducts = () => {
    if (products.length === 0) {
      return <p className="no-products-text">No products available</p>;
    }
    return products.map((product) => (
      <div key={product._id} className="product-card-new">
        <img
          src={product.image}
          alt={product.title}
          className="product-image-new"
        />
        <h3 className="product-title-new">{product.title}</h3>
        
        <p className="product-price-new">Price: ${product.price}</p>
        <p className="product-category-new">
          Category: {product.category?.name || "N/A"}
        </p>
        <p className="product-subcategory-new">
          Subcategory: {product.subCategory?.name || "N/A"}
        </p>
        <p className="product-description-new">Description:-{product.description}</p>
        <Link to={`/singal/${product._id}`} className="view-details-link">
          View Details
        </Link>
      </div>
    ));
  };

  return (
    <div>

<header >
        <div className="logo">
          <img src="public/logo.png.webp" alt="" />
          <i className="fa-solid fa-bars" id="a"></i>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Contact</a></li>
            <li>
              <i className="fa-solid fa-magnifying-glass"></i>&nbsp;
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <li><button>Buy Now</button></li>
          </ul>
        </nav>
      </header>

      <div className="men1">
        <div className="box1"></div>
        <div className="box2"><img src="public/hero-banner.png.webp" alt="" /></div>
        <div className="box3">
          <h1 className="h1">Shop is fun</h1>
          <h1 className="h2">BROWSE OUR<br /> PREMIUM PRODUCT</h1>
          <p className="q1">
            Us which over of signs divide dominion deep fill bring they're meat
            beho upon own earth without morning over third. Their male dry. They
            are great appear whose land fly grass.
          </p>
          <button className="bu">Buy Now</button>
        </div>
      </div>

      <div className="men2">
        <div className="box4"><img src="public/hero-slide1.png.webp" alt="" />
          <div className="box5"><p className="q6">Wireless Headphone<br /> classbAccessories item</p></div>
        </div>
        <div className="box4"><img src="public/hero-slide2.png.webp" alt="" />
          <div className="box5"><p className="q6">Wireless Headphone<br /> classbAccessories item</p></div>
        </div>
        <div className="box4"><img src="public/hero-slide3.png.webp" alt="" />
          <div className="box5"><p className="q6">Wireless Headphone<br /> classbAccessories item</p></div>
        </div>
      </div>

      <div className="menn3">
        <p className="q7">Popular Item in the market</p>
        <h1 className="h4">Trending Product</h1>
        <hr className="hr" />
      </div>

      <div className="menn4">
        <div className="boxx6"><img src="public/product1.png.webp" alt="" />
          <div className="boxx8">
            <div className="i1"><i className="fa-solid fa-magnifying-glass"></i></div>
            <div className="i1"><i className="fa-solid fa-cart-shopping"></i></div>
            <div className="i1"><i className="fa-regular fa-heart"></i></div>
          </div>
        </div>
        <div className="boxx6"><img src="public/product2.png.webp" alt="" />
          <div className="boxx8">
            <div className="i1"><i className="fa-solid fa-magnifying-glass"></i></div>
            <div className="i1"><i className="fa-solid fa-cart-shopping"></i></div>
            <div className="i1"><i className="fa-regular fa-heart"></i></div>
          </div>
        </div>
        <div className="boxx6"><img src="public/product3.png.webp" alt="" />
          <div className="boxx8">
            <div className="i1"><i className="fa-solid fa-magnifying-glass"></i></div>
            <div className="i1"><i className="fa-solid fa-cart-shopping"></i></div>
            <div className="i1"><i className="fa-regular fa-heart"></i></div>
          </div>
        </div>
        <div className="boxx6"><img src="public/product4.png.webp" alt="" />
          <div className="boxx8">
            <div className="i1"><i className="fa-solid fa-magnifying-glass"></i></div>
            <div className="i1"><i className="fa-solid fa-cart-shopping"></i></div>
            <div className="i1"><i className="fa-regular fa-heart"></i></div>
          </div>
        </div>

        <div className="boxx7">
          <p className="q8">Accessories</p>
          <h1 className="h5">Quartz Belt Watch</h1>
          <h1 className="h6">$150.00</h1>
        </div>
        <div className="boxx7">
          <p className="q8">Beauty</p>
          <h1 className="h5">Women Freshwash</h1>
          <h1 className="h6">$150.00</h1>
        </div>
        <div className="boxx7">
          <p className="q8">Decor</p>
          <h1 className="h5">Room Flash Light</h1>
          <h1 className="h6">$150.00</h1>
        </div>
        <div className="boxx7">
          <p className="q8">Decor</p>
          <h1 className="h5">Room Flash Light</h1>
          <h1 className="h6">$150.00</h1>
        </div>
      </div>

     


      <div className="menn4">
        <div className="boxx6"><img src="public/product5.png.webp" alt="" />
          <div className="boxx8">
            <div className="i1"><i className="fa-solid fa-magnifying-glass"></i></div>
            <div className="i1"><i className="fa-solid fa-cart-shopping"></i></div>
            <div className="i1"><i className="fa-regular fa-heart"></i></div>
          </div>
        </div>
        <div className="boxx6"><img src="public/product6.png.webp" alt="" />
          <div className="boxx8">
            <div className="i1"><i className="fa-solid fa-magnifying-glass"></i></div>
            <div className="i1"><i className="fa-solid fa-cart-shopping"></i></div>
            <div className="i1"><i className="fa-regular fa-heart"></i></div>
          </div>
        </div>
        <div className="boxx6"><img src="public/product7.png.webp" alt="" />
          <div className="boxx8">
            <div className="i1"><i className="fa-solid fa-magnifying-glass"></i></div>
            <div className="i1"><i className="fa-solid fa-cart-shopping"></i></div>
            <div className="i1"><i className="fa-regular fa-heart"></i></div>
          </div>
        </div>
        <div className="boxx6"><img src="public/product8.png.webp" alt="" />
          <div className="boxx8">
            <div className="i1"><i className="fa-solid fa-magnifying-glass"></i></div>
            <div className="i1"><i className="fa-solid fa-cart-shopping"></i></div>
            <div className="i1"><i className="fa-regular fa-heart"></i></div>
          </div>
        </div>

        <div className="boxx7">
          <p className="q8">Accessories</p>
          <h1 className="h5">Man Office Bag</h1>
          <h1 className="h6">$150.00</h1>
        </div>
        <div className="boxx7">
          <p className="q8">Beauty</p>
          <h1 className="h5">Charging Car</h1>
          <h1 className="h6">$150.00</h1>
        </div>
        <div className="boxx7">
          <p className="q8">Decor</p>
          <h1 className="h5">Blutooth Speaker</h1>
          <h1 className="h6">$150.00</h1>
        </div>
        <div className="boxx7">
          <p className="q8">Decor</p>
          <h1 className="h5">Charging Car</h1>
          <h1 className="h6">$150.00</h1>
        </div>
      </div>


      <div className="user-page-new">
       <h2 className="page-title-new">All Products</h2>
       <div className="product-container-new">{renderProducts()}</div>
     </div>


      

      <div className="menn5">
        <div className="boxx10">
          <h1 className="h7">Up To 50% Off</h1>
          <h1 className="h8">Winter Sale</h1>
          <p className="q10">Him she'd let them sixth saw light</p>
          <button className="bu1">Buy Now</button>
        </div>
      </div>

      {/* <div className="men3">
        <p className="q7">Popular Item in the market</p>
        <h1 className="h4">Best Sellers</h1>
        <hr className="hr1" />
      </div> */}

      <div className="menn3">
        <p className="q7">Popular Item in the market</p>
        <h1 className="h4">Latest News</h1>
        <hr className="hr1" />
      </div>

      <div className="men6">
        <div className="box12"><img src="public/blog1.png.webp" alt="" /></div>
        <div className="box12"><img src="public/blog2.png.webp" alt="" /></div>
        <div className="box12"><img src="public/blog3.png.webp" alt="" /></div>

        <div className="box13">
          <p className="q9">By Admin&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-face-smile"></i>&nbsp;&nbsp;2 Comments</p>
          <h1 className="h9">The Richland Center shoping News and<br />weekly shooper</h1>
          <p className="q10">Let one fifth i bring fly to divided face for bearing<br />
            divide unto seed. Winged divided light Forth.</p>
          <p className="q11">Read More&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long fa-fade"></i></p>
        </div>
        <div className="box13">
          <p className="q9">By Admin&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-face-smile"></i>&nbsp;&nbsp;2 Comments</p>
          <h1 className="h9">The Richland Center shoping News and<br />weekly shooper</h1>
          <p className="q10">Let one fifth i bring fly to divided face for bearing<br />
            divide unto seed. Winged divided light Forth.</p>
          <p className="q11">Read More&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long fa-fade"></i></p>
        </div>
        <div className="box13">
          <p className="q9">By Admin&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-face-smile"></i>&nbsp;&nbsp;2 Comments</p>
          <h1 className="h9">The Richland Center shoping News and<br />weekly shooper</h1>
          <p className="q10">Let one fifth i bring fly to divided face for bearing<br />
            divide unto seed. Winged divided light Forth.</p>
          <p className="q11">Read More&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long fa-fade"></i></p>
        </div>
      </div>

      <div className="cou">
        <div className="co1"><h1 className="counter">1250</h1><p className="pp">Instagram</p></div>
        <div className="co1"><h1 className="counter">1300</h1><p className="pp">YouTube</p></div>
        <div className="co1"><h1 className="counter">1120</h1><p className="pp">WhatsApp</p></div>
        <div className="co1"><h1 className="counter">999</h1><p className="pp">Telegram</p></div>
      </div>

      <div className="men12">
        <h1 className="h11">GET UPDATE FROM ANYWHERE</h1>
        <p className="q13">Bearing Void gathering light light his evening unto don't be afraid</p>
        <input className="userinput" type="email" placeholder="Enter your Email" />
        <button className="but2">Subscribe Now</button>
      </div>

      <div className="men13">
        <div className="box15">
          <h1 className="h12">Our Mission</h1>
          <p className="q16">
            So seed seed green that winged cattle in. Gathering thing made fly
            you're no divided deep moved us lan Gathering thing us land years
            living.
          </p>
        </div>
        <div className="box15">
          <h1 className="h13">Quick Links</h1>
          <p className="q17">Home</p>
          <p className="q17">Shop</p>
          <p className="q17">Blog</p>
          <p className="q17">Product</p>
          <p className="q17">Brand</p>
          <p className="q17">Contact</p>
        </div>
        <div className="box15">
          <h1 className="h13">Gallery</h1>

          <div className="box16">
            <div className="box17"><img src="public/r1.jpg.webp" alt="" /></div>
            <div className="box17"><img src="public/r2.jpg.webp" alt="" /></div>
            <div className="box17"><img src="public/r3.jpg.webp" alt="" /></div>
            <div className="box17"><img src="public/r5.jpg.webp" alt="" /></div>
            <div className="box17"><img src="public/r7.jpg.webp" alt="" /></div>
            <div className="box17"><img src="public/r8.jpg.webp" alt="" /></div>
          </div>
        </div>
        <div className="box15">
          <h1 className="h13">Contact Us</h1>
          <p className="q18">
            <i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;2nd, Africa Mall, Nairobi.
          </p>
          <p className="q18">
            <i className="fa-solid fa-phone"></i>&nbsp;&nbsp;+254 704 249 100
          </p>
          <p className="q18">
            <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;example@richshop.com
          </p>
        </div>
      </div>

      <div className="men14">
        <div className="co2">
          <p className="q19">Copyright © 2025 Your Brand</p>
        </div>
        <div className="co2">
          <p className="q19">All Rights Reserved.</p>
        </div>
      </div>
    
    

    </div>
  );
}

export default User;
