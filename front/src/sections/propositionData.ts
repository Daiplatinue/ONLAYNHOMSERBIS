import { Cpu, Lock, Globe, Clock, Database, Cloud } from 'lucide-react';

import customer1 from '../assets/proposition/man-1283231_1280.jpg';
import customerbg1 from '../assets/proposition/Contemplative Portrait (1).jpeg';

import customer2 from '../assets/proposition/Cheerful Man in Maroon Turtleneck.jpeg';
import customerbg2 from '../assets/proposition/Aerial View of Lush Green Waterways.jpeg';

import customer3 from '../assets/proposition/Close-Up Dewy Face.jpeg';
import customerbg3 from '../assets/proposition/Happy Small Dog Close-Up.jpeg';

import customer4 from '../assets/proposition/Contemplative Portrait.jpeg';
import customerbg4 from '../assets/proposition/Airplane Wing at Sunset.jpeg';

import customer5 from '../assets/proposition/Dramatic Portrait Duo.jpeg';
import customerbg5 from '../assets/proposition/Majestic Forest Canopy.jpeg';

import customer6 from '../assets/proposition/Elegant Man in Nature.jpeg';
import customerbg6 from '../assets/proposition/Close-up Portrait with Black Turtleneck.jpeg';

import about1 from '../assets/proposition/Man Working in Cozy Van.jpeg';
import about2 from '../assets/proposition/Joyful Woman in Blue.jpeg';
import about3 from '../assets/proposition/Outdoor Service Counter Interaction.jpeg';
import about4 from '../assets/proposition/Contemplative Figure Amidst Vibrant Geometry.jpeg';

import feature1 from '../assets/zoomeye.mp4';

export interface Benefit {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Instant Booking",
    subtitle: "Quick & Easy",
    description: "Book your service provider in just a few taps. Our streamlined process gets you connected with professionals instantly.",
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg"
  },
  {
    id: 2,
    title: "Verified Professionals",
    subtitle: "Trusted Service",
    description: "All our service providers are thoroughly vetted and verified. Work with confidence knowing you're getting quality service.",
    image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg"
  },
  {
    id: 3,
    title: "Real-time Tracking",
    subtitle: "Stay Updated",
    description: "Track your service provider's location and estimated arrival time in real-time. Never wonder when help will arrive.",
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg"
  },
  {
    id: 4,
    title: "Secure Payments",
    subtitle: "Safe & Reliable",
    description: "Multiple payment options with bank-level security. Pay safely through our encrypted payment system.",
    image: "https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg"
  },
  {
    id: 6,
    title: "24/7 Support",
    subtitle: "Always Available",
    description: "Our customer support team is available round the clock to help you with any questions or concerns.",
    image: "https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg"
  },
  {
    id: 5,
    title: "Quality Guarantee",
    subtitle: "Satisfaction Assured",
    description: "We guarantee the quality of our services. If you're not satisfied, we'll make it right or refund your money.",
    image: "https://images.pexels.com/photos/5691658/pexels-photo-5691658.jpeg"
  }
];

export const tweets = [
    {
        avatar: customer1,
        name: "Dillion",
        handle: "@dillionverma",
        verified: true,
        content: "Just had my electrical wiring checked by HandyGo! Super quick and the technician explained everything clearly. Feeling much safer now. Highly recommend their efficiency! ⚡",
        image: customerbg1,
        stats: {
            comments: 12,
            retweets: 24,
            likes: 483,
            views: "1.2M"
        }
    },
    {
        avatar: customer2,
        name: "Sarah Johnson",
        handle: "@sarahcodes",
        verified: true,
        content: "Just used HandyGo for a plumbing repair – absolutely blown away by their professionalism and attention to detail! The technician was super efficient. Highly recommend! 🌟",
        image: customerbg2,
        stats: {
            comments: 8,
            retweets: 15,
            likes: 234,
            views: "856K"
        }
    },
    {
        avatar: customer3,
        name: "Alex Rivera",
        handle: "@alexdev",
        verified: true,
        content: "After trying multiple service platforms, HandyGo stands out for their reliability and quality. Their team is responsive, professional, and delivers exceptional results every time! 💯",
        image: customerbg3,
        stats: {
            comments: 15,
            retweets: 42,
            likes: 567,
            views: "1.5M"
        }
    },
    {
        avatar: customer4,
        name: "Michael Chen",
        handle: "@mikedesigns",
        verified: true,
        content: "I'm amazed by the quality and efficiency of HandyGo for my appliance repair! Fixed an emergency issue in under an hour. Their technicians are true professionals. Will definitely be using them again! 🔧",
        image: customerbg4,
        stats: {
            comments: 18,
            retweets: 31,
            likes: 429,
            views: "952K"
        }
    },
    {
        avatar: customer5,
        name: "Emma Wilson",
        handle: "@emma_homes",
        verified: false,
        content: "The HandyGo cleaning team transformed our home into a paradise! Their attention to detail and thoroughness exceeded all expectations. Worth every penny for the incredible results. 🌿",
        image: customerbg5,
        stats: {
            comments: 24,
            retweets: 56,
            likes: 682,
            views: "1.8M"
        }
    },
    {
        avatar: customer6,
        name: "James Rodriguez",
        handle: "@jrod_home",
        verified: true,
        content: "Hired HandyGo for a complete AC inspection and tune-up. Their team was thorough, professional, and completed the work ahead of schedule! No more worries during the hot season. Couldn't be happier with the service! ❄️",
        image: customerbg6,
        stats: {
            comments: 11,
            retweets: 19,
            likes: 301,
            views: "783K"
        }
    }
];

export const services = [
    { title: "PLUMBLING", section: "01", action: "DISCOVER" },
    { title: "HANDYMAN", section: "02", action: "EXPLORE" },
    { title: "LANDSCAPING", section: "03", action: "EXPERIENCE" },
    { title: "ROOFING", section: "04", action: "LEARN" },
    { title: "PEST CONTROL", section: "05", action: "JOIN" },
    { title: "CLEANING", section: "06", action: "VISIT" }
];

export const aboutHandyGo = [
    {
        id: 1,
        title: "CONVENIENCE AT YOUR FINGERTIPS",
        subtitle: "INSTANT ACCESS",
        description: "The name 'HandyGo' embodies our core mission: to provide production services that are both accessible and mobile. We're always ready to spring into action, bringing convenience to your fingertips.",
        image: about1,
        bgColor: "bg-amber-50",
        accentColor: "text-amber-600"
    },
    {
        id: 2,
        title: "EFFICIENCY IN MOTION",
        subtitle: "SWIFT SERVICE",
        description: "HandyGo represents our commitment to efficiency. Just like our name suggests, we're quick, agile, and always on the move to ensure your production runs smoothly from start to finish.",
        image: about2,
        bgColor: "bg-gray-200",
        accentColor: "text-emerald-500"
    },
    {
        id: 3,
        title: "READY WHEN YOU ARE",
        subtitle: "24/7 AVAILABILITY",
        description: "The 'Go' in HandyGo signifies our readiness. We're prepared to mobilize at a moment's notice, adapting to your production needs regardless of timeline or complexity.",
        image: about3,
        bgColor: "bg-sky-50",
        accentColor: "text-sky-500"
    },
    {
        id: 4,
        title: "SIMPLICITY IN COMPLEXITY",
        subtitle: "SEAMLESS SOLUTIONS",
        description: "Our name reflects our approach to production challenges. We take complex production requirements and make them handy – simple, manageable, and achievable.",
        image: about4,
        bgColor: "bg-pink-50",
        accentColor: "text-pink-500"
    }
];

export const sponsorLogos = [
    {
        name: "Amazon",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    },
    {
        name: "DeebSeek",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/DeepSeek_logo.svg"
    },
    {
        name: "Lazada",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Lazada_%282019%29.svg"
    },
    {
        name: "Google",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg"
    },
    {
        name: "Youtube",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
    },
    {
        name: "Facebook",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Facebook_logo_%282023%29.svg"
    },
    {
        name: "GitHub",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_logo_2013.svg"
    },
    {
        name: "CloudBees",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Cloudbees-logo-black.png"
    },
    {
        name: "Yes Bank",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RIT_2018_logo_Image_Permanence_Institute_hor_k.svg"
    },
    {
        name: "Polyga",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Polyga-logo-color-small.png"
    },
    {
        name: "LinkedIn",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/LinkedIn_Logo_2013_%282%29.svg"
    },
    {
        name: "ZAP by Checkmarx",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Logo_of_ZAP_by_Checkmarx.svg"
    },
    {
        name: "Microsoft",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
    },
    {
        name: "WildBrain",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/be/WildBrain_logo.svg"
    },
    {
        name: "New Relic",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/New_Relic_logo.png"
    }
];

export const sponsorQuote = {
    text: "These incredible partners and sponsors have made invaluable contributions to building and maintaining our robust service platform. Their support enables us to deliver exceptional quality and innovation to our customers.",
    author: "HandyGo Team",
    role: "Development & Management"
};

export const systemFeatures = [
    {
        icon: Cpu,
        title: "Advanced Processing",
        description: "State-of-the-art system architecture ensuring fast and efficient service delivery",
        video: feature1
    },
    {
        icon: Lock,
        title: "Enhanced Security",
        description: "Multi-layer security protocols protecting all user data and transactions",
        video: "https://cdn.pixabay.com/vimeo/529533910/Digital%20Security%20-%2068318.mp4?width=640&hash=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"
    },
    {
        icon: Globe,
        title: "Global Accessibility",
        description: "24/7 system availability with worldwide access and minimal downtime",
        video: "https://cdn.pixabay.com/vimeo/414804112/Earth%20-%2027847.mp4?width=640&hash=9876543210abcdef0123456789abcdef"
    },
    {
        icon: Clock,
        title: "Real-time Updates",
        description: "Instant synchronization and live status tracking for all services",
        video: "https://cdn.pixabay.com/vimeo/470290078/Time%20-%2046661.mp4?width=640&hash=fedcba9876543210fedcba9876543210"
    },
    {
        icon: Database,
        title: "Smart Storage",
        description: "Optimized data management system with automated backup and recovery",
        video: "https://cdn.pixabay.com/vimeo/527438875/Database%20-%2067088.mp4?width=640&hash=123456789abcdef0123456789abcdef0"
    },
    {
        icon: Cloud,
        title: "Cloud Integration",
        description: "Seamless cloud-based operations for scalability and reliability",
        video: "https://cdn.pixabay.com/vimeo/527438842/Cloud%20-%2067087.mp4?width=640&hash=abcdef0123456789abcdef0123456789"
    }
];