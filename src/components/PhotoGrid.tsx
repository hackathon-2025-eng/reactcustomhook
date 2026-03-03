import useFetch from "@/hooks/useFetch";

interface Product {
  id: number;
  title: string;
  images: string[];
}

const PhotoGrid = () => {
  const { data, loading, error } = useFetch<Product[]>(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <p className="text-[#ccc] text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <p className="text-[#ccc] text-lg">Error : {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] p-6">
      <h1 className="text-center text-3xl font-bold text-white mb-6">Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {data?.map((product) => (
          <div
            key={product.id}
            className="border border-[#444] p-4 flex flex-col items-center"
          >
            <img
              src={product.images?.[0]?.replace(/[\[\]"]/g, "") || "https://via.placeholder.com/600"}
              alt={product.title}
              className="w-48 h-48 object-cover mb-3"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/600";
              }}
            />
            <p className="text-[#ccc] text-sm text-center truncate w-full">
              {product.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
