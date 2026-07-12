/**
 * Birchwood Real Estate App Engine
 * Handles rendering, filtering, detail modal views, and WhatsApp integration.
 */
import { properties } from "./properties.js";

document.addEventListener("DOMContentLoaded", () => {
  // --- STATE ---
  let activeProperty = null;
  let activeImageIndex = 0;

  // --- UI ELEMENTS ---
  const header = document.getElementById("main-header");
  const propertiesGrid = document.getElementById("properties-grid");
  const emptyState = document.getElementById("properties-empty-state");
  const btnEmptyReset = document.getElementById("btn-empty-reset");
  
  // Filters
  const filterLocation = document.getElementById("filter-location");
  const filterType = document.getElementById("filter-type");
  const filterPrice = document.getElementById("filter-price");
  const priceValue = document.getElementById("price-value");
  const btnApplyFilters = document.getElementById("btn-apply-filters");
  const btnResetFilters = document.getElementById("btn-reset-filters");

  // Mobile Menu
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const menuCloseBtn = document.getElementById("menu-close-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Contact Form & Footer Form
  const contactForm = document.getElementById("contact-form");
  const contactPropertySelect = document.getElementById("contact-property");
  const formFeedback = document.getElementById("form-feedback");
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterFeedback = document.getElementById("newsletter-feedback");

  // Modal Elements
  const modal = document.getElementById("property-detail-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalGalleryImg = document.getElementById("modal-gallery-img");
  const modalGalleryThumbs = document.getElementById("modal-gallery-thumbs");
  const galleryPrev = document.getElementById("gallery-prev");
  const galleryNext = document.getElementById("gallery-next");
  
  const modalPropId = document.getElementById("modal-prop-id");
  const modalPropType = document.getElementById("modal-prop-type");
  const modalPropName = document.getElementById("modal-prop-name");
  const modalPropLocation = document.getElementById("modal-prop-location");
  const modalPropBeds = document.getElementById("modal-prop-beds");
  const modalPropBaths = document.getElementById("modal-prop-baths");
  const modalPropSqft = document.getElementById("modal-prop-sqft");
  const modalPropDescription = document.getElementById("modal-prop-description");
  const modalPropAmenities = document.getElementById("modal-prop-amenities");
  const modalPropPrice = document.getElementById("modal-prop-price");
  const modalWhatsappCta = document.getElementById("modal-whatsapp-cta");
  const modalMapContainer = document.getElementById("modal-map-container");

  // WhatsApp Agency Phone
  const WHATSAPP_PHONE = "919999999999";

  // --- INITIALIZATION ---
  init();

  function init() {
    // 1. Initial Render
    renderProperties(properties);
    populateContactProperties();

    // 2. Setup Event Listeners
    setupScrollListener();
    setupFilterListeners();
    setupMobileMenuListeners();
    setupModalListeners();
    setupFormListeners();
    setupFooterCategoryFilters();

    // 3. Initialize Icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // --- SCROLL EVENTS ---
  function setupScrollListener() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // --- PROPERTIES GRID RENDERING ---
  function renderProperties(list) {
    propertiesGrid.innerHTML = "";
    
    if (list.length === 0) {
      propertiesGrid.classList.add("hidden");
      emptyState.classList.remove("hidden");
      return;
    }
    
    propertiesGrid.classList.remove("hidden");
    emptyState.classList.add("hidden");

    list.forEach(prop => {
      const card = document.createElement("article");
      card.className = "property-card";
      
      // WhatsApp message pre-fill logic
      const message = `Hi! I'm interested in the property: "${prop.name}" listed at ${prop.formattedPrice}. Please share more details.`;
      const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
      
      card.innerHTML = `
        <div class="card-img-container">
          ${prop.featured ? `<span class="card-badge">Exclusive</span>` : ""}
          <img src="${prop.images[0]}" alt="${prop.name} exterior" loading="lazy">
        </div>
        <div class="card-content">
          <div class="card-header-row">
            <div>
              <span class="card-type">${prop.type}</span>
              <a href="#" class="card-title-link" data-id="${prop.id}">
                <h3 class="card-title">${prop.name}</h3>
              </a>
            </div>
            <span class="card-price">${prop.formattedPrice}</span>
          </div>
          <div class="card-location">
            <i data-lucide="map-pin"></i>
            <span>${prop.location}</span>
          </div>
          <div class="card-specs">
            <div class="spec-item">
              <i data-lucide="bed"></i>
              <span><strong>${prop.beds}</strong> Beds</span>
            </div>
            <div class="spec-item">
              <i data-lucide="bath"></i>
              <span><strong>${prop.baths}</strong> Baths</span>
            </div>
            <div class="spec-item">
              <i data-lucide="maximize-2"></i>
              <span><strong>${prop.sqft.toLocaleString()}</strong> Sq.Ft.</span>
            </div>
          </div>
          <div class="card-actions-row">
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-card-whatsapp">
              <i data-lucide="message-square"></i>
              <span>WhatsApp Inquiry</span>
            </a>
            <button class="btn btn-card-details" data-id="${prop.id}">
              <span>Details</span>
            </button>
          </div>
        </div>
      `;

      propertiesGrid.appendChild(card);
    });

    // Rebind detail button click handlers
    document.querySelectorAll(".btn-card-details, .card-title-link").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = parseInt(btn.getAttribute("data-id"));
        openPropertyModal(id);
      });
    });

    // Refresh icons inside cards
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // --- FILTER SYSTEM ---
  function setupFilterListeners() {
    // Dynamic price slider output
    filterPrice.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      if (val >= 200000000) {
        priceValue.textContent = "₹20 Cr";
      } else if (val >= 100000000) {
        priceValue.textContent = `₹${(val / 10000000).toFixed(1)} Cr`;
      } else {
        priceValue.textContent = `₹${(val / 100000).toFixed(0)} Lakh`;
      }
    });

    // Apply Filter Button
    btnApplyFilters.addEventListener("click", applyCurrentFilters);

    // Reset Filters Button
    btnResetFilters.addEventListener("click", resetAllFilters);
    btnEmptyReset.addEventListener("click", resetAllFilters);
  }

  function applyCurrentFilters() {
    const locValue = filterLocation.value;
    const typeValue = filterType.value;
    const maxPriceValue = parseFloat(filterPrice.value);

    const filtered = properties.filter(prop => {
      // 1. Location match (checks if location contains selected city string)
      const matchesLoc = locValue === "" || prop.location.toLowerCase().includes(locValue.toLowerCase());
      
      // 2. Type match
      const matchesType = typeValue === "" || prop.type.toLowerCase() === typeValue.toLowerCase();
      
      // 3. Price match
      const matchesPrice = prop.price <= maxPriceValue;

      return matchesLoc && matchesType && matchesPrice;
    });

    // Add slight fade-out / fade-in micro-animation to grid
    propertiesGrid.style.opacity = 0;
    setTimeout(() => {
      renderProperties(filtered);
      propertiesGrid.style.opacity = 1;
      
      // Smooth scroll down to listings section header
      document.getElementById("properties-section").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  }

  function resetAllFilters() {
    filterLocation.value = "";
    filterType.value = "";
    filterPrice.value = "200000000";
    priceValue.textContent = "₹20 Cr";

    propertiesGrid.style.opacity = 0;
    setTimeout(() => {
      renderProperties(properties);
      propertiesGrid.style.opacity = 1;
    }, 200);
  }

  // Bind footer list links to type filter
  function setupFooterCategoryFilters() {
    document.querySelectorAll(".filter-type-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const type = link.getAttribute("data-type");
        filterType.value = type;
        filterLocation.value = "";
        filterPrice.value = "200000000";
        priceValue.textContent = "₹20 Cr";
        applyCurrentFilters();
      });
    });
  }

  // --- CONTACT FORM AUTO-POPULATE ---
  function populateContactProperties() {
    properties.forEach(prop => {
      const opt = document.createElement("option");
      opt.value = prop.name;
      opt.textContent = `${prop.name} — ${prop.location}`;
      contactPropertySelect.appendChild(opt);
    });
  }

  // --- MOBILE NAV MENU HANDLERS ---
  function setupMobileMenuListeners() {
    menuToggleBtn.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });

    menuCloseBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });

    // Close menu when clicking links
    mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });
  }

  // --- MODAL ENGINE (DETAILS & GALLERY & MAP) ---
  function setupModalListeners() {
    modalCloseBtn.addEventListener("click", closePropertyModal);
    
    // Close modal on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closePropertyModal();
      }
    });

    // Close modal on background overlay click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closePropertyModal();
      }
    });

    // Gallery prev/next
    galleryPrev.addEventListener("click", () => navigateGallery(-1));
    galleryNext.addEventListener("click", () => navigateGallery(1));
  }

  function openPropertyModal(id) {
    const prop = properties.find(p => p.id === id);
    if (!prop) return;

    activeProperty = prop;
    activeImageIndex = 0;

    // Set Text Values
    modalPropId.textContent = `REF: BWD-00${prop.id}`;
    modalPropType.textContent = prop.type;
    modalPropName.textContent = prop.name;
    modalPropLocation.textContent = prop.location;
    modalPropBeds.textContent = prop.beds;
    modalPropBaths.textContent = prop.baths;
    modalPropSqft.textContent = prop.sqft.toLocaleString();
    modalPropDescription.textContent = prop.description;
    modalPropPrice.textContent = prop.formattedPrice;

    // Load active image
    updateModalGallery();

    // Populate Amenities Tags
    modalPropAmenities.innerHTML = "";
    prop.amenities.forEach(amenity => {
      const tag = document.createElement("span");
      tag.className = "amenity-tag";
      tag.innerHTML = `<i data-lucide="check-circle-2"></i><span>${amenity}</span>`;
      modalPropAmenities.appendChild(tag);
    });

    // Setup Dynamic WhatsApp messages inside modal
    const message = `Hi! I'm interested in the property: "${prop.name}" listed at ${prop.formattedPrice}. I would like to schedule a private viewing. Please share details.`;
    modalWhatsappCta.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

    // Set up Leaflet OSM Embed Map dynamically
    // Zoom boundary centered on property lat/lng
    const offset = 0.003;
    const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${prop.lng - offset}%2C${prop.lat - offset}%2C${prop.lng + offset}%2C${prop.lat + offset}&layer=mapnik&marker=${prop.lat}%2C${prop.lng}`;
    
    modalMapContainer.innerHTML = `
      <iframe 
        src="${mapSrc}" 
        class="modal-osm-iframe" 
        title="General map location of ${prop.name}">
      </iframe>
    `;

    // Refresh icons inside modal
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    // Toggle scroll on body to prevent page background scrolling
    document.body.style.overflow = "hidden";
    modal.classList.remove("hidden");
    // Force browser paint reflow, then add transition active class
    setTimeout(() => {
      modal.classList.add("active");
    }, 10);
  }

  function closePropertyModal() {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
      activeProperty = null;
    }, 300); // matches CSS duration
  }

  function updateModalGallery() {
    if (!activeProperty) return;
    
    // Main image
    modalGalleryImg.style.opacity = 0.5;
    setTimeout(() => {
      modalGalleryImg.src = activeProperty.images[activeImageIndex];
      modalGalleryImg.alt = `${activeProperty.name} image ${activeImageIndex + 1}`;
      modalGalleryImg.style.opacity = 1;
    }, 100);

    // Build thumbnails
    modalGalleryThumbs.innerHTML = "";
    activeProperty.images.forEach((img, idx) => {
      const thumb = document.createElement("div");
      thumb.className = `thumb-item ${idx === activeImageIndex ? "active" : ""}`;
      thumb.innerHTML = `<img src="${img}" alt="thumbnail ${idx + 1}">`;
      
      thumb.addEventListener("click", () => {
        activeImageIndex = idx;
        updateModalGallery();
      });
      
      modalGalleryThumbs.appendChild(thumb);
    });
  }

  function navigateGallery(direction) {
    if (!activeProperty) return;
    
    const len = activeProperty.images.length;
    activeImageIndex = (activeImageIndex + direction + len) % len;
    updateModalGallery();
  }

  // --- FORM SUBMISSION (UI SIMULATION) ---
  function setupFormListeners() {
    // 1. Contact Form
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("contact-name").value;
      const selectedProp = contactPropertySelect.value;
      
      formFeedback.classList.remove("hidden", "success");
      formFeedback.textContent = "Processing details...";
      
      setTimeout(() => {
        formFeedback.classList.add("success");
        if (selectedProp) {
          formFeedback.textContent = `Thank you, ${name}. We have received your inquiry for "${selectedProp}". A Birchwood curator will connect with you via email or WhatsApp within the next 2 hours.`;
        } else {
          formFeedback.textContent = `Thank you, ${name}. We have received your general inquiry. An agency partner will reach out to you within the next 2 hours.`;
        }
        contactForm.reset();
      }, 1000);
    });

    // 2. Newsletter Form
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const emailInput = newsletterForm.querySelector("input");
      
      newsletterFeedback.classList.remove("hidden");
      newsletterFeedback.textContent = "Subscribing...";
      
      setTimeout(() => {
        newsletterFeedback.textContent = "Successfully subscribed to The Birchwood Ledger.";
        emailInput.value = "";
        
        setTimeout(() => {
          newsletterFeedback.classList.add("hidden");
        }, 5000);
      }, 800);
    });
  }
});
