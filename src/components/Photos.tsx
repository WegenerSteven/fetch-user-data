export interface TPhotos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const Photos = ({ photo }: { photo: TPhotos }) => {
    // Replace via.placeholder.com URLs with picsum.photos URLs
    const getReliableImageUrl = (originalUrl: string, isLarge: boolean = false) => {
        if (originalUrl.includes('via.placeholder.com')) {
            const size = isLarge ? '600/400' : '150/150';
            return `https://picsum.photos/${size}?random=${photo.id}${isLarge ? '' : '-thumb'}`;
        }
        return originalUrl;
    };

    // Function to handle image loading errors
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        const isLarge = target.classList.contains('large-image');
        
        // If picsum also fails, use a solid color placeholder
        const color = photo.url.split('/').pop() || 'cccccc';
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = isLarge ? 600 : 150;
        
        canvas.width = size;
        canvas.height = isLarge ? 400 : size;
        
        if (ctx) {
            ctx.fillStyle = `#${color.slice(0, 6).padEnd(6, '0')}`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add text
            ctx.fillStyle = '#ffffff';
            ctx.font = `${Math.floor(size / 10)}px Arial`;
            ctx.textAlign = 'center';
            ctx.fillText('Photo', canvas.width / 2, canvas.height / 2);
        }
        
        target.src = canvas.toDataURL();
    };

    return (
        <div key={photo.id} className="bg-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-gray-800 text-sm">{photo.title}</h3>
            </div>
            <div className="flex items-center justify-center mb-2 gap-2">
                <img 
                    src={getReliableImageUrl(photo.url, true)} 
                    alt={photo.title} 
                    className="w-24 h-24 rounded-md object-cover large-image" 
                    onError={handleImageError}
                />
                <img 
                    src={getReliableImageUrl(photo.thumbnailUrl)} 
                    alt={photo.title} 
                    className="w-12 h-12 rounded-md" 
                    onError={handleImageError}
                />
            </div>
        </div>
    );
}

export default Photos;


