import { useSuspenseQuery } from "@tanstack/react-query";
import type { TAlbum } from "./Album";
import Album from "./Album";
import Loaders from "../constants/Loaders";
import Error from "./Error";


const AlbumList = ({ userId }: { userId: number }) => {
    const fetchAlbums = async (userId: number): Promise<TAlbum[]> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${userId}/albums`);
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
                    <Album key={album.id} album={album} />
                ))
            }

        </div>
    );
}

export default AlbumList;
