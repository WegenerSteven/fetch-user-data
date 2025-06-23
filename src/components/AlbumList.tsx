import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { TAlbum } from "./Album";
import Album from "./Album";
import AlbumModal from "./AlbumModal";
import Loaders from "../constants/Loaders";
import Error from "./Error";


const AlbumList = ({ userId }: { userId: number }) => {
    const [selectedAlbum, setSelectedAlbum] = useState<TAlbum | null>(null);
    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

    const openPhotoModal = (album: TAlbum) => {
        setSelectedAlbum(album);
        setIsPhotoModalOpen(true);
    }

    const closePhotoModal = () => {        setIsPhotoModalOpen(false);
        setSelectedAlbum(null);
    }

    const fetchAlbums = async (userId: number): Promise<TAlbum[]> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        return response.json();
    }

    const { data: albums, isLoading, error } = useSuspenseQuery<TAlbum[], Error>({
        queryKey: ['albums', userId],
        queryFn: () => fetchAlbums(userId),
    });
    return (
        <div className="mt-2 pt-2 border-gray-100 flex flex-col gap-4 justify-end space-x-3">
            {
                error && <Error error={error} />
            }
            {
                isLoading ? <Loaders /> : albums?.map(album => (
                    <Album key={album.id} album={album} openPhotoModal={openPhotoModal} />
                ))
            }
            {isPhotoModalOpen && selectedAlbum && (
                <div className="fixed inset-0 flex items-center bg-gray-900 bg-opacity-60 justify-center z-50">
                    <div className="bg-white rounded-lg p-6 overflow-y-auto max-h-[90vh] max-w-[90vw]">
                        <AlbumModal album={selectedAlbum} closePhotoModal={closePhotoModal} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default AlbumList;
