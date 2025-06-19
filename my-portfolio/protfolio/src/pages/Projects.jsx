export default function Projects() {
  return (
    <section className="px-8 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold">Country Flag App</h3>
          <p className="text-gray-600 mt-2">A React + REST API project to browse flags and country details.</p>
          <a href="#" className="text-blue-500 mt-3 inline-block hover:underline">View Demo</a>
        </div>
      </div>
    </section>
  );
}
