import { VideoAdItem, CreativeAngleDetail, PricingPlan } from '../types';

export const VIDEO_ADS: VideoAdItem[] = [
  {
    id: 'ad-skincare-serum',
    title: 'D2C Skincare / Anti-Ageing Serum',
    niche: 'Skincare & D2C',
    angle: 'problem-solution',
    angleLabel: 'Problem / Solution',
    hookHeadline: '“Stop layering three different serums for youthful-looking skin.”',
    roasMetric: '4.8x ROAS',
    ctrMetric: '3.4% Outbound CTR',
    durationSeconds: 29,
    creatorName: 'Rhea M.',
    creatorRole: 'Authentic UGC Creator · Pilgrim Skincare',
    videoUrl: '/videos/skincare-anti-ageing.mp4',
    posterUrl: '/videos/skincare-poster.jpg',
    subtitles: [
      { time: 0, text: 'Stop layering three different serums for youthful looking skin.' },
      { time: 4, text: 'I was using retinol for fine lines, hyaluronic acid for hydration, and another serum for that healthy glow.' },
      { time: 10, text: 'This one combines Retinol, which targets signs of ageing, Hyaluronic Acid for moisture, and Pomegranate for elasticity—all in a single lightweight formula.' },
      { time: 20, text: 'It’s instantly absorbed and gives your skin a dewy finish.' },
      { time: 26, text: 'Tap the link to get 20% off your first bottle.' }
    ],
    scriptSummary: '5-beat DTC performance script: pattern interrupts complex multi-serum routines, proves 3-in-1 formulation benefit, demonstrates dewy skin finish, and closes with a 20% off launch sprint offer.',
    bgGradient: 'from-[#1A1A18] via-[#242420] to-[#121211]',
    avatarColor: '#E8D5B5'
  },
  {
    id: 'ad-tech-anc-headphones',
    title: 'CMF by Nothing Headphone Pro — D2C UGC Ad',
    niche: 'Consumer Tech',
    angle: 'product-discovery',
    angleLabel: 'Product Discovery',
    hookHeadline: '“I tested four pairs of noise-cancelling headphones this month—and this one surprised me.”',
    roasMetric: '3.9x ROAS',
    ctrMetric: '2.9% Outbound CTR',
    durationSeconds: 32,
    creatorName: 'Arjun K.',
    creatorRole: 'Tech Creator · Mumbai',
    videoUrl: '/videos/cmf-headphones-anc.mp4',
    posterUrl: '/videos/headphones-poster.jpg',
    subtitles: [
      { time: 0, text: '“I tested four pairs of noise-cancelling headphones this month—and this one surprised me.”' },
      { time: 4, text: '“I was told I had to spend ₹25,000 just to get genuinely immersive noise cancellation.”' },
      { time: 10, text: '“So watch this—right in the middle of a noisy café, I turn ANC on…”' },
      { time: 18, text: '“Up to 40dB adaptive ANC, 50-hour ANC-on battery life, and customized 40mm drivers—all in one pair.”' },
      { time: 25, text: '“And at this price, it’s seriously worth checking out. Grab the launch bundle before it’s gone.”' }
    ],
    scriptSummary: '5-beat DTC tech script: tests 4 headphone pairs, busts the ₹25,000 premium ANC myth, demonstrates live café noise cancellation with sudden audio drop, proves 40dB/50h specs, and drives urgent launch bundle CTA.',
    bgGradient: 'from-[#16191F] via-[#1F242C] to-[#101318]',
    avatarColor: '#B0C4DE'
  },
  {
    id: 'ad-wellness-electrolytes',
    title: 'Hydration & Performance / OPN Electrolytes Stick — Final 20s UGC Script',
    niche: 'Health & Fitness',
    angle: 'live-demo',
    angleLabel: 'Live Demo / Test',
    hookHeadline: '“That 3PM energy crash? You might just need better hydration.”',
    roasMetric: '5.2x ROAS',
    ctrMetric: '4.1% Outbound CTR',
    durationSeconds: 34,
    creatorName: 'Tarun V.',
    creatorRole: 'Fitness Coach & Athlete · Delhi',
    videoUrl: '/videos/opn-electrolytes.mp4',
    posterUrl: '/videos/electrolytes-poster.jpg',
    subtitles: [
      { time: 0, text: '“That 3PM energy crash? You might just need better hydration.”' },
      { time: 4, text: '“Most sugary sports drinks give you calories, but not a complete electrolyte mix.”' },
      { time: 10, text: '“I use one OPN stick in my water—850mg sodium, 5 electrolytes, plus EAA, Vitamin C and B12.”' },
      { time: 20, text: '“Zero sugar, zero calories, and it’s made for serious hydration without carrying a bulky tub.”' },
      { time: 27, text: '“Try the assorted pack and find your flavour—lemon, orange, or blueberry.”' }
    ],
    scriptSummary: '5-beat performance UGC script: addresses the 3PM slump with better hydration, contrasts with sugary sports drinks, demonstrates dissolving one OPN stick with 850mg sodium + EAA + B12, highlights zero sugar/tub-free portability, and drives assorted pack flavor trial CTA.',
    bgGradient: 'from-[#1A1F18] via-[#222B20] to-[#121611]',
    avatarColor: '#C7FF3D'
  },
  {
    id: 'ad-apparel-heavyweight-tee',
    title: 'DTC Apparel / Oversized Matcha Tee — Final Master Script',
    niche: 'Fashion & Lifestyle',
    angle: 'objection-buster',
    angleLabel: 'Objection Buster',
    hookHeadline: '“People always say oversized T-shirts look messy if you’re under 5\'8.”',
    roasMetric: '4.7x ROAS',
    ctrMetric: '3.8% Outbound CTR',
    durationSeconds: 29,
    creatorName: 'Sneha & Dev',
    creatorRole: 'Style Creators · Pune',
    videoUrl: '/videos/matcha-oversized-tee.mp4',
    posterUrl: '/videos/matcha-tee-poster.jpg',
    subtitles: [
      { time: 0, text: '“People always say oversized T-shirts look messy if you’re under 5\'8.”' },
      { time: 4, text: '“But the problem isn’t your height, it’s cheap fabric that loses its shape and fit.”' },
      { time: 9, text: '“This one is made with 100% combed cotton, biowashed and pre-shrunk for a clean, comfortable fit.”' },
      { time: 17, text: '“So I’m obsessed with this oversized matcha tee.”' },
      { time: 20, text: '“The cotton texture feels incredible on it. Falls so nicely.”' },
      { time: 23, text: '“This is definitely my new favorite shirt.”' },
      { time: 25, text: '“If you want that oversized look to actually sit right, this is worth trying.”' }
    ],
    scriptSummary: '7-beat DTC apparel master script: directly counters the under-5\'8 oversized skepticism, proves 100% combed biowashed cotton quality, delivers authentic UGC fabric-feel reaction, and closes with a risk-free trial CTA.',
    bgGradient: 'from-[#1A231A] via-[#243324] to-[#141C14]',
    avatarColor: '#88B04B'
  },
  {
    id: 'ad-coffee-starter-pack',
    title: 'Artisanal Beverage / Cold Brew Brew-Bags',
    niche: 'Food & Beverage',
    angle: 'irresistible-offer',
    angleLabel: 'Irresistible Sprint Offer',
    hookHeadline: '“They are giving away a free glass tumbler with 10 cold brew packs.”',
    roasMetric: '4.6x ROAS',
    ctrMetric: '4.4% Outbound CTR',
    durationSeconds: 21,
    creatorName: 'Mira S.',
    creatorRole: 'Food & Lifestyle Creator · Goa',
    subtitles: [
      { time: 0, text: 'If you spend ₹300 on Starbucks iced Americanos every single day...' },
      { time: 4, text: 'You need to see this secret flash bundle before midnight.' },
      { time: 9, text: 'Steep this filter bag overnight in cold water. Wake up to barista nitro cold brew.' },
      { time: 15, text: 'Costs ₹35 per glass, and you get the double-walled glass tumbler free.' },
      { time: 19, text: 'Only 150 kits left in stock. Tap below.' }
    ],
    scriptSummary: 'Price-anchoring against daily coffee purchases with high-urgency gift-with-purchase bundle.',
    bgGradient: 'from-[#211E1A] via-[#2B2720] to-[#151310]',
    avatarColor: '#D7CCC8'
  }
];

export const CREATIVE_ANGLES: CreativeAngleDetail[] = [
  {
    id: 'problem-solution',
    title: 'Problem / Solution',
    tagline: 'Agitate the acute daily irritation, then position your product as the only logical fix.',
    psychology: 'Pain-point trigger. Bypasses sales skepticism by validating the customer’s frustration first.',
    idealFor: 'Cold Meta prospecting, broad interest targeting, high-consideration products.',
    scriptHook: '“Stop spending ₹2,000 on products that fix one problem and cause two more.”',
    retentionTactic: 'First 2 seconds shows the physical pain or messy old way with fast text cut.',
    avgHookRate: '41.8% 3-sec Hook'
  },
  {
    id: 'product-discovery',
    title: 'Product Discovery (Organic Find)',
    tagline: 'Authentic creator sharing an unexpected find they stumbled upon and can’t stop raving about.',
    psychology: 'Curiosity gap and native platform mimicry. Looks like genuine organic Reels/TikTok content.',
    idealFor: 'Impulse purchases, lifestyle items, novel gadget launches, viral consumer goods.',
    scriptHook: '“I ordered this from an Instagram ad expecting it to be trash, but I was dead wrong.”',
    retentionTactic: 'Unboxing aesthetic, candid handheld camera motion, direct eye contact.',
    avgHookRate: '38.4% 3-sec Hook'
  },
  {
    id: 'live-demo',
    title: 'Live Demo & Before / After',
    tagline: 'Instant tangible proof showing the immediate difference in texture, speed, or result.',
    psychology: 'Visual validation. Removes cognitive doubt by letting the customer see the transformation in real time.',
    idealFor: 'Cleaning products, skincare, instant supplements, physical tools, kitchenware.',
    scriptHook: '“Watch this 10-second test before you buy any other competitor.”',
    retentionTactic: 'Split-screen or direct close-up macro demo with zero delay in action.',
    avgHookRate: '44.2% 3-sec Hook'
  },
  {
    id: 'objection-buster',
    title: 'Objection Buster',
    tagline: 'Tackle the exact comment section hesitation head-on with proof and transparent answers.',
    psychology: 'Preemptive risk reversal. Addresses price, fit, durability, or legitimacy before they bounce.',
    idealFor: 'Middle-of-funnel retargeting, abandoned cart audiences, premium priced products.',
    scriptHook: '“‘Why is this ₹1,499 when Amazon has one for ₹399?’ Fair question, let me show you.”',
    retentionTactic: 'Screenshot of actual customer objection displayed on screen within 0.8 seconds.',
    avgHookRate: '36.9% 3-sec Hook'
  },
  {
    id: 'irresistible-offer',
    title: 'Irresistible Sprint Offer',
    tagline: 'High-urgency limited sprint bundle or risk-free starter pack that makes waiting costly.',
    psychology: 'Loss aversion and extreme value perception. Drives immediate checkout velocity.',
    idealFor: 'Bottom-of-funnel campaigns, weekend sales, holiday pushes, introductory trial kits.',
    scriptHook: '“Do not buy this brand until you check if the 2-for-1 starter sprint is still active.”',
    retentionTactic: 'Clear countdown urgency combined with tangible free gift unboxing.',
    avgHookRate: '39.5% 3-sec Hook'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'sprint-2-ads',
    name: 'The 2-Ad Sprint',
    badge: 'Same-Day Fast Sprint',
    price: 2499,
    originalPrice: 4999,
    priceFormatted: '₹2,499',
    originalPriceFormatted: '₹4,999',
    discountBadge: '50% off',
    deliveryTime: 'Same-day (<12 hours)',
    adCount: 2,
    description: 'Perfect for testing 2 distinct creative angles immediately without committing large budgets.',
    features: [
      '2 custom 9:16 vertical video ads',
      '2 distinct creative angles (e.g. Problem/Solution + Discovery)',
      'Same-day express delivery (<12 hours)',
      'Dynamic high-retention animated captions',
      'Full commercial ad rights for Meta & TikTok',
      '100% Brief-Match Guarantee or instant refund'
    ]
  },
  {
    id: 'growth-5-ads',
    name: 'The Growth Pack',
    badge: 'Most Popular',
    price: 5999,
    originalPrice: 11999,
    priceFormatted: '₹5,999',
    originalPriceFormatted: '₹11,999',
    discountBadge: '50% off',
    deliveryTime: '24-hour turnaround',
    adCount: 5,
    description: 'The standard performance bundle for scaling brands looking for 5 fresh hooks to run simultaneously.',
    isPopular: true,
    features: [
      '5 custom 9:16 vertical video ads',
      '5 diverse angles across the customer journey',
      '3 hook variation scripts included',
      'Delivered in 24 hours in high-res 1080p MP4',
      'Burned-in animated captions + separate .SRT files',
      'Raw audio cut & editable script documents',
      '1 free round of creative angle adjustment',
      '100% Brief-Match Guarantee'
    ]
  },
  {
    id: 'retainer-15-ads',
    name: 'Creative Engine',
    badge: 'Monthly Retainer',
    price: 14999,
    originalPrice: 29999,
    priceFormatted: '₹14,999/mo',
    originalPriceFormatted: '₹29,999/mo',
    discountBadge: '50% off',
    deliveryTime: 'Bi-weekly creative drops',
    adCount: 15,
    description: 'An ongoing pipeline of 15 fresh, tested creative assets every month to eliminate ad fatigue.',
    features: [
      '15 high-performance 9:16 video ads per month',
      'Bi-weekly drops (7-8 ads every 14 days)',
      'Dedicated performance creative strategist',
      'Rapid iteration on your highest ROAS winning hooks',
      'Direct WhatsApp channel with the creators (+91 6000650701)',
      'Priority 4-hour rush revision turnaround',
      'Pause or cancel anytime with 1 click'
    ]
  }
];

export const FAQS = [
  {
    question: 'Are these real human creators or AI-powered avatars?',
    answer: 'They are hyper-realistic AI creator avatars trained on top-converting DTC and TikTok creator performance. They deliver natural speech cadence, authentic eye contact, nuanced facial micro-expressions, and realistic home/studio lighting. Your customers cannot tell the difference from an expensive human UGC creator, but you get ads in hours instead of weeks at a fraction of the cost.'
  },
  {
    question: 'What do I need to send you to get started?',
    answer: 'Simply provide your product page link (website or Amazon), 2–3 key benefits or USPs, and any current offer. You do NOT need to mail physical inventory or write complex scripts. Our team handles the hook research, scriptwriting, voice synthesis, avatar direction, and captions.'
  },
  {
    question: 'How fast will I receive the video ads?',
    answer: 'The 2-Ad Sprint is delivered same-day (within 12 hours) if ordered before 4:00 PM IST. The 5-Ad Growth Pack is delivered within 24 hours. Finished ads arrive directly in a high-resolution Google Drive folder ready for Meta Ads Manager, TikTok, or YouTube Shorts.'
  },
  {
    question: 'How does the Brief-Match Guarantee work?',
    answer: 'If the delivered ads deviate from your submitted brief, product USPs, or agreed creative angle, we will revise them within 4 hours at zero charge. If we still don’t match your brief, we issue an immediate 100% refund. We take the entire risk so you can test freely.'
  },
  {
    question: 'Can I choose creator demographics (gender, age, accent)?',
    answer: 'Yes. During brief intake, you can select creator persona preferences including Indian English, neutral global, Western, male/female, and age brackets (Gen-Z, young millennial 25–35, mature 35+).'
  },
  {
    question: 'What format and specs are the videos delivered in?',
    answer: 'All videos are rendered in crisp 1080x1920 (9:16 vertical ratio) at 30/60fps in MP4 format. Dynamic Alex Hormozi/MrBeast style animated captions are burned in with high contrast for silent autoplay scrolling.'
  },
  {
    question: 'How do I enquire, pay, and start?',
    answer: 'Click "Get 2 Ads" or any plan to submit a quick enquiry, or contact us directly on WhatsApp (+91 6000650701). We will immediately review your product details, align on script hooks, and share payment details directly on WhatsApp via UPI, bank transfer, or invoice.'
  }
];
