export interface TUsers {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

const Users = ({ user, openModal }: { user: TUsers; openModal: (user: TUsers) => void }) => {
    return (
        <article
            key={user.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
            <div className="p-3">
                <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"> user {user.name.charAt(0)} </span>
                    <button onClick={() => openModal(user)} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200 cursor-pointer">
                        View Album
                    </button>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">{user.name}</h2>
                <p className="text-blue-900">{user.email}</p>
                <p className="text-gray-600">{user.phone}</p>
                <p className="text-gray-600">{user.website}</p>
                <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                </div>
                <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-800">Company</h3>
                    <p className="text-gray-600">{user.company.name}</p>
                    <p className="text-gray-600">{user.company.catchPhrase}</p>
                    <p className="text-gray-600">{user.company.bs}</p>
                </div>
            </div>

        </article>
    );
}

export default Users;
