/**
 * ALL IN ONE SOLAPUR - CORE LOGIC
 * HUB & SPOKE ARCHITECTURE v4.0
 * AA SHOES WHATSAPP SPECIAL VERSION
 */

const SERVICES_DATA = [
    {
        id: 'chef',
        title: 'Professional Chef for Dawat',
        cat: 'Events',
        tag: 'Essential',
        icon: '🍽️',
        desc: 'Specialized in Hyderabadi, Mughlai, and local Solapuri function cooking.',
        fields: ['Guests Count', 'Menu Preference', 'Venue Area']
    },

    /* ===============================
       AA SHOES SPECIAL SERVICE
    ================================ */
    {
        id: 'aa_shoes',
        title: 'AA Shoes Store – Bara Imam Chowk',
        cat: 'Retail',
        tag: 'Local Store',
        icon: '👟',
        desc: 'Multi-brand footwear for men & women in Solapur.',
        type: 'whatsapp_direct'
    },

    {
        id: 'bridal',
        title: 'Makeup & Bridal Parlour',
        cat: 'Wedding',
        tag: 'Popular',
        icon: '💄',
        desc: 'Premium bridal packages and festive makeup artists.',
        fields: ['Occasion Type', 'Home Service Req?']
    },
    {
        id: 'photo',
        title: 'Photography & Videography',
        cat: 'Media',
        tag: 'New',
        icon: '📸',
        desc: 'Professional event coverage and shoots.',
        fields: ['Event Hours', 'Output Type']
    },
    {
        id: 'nikah',
        title: 'Customized Nikahnama Books',
        cat: 'Wedding',
        tag: 'Artisan',
        icon: '📜',
        desc: 'Handcrafted Nikahnama books.',
        fields: ['Theme/Color', 'Delivery Date']
    },
    {
        id: 'wedding_support',
        title: 'Muslim Wedding Planning',
        cat: 'Wedding',
        tag: 'Premium',
        icon: '🤝',
        desc: 'End-to-end wedding planning support.',
        fields: ['Event Type', 'Support Level']
    },
    {
        id: 'funeral',
        title: 'Muslim Funeral Essentials',
        cat: 'Community',
        tag: 'Service',
        icon: '🕋',
        desc: 'Dignified Janaza support.',
        fields: ['Urgency', 'Requirements']
    },
    {
        id: 'gifts',
        title: 'Handcrafted Resin & Gifts',
        cat: 'Craft',
        tag: 'Boutique',
        icon: '🎁',
        desc: 'Personalized resin art and gift hampers.',
        fields: ['Item Type', 'Personalization Details']
    },
    {
        id: 'decor',
        title: 'Flower & Event Decoration',
        cat: 'Events',
        tag: 'Trending',
        icon: '🌸',
        desc: 'Modern stage decor and styling.',
        fields: ['Event Type', 'Decor Level']
    },
    {
        id: 'mehndi',
        title: 'Mehndi Artists',
        cat: 'Wedding',
        tag: 'Popular',
        icon: '🎨',
        desc: 'Arabic & Bridal mehndi designs.',
        fields: ['Style', 'Number of Hands']
    },
    {
        id: 'caterers',
        title: 'Home-based Caterers',
        cat: 'Food',
        tag: 'Authentic',
        icon: '🥘',
        desc: 'Authentic home-cooked meals.',
        fields: ['Number of Plates', 'Menu Type']
    },
    {
        id: 'islamic_events',
        title: 'Islamic Event Services',
        cat: 'Community',
        tag: 'Spiritual',
        icon: '🌙',
        desc: 'Milad, Dars & religious gatherings.',
        fields: ['Type of Gathering', 'Setup Required']
    }
];

const INSTA_URL = "https://ig.me/m/all_in_one_solapur";

/* ===============================
   SERVICE RENDERING
================================ */
function renderServices(data) {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    grid.innerHTML = data.map(item => `
        <div class="s-card" onclick="openRequirementForm('${item.id}')">
            <span class="s-tag">${item.tag}</span>
            <div class="s-icon-circle">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>
    `).join('');
}

/* ===============================
   OPEN FORM OR AA SHOES PAGE
================================ */
function openRequirementForm(id) {

    /* ===== AA SHOES SPECIAL PAGE ===== */
    if(id === 'aa_shoes'){
        openAAShoesPage();
        return;
    }

    const service = SERVICES_DATA.find(s => s.id === id);
    const modal = document.getElementById('reqModal');
    const container = document.getElementById('modalContent');
    if (!service) return;

    let dynamicFields = service.fields.map(f => `
        <div class="form-group">
            <label>${f}</label>
            <input type="text" name="${f}" required>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="form-header">
            <div class="modal-icon">${service.icon}</div>
            <h2>${service.title}</h2>
        </div>
<form class="premium-form" onsubmit="return handleFinalSubmit(event, '${service.title}')">
            <div class="form-group">
                <label>Your Name</label>
<input type="text" name="Customer Name" required>
<input type="tel" name="Contact Number" required>
            </div>
            <div class="form-group">
                <label>Contact Number</label>
                <input type="tel" id="custPhone" required>
            </div>
            ${dynamicFields}
            <div class="form-group">
                <label>Preferred Date</label>
<input type="date" name="Preferred Date" required>
            </div>
            <button type="submit" class="btn-primary-lg w-full">
                Submit Requirement
            </button>
        </form>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/* ===============================
   AA SHOES FULL PAGE
================================ */
function openAAShoesPage(){

    const modal = document.getElementById('reqModal');
    const container = document.getElementById('modalContent');

    container.innerHTML = `
        <div class="aa-wrapper">
            <h2>👟 AA Shoes Store</h2>
            <p>Bara Imam Chowk, Somwar Peth, Solapur</p>

            <div class="aa-contact">
                <a href="tel:7887605373">📞 Call Store</a>
                <a href="mailto:ayaanaleem680@gmail.com">📧 Email</a>
            </div>

            <form onsubmit="sendAAShoesWhatsApp(event)">
                <input type="text" id="aa_name" placeholder="Your Name" required>
                <input type="tel" id="aa_phone" placeholder="Your Number" required>

                <select id="aa_category">
                    <option>Men Shoes</option>
                    <option>Women Shoes</option>
                    <option>Sports Shoes</option>
                    <option>Casual Shoes</option>
                </select>

                <input type="text" id="aa_size" placeholder="Size Required">

                <textarea id="aa_message" placeholder="Brand / Requirement"></textarea>

                <label>Upload Reference Image (optional)</label>
                <input type="file">

                <button type="submit">Send on WhatsApp</button>
            </form>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function sendFuneralWhatsApp(){

    const name = document.getElementById("funeral_name").value;
    const phone = document.getElementById("funeral_phone").value;
    const service = document.getElementById("funeral_service").value;
    const location = document.getElementById("funeral_location").value;
    const message = document.getElementById("funeral_message").value;

    if(!name || !phone){
        alert("Please fill Name and Contact Number");
        return;
    }

    let fullMessage = `🕋 *Muslim Funeral Essentials Request*

📞 Contact Person: ${name}
📱 Mobile: ${phone}

📌 Service Required: ${service}
📍 Location: ${location}

📝 Additional Info:
${message}

Kindly provide immediate assistance.`;

    const encoded = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/919561961750?text=${encoded}`;

    window.open(whatsappURL, "_blank");
}

/* ===============================
   AA SHOES WHATSAPP FUNCTION
================================ */
function sendAAShoesWhatsApp(e){
    e.preventDefault();

    const name = document.getElementById("aa_name").value;
    const phone = document.getElementById("aa_phone").value;
    const category = document.getElementById("aa_category").value;
    const size = document.getElementById("aa_size").value;
    const message = document.getElementById("aa_message").value;

    let fullMessage = `👟 AA Shoes Store Enquiry

Name: ${name}
Contact: ${phone}

Category: ${category}
Size: ${size}

Requirement:
${message}

Please share available options.`;

    const encoded = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/917887605373?text=${encoded}`, '_blank');
}

/* ===============================
   NORMAL FORM SUBMIT (INSTAGRAM)
================================ */
function handleFinalSubmit(event, title) {

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const details = {};

    formData.forEach((value, key) => {
        details[key] = value;
    });

    closeModal();

    const now = new Date();
    const formattedDate = now.toLocaleString();

    const customerName = details['Customer Name'] || details['Full Name'] || details['Owner Name'] || 'Customer';
    const phoneNumber = details['Phone'] || details['Contact Number'] || 'N/A';

    let fullMessage = `✨ *New Service Enquiry – All In One Solapur* ✨

📌 *Service:* ${title}
📅 *Submitted On:* ${formattedDate}

👤 *Customer Details*
━━━━━━━━━━━━━━━━━━
• Name: ${customerName}
• Contact: ${phoneNumber}

📝 *Requirement Details*
━━━━━━━━━━━━━━━━━━
`;

    for (let key in details) {
        if (
            key !== 'Customer Name' &&
            key !== 'Full Name' &&
            key !== 'Owner Name' &&
            key !== 'Phone' &&
            key !== 'Contact Number'
        ) {
            fullMessage += `• ${key}: ${details[key]}
`;
        }
    }

    fullMessage += `
━━━━━━━━━━━━━━━━━━
Kindly connect with the customer soon.
`;

    const encodedMessage = encodeURIComponent(fullMessage);

    // 🔥 SERVICES THAT SHOULD GO TO YOUR WHATSAPP
    const yourServices = [
        'Professional Chef for Dawat',
        'Makeup & Bridal Parlour',
        'Customized Nikahnama Books',
        'Muslim Wedding Planning',
        'Handcrafted Resin & Gifts',
        'Flower & Event Decoration',
        'Mehndi Artists',
        'Home-based Caterers',
        'Islamic Event Services'
    ];

    if (yourServices.includes(title)) {

        window.open(`https://wa.me/918975367215?text=${encodedMessage}`, '_blank');
return false;

    } else {

        // Default fallback (Instagram)
        window.open(`${INSTA_URL}?text=${encodedMessage}`, '_blank');
    }
}


/* ===============================
   CLOSE MODAL
================================ */
function closeModal() {
    document.getElementById('reqModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

/* ===============================
   INIT
================================ */
window.onload = () => {
    renderServices(SERVICES_DATA);
};
function sendDirectWhatsApp(event, serviceName) {

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    let message = `✨ *New Service Enquiry – All In One Solapur*

📌 Service: ${serviceName}

━━━━━━━━━━━━━━━━━━
`;

    formData.forEach((value, key) => {
        message += `• ${key}: ${value}
`;
    });

    message += `
━━━━━━━━━━━━━━━━━━
Please connect with customer soon.`;

    const encoded = encodeURIComponent(message);

    // 👇 YOUR WHATSAPP NUMBER
    const whatsappURL = `https://wa.me/918975367215?text=${encoded}`;

    window.open(whatsappURL, "_blank");
}

