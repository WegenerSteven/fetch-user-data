import type { TAlbum } from "./Album";
import PhotosList from "./PhotosList";

const AlbumModal = ({album, closePhotoModal}: {album: TAlbum, closePhotoModal: () => void}) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">{album.title}</h2>
            <PhotosList albumId={album.id} />
            <button onClick={closePhotoModal} className="mt-4 inline-flex items-center bg-red-500 text-white px-2.5 py-1 rounded hover:bg-red-600 transition-colors cursor-pointer">
                Close
            </button>
        </div>
    );
}

export default AlbumModal;
