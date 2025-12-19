import { useState, useEffect } from 'react';

interface Review {
  id: number;
  title: string;
  content: string;
  name: string;
  author?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    title: "Selling to non-profits.",
    content: "I offer a SaaS solution for nonprofits to improve donor relations, retention, and revenue. The solution is affordable with high margins but requires selling 700 subscriptions in the first quarter to break even. Lacking current channels and website traffic, I approached LinkedGuerilla. After two months, I'm getting 2-6 sales per week, which I consider exceptional. I believe my product is a 'no-brainer' and plan to put my whole staff on the program to maximize results, anticipating about 60 accounts.",
    name: "Sarah Chen"
  },
  {
    id: 2,
    title: "A Powerful Network.",
    content: "My business runs mainly on Instagram, targeting B2C hobbyists. I initially didn't expect to close many sales via LinkedIn. However, with LinkedGuerilla, I reliably close enough sales to cover its cost. More importantly, my network grows by at least 500 connections per month. I retarget these connections with cross-posting, closing an additional $2000 per month.",
    name: "Boutique US Manufacturer",
    author: "Boutique US Manufacturer"
  },
  {
    id: 3,
    title: "Not so many fish in the sea",
    content: "I needed to target a very niche audience: 'aquaria managers at companies with more than 200 employees in cities included in my sales region.' I had resigned myself to ineffective cold-calling. LinkedGuerilla, as suggested by Jeremy, was perfect for this precise audience. I covered every possible prospect within three months, achieving great results: 900 targeted connections, 4 sales. I'm now using LinkedGuerilla to retarget those who initially passed, expecting even better results.",
    name: "Michael Torres"
  },
  {
    id: 4,
    title: "Exceeded Expectations",
    content: "As a startup founder, I was skeptical about LinkedIn outreach services. LinkedGuerilla proved me wrong. Within the first month, I had 15 qualified leads and closed 3 deals. The ROI has been incredible, and the quality of connections is far superior to any other channel I've tried.",
    name: "David Park"
  },
  {
    id: 5,
    title: "Game Changer for B2B Sales",
    content: "We've tried multiple lead generation services, but none compare to LinkedGuerilla. The team understands our industry and targets the right decision-makers. Our sales pipeline is now consistently full, and we're closing deals at a rate we never thought possible.",
    name: "Jennifer Martinez"
  },
  {
    id: 6,
    title: "Best Investment We've Made",
    content: "The results speak for themselves. In just 90 days, LinkedGuerilla generated over 200 qualified leads and helped us close 12 new clients. The personalized approach and attention to detail make all the difference. This service pays for itself many times over.",
    name: "Robert Kim"
  },
  {
    id: 7,
    title: "Precision Targeting Works",
    content: "Our target market is extremely specific - C-level executives in the healthcare technology sector. LinkedGuerilla nailed it. Every connection was relevant, and the conversion rate has been outstanding. We've expanded our program to cover multiple team members.",
    name: "Amanda Johnson"
  }
];

export default function RotatingReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedReviews, setDisplayedReviews] = useState<Review[]>([]);

  // Auto-rotate through reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Display 3 reviews at a time, rotating through all reviews
  useEffect(() => {
    const getDisplayedReviews = () => {
      const result: Review[] = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % reviews.length;
        result.push(reviews[index]);
      }
      return result;
    };
    setDisplayedReviews(getDisplayedReviews());
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {displayedReviews.map((review, idx) => (
          <div
            key={`${review.id}-${currentIndex}-${idx}`}
            className="bg-gray-900 border-2 border-[#6B7E4F] rounded-lg p-6 shadow-md transition-all duration-500"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-bold text-primary-300 mb-3">
              {review.title}
            </h3>
            
            {/* Content */}
            <p className="text-gray-100 text-sm leading-relaxed mb-4">
              {review.content}
            </p>
            
            {/* Name */}
            <p className="text-sm text-primary-300 font-medium">
              {review.name}
            </p>
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-500 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

