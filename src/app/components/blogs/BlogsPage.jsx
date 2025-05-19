export default function BlogsPage() {
    return (
      <main className="max-w-5xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Discover Our Latest Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Dummy blog cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-4 border rounded shadow hover:shadow-lg">
              <img
                src={`https://via.placeholder.com/300x200?text=Blog+${i}`}
                alt="Blog Post"
                className="mb-4 w-full"
              />
              <h3 className="text-xl font-semibold">Blog Title {i}</h3>
              <p className="text-sm text-gray-600 mt-2">
                A short excerpt from the blog content goes here...
              </p>
            </div>
          ))}
        </div>
      </main>
    );
  }