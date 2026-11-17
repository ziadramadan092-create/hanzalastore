// ===== تبديل اللغة (عربي / English) للمتجر =====
// الترجمة بتشتغل على نصوص الواجهة. أسماء ومواصفات المنتجات بتتترجم من حقل "الاسم بالإنجليزي" في لوحة الإدارة.
(function () {
    const EX = {
        'عروض حنظلة ستور الكبرى - خصومات تصل إلى 30% لفترة محدودة!': 'Hanzala Store mega deals — up to 30% off for a limited time!',
        'حنظلة ستور': 'Hanzala Store', 'Hanzala Store': 'حنظلة ستور',
        'إكسسوارات الموبايل والساعات الذكية': 'Mobile accessories & smart watches',
        'ابحث عن ساعة ذكية، سماعة...': 'Search for a smart watch, earbuds...',
        'تتبع طلبك': 'Track your order', 'السلة': 'Cart',
        'الأقوى في السوق المصري': 'Egypt’s strongest',
        'أحدث الساعات الذكية والإكسسوارات بين يديك': 'The latest smart watches & accessories at your fingertips',
        'توصيل سريع لكل محافظات مصر، ضمان استبدال، والدفع عند الاستلام.': 'Fast delivery across Egypt, exchange guarantee, and cash on delivery.',
        'أصلي ومضمون': 'Original & guaranteed', 'دفع عند الاستلام': 'Cash on delivery',
        'شحن سريع': 'Fast shipping', 'لكل المحافظات': 'All governorates', 'ضمان استبدال': 'Exchange guarantee',
        'منتجات أصلية': 'Original products', 'بدون مخاطرة': 'Risk-free', 'دعم واتساب': 'WhatsApp support', 'نرد عليك بسرعة': 'We reply fast',
        'ابحث عن منتج...': 'Search for a product...', 'أقل سعر': 'Min price', 'أعلى سعر': 'Max price',
        'الكل': 'All', 'ساعات ذكية': 'Smart watches', 'سماعات بلوتوث': 'Bluetooth earbuds', 'شواحن وباور بانك': 'Chargers & power banks',
        'الترتيب: الافتراضي': 'Sort: Default', 'السعر: من الأرخص للأغلى': 'Price: low to high', 'السعر: من الأغلى للأرخص': 'Price: high to low',
        'سلة المشتريات': 'Shopping cart', 'المبلغ الإجمالي': 'Total', 'تأكيد الطلب (الدفع عند الاستلام)': 'Place order (cash on delivery)',
        'تأكيد طلب الشراء': 'Confirm your order', 'الاسم الكامل': 'Full name', 'رقم الهاتف': 'Phone number', 'العنوان': 'Address', 'إرسال الطلب': 'Submit order',
        'المفضلة': 'Wishlist', 'مقارنة المنتجات (حتى 3)': 'Compare products (up to 3)', 'الاستبدال والاسترجاع': 'Returns & exchange',
        'الشحن والدفع': 'Shipping & payment', 'من نحن': 'About us', 'تواصل معنا': 'Contact us', 'مقارنة المنتجات': 'Compare products',
        'توصيل لكل المحافظات • دفع عند الاستلام • ضمان استبدال': 'Delivery to all governorates • Cash on delivery • Exchange guarantee',
        'حنظلة ستور | Hanzala Store © 2026': 'Hanzala Store © 2026', 'دخول الإدارة': 'Admin login',
        'لا توجد منتجات متاحة': 'No products available', 'أضف للسلة': 'Add to cart', 'واتساب': 'WhatsApp',
        'السلة فارغة': 'Your cart is empty', 'السلة فارغة!': 'Your cart is empty!', 'قيد المراجعة': 'Under review',
        'أدخل رقم الطلب أو رقم الهاتف للتتبع': 'Enter your order or phone number to track', 'رقم الطلب': 'Order no.', 'الحالة': 'Status',
        'لم يتم العثور على طلب بهذا الرقم.': 'No order found with this number.', 'لم يتم العثور على طلب بهذا الرقم': 'No order found with this number',
        'المفضلة فارغة': 'Your wishlist is empty', 'المقارنة': 'Compare', 'يمكنك مقارنة 3 منتجات كحد أقصى': 'You can compare up to 3 products',
        'اضغط على زر الميزان في المنتجات لإضافتها للمقارنة': 'Tap the scale icon on products to add them to compare',
        'التصنيف': 'Category', 'التقييم': 'Rating', 'المخزون': 'Stock', 'المواصفات': 'Specs', 'إزالة': 'Remove',
        'عذراً، الكمية غير متوفرة حالياً': 'Sorry, this quantity is not available',
        'رقم الطلب (مثال 5564) أو رقم الموبايل': 'Order no. (e.g. 5564) or phone number', 'بحث': 'Search',
        'الأكثر مبيعاً': 'Best seller', '🔥 الأكثر مبيعاً': '🔥 Best seller', 'نفد المخزون': 'Out of stock',
        'من فضلك أدخل رقم موبايل مصري صحيح (مثال: 01012345678)': 'Please enter a valid Egyptian mobile number (e.g. 01012345678)',
        'منتجات مشابهة': 'Similar products', 'قيد التجهيز': 'Preparing', 'تم إصدار بوليصة الشحن': 'Waybill issued', 'تم الشحن': 'Shipped',
        'تم التسليم': 'Delivered', 'ملغي': 'Cancelled', 'تم إلغاء هذا الطلب': 'This order was cancelled',
        'تم استلام طلبك': 'Your order has been received', 'أرسل تفاصيل الطلب على واتساب': 'Send order details on WhatsApp',
        'المحافظة': 'Governorate', 'كود الخصم (اختياري)': 'Discount code (optional)', 'تطبيق': 'Apply',
        'تم تطبيق كود الخصم ✓': 'Discount code applied ✓', 'كود الخصم غير صحيح': 'Invalid discount code',
        'المنتجات': 'Products', 'الشحن': 'Shipping', 'مجاناً': 'Free', 'اختر المحافظة': 'Select governorate', 'الخصم': 'Discount', 'الإجمالي': 'Total',
        'تم نسخ رابط المنتج ✓': 'Product link copied ✓', 'اللون': 'Color', 'اطلب عبر واتساب': 'Order via WhatsApp', 'قد يعجبك أيضاً': 'You may also like',
        '📲 ثبّت التطبيق على موبايلك': '📲 Install the app on your phone', 'تقييمات العملاء': 'Customer reviews',
        'لا توجد تقييمات بعد، كن أول من يقيّم': 'No reviews yet — be the first to review', 'أضف تقييمك': 'Add your review',
        'اسمك': 'Your name', 'رأيك في المنتج': 'Your opinion of the product', 'إرسال التقييم': 'Submit review',
        'اكتب اسمك ورأيك': 'Please enter your name and review', 'من فضلك انتظر دقيقة قبل تقييم آخر': 'Please wait a minute before another review',
        'شكراً! سيظهر تقييمك بعد المراجعة ✓': 'Thanks! Your review will appear after moderation ✓',
        'سياسة الاستبدال والاسترجاع': 'Returns & exchange policy', 'يمكنك معاينة المنتج عند الاستلام قبل الدفع.': 'You can inspect the product upon delivery before paying.',
        'الاستبدال أو الاسترجاع خلال 14 يوماً من الاستلام في حال وجود عيب مصنعي أو اختلاف المنتج عن المطلوب.': 'Exchange or return within 14 days of delivery if there is a manufacturing defect or the product differs from what was ordered.',
        'يشترط أن يكون المنتج بحالته الأصلية وبعبوته وملحقاته.': 'The product must be in its original condition with packaging and accessories.',
        'لطلب الاستبدال راسلنا على واتساب مع ذكر رقم الطلب.': 'To request an exchange, message us on WhatsApp with your order number.',
        'سياسة الشحن والدفع': 'Shipping & payment policy', 'نوصّل لجميع محافظات مصر خلال 2 إلى 5 أيام عمل حسب المحافظة.': 'We deliver to all Egyptian governorates within 2–5 business days depending on the governorate.',
        'تظهر تكلفة الشحن عند تأكيد الطلب حسب المحافظة.': 'Shipping cost is shown at checkout according to the governorate.',
        'الدفع عند الاستلام، وسيتواصل معك مندوب الشحن قبل التسليم.': 'Cash on delivery; the courier will contact you before delivery.',
        'حنظلة ستور متجر إلكتروني مصري متخصص في الساعات الذكية والسماعات والشواحن والإكسسوارات، نهتم بجودة المنتجات وسرعة التوصيل وخدمة ما بعد البيع.': 'Hanzala Store is an Egyptian online store specialising in smart watches, earbuds, chargers and accessories. We care about product quality, fast delivery and after-sales service.',
        'جراب موبايل': 'Phone cases', 'ملابس رجالي': "Men's clothing", 'ملابس حريمي': "Women's clothing", 'ملابس أطفال': "Kids' clothing", 'شوزات': 'Shoes', 'اشترِ الآن': 'Buy now', 'المقاس': 'Size', 'اختر المقاس أولاً': 'Please select a size first', 'كل المنتجات': 'All products', 'الأقسام': 'Categories', 'أحدث إكسسوارات الموبايل والساعات الذكية بين يديك': 'The latest mobile accessories & smart watches at your fingertips', 'سياسة الخصوصية': 'Privacy policy', 'نجمع بيانات زيارة مجهولة الهوية (نوع الجهاز، مصدر الزيارة، والصفحات والمنتجات التي شاهدتها) لتحسين الموقع والخدمة.': 'We collect anonymous visit data (device type, traffic source, and the pages and products you viewed) to improve the site and service.', 'لا نسجّل اسمك أو رقمك أو عنوانك إلا عند إتمام الطلب، ونستخدمها لتجهيز الطلب وشحنه فقط.': 'We only record your name, phone and address when you place an order, and use them solely to prepare and ship it.', 'لا نبيع بياناتك لأي طرف.': 'We never sell your data.', "حسابي": "My account", "تسجيل الدخول": "Log in", "حساب جديد": "Sign up", "الاسم": "Name", "البريد الإلكتروني": "Email", "كلمة المرور": "Password", "إنشاء الحساب": "Create account", "دخول": "Log in", "نسيت كلمة المرور؟": "Forgot password?", "الحساب اختياري — تقدر تطلب بدون حساب": "An account is optional — you can order without one", "رقم الموبايل": "Mobile number", "حفظ بياناتي": "Save my details", "طلباتي": "My orders", "تسجيل الخروج": "Log out", "لا توجد طلبات بعد": "No orders yet", "تم الحفظ ✓": "Saved ✓", "جارٍ التحميل...": "Loading...", "الإيميل أو كلمة المرور غير صحيحة": "Incorrect email or password", "الإيميل مسجل بالفعل، سجّل دخول": "Email already registered — please log in", "كلمة المرور ضعيفة (6 أحرف على الأقل)": "Weak password (at least 6 characters)", "طريقة الدفع": "Payment method", "فودافون كاش": "Vodafone Cash", "إنستا باي": "InstaPay", "حوّل": "Transfer", "على رقم فودافون كاش:": "to Vodafone Cash number:", "على حساب إنستا باي:": "to InstaPay account:", "نسخ": "Copy", "رقم المحفظة اللي حوّلت منها": "The wallet number you transferred from", "الحساب اللي حوّلت منه": "The account you transferred from", "رقم العملية (اختياري)": "Transaction number (optional)", "سيتم تأكيد طلبك بعد استلام التحويل": "Your order will be confirmed after we receive the transfer", "اكتب رقم المحفظة أو الحساب اللي حوّلت منه": "Enter the wallet/account you transferred from", "تم نسخ الرقم ✓": "Number copied ✓", 'تم التأكيد بالاتصال': 'Confirmed by phone', 'عذراً، لا يمكن إتمام هذا الطلب. تواصل معنا عبر واتساب.': 'Sorry, this order cannot be completed. Please contact us on WhatsApp.', 'دليل المقاسات': 'Size guide', 'المنتج غير متوفر حالياً — اترك رقمك ونبلّغك أول ما يرجع': 'Out of stock — leave your number and we will notify you when it is back', 'رقم الموبايل': 'Mobile number', 'أعلمني': 'Notify me', 'خصم ترحيبي لك!': 'A welcome discount for you!', 'اترك رقم واتساب واحصل على كود الخصم فوراً': 'Leave your WhatsApp number to get your discount code instantly', 'احصل على الكود': 'Get the code', 'كود الخصم الخاص بك': 'Your discount code', 'هيتحط تلقائياً في نافذة الطلب': 'It will be applied automatically at checkout', 'كمّل التسوق': 'Continue shopping', 'بإرسال رقمك توافق على تواصل المتجر معك بالعروض.': 'By sending your number you agree to receive offers from the store.', 'هذا الخيار غير متوفر حالياً': 'This option is currently unavailable', 'القاهرة': 'Cairo', 'الجيزة': 'Giza', 'القليوبية': 'Qalyubia', 'الإسكندرية': 'Alexandria', 'الدقهلية': 'Dakahlia', 'الشرقية': 'Sharqia', 'الغربية': 'Gharbia', 'المنوفية': 'Monufia', 'كفر الشيخ': 'Kafr El-Sheikh', 'البحيرة': 'Beheira', 'دمياط': 'Damietta', 'بورسعيد': 'Port Said', 'الإسماعيلية': 'Ismailia', 'السويس': 'Suez', 'الفيوم': 'Faiyum', 'بني سويف': 'Beni Suef', 'المنيا': 'Minya', 'أسيوط': 'Asyut', 'سوهاج': 'Sohag', 'قنا': 'Qena', 'الأقصر': 'Luxor', 'أسوان': 'Aswan', 'البحر الأحمر': 'Red Sea', 'مطروح': 'Matrouh', 'شمال سيناء': 'North Sinai', 'جنوب سيناء': 'South Sinai', 'الوادي الجديد': 'New Valley'
    };
    const PAT = [
        [/تم تأكيد الطلب! رقم الطلب:?/, 'Order confirmed! Order no.:'], [/الكمية المتاحة:/, 'Available quantity:'],
        [/وفر (\d+) ج\.م/, 'Save $1 EGP'], [/متبقي (\d+) (?:قطعة )?فقط!?/, 'Only $1 left'], [/متوفر \((\d+) قطعة\)/, 'In stock ($1)'],
        [/^الطلب (#\d+)/, 'Order $1'], [/^واتساب:/, 'WhatsApp:'], [/رقم طلبك/, 'Your order no.'],
        [/احتفظ به لتتبع الطلب/, 'keep it to track your order'], [/الدفع عند الاستلام/, 'cash on delivery'], [/اللون:/, 'Color:'], [/الاختيار:/, 'Option:'], [/ج\.م/g, 'EGP']
    ];
    const KEYS = Object.keys(EX).filter(k => k.length >= 8 && /[\u0600-\u06FF]/.test(k)).sort((a, b) => b.length - a.length);
    let lang = localStorage.getItem('hz_lang') === 'en' ? 'en' : 'ar', rawP = null;
    const origT = new WeakMap(), origA = new WeakMap();

    function dict() {
        const raw = localStorage.getItem('hanzal_products'); if (raw === rawP) return; rawP = raw;
        try { JSON.parse(raw || '[]').forEach(p => { if (p.nameEn) EX[p.name] = p.nameEn; if (p.specsEn && p.specs) EX[p.specs] = p.specsEn; }); } catch (e) {}
    }
    function tr(s) {
        const t = s.trim(); if (!t) return s;
        if (EX[t] !== undefined) return s.replace(t, () => EX[t]);
        let r = s;
        for (const k of KEYS) if (r.includes(k)) r = r.split(k).join(EX[k]);
        for (const [re, to] of PAT) r = r.replace(re, to);
        return r;
    }
    function trText(n) {
        if (origT.has(n)) return;
        const p = n.parentNode; if (!p || /^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName) || (p.closest && p.closest('#langBtn'))) return;
        const v = n.nodeValue, r = tr(v); if (r === v) return;
        if (p.nodeName === 'OPTION' && !p.hasAttribute('value')) p.setAttribute('value', v.trim());
        origT.set(n, v); n.nodeValue = r;
    }
    function trEl(root) {
        if (root.nodeType === 3) return trText(root);
        if (root.nodeType !== 1) return;
        const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), arr = []; let n;
        while ((n = w.nextNode())) arr.push(n); arr.forEach(trText);
        [root, ...root.querySelectorAll('[placeholder],[title]')].forEach(e => ['placeholder', 'title'].forEach(a => {
            const v = e.getAttribute(a), o = origA.get(e) || {};
            if (v && o[a] === undefined) { const r = tr(v); if (r !== v) { o[a] = v; origA.set(e, o); e.setAttribute(a, r); } }
        }));
    }
    function revert() {
        const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), arr = []; let n;
        while ((n = w.nextNode())) arr.push(n);
        arr.forEach(t => { if (origT.has(t)) { t.nodeValue = origT.get(t); origT.delete(t); } });
        document.querySelectorAll('[placeholder],[title]').forEach(e => { const o = origA.get(e); if (o) { for (const a in o) e.setAttribute(a, o[a]); origA.delete(e); } });
    }
    function btn() { const b = document.getElementById('langBtn'); if (b) b.textContent = lang === 'en' ? 'عربي' : 'EN'; }
    function setLang(l) {
        lang = l; localStorage.setItem('hz_lang', l);
        const h = document.documentElement; h.lang = l; h.dir = l === 'en' ? 'ltr' : 'rtl';
        revert(); if (l === 'en') { dict(); trEl(document.body); } btn();
    }
    window.toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');
    new MutationObserver(ms => { if (lang !== 'en') return; dict(); ms.forEach(m => m.addedNodes.forEach(trEl)); }).observe(document.body, { childList: true, subtree: true });
    btn(); if (lang === 'en') setLang('en');
})();
