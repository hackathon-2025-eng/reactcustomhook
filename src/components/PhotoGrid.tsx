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
        {data?.map((product, index) => {
          const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#e67e22", "#34495e"];
          const descriptions = [
            "A beautiful product for everyday use.",
            "Crafted with care and precision.",
            "Designed to inspire creativity.",
            "Perfect for modern lifestyles.",
            "Built to last a lifetime.",
            "Elegance meets functionality.",
            "Your next favorite item awaits.",
            "Simple, sleek, and stunning.",
          ];
          const bgColor = colors[index % colors.length];
          const desc = descriptions[index % descriptions.length];
          return (
            <div
              key={product.id}
              className="border border-[#444] p-4 flex flex-col items-center"
            >
              <div
                className="w-48 h-48 mb-3 flex items-center justify-center rounded"
                style={{ backgroundColor: bgColor }}
              >
                <span className="text-white text-sm font-semibold">
                  600 x 600
                </span>
              </div>
              <p className="text-[#ccc] text-sm text-center w-full">
                {desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGrid;
