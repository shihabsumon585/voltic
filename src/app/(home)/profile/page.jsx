import React from 'react';

const Profile = () => {
    // ডামি ডাটা
    const user = {
        name: "Sabbir Ahmed",
        email: "sabbir@voltic.com",
        role: "Premium Member",
        address: "Dhaka, Bangladesh"
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md rounded-lg shadow-md p-8">

                {/* প্রোফাইল ইমেজ বা আইকন */}
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-3xl font-bold text-blue-600">
                            {user.name.charAt(0)}
                        </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
                    <p className="text-blue-500 font-medium mb-6">{user.role}</p>
                </div>

                {/* ইনফরমেশন সেকশন */}
                <div className="space-y-4 border-t pt-6">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Email:</span>
                        <span className="text-gray-800 font-medium">{user.email}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Location:</span>
                        <span className="text-gray-800 font-medium">{user.address}</span>
                    </div>
                </div>

                {/* অ্যাকশন বাটন */}
                <div className="mt-8 space-y-3">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Edit Profile
                    </button>
                    <button className="w-full border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50 transition">
                        Logout
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Profile;