import { useSuspenseQuery } from "@tanstack/react-query";
import type { TPhotos } from "./Photos";
import Photos from "./Photos";
import Error from "./Error";
import Loaders from "../constants/Loaders";

const PhotosList = ({ albumId }: { albumId: number }) => {
    const fetchPhotos = async (albumId: number): Promise<TPhotos[]> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
        return response.json();
    }

    const { data: photos, error, isLoading } = useSuspenseQuery<TPhotos[], Error>({
        queryKey: ['photos', albumId],
        queryFn: () => fetchPhotos(albumId),
    });
    return (
        <div className="grid gap-4 p-7 bg-gray-300">
            {
                error && <Error error={error} />
            }{
                isLoading ? <Loaders /> : photos?.map(photo => (
                    <Photos key={photo.id} photo={photo} />
                ))}

        </div>
    );
}

export default PhotosList;
