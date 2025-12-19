import { useState, useEffect } from 'react';

interface Message {
  id: number;
  name: string;
  title: string;
  connection: string;
  date: string;
  preview: string;
  fullMessage: string;
  avatar: string;
}

const messages: Message[] = [
  {
    id: 1,
    name: "Richard Tanzen",
    title: "Venture Capitalist",
    connection: "3rd",
    date: "Dec 18",
    preview: "That's a hell of an idea. How long have...",
    fullMessage: "That's a hell of an idea.\n\nHow long have you been working on this? Have you approached any other firms? How much ownership do you currently hold?\n\nOf course, we'll need to investigate your budget and my tech team will do a deeper dive into your prototype, but so far so good.\n\nGive me a call back by Tuesday.\n\nThanks, Richard\n(704)966-9026",
    avatar: "/mark.webp"
  },
  {
    id: 2,
    name: "Carbara Borcoran",
    title: "Your favorite CEO",
    connection: "2nd",
    date: "Dec 18",
    preview: "Very interesting. I had expeirmented wit...",
    fullMessage: "Very interesting.\n\nI had expeirmented with some of these prototypes a few years back, but by the time the contract was up there were no deliverables. I'd still like to see some improvements in batteries and I'm sure my investors would as well.\n\nIf you have some time this upcoming week, I can connect you with my energy guys and see if there's room for an acquisition.\n\nTalk to you then, Telon",
    avatar: "/barb.webp"
  },
  {
    id: 3,
    name: "Oren Duffet",
    title: "Investment Strategist",
    connection: "2nd",
    date: "Dec 17",
    preview: "Phenomenal presentation. I'm looking to ...",
    fullMessage: "Phenomenal presentation.\n\nI'm looking to expand my portfolio in the tech sector, and your solution addresses a real market need. The numbers you presented are compelling.\n\nLet's schedule a call next week to discuss terms. I'm particularly interested in your growth projections and how you plan to scale.\n\nBest regards,\nOren",
    avatar: "/steve.webp"
  },
  {
    id: 4,
    name: "Jeremy Evans",
    title: "Tech Entrepreneur",
    connection: "1st",
    date: "Dec 17",
    preview: "I really love your work! I'm actually I...",
    fullMessage: "I really love your work!\n\nI'm actually interested in exploring a potential partnership. Your approach to lead generation aligns perfectly with what we're building.\n\nWould you be open to a strategic collaboration? I think there's significant synergy between our companies.\n\nLet me know when you're available for a discussion.\n\nJeremy",
    avatar: "/jer.webp"
  },
  {
    id: 5,
    name: "Toby Rogerts",
    title: "Business Development",
    connection: "1st",
    date: "Dec 16",
    preview: "I'm hooked. I'm looking to book more",
    fullMessage: "I'm hooked.\n\nI'm looking to book more time with your team. The results you've shown are exactly what we need to accelerate our growth.\n\nCan we set up a demo for next week? I'd like to bring in our sales director to see how this integrates with our current workflow.\n\nLooking forward to it!\n\nToby",
    avatar: "/man.webp"
  },
  {
    id: 6,
    name: "Kevin O'Fallon",
    title: "Operations Director",
    connection: "2nd",
    date: "Dec 16",
    preview: "Hello, I appreciate your proposition.",
    fullMessage: "Hello,\n\nI appreciate your proposition. We've been looking for a solution like this for a while now.\n\nThe ROI you've demonstrated is impressive. I'd like to discuss how we can implement this across our organization.\n\nCan we schedule a call this week?\n\nBest,\nKevin",
    avatar: "/kevin.webp"
  }
];

export default function MessagingInterface() {
  const [selectedMessage, setSelectedMessage] = useState<Message>(messages[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate through messages every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Update selected message when currentIndex changes
  useEffect(() => {
    setSelectedMessage(messages[currentIndex]);
  }, [currentIndex]);

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    const index = messages.findIndex(m => m.id === message.id);
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200" style={{ maxWidth: '900px', height: '300px' }}>
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center text-white font-bold text-sm">
            lg
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="text-white text-xl">🏠</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">22</span>
          </div>
          <div className="relative">
            <span className="text-white text-xl">👥</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">7</span>
          </div>
          <div className="relative">
            <span className="text-white text-xl">💬</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">15</span>
          </div>
          <div className="relative">
            <span className="text-white text-xl">🔔</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">44</span>
          </div>
        </div>
      </div>

      <div className="flex h-full" style={{ height: 'calc(300px - 73px)' }}>
        {/* Left Panel - Message List */}
        <div className="w-1/3 border-r border-gray-200 overflow-y-auto bg-gray-50">
          <div className="p-4 border-b border-gray-200 bg-white">
            <h3 className="font-semibold text-gray-900">Messaging</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {messages.map((message) => (
              <div
                key={message.id}
                onClick={() => handleMessageClick(message)}
                className={`p-4 cursor-pointer transition-colors ${
                  selectedMessage.id === message.id
                    ? 'bg-gray-100 border-l-4 border-primary-600'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img 
                      src={message.avatar} 
                      alt={message.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-gray-900 text-sm truncate">
                        {message.name}
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 truncate">
                      {message.preview}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Message Detail */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img 
                  src={selectedMessage.avatar} 
                  alt={selectedMessage.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedMessage.name}
                  </h3>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">{selectedMessage.connection}</span>
                </div>
                <p className="text-sm text-gray-600">{selectedMessage.title}</p>
              </div>
              <div className="text-sm text-gray-500">{selectedMessage.date}</div>
            </div>
          </div>
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {selectedMessage.fullMessage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

