export interface TAlbum {
    userId: number;
    id: number;
    title: string;
}

const Album = ({ album }: { album: TAlbum }) => {
    return (
        <div key={album.id} className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
            <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-semibold">{album.title}</h4>
            </div>
        </div>
    );
}

export default Album;
