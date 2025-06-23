import type { TUsers } from "./Users";
import AlbumList from "./AlbumList";

const UserModal = ({ user, closeModal }: { user: TUsers; closeModal: () => void }) => {
    return (
        <div className="fixed inset-0 flex items-center bg-gray-900 bg-opacity-60 justify-center z-50">
            <div className="bg-white rounded-lg p-6 overflow-y-auto max-h-[80vh] w-full max-w-md">

                <h2 className="text-lg font-semibold mb-4">{user.name}</h2>
                <p className="text-gray-700 mb-4">{user.email}</p>
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Albums</h3>
                </div>
                <div className="max-h-60 overflow-y-auto">
                    <AlbumList userId={user.id} />
                </div>
                <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Close
                </button>

            </div>
            {/* albums list */}

        </div>
    );
}

export default UserModal;
