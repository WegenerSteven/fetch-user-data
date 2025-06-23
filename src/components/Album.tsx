export interface TAlbum {
    userId: number;
    id: number;
    title: string;
}

const Album = ({ album, openPhotoModal }: { album: TAlbum, openPhotoModal: (album: TAlbum) => void }) => {
    return (
        <div key={album.id} className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
            <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-semibold">{album.title}</h4>
            </div>
            <button 
                onClick={() => openPhotoModal(album)} 
                className="inline-flex items-center bg-blue-500 text-white px-2.5 py-1 rounded hover:bg-blue-600 transition-colors cursor-pointer"
            >
                View Photos
            </button>
        </div>
    );
}

export default Album;
