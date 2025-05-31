/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React from 'react';

interface Avatar {
  id: string;
  name: string;
  src: string;
  alt?: string;
}

interface OverlappingAvatarsProps {
  avatars: Avatar[];
  maxVisible?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const OverlappingAvatars: React.FC<OverlappingAvatarsProps> = ({
  avatars,
  maxVisible = 4,
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg'
  };

  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = Math.max(0, avatars.length - maxVisible);

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex -space-x-2">
        {visibleAvatars.map((avatar, index) => (
          <div
            key={avatar.id}
            className={`
              ${sizeClasses[size]} 
              rounded-full 
              border-2 
              border-white 
              bg-gray-200 
              overflow-hidden 
              relative 
              hover:z-10 
              hover:scale-110 
              transition-all 
              duration-200 
              cursor-pointer
              shadow-md
              
            `}
            style={{ zIndex: visibleAvatars.length - index }}
            title={avatar.name}
          >
            <img
              src={avatar.src}
              alt={avatar.alt || avatar.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                      ${avatar.name.charAt(0).toUpperCase()}
                    </div>
                  `;
                }
              }}
            />
          </div>
        ))}
        
        {remainingCount > 0 && (
          <div
            className={`
              ${sizeClasses[size]} 
              rounded-full 
              border-2 
              border-white 
              bg-gray-600 
              flex 
              items-center 
              justify-center 
              text-white 
              font-semibold 
              shadow-md
              hover:bg-gray-700
              transition-colors
              duration-200
              cursor-pointer
            `}
            title={`+${remainingCount} more`}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default OverlappingAvatars;

// Example usage component
// const AvatarDemo: React.FC = () => {
//   const sampleAvatars: Avatar[] = [
//     {
//       id: '1',
//       name: 'Alice Johnson',
//       src: 'https://images.unsplash.com/photo-1494790108755-69f432de2e55?w=150&h=150&fit=crop&crop=face'
//     },
//     {
//       id: '2',
//       name: 'Bob Smith',
//       src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
//     },
//     {
//       id: '3',
//       name: 'Carol Davis',
//       src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
//     },
//     {
//       id: '4',
//       name: 'David Wilson',
//       src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
//     },
//     {
//       id: '5',
//       name: 'Emma Brown',
//       src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
//     },
//     {
//       id: '6',
//       name: 'Frank Miller',
//       src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
//     }
//   ];

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="max-w-4xl mx-auto space-y-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">
//           Overlapping Avatars Component
//         </h1>
        
//         <div className="space-y-6">
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">
//               Different Sizes
//             </h2>
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <span className="w-20 text-sm text-gray-600">Small:</span>
//                 <OverlappingAvatars avatars={sampleAvatars} size="sm" />
//               </div>
//               <div className="flex items-center gap-4">
//                 <span className="w-20 text-sm text-gray-600">Medium:</span>
//                 <OverlappingAvatars avatars={sampleAvatars} size="md" />
//               </div>
//               <div className="flex items-center gap-4">
//                 <span className="w-20 text-sm text-gray-600">Large:</span>
//                 <OverlappingAvatars avatars={sampleAvatars} size="lg" />
//               </div>
//               <div className="flex items-center gap-4">
//                 <span className="w-20 text-sm text-gray-600">Extra Large:</span>
//                 <OverlappingAvatars avatars={sampleAvatars} size="xl" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">
//               Different Max Visible Counts
//             </h2>
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <span className="w-32 text-sm text-gray-600">Max 2 visible:</span>
//                 <OverlappingAvatars avatars={sampleAvatars} maxVisible={2} />
//               </div>
//               <div className="flex items-center gap-4">
//                 <span className="w-32 text-sm text-gray-600">Max 3 visible:</span>
//                 <OverlappingAvatars avatars={sampleAvatars} maxVisible={3} />
//               </div>
//               <div className="flex items-center gap-4">
//                 <span className="w-32 text-sm text-gray-600">Max 5 visible:</span>
//                 <OverlappingAvatars avatars={sampleAvatars} maxVisible={5} />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">
//               Team Members
//             </h2>
//             <div className="flex items-center gap-3">
//               <OverlappingAvatars 
//                 avatars={sampleAvatars} 
//                 size="lg" 
//                 maxVisible={4}
//               />
//               <span className="text-gray-600 ml-2">
//                 {sampleAvatars.length} team members
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvatarDemo;