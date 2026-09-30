export type CreativeAngleType = 
  | 'problem-solution'
  | 'product-discovery'
  | 'live-demo'
  | 'objection-buster'
  | 'irresistible-offer';

export interface VideoAdItem {
  id: string;
  title: string;
  niche: string;
  angle: CreativeAngleType;
  angleLabel: string;
  hookHeadline: string;
  roasMetric: string;
  ctrMetric: string;
  durationSeconds: number;
  creatorName: string;
  creatorRole: string;
  subtitles: { time: number; text: string }[];
  scriptSummary: string;
  bgGradient: string;
  avatarColor: string;
  videoUrl?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: number;
  priceFormatted: string;
  deliveryTime: string;
  adCount: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface CreativeAngleDetail {
  id: CreativeAngleType;
  title: string;
  tagline: string;
  psychology: string;
  idealFor: string;
  scriptHook: string;
  retentionTactic: string;
  avgHookRate: string;
}

export interface BriefFormData {
  productName: string;
  websiteUrl: string;
  niche: string;
  targetAngles: CreativeAngleType[];
  packageId: string;
  brandUsp: string;
  specialOffer: string;
  creatorStyle: string;
  contactEmail: string;
  contactPhone: string;
}
