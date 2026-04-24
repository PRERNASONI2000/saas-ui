import { useEffect, useState } from 'react';

const UserList = () => {
  const [isLoading, setIsLoading] = useState(false); //Jab tak data aa raha hai, tab tak loading spinner dikhane ke liye.
  const [loadedUsers, setLoadedUsers] = useState<any[]>([]); //Jahan data store hoga.

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://saas-backend-tqzv.onrender.com/api/users');
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedUsers(responseData.users); // Backend se 'users' key mein array aa raha hai
      } catch (err: any) {
        console.error(err.message);
        alert("Users fetch karne mein error aaya!");
      }
      setIsLoading(false);
    };

    fetchUsers();
  }, []); // Empty array ka matlab hai ye sirf page load par ek baar chalega

  return (
    <div className="p-10 bg-gray-800 min-h-screen text-white border-t border-white/10">
      <h2 className="text-3xl font-bold mb-6">All Registered Users</h2>

      {isLoading && <div className="text-blue-500 text-xl animate-pulse">Loading Users...</div>}

      {!isLoading && loadedUsers.length === 0 && (
        <p className="text-gray-400">No users found in database.</p>
      )}

      <div className="grid gap-4">
        {!isLoading && loadedUsers.map((user) => (
          <div 
            key={user.id} 
            className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md"
          >
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;