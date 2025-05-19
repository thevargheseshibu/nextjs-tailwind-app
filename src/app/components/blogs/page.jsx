export default function BlogsPage() {
    return (
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Discover Our Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border p-4 rounded shadow">
              <img
                src={`https://via.placeholder.com/300x200?text=Blog+${i}`}
                alt="Blog visual"
                className="w-full mb-3"
              />
              <h3 className="text-xl font-semibold">Blog Title {i}</h3>
              <p className="text-sm text-gray-600">
                Sample preview content of blog {i} goes here...
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  