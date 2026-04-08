"use client";

import { useEffect, useMemo, useState } from "react";

export default function VelouraStreetStore() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [checkoutStatus, setCheckoutStatus] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [sessionDetails, setSessionDetails] = useState(null);

  const brandName = "Veloura Street";

  const heroCards = [
    {
      title: "Women Sale",
      subtitle: "New Season Drop",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Men Sale",
      subtitle: "Streetwear Essentials",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const categories = [
    {
      name: "Women",
      description: "Minimal fits, elevated layers, and daily essentials.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men",
      description: "Relaxed silhouettes with premium streetwear energy.",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids",
      description: "Comfort-first pieces made for movement and style.",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Signature Oversized Hoodie",
      category: "Men",
      oldPrice: "$180",
      price: "$124",
      numericPrice: 124,
      badge: "-31%",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
      description:
        "A heavyweight oversized hoodie with a premium drape, soft brushed interior, and clean everyday fit.",
    },
    {
      id: 2,
      name: "Veloura Zip Jacket",
      category: "Women",
      oldPrice: "$210",
      price: "$149",
      numericPrice: 149,
      badge: "-29%",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
      description:
        "A sleek zip jacket designed for layering with a refined silhouette and elevated streetwear feel.",
    },
    {
      id: 3,
      name: "Minimal Lounge Set",
      category: "Women",
      oldPrice: "$165",
      price: "$115",
      numericPrice: 115,
      badge: "-30%",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      description:
        "A soft matching set built for comfort, movement, and a polished off-duty look.",
    },
    {
      id: 4,
      name: "Urban Motion Tee",
      category: "Kids",
      oldPrice: "$75",
      price: "$49",
      numericPrice: 49,
      badge: "-35%",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      description:
        "A clean, breathable everyday tee with an easy relaxed fit for active kids.",
    },
    {
      id: 5,
      name: "Cloudfit Tracksuit",
      category: "Men",
      oldPrice: "$220",
      price: "$159",
      numericPrice: 159,
      badge: "-28%",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9b1a0cf7334?auto=format&fit=crop&w=900&q=80",
      description:
        "A premium two-piece tracksuit with a modern shape and comfort-first fabric feel.",
    },
    {
      id: 6,
      name: "Everyday Knit Set",
      category: "Women",
      oldPrice: "$190",
      price: "$138",
      numericPrice: 138,
      badge: "-27%",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      description:
        "A versatile knit set made to transition from errands to evening with ease.",
    },
    {
      id: 7,
      name: "Classic Layer Hoodie",
      category: "Men",
      oldPrice: "$160",
      price: "$109",
      numericPrice: 109,
      badge: "-32%",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
      description:
        "A daily go-to hoodie with a clean profile, soft fabric, and timeless styling.",
    },
    {
      id: 8,
      name: "Weekend Street Joggers",
      category: "Men",
      oldPrice: "$140",
      price: "$96",
      numericPrice: 96,
      badge: "-31%",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
      description:
        "Tapered joggers with a relaxed top block and a premium casual finish.",
    },
  ];

  const collections = [
    "New Arrivals",
    "Best Sellers",
    "Matching Sets",
    "Outerwear",
    "Loungewear",
  ];

  const features = [
    {
      title: "Premium Feel",
      text: "Soft-touch materials and clean silhouettes that feel luxury without trying too hard.",
    },
    {
      title: "Fast Moving Drops",
      text: "Fresh weekly arrivals for men, women, and kids with limited seasonal offers.",
    },
    {
      title: "Easy Returns",
      text: "A clean online shopping flow with simple checkout and hassle-free exchanges.",
    },
  ];

  const testimonials = [
    {
      name: "Maya R.",
      quote: "The fit and quality feel way more expensive than what I paid. Everything looks clean and premium.",
    },
    {
      name: "Daniel K.",
      quote: "This is the kind of store design that makes you want to keep browsing. Super polished and modern.",
    },
    {
      name: "Aaliyah S.",
      quote: "Loved the matching sets and the easy layout. It feels like a real fashion brand, not a template.",
    },
  ];

  const filterTabs = ["All", "Women", "Men", "Kids"];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const cartTotal = cart.reduce((sum, item) => sum + item.numericPrice, 0);

  const goToProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage("product");
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setCurrentPage("cart");
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
  
    const params = new URLSearchParams(window.location.search);
    const success = params.get("success");
    const canceled = params.get("canceled");
    const sessionId = params.get("session_id");
  
    const loadSession = async () => {
      if (!sessionId) return;
  
      try {
        const res = await fetch(`/api/checkout-session?session_id=${sessionId}`);
        const data = await res.json();
  
        if (res.ok) {
          setSessionDetails(data);
          setCustomerEmail(data.customer_email || "");
          setOrderNumber(data.id || "");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    if (success === "true") {
      setCheckoutStatus("success");
      setCurrentPage("success");
      setCart([]);
      loadSession();
      window.history.replaceState({}, "", window.location.pathname + `?success=true&session_id=${sessionId}`);
    } else if (canceled === "true") {
      setCheckoutStatus("canceled");
      setCurrentPage("cancel");
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const handleCheckout = async () => {
    if (!customerEmail.trim()) {
      alert("Please enter your email before checkout.");
      return;
    }

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart, customerEmail }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Checkout failed");
        return;
      }

      if (!data.url) {
        alert("No checkout URL returned");
        return;
      }

      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      alert("Something went wrong starting checkout");
    }
  };

  const NavButton = ({ label, page }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`transition hover:text-zinc-500 ${currentPage === page ? "text-zinc-950" : "text-zinc-700"}`}
    >
      {label}
    </button>
  );

  const ProductCard = ({ product }) => (
    <div className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
          {product.badge}
        </span>
      </div>
      <div className="p-5">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-zinc-500">{product.category}</p>
        <h4 className="min-h-[56px] text-lg font-semibold leading-7">{product.name}</h4>
        <div className="mt-3 flex items-center gap-3 text-sm">
          <span className="text-zinc-400 line-through">{product.oldPrice}</span>
          <span className="font-bold text-zinc-900">{product.price}</span>
        </div>
        <div className="mt-5 flex gap-2">
          <button
            onClick={() => goToProduct(product)}
            className="flex-1 rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
          >
            View Product
          </button>
          <button
            onClick={() => addToCart(product)}
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );

  const renderHome = () => (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-4 pt-8">
        <div className="mb-5 flex flex-wrap gap-3">
          {collections.map((item) => (
            <button
              key={item}
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:bg-zinc-950 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {heroCards.map((card) => (
            <div
              key={card.title}
              className="relative min-h-[460px] overflow-hidden rounded-[2rem] shadow-sm"
            >
              <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8 text-white md:p-10">
                <p className="mb-2 text-sm uppercase tracking-[0.3em] text-white/80">{card.subtitle}</p>
                <h1 className="max-w-md text-4xl font-bold md:text-5xl">{card.title}</h1>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
                  Timeless streetwear staples with a soft luxury feel, designed to stand out without doing too much.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => setCurrentPage("shop")}
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:scale-[1.02]"
                  >
                    Shop Collection
                  </button>
                  <button
                    onClick={() => setCurrentPage("about")}
                    className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Shop by Category</p>
            <h3 className="text-3xl font-bold">Browse Collections</h3>
          </div>
          <button
            onClick={() => setCurrentPage("shop")}
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium hover:bg-zinc-50"
          >
            View Categories
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.name} className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold">{category.name}</h4>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{category.description}</p>
                <button
                  onClick={() => {
                    setActiveCategory(category.name);
                    setCurrentPage("shop");
                  }}
                  className="mt-5 rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold hover:bg-zinc-950 hover:text-white"
                >
                  Shop {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Trending Now</p>
            <h3 className="text-3xl font-bold">Featured Products</h3>
          </div>
          <button
            onClick={() => setCurrentPage("shop")}
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium hover:bg-zinc-50"
          >
            Shop All
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 rounded-[2rem] bg-zinc-950 p-8 text-white md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Why Veloura</p>
            <h3 className="mt-3 text-3xl font-bold">Elevated basics, built for everyday wear.</h3>
          </div>
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[1.5rem] bg-white/5 p-6">
              <h4 className="text-lg font-semibold">{feature.title}</h4>
              <p className="mt-2 text-sm leading-6 text-white/75">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const renderShop = () => (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Full Collection</p>
          <h2 className="text-4xl font-bold">Shop All Products</h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeCategory === tab
                    ? "border-zinc-950 bg-zinc-950 text-white"
                    : "border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-5 rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
        Showing <span className="font-semibold text-zinc-900">{filteredProducts.length}</span> product{filteredProducts.length === 1 ? "" : "s"}
        {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        {search ? ` for “${search}”` : ""}.
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-8 rounded-[2rem] border border-dashed border-zinc-300 bg-white p-10 text-center">
          <h4 className="text-xl font-bold">No products found</h4>
          <p className="mt-3 text-sm text-zinc-600">Try another search term or switch back to a different category.</p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
            }}
            className="mt-5 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );

  const renderProduct = () => {
    const product = selectedProduct || products[0];
    return (
      <section className="mx-auto max-w-7xl px-6 py-10">
        <button
          onClick={() => setCurrentPage("shop")}
          className="mb-6 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50"
        >
          Back to Shop
        </button>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">{product.category}</p>
            <h2 className="mt-3 text-4xl font-bold">{product.name}</h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-lg text-zinc-400 line-through">{product.oldPrice}</span>
              <span className="text-2xl font-bold text-zinc-950">{product.price}</span>
              <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-semibold text-white">{product.badge}</span>
            </div>
            <p className="mt-6 text-sm leading-7 text-zinc-600">{product.description}</p>
            <div className="mt-8 grid gap-4 rounded-[1.5rem] bg-zinc-50 p-5 text-sm text-zinc-600">
              <p>Premium weight fabric</p>
              <p>Relaxed modern silhouette</p>
              <p>Everyday luxury feel</p>
              <p>Easy styling for layered looks</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => addToCart(product)}
                className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white"
              >
                Add to Cart
              </button>
              <button className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold hover:bg-zinc-50">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderAbout = () => (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 rounded-[2rem] bg-zinc-100 p-8 md:grid-cols-2 md:p-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">About {brandName}</p>
          <h2 className="mt-3 text-4xl font-bold">A fashion brand concept with a polished, premium storefront feel.</h2>
          <p className="mt-5 text-sm leading-7 text-zinc-600">
            {brandName} is designed as a clean and modern apparel brand focused on elevated basics, seasonal drops, and a smooth shopping experience. This mockup is structured like a real ecommerce site so it can be expanded into a live store more easily.
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            It includes reusable product data, category browsing, a product detail page, a cart page, and supporting brand sections to help you visualize a complete storefront.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold">10K+</p>
            <p className="mt-2 text-sm text-zinc-600">Happy customers reached through premium basics and fast moving drops.</p>
          </div>
          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold">48h</p>
            <p className="mt-2 text-sm text-zinc-600">Average dispatch promise for ready-to-ship best sellers.</p>
          </div>
          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold">4.9/5</p>
            <p className="mt-2 text-sm text-zinc-600">Average satisfaction rating across style, comfort, and overall quality.</p>
          </div>
          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <p className="text-3xl font-bold">Weekly</p>
            <p className="mt-2 text-sm text-zinc-600">New arrivals released to keep the storefront active and fresh.</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Customer Love</p>
          <h3 className="mt-2 text-3xl font-bold">What shoppers are saying</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-zinc-600">“{item.quote}”</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-zinc-900">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderContact = () => (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Contact Us</p>
          <h2 className="mt-3 text-4xl font-bold">We’d love to hear from you.</h2>
          <div className="mt-8 grid gap-4 text-sm text-zinc-600">
            <p>128 Studio Avenue, Calgary, AB, Canada</p>
            <p>support@velourastreet.com</p>
            <p>(403) 555-0148</p>
            <p>Mon - Fri: 9:00 AM to 6:00 PM</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Send a message</h3>
          <div className="mt-6 grid gap-4">
            <input placeholder="Your name" className="h-12 rounded-full border border-zinc-300 px-4 text-sm outline-none" />
            <input placeholder="Your email" className="h-12 rounded-full border border-zinc-300 px-4 text-sm outline-none" />
            <textarea placeholder="Your message" className="min-h-[160px] rounded-[1.5rem] border border-zinc-300 p-4 text-sm outline-none" />
            <button className="w-fit rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );

  const renderSuccess = () => (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-[2rem] border border-zinc-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">✓</div>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-zinc-500">Payment Successful</p>
        <h2 className="mt-3 text-4xl font-bold">Thank you for your order.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
          Your checkout was completed successfully. This page confirms the order and gives the customer a clear next step.
        </p>
        <div className="mx-auto mt-6 max-w-2xl rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-5 text-left text-sm text-zinc-600">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Order Number</p>
              <p className="mt-1 text-lg font-bold text-zinc-900">{orderNumber || "Loading..."}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Confirmation Email</p>
              <p className="mt-1 text-base font-semibold text-zinc-900">{customerEmail || "Loading..."}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-4 rounded-[1.5rem] bg-zinc-50 p-6 text-left text-sm text-zinc-600 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-zinc-900">Order Status</p>
            <p className="mt-2">Confirmed</p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Delivery</p>
            <p className="mt-2">Standard shipping</p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Email Update</p>
            <p className="mt-2">Confirmation pending setup</p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Amount Paid</p>
            <p className="mt-2">
            {sessionDetails?.amount_total
            ? `$${(sessionDetails.amount_total / 100).toFixed(2)}`
            : "Loading..."}
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setCurrentPage("shop")}
            className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => setCurrentPage("home")}
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold hover:bg-zinc-50"
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );

  const renderCancel = () => (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-[2rem] border border-zinc-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl">!</div>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-zinc-500">Checkout Canceled</p>
        <h2 className="mt-3 text-4xl font-bold">Your payment was not completed.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
          No problem — the customer can return to the cart or continue browsing without losing momentum.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setCurrentPage("cart")}
            className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white"
          >
            Return to Cart
          </button>
          <button
            onClick={() => setCurrentPage("shop")}
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold hover:bg-zinc-50"
          >
            Keep Shopping
          </button>
        </div>
      </div>
    </section>
  );

  const renderCart = () => (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Your Cart</p>
          <h2 className="text-4xl font-bold">Shopping Bag</h2>
        </div>
        <button
          onClick={() => setCurrentPage("shop")}
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium hover:bg-zinc-50"
        >
          Continue Shopping
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-zinc-300 bg-white p-12 text-center">
          <h3 className="text-2xl font-bold">Your cart is empty</h3>
          <p className="mt-3 text-sm text-zinc-600">Start adding products to preview a more realistic storefront flow.</p>
          <button
            onClick={() => setCurrentPage("shop")}
            className="mt-5 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="grid gap-4">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-4 rounded-[2rem] border border-zinc-200 bg-white p-4 shadow-sm">
                <img src={item.image} alt={item.name} className="h-28 w-24 rounded-[1rem] object-cover" />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">{item.category}</p>
                  <h4 className="mt-2 text-lg font-bold">{item.name}</h4>
                  <p className="mt-2 text-sm text-zinc-600">{item.price}</p>
                </div>
                <button
                  onClick={() => setCart((prev) => prev.filter((_, i) => i !== index))}
                  className="h-fit rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="h-fit rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Order Summary</h3>
            <div className="mt-6 space-y-3 text-sm text-zinc-600">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Email for receipt
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-full border border-zinc-300 px-4 text-sm text-zinc-900 outline-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            <div className="mt-6 border-t border-zinc-200 pt-4">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-6 w-full rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="bg-zinc-950 px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.28em] text-white">
        Free shipping on orders over $120
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <button onClick={() => setCurrentPage("home")} className="text-2xl font-black uppercase tracking-[0.24em]">
            {brandName}
          </button>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <NavButton label="Home" page="home" />
            <NavButton label="Shop" page="shop" />
            <NavButton label="About" page="about" />
            <NavButton label="Contact" page="contact" />
            <NavButton label="Cart" page="cart" />
            <NavButton label="Success" page="success" />
          </nav>

          <div className="hidden flex-1 justify-center px-6 lg:flex">
            <label className="flex w-full max-w-md items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-500 shadow-sm">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products, collections, and more"
                className="w-full bg-transparent outline-none placeholder:text-zinc-500"
              />
            </label>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <button className="hidden hover:text-zinc-500 sm:block">Login / Register</button>
            <button className="hidden hover:text-zinc-500 sm:block">Wishlist</button>
            <button
              onClick={() => setCurrentPage("cart")}
              className="rounded-full border border-zinc-300 px-4 py-2 hover:bg-zinc-50"
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>
      </header>

      <main>
        {currentPage === "home" && renderHome()}
        {currentPage === "shop" && renderShop()}
        {currentPage === "product" && renderProduct()}
        {currentPage === "about" && renderAbout()}
        {currentPage === "contact" && renderContact()}
        {currentPage === "cart" && renderCart()}
        {currentPage === "success" && renderSuccess()}
        {currentPage === "cancel" && renderCancel()}
      </main>

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-4">
        <div className="rounded-[2rem] bg-zinc-950 px-8 py-10 text-white md:px-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Newsletter</p>
              <h3 className="mt-3 text-3xl font-bold">Get early access to new drops and members-only offers.</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                A strong final section for announcements, promo signups, and keeping visitors connected to your brand.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-white p-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  placeholder="Enter your email"
                  className="h-12 flex-1 rounded-full border border-zinc-300 px-4 text-sm text-zinc-900 outline-none"
                />
                <button className="h-12 rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
          <div>
            <h5 className="text-lg font-bold">{brandName}</h5>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              A premium fashion storefront concept with strong visuals, high-converting layout sections, and a polished modern feel.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-bold">Contact Us</h5>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              128 Studio Avenue<br />
              Calgary, AB<br />
              Canada
            </p>
            <p className="mt-4 text-sm text-zinc-600">support@velourastreet.com</p>
            <p className="text-sm text-zinc-600">(403) 555-0148</p>
          </div>

          <div>
            <h5 className="text-lg font-bold">Shop</h5>
            <div className="mt-4 grid gap-3 text-sm text-zinc-600">
              <button onClick={() => setCurrentPage("shop")} className="text-left hover:text-zinc-900">New Arrivals</button>
              <button onClick={() => setCurrentPage("shop")} className="text-left hover:text-zinc-900">Best Sellers</button>
              <button onClick={() => setCurrentPage("shop")} className="text-left hover:text-zinc-900">Men</button>
              <button onClick={() => setCurrentPage("shop")} className="text-left hover:text-zinc-900">Women</button>
              <button onClick={() => setCurrentPage("shop")} className="text-left hover:text-zinc-900">Kids</button>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold">Useful Links</h5>
            <div className="mt-4 grid gap-3 text-sm text-zinc-600">
              <button onClick={() => setCurrentPage("about")} className="text-left hover:text-zinc-900">About Us</button>
              <button onClick={() => setCurrentPage("contact")} className="text-left hover:text-zinc-900">Contact Us</button>
              <button className="text-left hover:text-zinc-900">Privacy Policy</button>
              <button className="text-left hover:text-zinc-900">Returns Policy</button>
              <button className="text-left hover:text-zinc-900">Terms & Conditions</button>
              <button className="text-left hover:text-zinc-900">Shipping Information</button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 px-6 py-5 text-center text-sm text-zinc-500">
          {brandName} © 2026. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
