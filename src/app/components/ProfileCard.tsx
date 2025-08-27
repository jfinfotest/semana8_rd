// components/ProfileCard.jsx
import React from 'react';

interface ProfileCardProps {
  user: {
    id: string;
    name: string;
    username: string;
    profilePicture: string;
    email: string;
    phone: string;    
    birthdate: string;
    isActive: boolean;
  };
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white flex flex-col items-center p-6">
      <img
        className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 mb-4"
        src={user.profilePicture}
        alt={`Profile picture of ${user.name}`}
      />
      <div className="text-center">
        <div className="font-bold text-xl text-gray-800 mb-1">
          {user.name}
        </div>
        <div className="text-gray-500 text-sm mb-4">
          @{user.username}
        </div>
        <p className="text-gray-700 text-base mb-1">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Teléfono:</span> {user.phone}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;