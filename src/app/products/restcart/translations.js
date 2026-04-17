// ──────────────────────────────────────────────────────────────────────────────
// RestCart — page translations  (EN / ES)
// ──────────────────────────────────────────────────────────────────────────────

export const translations = {
  // ── HERO ──────────────────────────────────────────────────────────────────
  hero: {
    en: {
      breadcrumb: 'Products',
      badge: 'Restaurant Operating System',
      headline1: 'Run a Full Restaurant.',
      headline2: 'Zero Waiters.',
      headline3: 'One System.',
      subheadline:
        'The all-in-one restaurant OS that replaces your front-of-house staff, automates orders, manages inventory, handles taxes — and cuts operating costs by up to',
      subheadlineHighlight: '80%',
      subheadlineSuffix: '.',
      cta: 'Get a Free Demo',
      ctaSecondary: 'See It Live',
      trust1: 'Trusted in 10+ countries',
      trust2: 'Setup in under 24 hours',
      stat1Label: 'Operating Cost',
      stat1Value: '↓ 80%',
      stat2Label: 'Languages',
      stat2Value: '10+',
    },
    es: {
      breadcrumb: 'Productos',
      badge: 'Sistema Operativo para Restaurantes',
      headline1: 'Gestiona un Restaurante Completo.',
      headline2: 'Cero Meseros.',
      headline3: 'Un Solo Sistema.',
      subheadline:
        'El sistema operativo todo-en-uno que reemplaza tu personal de sala, automatiza pedidos, gestiona inventario, maneja impuestos — y reduce los costes operativos hasta un',
      subheadlineHighlight: '80%',
      subheadlineSuffix: '.',
      cta: 'Obtener Demo Gratis',
      ctaSecondary: 'Ver en Vivo',
      trust1: 'Confiado en más de 10 países',
      trust2: 'Instalación en menos de 24 horas',
      stat1Label: 'Coste Operativo',
      stat1Value: '↓ 80%',
      stat2Label: 'Idiomas',
      stat2Value: '10+',
    },
  },

  // ── PAIN ──────────────────────────────────────────────────────────────────
  pain: {
    en: {
      badge: '"Sound familiar?"',
      headline: "You're",
      headlineHighlight: 'Bleeding Money',
      headlineSuffix: 'Every Single Month.',
      points: [
        'Staff calling in sick right before dinner rush?',
        'Waiters getting orders wrong and customers leaving angry?',
        "No idea how much inventory you have until it's already gone?",
        "Calculating taxes at the end of the month like it's 1995?",
        'Paying 4–5 salaries for jobs one smart system can do?',
      ],
      closingBold: "You didn't open a restaurant to babysit employees.",
      closingRegular: 'You opened it to build something great.',
      tagline: "It's time your operations caught up with your ambition.",
    },
    es: {
      badge: '"¿Te suena familiar?"',
      headline: 'Estás',
      headlineHighlight: 'Perdiendo Dinero',
      headlineSuffix: 'Cada Mes.',
      points: [
        '¿Personal que llama enfermo justo antes de la hora pico?',
        '¿Camareros que confunden pedidos y clientes que se van enfadados?',
        '¿Sin idea del inventario disponible hasta que ya se ha agotado?',
        '¿Calculando impuestos a fin de mes como si fuera 1995?',
        '¿Pagando 4–5 sueldos por tareas que un sistema inteligente puede hacer?',
      ],
      closingBold: 'No abriste un restaurante para supervisar empleados.',
      closingRegular: 'Lo abriste para construir algo grande.',
      tagline: 'Es hora de que tus operaciones estén a la altura de tu ambición.',
    },
  },

  // ── FEATURES ──────────────────────────────────────────────────────────────
  features: {
    en: {
      badge: 'Features',
      headline1: 'Meet',
      headlineHighlight: 'RestCart',
      headline2: '— The Brain Behind Your Restaurant.',
      subtitle: "Everything your restaurant needs. Nothing it doesn't.",
      items: [
        {
          id: 'qr-menu',
          title: 'QR Code Digital Menu',
          short: 'Scan. Menu appears. Order done.',
          description:
            "Customers scan. Menu appears. They order. That's it. No printed menus. No waiting for a waiter to show up. Your full menu lives in a beautiful, mobile-friendly interface — updated in real time, available in 10+ languages.",
          highlight: '10+ Languages',
        },
        {
          id: 'orders',
          title: 'Smart Order Management',
          short: 'Direct to kitchen. Zero errors.',
          description:
            'Orders placed by customers go directly to the kitchen display. No middleman. No miscommunication. No "sorry, we didn\'t get that order." Every order is logged, tracked, and timestamped automatically.',
          highlight: 'Zero Errors',
        },
        {
          id: 'payments',
          title: 'Multiple Payment Methods',
          short: 'QR, Card, Bank Transfer, Cash.',
          description:
            'Your customers pay however they want: QR Code Payment, Credit/Debit Card, Bank Transfer, Cash via POS. Every transaction is recorded. Every penny is accounted for.',
          highlight: 'All Methods',
        },
        {
          id: 'pos',
          title: 'Built-In POS System',
          short: 'Powerful. Simple. Zero training.',
          description:
            'A powerful, easy-to-use Point of Sale system that works for your counter, your tables, and your takeaway — all from one screen. Fast, reliable, and requires zero technical training.',
          highlight: 'Zero Training',
        },
        {
          id: 'inventory',
          title: 'Intelligent Inventory',
          short: 'Real-time tracking. Smart alerts.',
          description:
            'Never run out of stock mid-service again. Our system tracks every ingredient, every product, every item in real time — and sends you an alert before anything runs out so you can restock in time.',
          highlight: 'Real-time Alerts',
        },
        {
          id: 'wastage',
          title: 'Loss & Wastage Tracking',
          short: 'True profit. No inflated numbers.',
          description:
            'Log expired or wasted products directly into the system. RestCart automatically deducts those losses from your revenue reports — giving you a true picture of your profit, not an inflated one.',
          highlight: 'True Profit View',
        },
        {
          id: 'tax',
          title: 'Automated Tax Engine',
          short: 'Set once. Done forever.',
          description:
            'Set your tax rate once. The system handles the rest — forever. Every sale is automatically taxed, every tax amount is separated and logged. No spreadsheets. No accountant headaches. No end-of-month panic.',
          highlight: 'Auto Tax',
        },
        {
          id: 'analytics',
          title: 'Real-Time KPI Dashboard',
          short: 'Data-driven decisions. Always.',
          description:
            'See exactly how your restaurant is performing — right now. Daily, weekly, monthly revenue, best-selling items, peak hours, loss reports, inventory levels. Filter by any time period. Make decisions based on data, not gut feeling.',
          highlight: 'Live Analytics',
        },
        {
          id: 'languages',
          title: '10+ Languages Supported',
          short: 'English, Arabic, French & more.',
          description:
            'Serving customers from different backgrounds? No problem. RestCart supports 10+ languages including English, Arabic, French, Spanish, Italian, and more — so every customer feels at home.',
          highlight: '10+ Languages',
        },
        {
          id: 'tablet',
          title: 'Table Tablet Ordering',
          short: 'The future of dining. Here now.',
          description:
            "Place a tablet on every table. Customers browse, order, and pay — all by themselves. The order fires directly to the kitchen. Your only job? Have someone carry the food from the kitchen to the table. That's it.",
          highlight: 'Self-Service',
        },
      ],
    },
    es: {
      badge: 'Funciones',
      headline1: 'Conoce',
      headlineHighlight: 'RestCart',
      headline2: '— El Cerebro de Tu Restaurante.',
      subtitle: 'Todo lo que tu restaurante necesita. Nada más.',
      items: [
        {
          id: 'qr-menu',
          title: 'Menú Digital con Código QR',
          short: 'Escanea. Aparece el menú. Pedido hecho.',
          description:
            'Los clientes escanean. El menú aparece. Piden. Así de simple. Sin menús impresos. Sin esperar al camarero. Tu menú completo en una interfaz móvil preciosa — actualizada en tiempo real, disponible en más de 10 idiomas.',
          highlight: '+10 Idiomas',
        },
        {
          id: 'orders',
          title: 'Gestión Inteligente de Pedidos',
          short: 'Directo a cocina. Cero errores.',
          description:
            'Los pedidos van directamente a la pantalla de cocina. Sin intermediarios. Sin malentendidos. Sin "lo sentimos, no recibimos ese pedido." Cada pedido se registra, rastrea y marca con hora automáticamente.',
          highlight: 'Cero Errores',
        },
        {
          id: 'payments',
          title: 'Múltiples Métodos de Pago',
          short: 'QR, Tarjeta, Transferencia, Efectivo.',
          description:
            'Tus clientes pagan como quieren: Pago por Código QR, Tarjeta Crédito/Débito, Transferencia Bancaria, Efectivo por TPV. Cada transacción queda registrada. Cada céntimo controlado.',
          highlight: 'Todos los Métodos',
        },
        {
          id: 'pos',
          title: 'TPV Integrado',
          short: 'Potente. Simple. Sin formación.',
          description:
            'Un sistema de punto de venta potente y fácil de usar que funciona en tu mostrador, tus mesas y para llevar — todo desde una pantalla. Rápido, fiable, y sin necesidad de formación técnica.',
          highlight: 'Sin Formación',
        },
        {
          id: 'inventory',
          title: 'Inventario Inteligente',
          short: 'Seguimiento en tiempo real. Alertas inteligentes.',
          description:
            'Nunca más te quedes sin stock a mitad del servicio. El sistema rastrea cada ingrediente, cada producto, cada artículo en tiempo real — y te avisa antes de que se agote para que puedas reponer a tiempo.',
          highlight: 'Alertas en Tiempo Real',
        },
        {
          id: 'wastage',
          title: 'Control de Pérdidas y Mermas',
          short: 'Beneficio real. Sin cifras infladas.',
          description:
            'Registra productos caducados o desperdiciados directamente en el sistema. RestCart deduce automáticamente esas pérdidas de tus informes de ingresos — dándote una imagen real de tu beneficio, sin inflarla.',
          highlight: 'Beneficio Real',
        },
        {
          id: 'tax',
          title: 'Motor Fiscal Automatizado',
          short: 'Configura una vez. Listo para siempre.',
          description:
            'Configura tu tipo impositivo una vez. El sistema se encarga del resto — para siempre. Cada venta se grava automáticamente, cada importe fiscal se separa y registra. Sin hojas de cálculo. Sin dolores de cabeza contables.',
          highlight: 'IVA Automático',
        },
        {
          id: 'analytics',
          title: 'Panel KPI en Tiempo Real',
          short: 'Decisiones basadas en datos. Siempre.',
          description:
            'Ve exactamente cómo va tu restaurante — ahora mismo. Ingresos diarios, semanales, mensuales, artículos más vendidos, horas punta, informes de pérdidas, niveles de inventario. Filtra por cualquier período. Decide con datos, no con intuición.',
          highlight: 'Analítica en Vivo',
        },
        {
          id: 'languages',
          title: 'Más de 10 Idiomas Disponibles',
          short: 'Español, Inglés, Árabe y más.',
          description:
            '¿Atiendes clientes de distintos orígenes? Sin problema. RestCart soporta más de 10 idiomas incluyendo Español, Inglés, Árabe, Francés, Italiano y más — para que cada cliente se sienta como en casa.',
          highlight: '+10 Idiomas',
        },
        {
          id: 'tablet',
          title: 'Pedidos con Tablet en Mesa',
          short: 'El futuro de la hostelería. Ya está aquí.',
          description:
            'Coloca una tablet en cada mesa. Los clientes exploran, piden y pagan — solos. El pedido va directo a cocina. Tu único trabajo: que alguien lleve la comida de cocina a la mesa. Eso es todo.',
          highlight: 'Autoservicio',
        },
      ],
    },
  },

  // ── MATH ──────────────────────────────────────────────────────────────────
  math: {
    en: {
      badge: '"Let\'s talk numbers."',
      headline1: 'What Are You Actually',
      headlineHighlight: 'Spending on Staff',
      headline2: 'Right Now?',
      tableTitle: 'Monthly Staff Cost',
      staffRoles: ['3 Waiters', '1 Cashier', '1 Manager'],
      staffCosts: ['$1,800', '$800', '$1,500'],
      total: 'Total Monthly',
      totalAmount: '$4,100',
      totalNote: 'Per month, every month — rain or shine.',
      savingsTitle: 'Avg. yearly savings per restaurant',
      savingsAmount: '$44,400',
      savingsDesc:
        'Restaurants that replace 3 waiters + 1 cashier with RestCart save',
      savingsHighlight: '$3,700 every single month',
      savingsSuffix:
        '— with zero sick days, zero attitude, and zero order mistakes.',
      barStaffLabel: 'Monthly staff cost',
      barRestCartLabel: 'RestCart — see plans below',
      barRestCartValue: 'From $40/mo',
      quoteMain: "The question isn't can you afford this.",
      quoteSub: "The question is: how long can you afford NOT to have it?",
      quoteCTA: 'See Pricing Plans',
    },
    es: {
      badge: '"Hablemos de números."',
      headline1: '¿Cuánto Gastas Realmente en',
      headlineHighlight: 'Personal',
      headline2: 'Ahora Mismo?',
      tableTitle: 'Coste Mensual de Personal',
      staffRoles: ['3 Camareros', '1 Cajero', '1 Gerente'],
      staffCosts: ['$1.800', '$800', '$1.500'],
      total: 'Total Mensual',
      totalAmount: '$4.100',
      totalNote: 'Al mes, todos los meses — llueva o haga sol.',
      savingsTitle: 'Ahorro medio anual por restaurante',
      savingsAmount: '$44.400',
      savingsDesc:
        'Los restaurantes que reemplazan 3 camareros + 1 cajero con RestCart ahorran',
      savingsHighlight: '$3.700 cada mes',
      savingsSuffix:
        '— sin bajas laborales, sin actitudes negativas, sin errores en pedidos.',
      barStaffLabel: 'Coste mensual de personal',
      barRestCartLabel: 'RestCart — ver planes abajo',
      barRestCartValue: 'Desde $40/mes',
      quoteMain: 'La pregunta no es si puedes permitírtelo.',
      quoteSub: '¿Cuánto tiempo puedes permitirte NO tenerlo?',
      quoteCTA: 'Ver Planes de Precios',
    },
  },

  // ── PRICING ───────────────────────────────────────────────────────────────
  pricing: {
    en: {
      badge: 'Pricing Plans',
      headline1: 'Simple Pricing.',
      headlineHighlight: 'Serious Savings.',
      subtitle:
        'All plans cover 1 location. Every plan includes the full RestCart system. You pay more only as your restaurant grows.',
      toggleMonthly: 'Monthly',
      toggleAnnual: 'Annual',
      toggleSave: 'Save 20%',
      roiDesc1: 'The average restaurant replacing 3 waiters + 1 cashier saves',
      roiAmount: '$3,700/month',
      roiDesc2: 'after switching to RestCart.',
      roiNote: 'Starting at $40/month — you make back your investment in the first 30 minutes of Day 1.',
      roiYearly: '$44,400',
      roiYearlySub: 'avg. yearly savings per restaurant',
      annualLabel: (monthly, total, save) =>
        `Billed $${total}/yr — save $${save}/yr`,
      plans: [
        {
          id: 'mesa',
          emoji: '🍽️',
          name: 'Mesa',
          tagline: 'For small cafés & tapas bars just going digital.',
          monthlyPrice: 40,
          cta: 'Get Started →',
          featuresLabel: "What's Included",
          features: [
            { text: 'Up to <strong>7 tables</strong>', on: true },
            { text: 'Up to <strong>15 menu items</strong>', on: true },
            { text: 'QR Code Digital Menu', on: true },
            { text: 'Smart Order Management', on: true },
            { text: 'Built-In POS (all payment methods)', on: true },
            { text: 'Automated Tax Engine', on: true, tag: 'KEY' },
            { text: 'Basic KPI Dashboard', on: true },
            { text: '3 Languages', on: true },
            { text: 'Email Support', on: true },
            { text: 'Inventory Management', on: false },
            { text: 'Data Backup', on: false },
            { text: 'WhatsApp Support', on: false },
          ],
        },
        {
          id: 'cocina',
          emoji: '👨‍🍳',
          name: 'Cocina',
          tagline: 'For growing restaurants ready to fully automate operations.',
          monthlyPrice: 70,
          popular: true,
          cta: 'Start Free Demo →',
          featuresLabel: 'Everything in Mesa, plus',
          features: [
            { text: 'Up to <strong>15 tables</strong>', on: true },
            { text: 'Up to <strong>35 menu items</strong>', on: true },
            { text: 'Inventory Management', on: true, tag: 'HOT' },
            { text: 'Low-Stock Alerts (real-time)', on: true },
            { text: 'Loss & Wastage Tracking', on: true },
            { text: 'Full KPI Dashboard (filterable)', on: true },
            { text: 'Table Tablet Ordering', on: true },
            { text: 'All 10+ Languages', on: true },
            { text: '<strong>6-Month Data Backup</strong>', on: true, tag: 'NEW' },
            { text: 'Email + WhatsApp Support (Priority)', on: true },
            { text: 'Direct Tech Department Line', on: false },
            { text: 'Lifetime Data Backup', on: false },
          ],
        },
        {
          id: 'maestro',
          emoji: '🏆',
          name: 'Maestro',
          tagline: 'For serious operators who want zero limits & white-glove support.',
          monthlyPrice: 120,
          cta: 'Get Started →',
          featuresLabel: 'Everything in Cocina, plus',
          features: [
            { text: '<strong>15+ tables</strong> (unlimited scale)', on: true },
            { text: '<strong>Unlimited Menu Items</strong>', on: true },
            { text: '<strong>Lifetime Data Backup</strong>', on: true, tag: 'KEY' },
            { text: 'Email + WhatsApp Support', on: true },
            { text: '<strong>Direct Call to Tech Department</strong>', on: true, tag: 'VIP' },
            { text: 'Dedicated Onboarding Specialist', on: true },
            { text: 'Custom Menu Branding', on: true },
            { text: 'Advanced KPI Reports (export)', on: true },
            { text: 'Priority 24h Response SLA', on: true },
            { text: 'All 10+ Languages', on: true },
          ],
        },
      ],
      trust: [
        'No hidden fees',
        'All plans: 1 location',
        'Cancel anytime',
        'Live in under 24 hours',
        'No credit card to start',
        'Trusted in 10+ countries',
      ],
      popularBadge: '⭐ Most Popular',
      perMonth: 'per month · 1 location',
    },
    es: {
      badge: 'Planes de Precios',
      headline1: 'Precios Simples.',
      headlineHighlight: 'Ahorros Serios.',
      subtitle:
        'Todos los planes cubren 1 local. Cada plan incluye el sistema completo de RestCart. Pagas más solo cuando tu restaurante crece.',
      toggleMonthly: 'Mensual',
      toggleAnnual: 'Anual',
      toggleSave: 'Ahorra 20%',
      roiDesc1: 'El restaurante promedio que reemplaza 3 camareros + 1 cajero ahorra',
      roiAmount: '$3.700/mes',
      roiDesc2: 'tras pasarse a RestCart.',
      roiNote: 'Desde $40/mes — recuperas tu inversión en los primeros 30 minutos del Día 1.',
      roiYearly: '$44.400',
      roiYearlySub: 'ahorro medio anual por restaurante',
      annualLabel: (monthly, total, save) =>
        `Facturado $${total}/año — ahorras $${save}/año`,
      plans: [
        {
          id: 'mesa',
          emoji: '🍽️',
          name: 'Mesa',
          tagline: 'Para pequeños cafés y tapas que se digitalizan por primera vez.',
          monthlyPrice: 40,
          cta: 'Empezar →',
          featuresLabel: 'Qué incluye',
          features: [
            { text: 'Hasta <strong>7 mesas</strong>', on: true },
            { text: 'Hasta <strong>15 artículos de menú</strong>', on: true },
            { text: 'Menú Digital con Código QR', on: true },
            { text: 'Gestión Inteligente de Pedidos', on: true },
            { text: 'TPV Integrado (todos los métodos de pago)', on: true },
            { text: 'Motor Fiscal Automatizado', on: true, tag: 'KEY' },
            { text: 'Panel KPI básico', on: true },
            { text: '3 Idiomas', on: true },
            { text: 'Soporte por Email', on: true },
            { text: 'Gestión de Inventario', on: false },
            { text: 'Copia de Seguridad', on: false },
            { text: 'Soporte por WhatsApp', on: false },
          ],
        },
        {
          id: 'cocina',
          emoji: '👨‍🍳',
          name: 'Cocina',
          tagline: 'Para restaurantes en crecimiento listos para automatizarse por completo.',
          monthlyPrice: 70,
          popular: true,
          cta: 'Demo Gratis →',
          featuresLabel: 'Todo lo de Mesa, más',
          features: [
            { text: 'Hasta <strong>15 mesas</strong>', on: true },
            { text: 'Hasta <strong>35 artículos de menú</strong>', on: true },
            { text: 'Gestión de Inventario', on: true, tag: 'HOT' },
            { text: 'Alertas de Stock Bajo (tiempo real)', on: true },
            { text: 'Control de Pérdidas y Mermas', on: true },
            { text: 'Panel KPI completo (filtrable)', on: true },
            { text: 'Pedidos con Tablet en Mesa', on: true },
            { text: 'Más de 10 Idiomas', on: true },
            { text: '<strong>Copia de Seguridad 6 Meses</strong>', on: true, tag: 'NEW' },
            { text: 'Soporte Email + WhatsApp (Prioritario)', on: true },
            { text: 'Línea Directa con Soporte Técnico', on: false },
            { text: 'Copia de Seguridad de por Vida', on: false },
          ],
        },
        {
          id: 'maestro',
          emoji: '🏆',
          name: 'Maestro',
          tagline: 'Para operadores serios que quieren cero límites y soporte premium.',
          monthlyPrice: 120,
          cta: 'Empezar →',
          featuresLabel: 'Todo lo de Cocina, más',
          features: [
            { text: '<strong>15+ mesas</strong> (escala ilimitada)', on: true },
            { text: '<strong>Artículos de Menú Ilimitados</strong>', on: true },
            { text: '<strong>Copia de Seguridad de por Vida</strong>', on: true, tag: 'KEY' },
            { text: 'Soporte Email + WhatsApp', on: true },
            { text: '<strong>Llamada Directa al Equipo Técnico</strong>', on: true, tag: 'VIP' },
            { text: 'Especialista de Incorporación Dedicado', on: true },
            { text: 'Marca Personalizada del Menú', on: true },
            { text: 'Informes KPI Avanzados (exportables)', on: true },
            { text: 'SLA Respuesta Prioritaria 24h', on: true },
            { text: 'Más de 10 Idiomas', on: true },
          ],
        },
      ],
      trust: [
        'Sin cargos ocultos',
        'Todos los planes: 1 local',
        'Cancela cuando quieras',
        'Activo en menos de 24 horas',
        'Sin tarjeta de crédito para empezar',
        'Confiado en más de 10 países',
      ],
      popularBadge: '⭐ Más Popular',
      perMonth: 'al mes · 1 local',
    },
  },

  // ── HOW IT WORKS ──────────────────────────────────────────────────────────
  howItWorks: {
    en: {
      badge: 'How It Works',
      headline1: 'Up and Running in',
      headlineHighlight: '3 Simple Steps',
      subtitle:
        'Most restaurants are fully live within 24 hours. Our onboarding team guides you through every step.',
      steps: [
        {
          number: '01',
          title: 'Onboard Your Menu',
          description:
            "Upload your full menu, set your prices, add your languages. Done in hours, not weeks.",
          time: 'A few hours',
        },
        {
          number: '02',
          title: 'Set Up Your Tables',
          description:
            "Place tablets on tables or print QR codes. Connect your kitchen display. That's your entire setup.",
          time: 'Same day',
        },
        {
          number: '03',
          title: 'Open Your Doors',
          description:
            'Customers order. Kitchen cooks. Payments process. Reports generate. You just run the show.',
          time: 'Day 1',
        },
      ],
    },
    es: {
      badge: 'Cómo Funciona',
      headline1: 'Funcionando en',
      headlineHighlight: '3 Pasos Simples',
      subtitle:
        'La mayoría de restaurantes están completamente activos en 24 horas. Nuestro equipo de incorporación te guía en cada paso.',
      steps: [
        {
          number: '01',
          title: 'Sube tu Menú',
          description:
            'Carga tu menú completo, establece tus precios, añade los idiomas. Listo en horas, no en semanas.',
          time: 'Pocas horas',
        },
        {
          number: '02',
          title: 'Configura tus Mesas',
          description:
            'Coloca tablets en las mesas o imprime códigos QR. Conecta tu pantalla de cocina. Eso es toda la configuración.',
          time: 'Mismo día',
        },
        {
          number: '03',
          title: 'Abre tus Puertas',
          description:
            'Los clientes piden. La cocina cocina. Los pagos se procesan. Los informes se generan. Tú solo diriges el espectáculo.',
          time: 'Día 1',
        },
      ],
    },
  },

  // ── TESTIMONIALS ──────────────────────────────────────────────────────────
  testimonials: {
    en: {
      badge: 'Social Proof',
      headline1: 'Restaurant Owners Who',
      headlineHighlight: 'Made the Switch',
      footer: 'Trusted by restaurants in',
      footerHighlight: '10+ countries',
      footerSuffix: '— and growing every week.',
    },
    es: {
      badge: 'Casos de Éxito',
      headline1: 'Propietarios que',
      headlineHighlight: 'Hicieron el Cambio',
      footer: 'Con la confianza de restaurantes en',
      footerHighlight: 'más de 10 países',
      footerSuffix: '— y creciendo cada semana.',
    },
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faq: {
    en: {
      badge: 'Objections',
      headline1: "We've Heard Every",
      headlineHighlight: 'Question.',
      subtitle: 'No commitment needed. Just honest answers.',
      items: [
        {
          question: '"But will my customers be okay with no waiters?"',
          answer:
            'Absolutely. Studies show 73% of diners prefer ordering at their own pace without waiting for staff. Tablet and QR ordering means faster orders, fewer errors, and happier customers.',
        },
        {
          question: '"Is it hard to set up?"',
          answer:
            'Not at all. Our onboarding team walks you through everything. Most restaurants are fully live within 24 hours.',
        },
        {
          question: '"What if I have a large menu with many variations?"',
          answer:
            'No problem. Our system handles unlimited menu items, categories, add-ons, and variations — with photos, descriptions, and pricing in multiple languages.',
        },
        {
          question: '"What about internet issues?"',
          answer:
            'RestCart is built with offline resilience. Core functions continue working even during connectivity drops — so your restaurant never stops.',
        },
        {
          question: '"Do I need technical knowledge to use it?"',
          answer:
            "Not at all. RestCart is designed for restaurant owners, not tech experts. If you can use a smartphone, you can run RestCart. Our interface is intuitive and we provide full training.",
        },
        {
          question: '"Can I manage multiple restaurant locations?"',
          answer:
            'Yes. RestCart supports multi-branch management from a single dashboard. Perfect for restaurant chains looking to standardize operations across all locations.',
        },
      ],
    },
    es: {
      badge: 'Preguntas Frecuentes',
      headline1: 'Hemos Escuchado',
      headlineHighlight: 'Cada Pregunta.',
      subtitle: 'Sin compromiso. Solo respuestas honestas.',
      items: [
        {
          question: '"¿Mis clientes estarán bien sin camareros?"',
          answer:
            'Absolutamente. Los estudios muestran que el 73% de los comensales prefieren pedir a su ritmo sin esperar a personal. Pedir por tablet o QR significa pedidos más rápidos, menos errores y clientes más contentos.',
        },
        {
          question: '"¿Es difícil de configurar?"',
          answer:
            'Para nada. Nuestro equipo de incorporación te guía en todo. La mayoría de restaurantes están completamente activos en 24 horas.',
        },
        {
          question: '"¿Y si tengo un menú grande con muchas variaciones?"',
          answer:
            'Sin problema. El sistema gestiona artículos, categorías, complementos y variaciones ilimitados — con fotos, descripciones y precios en múltiples idiomas.',
        },
        {
          question: '"¿Qué pasa si hay problemas de internet?"',
          answer:
            'RestCart está diseñado con resiliencia offline. Las funciones principales siguen operando incluso si cae la conexión — tu restaurante nunca se detiene.',
        },
        {
          question: '"¿Necesito conocimientos técnicos para usarlo?"',
          answer:
            'Para nada. RestCart está diseñado para propietarios de restaurantes, no para expertos en tecnología. Si sabes usar un smartphone, puedes gestionar RestCart. La interfaz es intuitiva y ofrecemos formación completa.',
        },
        {
          question: '"¿Puedo gestionar varios locales?"',
          answer:
            'Sí. RestCart soporta la gestión multilocal desde un único panel. Perfecto para cadenas de restaurantes que buscan estandarizar operaciones en todos sus locales.',
        },
      ],
    },
  },

  // ── FINAL CTA ─────────────────────────────────────────────────────────────
  finalCta: {
    en: {
      headline1: 'Your Restaurant.',
      headlineHighlight: 'Fully Automated.',
      headline2: 'Starting Today.',
      point1: 'Stop paying for problems a smart system can solve in 24 hours.',
      point2: 'Stop losing revenue to staff mistakes, inventory gaps, and manual tax errors.',
      point3: 'Start running a leaner, smarter, more profitable restaurant.',
      subLabel: '👇 Book Your Free Demo Now',
      subNote: 'See the full system live. Ask every question. No commitment required.',
      cta1: 'Get My Free Demo',
      cta2: 'Talk to Team',
      trust1: 'No credit card required',
      trust2: 'Free setup consultation included',
      trust3: 'Live in under 24 hours',
    },
    es: {
      headline1: 'Tu Restaurante.',
      headlineHighlight: 'Completamente Automatizado.',
      headline2: 'Desde Hoy.',
      point1: 'Deja de pagar por problemas que un sistema inteligente resuelve en 24 horas.',
      point2: 'Deja de perder ingresos por errores de personal, fallos de inventario e impuestos manuales.',
      point3: 'Empieza a gestionar un restaurante más eficiente, inteligente y rentable.',
      subLabel: '👇 Reserva tu Demo Gratuita Ahora',
      subNote: 'Ve el sistema completo en vivo. Pregunta todo lo que quieras. Sin compromiso.',
      cta1: 'Obtener mi Demo Gratis',
      cta2: 'Hablar con el Equipo',
      trust1: 'Sin tarjeta de crédito',
      trust2: 'Consulta de configuración gratuita',
      trust3: 'Activo en menos de 24 horas',
    },
  },
};
