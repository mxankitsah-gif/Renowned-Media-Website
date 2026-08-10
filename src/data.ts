/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ProjectItem, TeamMember, PublicFigure } from './types';
import digitalJockeyLogo from './assets/images/digital_jockey_logo_1781015799371.png';
import healyLogo from './assets/images/healy_logo_1781016025813.png';
import acharyaGaneshLogo from './assets/images/acharya_ganesh_logo_1781016220203.png';
import politicalCampaignThumbnail from './assets/images/political_campaign_thumbnail_1781016921891.png';
import periwinkleLogo from './assets/images/periwinkle_logo_1781017276084.png';
import assuredHospitalityThumbnail from './assets/images/assured_hospitality_thumbnail_1781020648908.png';
import nyshaaRealtyThumbnail from './assets/images/nyshaa_realty_thumbnail_1781020885688.png';
import mohitKambojThumbnail from './assets/images/mohit_kamboj_thumbnail_1781021847623.png';
import mohitKambojPortrait from './assets/images/regenerated_image_1781028443131.png';
import tusharKaushikPortrait from './assets/images/tushar_kaushik_portrait_1781073129545.png';
import ranjnaSinghRathorePortrait from './assets/images/ranjna_singh_rathore_portrait_1781073269809.png';
import romitaTiwariPortrait from './assets/images/romita_tiwari_portrait_1781073383788.png';
import ramveerBidhuriPortrait from './assets/images/ramveer_bidhuri_portrait_1781104024334.png';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCWJLef5fVy7vHZ1E-eIdQ6UwhZkeN3-gLFg4J0IuH31XvANDjVvwLD8kIdBYuqF6vzB9lZ8wQ4ikKkMDugpdwk7usGvM_Jo4eUNdO1SswzBh8Bf0eZ3TczCEUX39273s3QDMwHoFhWoxWQ_sK5ZRXeJ8G_pkVJK_3bRJMAM9HxbRGaRsxvR-enHoBgBBy_M4_RHlxAMJDaStdAhc6QlXRU-E5T7QxpGxSNTycDGwNMHTZS_wvL784yP3wvWgkjL-UpR7tWQZrE9A";

export const SERVICES: ServiceItem[] = [
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    description: 'Build a powerful digital presence through strategic social media management. From content planning and publishing to audience engagement and growth campaigns, we manage your brand across all major platforms.',
    iconName: 'share',
    deliverables: [
      'Instagram Management',
      'Facebook Management',
      'LinkedIn Management',
      'Content Planning',
      'Community Management',
      'Growth Campaigns',
      'Trend Monitoring',
      'Analytics Reporting'
    ],
    duration: 'Ongoing Monthly Management'
  },
  {
    id: 'content-production',
    title: 'Production & Video Editing',
    description: 'Professional content creation for YouTube, podcasts, brands and influencers. We transform ideas into engaging visual stories that capture attention and drive results.',
    iconName: 'videocam',
    deliverables: [
      'Podcast Production',
      'Video Editing',
      'Reels Editing',
      'YouTube Shorts',
      'Motion Graphics',
      'Thumbnail Design',
      'Content Repurposing',
      'Channel Optimization'
    ],
    duration: '2-4 Business Days per Deliverable'
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    description: 'Data-driven advertising campaigns designed to generate leads, sales and measurable business growth.',
    iconName: 'trending_up',
    deliverables: [
      'Meta Ads',
      'Lead Generation',
      'Retargeting Campaigns',
      'Conversion Campaigns',
      'Landing Page Strategy',
      'WhatsApp Funnels',
      'Audience Targeting',
      'Campaign Analytics'
    ],
    duration: 'Campaign Setup: 5-7 Business Days'
  },
  {
    id: 'political-campaigns',
    title: 'Political Digital Campaigns',
    description: 'Comprehensive digital campaign management for political leaders, candidates and organizations. We combine content, outreach and technology to maximize voter engagement and digital influence.',
    iconName: 'gavel',
    deliverables: [
      'Election Campaign Management',
      'Digital War Room Setup',
      'Political Content Production',
      'Influencer Outreach',
      'WhatsApp Campaigns',
      'AI Calling Campaigns',
      'Online Reputation Management',
      'Voter Engagement Strategies'
    ],
    duration: 'Custom Campaign Retainer'
  },
  {
    id: 'seo-website',
    title: 'SEO & Website Management',
    description: 'Improve online visibility and search rankings with strategic SEO and professional website management.',
    iconName: 'search',
    deliverables: [
      'Technical SEO',
      'Local SEO',
      'On-Page SEO',
      'Website Maintenance',
      'Blog Management',
      'Search Optimization',
      'Google Business Profile Optimization',
      'Website Content Updates'
    ],
    duration: '7-14 Business Days Setup'
  },
  {
    id: 'public-relations',
    title: 'Public Relations & Media Management',
    description: 'Strengthen your brand reputation through media relations, press coverage and strategic communication.',
    iconName: 'campaign',
    deliverables: [
      'Press Relations',
      'TV Media Coordination',
      'Print Media Coverage',
      'Press Releases',
      'Event Media Management',
      'Brand Reputation Building',
      'Media Outreach',
      'Public Image Management'
    ],
    duration: 'Monthly Campaign Retainer'
  },
  {
    id: 'branding-design',
    title: 'Branding & Creative Design',
    description: 'Create memorable brand experiences through impactful design and visual communication.',
    iconName: 'palette',
    deliverables: [
      'Graphic Design',
      'Social Media Creatives',
      'Campaign Creatives',
      'Ad Design',
      'Brand Identity Design',
      'Marketing Collaterals',
      'Presentation Design',
      'Event Branding'
    ],
    duration: '5-10 Business Days Core Phase'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'digital-jockey',
    title: 'Digital Jockey',
    description: 'Digital Jockey is a rapidly growing podcast and digital media platform founded by journalist and podcaster Tushar Kaushik. The platform focuses on long-form conversations, spirituality, astrology, investigative discussions, social issues, and educational content, reaching audiences across YouTube and social media.',
    category: 'Podcast Production & Digital Media Growth',
    img: digitalJockeyLogo,
    client: 'Digital Jockey',
    year: '2026',
    metrics: 'Scalable Production',
    challenge: 'Digital Jockey needed to streamline multi-cam recording operations, maximize video retention and watch time within the first few seconds, design high-CTR thumbnails, and establish a high-intensity cross-channel distribution pipeline across YouTube and socials.',
    solution: 'Renowned Media built a dedicated content production ecosystem featuring high-end video editing workflows, optimized SEO distribution, targeted performance marketing initiatives, and unified creative assets to drive sustainable brand-mindshare growth and consistent audience retention loops.',
    clientIndustry: 'Podcast & Digital Media Brand',
    servicesDelivered: ['Video Editing', 'Social Media Management', 'Performance Marketing', 'Content Strategy']
  },
  {
    id: 'acharya-ganesh',
    title: 'Acharya Ganesh',
    description: 'Acharya Ganesh is a trusted astrology and spiritual guidance platform helping individuals with personalized consultations, astrological insights, and life guidance. Renowned Media manages the brand\'s digital presence, website performance, search visibility, and social media ecosystem.',
    category: 'SEO, Website Management & Social Media Growth',
    img: acharyaGaneshLogo,
    client: 'Acharya Ganesh',
    year: '2026',
    metrics: 'Enhanced Authority',
    challenge: 'Acharya Ganesh needed to strengthen organic online visibility, resolve technical website speed bottlenecks, optimize spiritual content structures, and maintain a highly credible, consistent search and social media footprint.',
    solution: 'Partnered to implement advanced search engine optimization (SEO), complete technical SEO speed audits, structured content optimization, and end-to-end social media management to launch a highly scalable, trusted digital ecosystem.',
    clientIndustry: 'Astrology & Spiritual Guidance Brand',
    servicesDelivered: ['SEO', 'Website Management', 'Technical SEO', 'Social Media Management']
  },
  {
    id: 'nyshaa-realty',
    title: 'Nyshaa Realty',
    description: 'Managed comprehensive media and marketing activities for a premium real estate brand. Coordinated print media coverage, television media relations, social media management, project launch promotions, award show management, and strategic publicity campaigns to increase brand awareness and project visibility.',
    category: 'Real Estate Media & Marketing',
    img: nyshaaRealtyThumbnail,
    client: 'Nyshaa Realty',
    year: '2026',
    metrics: 'Enhanced Credibility',
    challenge: 'Nyshaa Realty needed to synchronize high-impact traditional and digital media campaigns, launch high-value property campaigns, and organize flawless industry events to solidify brand trust and project reach.',
    solution: 'Designed and executed high-profile television and print media relationships, active social media administration, polished real estate promotional materials, strategic campaign execution, and premium award show organization.',
    clientIndustry: 'Real Estate Media & Marketing',
    servicesDelivered: [
      'Media Management',
      'Print Media Relations',
      'TV Media Coverage',
      'Social Media Management',
      'Real Estate Project Promotion',
      'PR & Brand Visibility',
      'Award Show Management',
      'Marketing Campaign Execution',
      'Content Strategy'
    ]
  },
  {
    id: 'political-campaign',
    title: 'Maharashtra Election Digital Outreach Campaign',
    description: 'Executed a large-scale digital outreach campaign focused on voter engagement, content amplification, public awareness, and digital communication. Managed end-to-end campaign operations including content strategy, social media growth, influencer coordination, WhatsApp outreach, and AI-powered communication systems.',
    category: 'Political Campaign Management',
    img: politicalCampaignThumbnail,
    client: 'Maharashtra Election Digital Outreach Campaign',
    year: '2026',
    metrics: 'Multi-platform Growth',
    challenge: 'The campaign required coordinating complex, multi-channel public communication systems under tight schedules, combating narrative fatigue, raising high-intensity public awareness, managing large-scale influencer alignments, and reaching millions of voters simultaneously across fragmented social ecosystems.',
    solution: 'Renowned Media built an end-to-end political outreach architecture. This involved launching automated AI-calling and WhatsApp communication workflows, scaling content production across platforms, running hyper-targeted performance marketing ads, and managing a robust influencer marketing and trend creation engine to drive record voter engagement.',
    clientIndustry: 'Political Campaign Management',
    servicesDelivered: [
      'Political Campaign Strategy',
      'Social Media Management',
      'Content Production Management',
      'Influencer Marketing',
      'WhatsApp Marketing',
      'AI Calling & Communication',
      'Digital Outreach Operations',
      'Trend Creation & Amplification',
      'Team Management',
      'Performance Marketing'
    ]
  },
  {
    id: 'healy',
    title: 'Healy',
    description: 'Healy is a global wellness and frequency technology brand focused on innovative digital wellness solutions. Renowned Media supported the brand through professional post-production and content editing workflows designed to improve audience engagement and content quality.',
    category: 'Video Production & Content Editing',
    img: healyLogo,
    client: 'Healy',
    year: '2026',
    metrics: 'Enhanced Retention',
    challenge: 'Healy needed to transition towards high-impact wellness narratives, requiring polished visual storytelling that preserved strict brand-consistent guidelines while optimizing content for multiple digital platforms.',
    solution: 'Established professional post-production and content editing workflows, focusing on improving the storytelling flow, boosting delivery speed, rendering premium motion graphics, and securing professional production standards.',
    clientIndustry: 'Wellness Technology Brand',
    servicesDelivered: ['Video Editing', 'Content Enhancement', 'Post Production', 'Social Media Video Optimization', 'Motion Graphics Support']
  },
  {
    id: 'mohit-kamboj',
    title: 'Mohit Kamboj',
    description: 'Managed public relations and media coordination activities for a prominent public figure. Worked on media outreach, reputation management, news coverage coordination, strategic communication, and digital visibility initiatives across multiple platforms.',
    category: 'Public Relations & Media Management',
    img: mohitKambojThumbnail,
    client: 'Mohit Kamboj',
    year: '2026',
    metrics: 'Enhanced Visibility',
    challenge: 'A prominent public figure required high-impact, coordinated, and strategic public relations and media alignment across fragmented media channels to build a credible and highly visible reputation.',
    solution: 'Designed and implemented end-to-end press coordination, strategic media outreach, real-time reputation management, structured news coverage support, and digital visibility programs.',
    clientIndustry: 'Public Relations & Media Management',
    servicesDelivered: [
      'Public Relations (PR)',
      'Media Management',
      'Press Coordination',
      'Reputation Management',
      'News Coverage Support',
      'Digital Visibility Strategy',
      'Media Outreach',
      'Communication Management'
    ]
  },
  {
    id: 'periwinkle-industrial',
    title: 'Periwinkle Industrial Services',
    description: 'Provided professional graphic design and visual branding support for an industrial services company. Created marketing creatives, promotional assets, digital graphics, and brand communication materials to maintain a consistent and professional corporate presence across digital platforms.',
    category: 'Industrial Services & Corporate Branding',
    img: periwinkleLogo,
    client: 'Periwinkle Industrial Services',
    year: '2026',
    metrics: 'Unified Identity',
    challenge: 'Periwinkle Industrial Services required a cohesive and professional corporate brand identity across multiple digital channels, replacing fragmented and inconsistent promotional assets with high-quality, professional marketing creatives.',
    solution: 'Renowned Media designed a robust visual communication system, delivering a suite of professional graphic designs, corporate social media creatives, promotional digital assets, and marketing materials tailored to their corporate positioning and brand standards.',
    clientIndustry: 'Industrial Services & Corporate Branding',
    servicesDelivered: [
      'Graphic Design',
      'Corporate Branding',
      'Marketing Creatives',
      'Social Media Creatives',
      'Promotional Design',
      'Visual Communication',
      'Digital Asset Creation'
    ]
  },
  {
    id: 'assured-hospitality',
    title: 'Assured Hospitality',
    description: 'Provided creative design and marketing support for a hospitality and travel-focused brand. Designed promotional creatives, social media campaigns, marketing assets, and advertising materials to enhance brand visibility and customer engagement.',
    category: 'Hospitality & Travel Marketing',
    img: assuredHospitalityThumbnail,
    client: 'Assured Hospitality',
    year: '2026',
    metrics: 'Enhanced Visibility',
    challenge: 'Assured Hospitality needed high-impact promotional campaigns and consistent digital visual branding to compete in a saturated luxury travel market, requiring professional-grade marketing creatives to capture customer attention.',
    solution: 'Designed and deployed cohesive social media campaigns, high-CTR advertisement layouts, specialized hospitality marketing strategies, and dynamic promotional creatives that elevated their search presence and drove immediate audience interactions.',
    clientIndustry: 'Hospitality & Travel Marketing',
    servicesDelivered: [
      'Graphic Design',
      'Social Media Creatives',
      'Advertisement Design',
      'Hospitality Marketing',
      'Brand Promotion',
      'Digital Marketing Support',
      'Campaign Creative Design'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'joanne',
    name: 'Joanne Williams',
    role: 'Founder & CEO',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLvXV8tUbpf_RAQDwnUSTe3o1M8LAbPwjP2dKtCWL25dxx5hg1nkIEEEGXmCLq2qBCo9k70HhjZVX5mvYz1gVOGsDOGyCKa6ZZLimPT7VzgBOgt6ZaoBzQ8UuZ1hPpQWm0xHkkI2Y6vhcQSmEXl4Y3wexaF-ELIUxqKe1PR5uneoKz7JzHfmuz_akRdr1T1G0IITl2vaJUYnQTxj0gtxhw3WopN2nBIHZGRlX9mEceov17_fiNjck6TDCw',
    bio: 'Joanne leads the creative paradigm at Renowned Media. With over 12 years of experience building cross-channel visibility campaigns, she ensures our clients maintain an elite digital authority.',
    specialties: ['Brand Architecture', 'Investor Pitching', 'Creative Direction']
  },
  {
    id: 'fred',
    name: 'Fred Buster',
    role: 'Director OPS',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLhouVq75X2C_gpHwzDeDpVBFFhsB1YYoMtzX77nlDk5HX7kOEsIVaPxdnxGlJxKf_ZvgOSpPn086w1Fio0DtCM0w81Y3bgDzHpegUaTMn5Bnk0w9meGyJlsxZ-Ke-UgEDVMDJLYWPgV_bzvX0DVz5O3FcFXX2hWLHKazVcEq8uGegfSJy29RtyZUg6EYjHLhHg6I6Pv3JFarNLmN-ztg416KLNxYW8r5jsPOfwB2CDtsSmLjK36UFuFg',
    bio: 'Fred keeps the engine running. He coordinates on-set production routines, manages multi-team resource pipelines, and maintains pristine deliverable timelines for all digital assets.',
    specialties: ['Resource Orchestration', 'Live Event Production', 'Agile Operations']
  },
  {
    id: 'lisa',
    name: 'Lisa Hoffman',
    role: 'Director HR',
    img: 'https://lh3.googleusercontent.com/aida/AP1WRLtYNNwO-_--Q207UyoQDhFWyQijI-k9XEGpLbZUsAHXj48QZH76TDEGQlfT4E0VaFIuk_z8iQh7Sh3F7xQBkwM-1XYK16Xq_I1dhu5p6a_6H-iLwsFUfLYKKY0zmOW22Ml-d5DLgPAWXOehe9TsciBvZe-tuDccL5VUDo47EvrJEye25uFuvwdxdBc3U6QaiO19Lp7obe0m9cXFS69JesncvpKmkOaxWBV34ECBaBDipzImvD9xpIxt',
    bio: 'Lisa cultivates a culture of passion, craftsmanship, and extreme focus. She recruits top-tier global operators, video artists, design directors, and tech-savvy marketers to our ranks.',
    specialties: ['Talent Sourcing', 'Workplace Culture', 'Continuous Growth Protocols']
  }
];

export const AGENCY_DETAILS = {
  address: '887, Nitikhand-1, Indirapuram, Ghaziabad-201014',
  email: 'renownedmedia@outlook.in',
  phone1: '+91-882-899-8296',
  phone2: '+91-983-384-9337',
  fullSummary: 'From digital PR to content production, Renowned Media helps brands grow visibility, authority and audience engagement across modern platforms.'
};

export const PUBLIC_FIGURES: PublicFigure[] = [
  {
    id: 'mohit-kamboj-bharatiya',
    name: 'Mohit Kamboj Bharatiya',
    category: 'Entrepreneur, Investor & Public Figure',
    services: [
      'Public Relations',
      'Media Management',
      'Brand Positioning',
      'Digital Visibility'
    ],
    img: mohitKambojPortrait
  },
  {
    id: 'tushar-kaushik',
    name: 'Tushar Kaushik',
    category: 'Digital Creator & Journalist',
    services: [
      'Podcast Production',
      'Content Strategy',
      'Video Production',
      'Digital Branding'
    ],
    img: tusharKaushikPortrait
  },
  {
    id: 'ranjna-singh-rathore',
    name: 'Ranjna Singh Rathore',
    category: 'Journalist & Digital Creator',
    services: [
      'Social Media Management',
      'Content Strategy',
      'Digital Branding',
      'Audience Growth'
    ],
    img: ranjnaSinghRathorePortrait
  },
  {
    id: 'romita-tiwari',
    name: 'Romita Tiwari',
    category: 'Journalist & Digital Creator',
    services: [
      'Personal Branding',
      'Content Marketing',
      'Digital Visibility',
      'Social Media Growth'
    ],
    img: romitaTiwariPortrait
  },
  {
    id: 'ramveer-singh-bidhuri',
    name: 'Ramveer Singh Bidhuri',
    category: 'Public Figure',
    services: [
      'Public Outreach',
      'Media Visibility',
      'Digital Communication',
      'Social Media Strategy'
    ],
    img: ramveerBidhuriPortrait
  }
];
