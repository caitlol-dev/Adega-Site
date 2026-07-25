const products = [
      { id: 1, name: "Whisky Red Label 1L", price: 99.90, img: "https://acdn-us.mitiendanube.com/stores/001/043/810/products/80492338008eee366619396682ce61e3-1cf60238b2e08b0c5317616699369579-1024-1024.webp" },
      { id: 2, name: "Cerveja Heineken Long Neck", price: 13.50, img: "https://cdn.awsli.com.br/2500x2500/2595/2595005/produto/301832214/kit-heineken-long-0kllxpmtxu.jpeg" },
      { id: 3, name: "Vodka Absolut 1L", price: 89.90, img: "https://images.tcdn.com.br/img/img_prod/1213476/vodka_absolut_natural_1_litro_2363_2_209ca37ab1c5ab461561a6c8738d385b.jpg" },
      { id: 4, name: "Essência Zomo (Diversos)", price: 12.00, img: "https://zomoofficial.com/wp-content/uploads/2024/11/STRONG-EDITION-ESPECIAL.png" },
      { id: 5, name: "Carvão para Narguile 1kg", price: 35.00, img: "https://cdn.awsli.com.br/600x450/294/294169/produto/89393593da89c2f7d8.jpg" },
      { id: 6, name: "Gelo do Coco 1kg", price: 10.00, img: "https://cdn.awsli.com.br/2500x2500/1829/1829972/produto/225457948/embalagem-bopp-perola-gelo-de-coco---centenario---001b-vgwfuzul5m.png" },
    ];

    // Número de WhatsApp da adega (Insira o DDD + Número sem espaços)
    const PHONE_NUMBER = "5511959086782"; 

    let cart = [];

    // DOM Elements
    const productsGrid = document.getElementById('productsGrid');
    const modalOverlay = document.getElementById('modalOverlay');
    const openCartBtn = document.getElementById('openCartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartCount = document.getElementById('cartCount');
    const cartTotalValue = document.getElementById('cartTotalValue');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Renderizar Produtos
    function renderProducts() {
      productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
          <img src="${product.img}" alt="${product.name}" class="product-img">
          <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      `).join('');
    }

    // Adicionar item ao Carrinho
    function addToCart(productId) {
      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const product = products.find(p => p.id === productId);
        cart.push({ ...product, quantity: 1 });
      }
      updateCartUI();
    }

    // Alterar quantidade
    function changeQuantity(productId, delta) {
      const item = cart.find(item => item.id === productId);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
          removeFromCart(productId);
        } else {
          updateCartUI();
        }
      }
    }

    // Remover item
    function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      updateCartUI();
    }

    // Atualizar UI do Carrinho
    function updateCartUI() {
      // Atualizar Contador
      const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = totalCount;

      // Renderizar itens do Modal
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align:center; color: var(--text-muted); margin-top: 2rem;">Seu carrinho está vazio.</p>`;
      } else {
        cartItemsContainer.innerHTML = cart.map(item => `
          <div class="cart-item">
            <div class="cart-item-details">
              <h4>${item.name}</h4>
              <span>R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="qty-controls">
              <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
              <span>${item.quantity}</span>
              <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
              <button class="remove-btn" onclick="removeFromCart(${item.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        `).join('');
      }

      // Calcular Total
      const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      cartTotalValue.textContent = `R$ ${totalSum.toFixed(2).replace('.', ',')}`;
    }

    // Finalizar Pedido via WhatsApp
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert("Adicione pelo menos um item ao carrinho!");
        return;
      }

      let message = "Olá, gostaria de fazer o seguinte pedido na *Adega Chiquinha*:\n\n";
      cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
      });

      const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      message += `\n*Total:* R$ ${totalSum.toFixed(2).replace('.', ',')}`;

      // Encode para URL do WhatsApp
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`, '_blank');
    });

    // Controlar Abertura do Modal
    openCartBtn.addEventListener('click', () => modalOverlay.classList.add('active'));
    closeCartBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });

    // Inicializar
    renderProducts();