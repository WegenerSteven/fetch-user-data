import type { TUsers } from "./Users";
import AlbumList from "./AlbumList";

const UserModal = ({ user, closeModal }: { user: TUsers; closeModal: () => void }) => {
    return (
        <div className="fixed inset-0 flex items-center bg-gray-900 bg-opacity-60 justify-center z-50">
            <div className="bg-white rounded-lg p-6 overflow-y-auto max-h-900 max-w-full">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg font-semibold mb-4">{user.name}</h2>
                    <button onClick={closeModal} className="inline-flex items-center bg-blue-500 text-white px-2.5 py-1 rounded mt-4 hover:bg-blue-600 transition-colors cursor-pointer">
                        Close
                    </button>
                </div>
                <p className="text-gray-700 mb-4">{user.email}</p>
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Albums</h3>
                </div>
                <div className="max-h-90 overflow-y-auto">
                    <AlbumList userId={user.id} />
                </div>


            </div>
            {/* albums list */}

        </div>
    );
}

export default UserModal;
