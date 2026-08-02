const IMG_ACAI = "https://www.reporteagricola.cl/files/69a5967826ac8_1200x719.jpg";
    const IMG_GELO = "https://cdn.awsli.com.br/2500x2500/1829/1829972/produto/225457948/embalagem-bopp-perola-gelo-de-coco---centenario---001b-vgwfuzul5m.png";
    const IMG_ESSENCIA = "https://marketup-cdn.s3-us-west-2.amazonaws.com/files/1197874/products/z21bea065-8889-4c5f-abca-fa6195dca7c4.jpeg";

    // --- SABORES DE GELO ---
    const ICE_PRICE = 2.50;
    const iceFlavors = [
      { id: "coco", name: "Gelo de Coco" },
      { id: "morango", name: "Gelo de Morango" },
      { id: "pessego", name: "Gelo de Pêssego" },
      { id: "maracuja", name: "Gelo de Maracujá" },
      { id: "macaverde", name: "Gelo de Maçã verde" },
      { id: "uva", name: "Gelo de Uva" }
    ];
    let tempIceQuantities = {};

    // --- MARCAS E SABORES DE ESSÊNCIAS ---
    const essenciasData = [
      {
        brand: "LK",
        price: 14.00,
        flavors: [
          { id: "lk_lemon", name: "Lemon (Limão)" },
          { id: "lk_manga", name: "Manga" }
        ]
      },
      {
        brand: "Smyrna",
        price: 13.00,
        flavors: [
          { id: "smyrna_true_love", name: "True Love" }
        ]
      },
      {
        brand: "Ziggy",
        price: 12.00,
        flavors: [
          { id: "ziggy_melancia", name: "Melancia Splosh" },
          { id: "ziggy_maca_verde", name: "Maçã Verde" },
          { id: "ziggy_banana", name: "Banana Flambada" },
          { id: "ziggy_laranja", name: "Laranja e Hortelã" },
          { id: "ziggy_cherry", name: "Cherry Star" }
        ]
      },
      {
        brand: "Onnix",
        price: 12.00,
        flavors: [
          { id: "onnix_menthol", name: "Menthol" },
          { id: "onnix_chiclete", name: "Chiclete" },
          { id: "onnix_grape", name: "Grape" },
          { id: "onnix_ice_berry", name: "Ice Berry" }
        ]
      },
      {
        brand: "Senise Magic",
        price: 12.00,
        flavors: [
          { id: "senise_magic_mint", name: "Magic Mint" },
          { id: "senise_tropical", name: "Tropical Fruit" },
          { id: "senise_red_mix", name: "Red Mix" }
        ]
      }
    ];
    let tempEssenciaQuantities = {};

    // --- LISTA DE PRODUTOS PRINCIPAIS ---
    const products = [
      { id: "acai", name: "Açaí no Copo (Personalizado)", price: 10.00, category: "acai", img: "https://www.reporteagricola.cl/files/69a5967826ac8_1200x719.jpg", isCustomAcai: true },
      { id: "gelo_sabor", name: "Gelo em Barra / Saborizado", price: 2.50, category: "petiscos", img: "https://cdn.awsli.com.br/2500x2500/1829/1829972/produto/225457948/embalagem-bopp-perola-gelo-de-coco---centenario---001b-vgwfuzul5m.png", isCustomGelo: true },
      { id: "essencias", name: "Essências (Ziggy, LK, Smyrna...)", price: 12.00, category: "tabacaria", img: "https://marketup-cdn.s3-us-west-2.amazonaws.com/files/1197874/products/z21bea065-8889-4c5f-abca-fa6195dca7c4.jpeg", isCustomEssencia: true },
      { id: "p1", name: "Whisky Red Label 1L", price: 99.90, category: "bebidas", img: "https://acdn-us.mitiendanube.com/stores/001/043/810/products/80492338008eee366619396682ce61e3-1cf60238b2e08b0c5317616699369579-1024-1024.webp" },
      { id: "p2", name: "Cerveja Heineken Long Neck", price: 8.50, category: "cervejas", img: "https://cdn.awsli.com.br/2500x2500/2595/2595005/produto/301832214/kit-heineken-long-0kllxpmtxu.jpeg" },
      { id: "p3", name: "Vodka Absolut 1L", price: 89.90, category: "bebidas", img: "https://images.tcdn.com.br/img/img_prod/1213476/vodka_absolut_natural_1_litro_2363_2_209ca37ab1c5ab461561a6c8738d385b.jpg" },
      { id: "p5", name: "Carvão para Narguile 1kg", price: 35.00, category: "tabacaria", img: "https://cdn.awsli.com.br/600x450/294/294169/produto/89393593da89c2f7d8.jpg" },
      { id: "p6", name: "Gin Tanqueray 750ml", price: 119.90, category: "bebidas", img: "https://acdn-us.mitiendanube.com/stores/001/043/810/products/1c1db42fb8a82799e1e2a8c48e6b8ced-52a1051c2a23d78d1f17612248169752-1024-1024.webp" },
      { id: "p7", name: "Cerveja Amstel Latão 473ml", price: 5.50, category: "cervejas", img: "https://d2ng48q17pwd8f.cloudfront.net/Custom/Content/Products/10/23/1023039_cerv-amstel-lt-473ml-fardo-c-12-30137_m1_637296216948804598.webp" },
      { id: "p8", name: "Saco de Gelo 5kg", price: 13.00, category: "petiscos", img: "https://http2.mlstatic.com/D_NQ_NP_963128-MLB45792635373_052021-O.webp" },
      { id: "p9", name: "Energético Red Bull 250ml", price: 10.00, category: "bebidas", img: "https://http2.mlstatic.com/D_NQ_NP_853255-MLB106954097012_022026-O-red-bull-energy-drink-pack-com-4-unidades-250ml.webp" },
      { id: "p10", name: "Whisky Black Label 1L", price: 189.90, category: "bebidas", img: "https://m.media-amazon.com/images/I/816+OxYlekL._AC_UF350,350_QL80_.jpg" },
      { id: "p11", name: "Cerveja Corona 330ml", price: 9.00, category: "cervejas", img: "https://http2.mlstatic.com/D_NQ_NP_886603-MLB100169247429_122025-O.webp" }
    ];

    const PHONE_NUMBER = "5511959086782";
    const ITEMS_PER_PAGE = 8;

    let cart = [];
    let currentCategory = 'todos';
    let currentPage = 1;

    // DOM ELEMENTS
    const productsGrid = document.getElementById('productsGrid');
    const paginationContainer = document.getElementById('paginationContainer');
    const modalOverlay = document.getElementById('modalOverlay');
    const acaiModalOverlay = document.getElementById('acaiModalOverlay');
    const geloModalOverlay = document.getElementById('geloModalOverlay');
    const essenciaModalOverlay = document.getElementById('essenciaModalOverlay');
    
    const openCartBtn = document.getElementById('openCartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const closeAcaiBtn = document.getElementById('closeAcaiBtn');
    const closeGeloBtn = document.getElementById('closeGeloBtn');
    const closeEssenciaBtn = document.getElementById('closeEssenciaBtn');
    
    const confirmAcaiBtn = document.getElementById('confirmAcaiBtn');
    const confirmGeloBtn = document.getElementById('confirmGeloBtn');
    const confirmEssenciaBtn = document.getElementById('confirmEssenciaBtn');
    
    const iceFlavorsList = document.getElementById('iceFlavorsList');
    const geloModalTotal = document.getElementById('geloModalTotal');
    const essenciasGroupContainer = document.getElementById('essenciasGroupContainer');
    const essenciaModalTotal = document.getElementById('essenciaModalTotal');
    
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartCount = document.getElementById('cartCount');
    const cartTotalValue = document.getElementById('cartTotalValue');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // FILTRAR CATEGORIA
    function filterCategory(category) {
      currentCategory = category;
      currentPage = 1;
      
      const tabs = document.querySelectorAll('.tab-btn');
      tabs.forEach(tab => {
        if(tab.getAttribute('onclick').includes(`'${category}'`)) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      renderProducts();
    }

    // RENDERIZAR PRODUTOS
    function renderProducts() {
      if (!productsGrid) return;

      const filteredProducts = currentCategory === 'todos' 
        ? products 
        : products.filter(p => p.category === currentCategory);

      if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); margin: 2rem 0;">Nenhum produto cadastrado nesta categoria.</p>`;
        paginationContainer.innerHTML = '';
        return;
      }

      const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
      if (currentPage > totalPages) currentPage = totalPages;

      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

      productsGrid.innerHTML = paginatedProducts.map(product => {
        let btnText = 'Adicionar ao Carrinho';
        let btnClass = 'add-to-cart-btn';
        let priceText = 'R$ ' + product.price.toFixed(2).replace('.', ',');

        if (product.isCustomAcai) {
          btnText = 'Monte seu Açaí';
          btnClass += ' acai-btn';
          priceText = 'A partir de R$ 9,50';
        } else if (product.isCustomGelo) {
          btnText = 'Escolher Sabores';
          btnClass += ' gelo-btn';
          priceText = 'R$ 2,50 cada';
        } else if (product.isCustomEssencia) {
          btnText = 'Escolher Essências';
          btnClass += ' essencia-btn';
          priceText = 'A partir de R$ 12,00';
        }

        return `
          <div class="product-card">
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <div class="product-info">
              <h3 class="product-title">${product.name}</h3>
              <div class="product-price">${priceText}</div>
              <button class="${btnClass}" onclick="handleProductClick('${product.id}')">
                ${btnText}
              </button>
            </div>
          </div>
        `;
      }).join('');

      renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
      if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
      }

      let buttonsHTML = `
        <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      `;

      for (let i = 1; i <= totalPages; i++) {
        buttonsHTML += `
          <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">
            ${i}
          </button>
        `;
      }

      buttonsHTML += `
        <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      `;

      paginationContainer.innerHTML = buttonsHTML;
    }

    function goToPage(page) {
      currentPage = page;
      renderProducts();
      document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
    }

    function handleProductClick(id) {
      if (id === 'acai') {
        acaiModalOverlay.classList.add('active');
      } else if (id === 'gelo_sabor') {
        openGeloModal();
      } else if (id === 'essencias') {
        openEssenciaModal();
      } else {
        addToCart(id);
      }
    }

    /* --- LÓGICA DE ESSÊNCIAS --- */
    function openEssenciaModal() {
      tempEssenciaQuantities = {};
      essenciasData.forEach(brandGroup => {
        brandGroup.flavors.forEach(f => {
          tempEssenciaQuantities[f.id] = 0;
        });
      });

      renderEssenciasList();
      updateEssenciaTotal();
      essenciaModalOverlay.classList.add('active');
    }

    function renderEssenciasList() {
      essenciasGroupContainer.innerHTML = essenciasData.map(brandGroup => `
        <div class="option-group">
          <h4>
            <span>Marca: <b>${brandGroup.brand}</b></span>
            <span>R$ ${brandGroup.price.toFixed(2).replace('.', ',')} cada</span>
          </h4>
          ${brandGroup.flavors.map(flavor => `
            <div class="option-item">
              <div class="item-info">
                <b>${flavor.name}</b>
              </div>
              <div class="qty-controls">
                <button class="qty-btn" onclick="changeTempEssenciaQty('${flavor.id}', -1)">-</button>
                <span id="qty_ess_${flavor.id}">${tempEssenciaQuantities[flavor.id] || 0}</span>
                <button class="qty-btn" onclick="changeTempEssenciaQty('${flavor.id}', 1)">+</button>
              </div>
            </div>
          `).join('')}
        </div>
      `).join('');
    }

    function changeTempEssenciaQty(flavorId, delta) {
      const current = tempEssenciaQuantities[flavorId] || 0;
      const updated = current + delta;
      if (updated >= 0) {
        tempEssenciaQuantities[flavorId] = updated;
        document.getElementById(`qty_ess_${flavorId}`).textContent = updated;
        updateEssenciaTotal();
      }
    }

    function updateEssenciaTotal() {
      let total = 0;
      essenciasData.forEach(brandGroup => {
        brandGroup.flavors.forEach(flavor => {
          const qty = tempEssenciaQuantities[flavor.id] || 0;
          total += qty * brandGroup.price;
        });
      });
      essenciaModalTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    confirmEssenciaBtn.addEventListener('click', () => {
      let addedAny = false;

      essenciasData.forEach(brandGroup => {
        brandGroup.flavors.forEach(flavor => {
          const qty = tempEssenciaQuantities[flavor.id] || 0;
          if (qty > 0) {
            addedAny = true;
            const cartItemId = 'ess_' + flavor.id;
            const existingItem = cart.find(item => item.id === cartItemId);

            if (existingItem) {
              existingItem.quantity += qty;
            } else {
              cart.push({
                id: cartItemId,
                name: `Essência ${brandGroup.brand} - ${flavor.name}`,
                details: `Marca: ${brandGroup.brand}`,
                price: brandGroup.price,
                img: IMG_ESSENCIA,
                quantity: qty,
                isCustom: false
              });
            }
          }
        });
      });

      if (!addedAny) {
        alert("Por favor, selecione ao menos 1 essência!");
        return;
      }

      updateCartUI();
      essenciaModalOverlay.classList.remove('active');
    });

    /* --- LÓGICA DO MODAL DE GELO --- */
    function openGeloModal() {
      iceFlavors.forEach(flavor => {
        tempIceQuantities[flavor.id] = 0;
      });

      renderIceFlavorsList();
      updateGeloTotal();
      geloModalOverlay.classList.add('active');
    }

    function renderIceFlavorsList() {
      iceFlavorsList.innerHTML = iceFlavors.map(flavor => `
        <div class="option-item">
          <div class="item-info">
            <b>${flavor.name}</b>
            <span>R$ 2,50</span>
          </div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeTempIceQty('${flavor.id}', -1)">-</button>
            <span id="qty_ice_${flavor.id}">${tempIceQuantities[flavor.id] || 0}</span>
            <button class="qty-btn" onclick="changeTempIceQty('${flavor.id}', 1)">+</button>
          </div>
        </div>
      `).join('');
    }

    function changeTempIceQty(flavorId, delta) {
      const current = tempIceQuantities[flavorId] || 0;
      const updated = current + delta;
      if (updated >= 0) {
        tempIceQuantities[flavorId] = updated;
        document.getElementById(`qty_ice_${flavorId}`).textContent = updated;
        updateGeloTotal();
      }
    }

    function updateGeloTotal() {
      const totalCount = Object.values(tempIceQuantities).reduce((a, b) => a + b, 0);
      const totalPrice = totalCount * ICE_PRICE;
      geloModalTotal.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
    }

    confirmGeloBtn.addEventListener('click', () => {
      const selectedFlavors = Object.entries(tempIceQuantities).filter(([_, qty]) => qty > 0);

      if (selectedFlavors.length === 0) {
        alert("Por favor, selecione ao menos 1 gelo!");
        return;
      }

      selectedFlavors.forEach(([flavorId, qty]) => {
        const flavor = iceFlavors.find(f => f.id === flavorId);
        if (flavor) {
          const cartItemId = 'gelo_' + flavorId;
          const existingItem = cart.find(item => item.id === cartItemId);

          if (existingItem) {
            existingItem.quantity += qty;
          } else {
            cart.push({
              id: cartItemId,
              name: flavor.name,
              details: 'Gelo Saborizado',
              price: ICE_PRICE,
              img: IMG_GELO,
              quantity: qty,
              isCustom: false
            });
          }
        }
      });

      updateCartUI();
      geloModalOverlay.classList.remove('active');
    });

    /* --- LÓGICA DE PRODUTOS NORMAIS --- */
    function addToCart(productId) {
      const existingItem = cart.find(item => item.id === productId && !item.isCustom);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const product = products.find(p => p.id === productId);
        if (product) {
          cart.push({ ...product, quantity: 1, isCustom: false });
        }
      }
      updateCartUI();
    }

    /* --- LÓGICA DE AÇAÍ --- */
confirmAcaiBtn.addEventListener('click', () => {
  const selectedSize = document.querySelector('input[name="acaiSize"]:checked');
  if (!selectedSize) {
    alert("Por favor, selecione o tamanho do açaí!");
    return;
  }

  const basePrice = parseFloat(selectedSize.dataset.price);
  const sizeName = selectedSize.value;
  const addons = Array.from(document.querySelectorAll('input[name="acaiAddon"]:checked'));
  
  let totalPrice = basePrice;
  let selectedAddons = [];

  if (sizeName === '300ml' || sizeName === '500ml') {
    // 3 acompanhamentos são gratuitos
    const freeCount = 3;
    const extraPricePerUnit = 3.00;

    addons.forEach((addon, index) => {
      selectedAddons.push(addon.value);
      // Cobrar R$ 3,00 apenas a partir do 4º acompanhamento
      if (index >= freeCount) {
        totalPrice += extraPricePerUnit;
      }
    });
  } else {
    // Para outros tamanhos (ex: 200ml), cobra o valor padrão cadastrado
    addons.forEach(addon => {
      totalPrice += parseFloat(addon.dataset.price);
      selectedAddons.push(addon.value);
    });
  }

  const acaiItem = {
    id: 'acai_' + Date.now(),
    name: `Açaí ${sizeName}`,
    details: selectedAddons.length > 0 
      ? `${selectedAddons.join(', ')} (${addons.length} acompanhamento(s))` 
      : 'Sem acompanhamentos',
    price: totalPrice,
    img: IMG_ACAI,
    quantity: 1,
    isCustom: true
  };

  cart.push(acaiItem);
  updateCartUI();
  acaiModalOverlay.classList.remove('active');
  resetAcaiForm();
});

    function resetAcaiForm() {
      document.querySelectorAll('input[name="acaiSize"]').forEach(r => r.checked = false);
      document.querySelectorAll('input[name="acaiAddon"]').forEach(c => c.checked = false);
    }

    /* --- CARRINHO & CONTROLES --- */
    function changeQuantity(cartItemId, delta) {
      const item = cart.find(item => item.id === cartItemId);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
          removeFromCart(cartItemId);
        } else {
          updateCartUI();
        }
      }
    }

    function removeFromCart(cartItemId) {
      cart = cart.filter(item => item.id !== cartItemId);
      updateCartUI();
    }

    // FUNÇÃO PARA LIMPAR TODO O CARRINHO
    function clearCart() {
      if (cart.length === 0) return;
      if (confirm("Tem certeza que deseja remover todos os itens do carrinho?")) {
        cart = [];
        updateCartUI();
      }
    }

    function updateCartUI() {
      const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = totalCount;

      if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align:center; color: var(--text-muted); margin-top: 2rem;">Seu carrinho está vazio.</p>`;
      } else {
        cartItemsContainer.innerHTML = cart.map(item => `
          <div class="cart-item">
            <img src="${item.img}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
              <h4>${item.name}</h4>
              ${item.details ? `<p>${item.details}</p>` : ''}
              <span>R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="qty-controls">
              <button class="qty-btn" onclick="changeQuantity('${item.id}', -1)">-</button>
              <span>${item.quantity}</span>
              <button class="qty-btn" onclick="changeQuantity('${item.id}', 1)">+</button>
              <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        `).join('');
      }

      const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      cartTotalValue.textContent = `R$ ${totalSum.toFixed(2).replace('.', ',')}`;
    }

    // WHATSAPP CHECKOUT
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert("Adicione pelo menos um item ao carrinho!");
        return;
      }

      let message = "Olá, gostaria de fazer o seguinte pedido na *Adega Chiquinha*:\n\n";
      cart.forEach(item => {
        message += `• ${item.quantity}x *${item.name}*\n`;
        if (item.details) {
          message += `   Detalhes: _${item.details}_\n`;
        }
        message += `   Valor: R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
      });

      const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      message += `*TOTAL DO PEDIDO:* R$ ${totalSum.toFixed(2).replace('.', ',')}`;

      window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    });

    // EVENTOS DE ABERTURA E FECHAMENTO DE MODAIS
    openCartBtn.addEventListener('click', () => modalOverlay.classList.add('active'));
    closeCartBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
    closeAcaiBtn.addEventListener('click', () => acaiModalOverlay.classList.remove('active'));
    closeGeloBtn.addEventListener('click', () => geloModalOverlay.classList.remove('active'));
    closeEssenciaBtn.addEventListener('click', () => essenciaModalOverlay.classList.remove('active'));

    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) modalOverlay.classList.remove('active'); });
    acaiModalOverlay.addEventListener('click', (e) => { if (e.target === acaiModalOverlay) acaiModalOverlay.classList.remove('active'); });
    geloModalOverlay.addEventListener('click', (e) => { if (e.target === geloModalOverlay) geloModalOverlay.classList.remove('active'); });
    essenciaModalOverlay.addEventListener('click', (e) => { if (e.target === essenciaModalOverlay) essenciaModalOverlay.classList.remove('active'); });

    // INICIALIZAÇÃO
    document.addEventListener('DOMContentLoaded', () => {
      renderProducts();
    });