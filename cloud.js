// ===== إعدادات السحابة (Firebase Realtime Database) =====
// الصق هنا رابط القاعدة ومفتاح الويب API. لو تركتهم فاضيين يشتغل الموقع محلياً كما هو.
const CLOUD = { db: 'https://hanzala-store-default-rtdb.firebaseio.com', apiKey: 'AIzaSyAbBrbRn0ksa1StW_udDJrkeZpfmFDO6HY' };
// مثال: { db: 'https://my-shop-default-rtdb.firebaseio.com', apiKey: 'AIza...' }

const cloudOn = () => !!(CLOUD.db && CLOUD.apiKey);
const okey = o => String(o.id).replace('#', '');
async function cj(method, path, body, auth) {
    let url = CLOUD.db.replace(/\/$/, '') + '/' + path + '.json';
    if (auth) url += '?auth=' + await cloudToken();
    const r = await fetch(url, { method, body: body === undefined ? undefined : JSON.stringify(body) });
    if (!r.ok) { const t = await r.text().catch(() => ''); throw new Error('HTTP ' + r.status + ' ' + t.slice(0, 90)); }
    return r.json();
}
const cGet = (p, auth) => cj('GET', p, undefined, auth);
const cPut = (p, d, auth) => cj('PUT', p, d, auth);
const cDel = (p, auth) => cj('DELETE', p, undefined, auth);
function cSave(id, rf, exp) { sessionStorage.setItem('hz_tok', JSON.stringify({ id, rf, exp: Date.now() + exp * 1000 - 60000 })); }
async function cloudLogin(email, password) {
    const r = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + CLOUD.apiKey, { method: 'POST', body: JSON.stringify({ email: email.trim().toLowerCase(), password, returnSecureToken: true }) });
    const d = await r.json();
    if (!d.idToken) throw new Error((d.error && d.error.message) || 'auth');
    cSave(d.idToken, d.refreshToken, +d.expiresIn);
}
async function cloudToken() {
    const t = JSON.parse(sessionStorage.getItem('hz_tok') || 'null');
    if (!t) throw new Error('login');
    if (Date.now() < t.exp) return t.id;
    const r = await fetch('https://securetoken.googleapis.com/v1/token?key=' + CLOUD.apiKey, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'grant_type=refresh_token&refresh_token=' + t.rf });
    const d = await r.json();
    if (!d.id_token) throw new Error('login');
    cSave(d.id_token, d.refresh_token, +d.expires_in);
    return d.id_token;
}

// ===== بيانات المتجر (عدّلها لتناسبك) =====
const STORE = { name: 'حنظلة ستور', nameEn: 'Hanzala Store', whatsapp: '201151255473', phone: '', address: '', facebook: '', instagram: '' };

// الشحن والكوبونات الافتراضية (تتعدل من لوحة الإدارة ← الإعدادات)
const DEFAULT_SETTINGS = { free: 0, bqty: 0, bpct: 0, fb: '', tt: '', ig: '', wg: '', tg: '', vc: '', ip: '', wcode: '', wmsg: '', bar: '', barEnd: 0, black: '', courier: 0, ads: 0, coupons: '', ship: 'القاهرة=50\nالجيزة=50\nالقليوبية=55\nالإسكندرية=60\nالدقهلية=60\nالشرقية=60\nالغربية=60\nالمنوفية=60\nكفر الشيخ=65\nالبحيرة=65\nدمياط=65\nبورسعيد=70\nالإسماعيلية=70\nالسويس=70\nالفيوم=65\nبني سويف=70\nالمنيا=75\nأسيوط=80\nسوهاج=80\nقنا=85\nالأقصر=85\nأسوان=90\nالبحر الأحمر=95\nمطروح=95\nشمال سيناء=100\nجنوب سيناء=100\nالوادي الجديد=100' };
const parseKV = t => Object.fromEntries(String(t || '').split('\n').map(l => l.split('=').map(x => x.trim())).filter(a => a[0] && a[1]));
function getSettings() { try { return { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem('hanzal_settings') || '{}') }; } catch (e) { return { ...DEFAULT_SETTINGS }; } }

// نصوص الصفحات (راجعها وعدّلها لتطابق سياستك الفعلية)
const PAGES = {
    return: { t: 'سياسة الاستبدال والاسترجاع', b: '<p>يمكنك معاينة المنتج عند الاستلام قبل الدفع.</p><p>الاستبدال أو الاسترجاع خلال 14 يوماً من الاستلام في حال وجود عيب مصنعي أو اختلاف المنتج عن المطلوب.</p><p>يشترط أن يكون المنتج بحالته الأصلية وبعبوته وملحقاته.</p><p>لطلب الاستبدال راسلنا على واتساب مع ذكر رقم الطلب.</p>' },
    ship: { t: 'سياسة الشحن والدفع', b: '<p>نوصّل لجميع محافظات مصر خلال 2 إلى 5 أيام عمل حسب المحافظة.</p><p>تظهر تكلفة الشحن عند تأكيد الطلب حسب المحافظة.</p><p>الدفع عند الاستلام، وسيتواصل معك مندوب الشحن قبل التسليم.</p>' },
    about: { t: 'من نحن', b: '<p>' + STORE.name + ' متجر إلكتروني مصري متخصص في الساعات الذكية والسماعات والشواحن والإكسسوارات، نهتم بجودة المنتجات وسرعة التوصيل وخدمة ما بعد البيع.</p>' }
};

// ===== التسويق ورفع الصور (اترك الفاضي لو مش مستخدمه) =====
const PIXELS = { meta: '', ga: '' };            // Meta Pixel ID  و  Google Analytics (G-XXXXXXX)
const CLOUDINARY = { cloud: '', preset: '' };   // اسم الحساب و upload preset (Unsigned) من Cloudinary
(function () {
    if (/admin|login/.test(location.pathname)) return;
    if (PIXELS.meta) { !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', PIXELS.meta); fbq('track', 'PageView'); }
    if (PIXELS.ga) { const s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + PIXELS.ga; document.head.appendChild(s); window.dataLayer = window.dataLayer || []; window.gtag = function () { dataLayer.push(arguments); }; gtag('js', new Date()); gtag('config', PIXELS.ga); }
})();
const GA_EV = { ViewContent: 'view_item', AddToCart: 'add_to_cart', InitiateCheckout: 'begin_checkout', Purchase: 'purchase' };
const KIND = { ViewContent: 'view', AddToCart: 'cart', InitiateCheckout: 'checkout', Purchase: 'buy' };
function track(ev, d) { try { if (KIND[ev]) logVisit(KIND[ev], { pid: d && d.content_ids ? (+d.content_ids[0] || 0) : 0 }); if (window.fbq && PIXELS.meta) fbq('track', ev, d); if (window.gtag && PIXELS.ga) gtag('event', GA_EV[ev] || ev, d); } catch (e) {} }

// رابط إشعار تليجرام (من Google Apps Script - اقرأ telegram-notify.gs). اتركه فاضي لو مش مستخدمه
const NOTIFY_URL = '';

// Firebase بيرجّع القوائم أحياناً بعنصر فاضي (null) في الأول: نتجاهله دايماً
const cList = d => (Array.isArray(d) ? d : Object.values(d || {})).filter(Boolean);
try { const k = 'hanzal_products', v = JSON.parse(localStorage.getItem(k)); if (Array.isArray(v) && v.some(x => !x)) localStorage.setItem(k, JSON.stringify(v.filter(Boolean))); } catch (e) {}

// ===== إحصائيات الزوار (مجهولة: بدون اسم أو رقم أو IP) =====
function logVisit(kind, extra) {
    try {
        if (!cloudOn() || /admin|login/.test(location.pathname)) return;
        let vid = localStorage.getItem('hz_vid'), isNew = 0;
        if (!vid) { vid = Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); localStorage.setItem('hz_vid', vid); isNew = 1; }
        const now = Date.now(), day = new Date(now).toISOString().slice(0, 10), rid = now + Math.random().toString(36).slice(2, 5);
        let ref = 'direct';
        try { const u = new URLSearchParams(location.search).get('utm_source'); if (u) ref = u.slice(0, 30); else if (document.referrer) { const h = new URL(document.referrer).hostname.replace(/^www\./, ''); if (h !== location.hostname) ref = h.slice(0, 40); } } catch (e) {}
        const rec = Object.assign({ v: vid, t: now, k: kind, d: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? 'm' : 'd', r: ref, n: isNew, p: (location.pathname.split('/').pop() || 'index.html').slice(0, 30) }, extra || {});
        fetch(CLOUD.db.replace(/\/$/, '') + '/visits/' + day + '/' + rid + '.json', { method: 'PUT', body: JSON.stringify(rec), keepalive: true }).catch(() => {});
    } catch (e) {}
}
if (!/admin|login/.test(location.pathname) && !sessionStorage.getItem('hz_s')) { sessionStorage.setItem('hz_s', '1'); logVisit('visit'); }

PAGES.privacy = { t: 'سياسة الخصوصية', b: '<p>نجمع بيانات زيارة مجهولة الهوية (نوع الجهاز، مصدر الزيارة، والصفحات والمنتجات التي شاهدتها) لتحسين الموقع والخدمة.</p><p>لا نسجّل اسمك أو رقمك أو عنوانك إلا عند إتمام الطلب، ونستخدمها لتجهيز الطلب وشحنه فقط.</p><p>لا نبيع بياناتك لأي طرف.</p>' };
