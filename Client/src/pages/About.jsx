export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Lost-Found Hub</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-4">
            Lost-Found Hub is a comprehensive platform designed to help students reconnect with their lost belongings.
            We understand the stress and inconvenience of losing important items on campus, and we're here to make the
            recovery process as smooth as possible.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to create a centralized, easy-to-use system that bridges the gap between those who have lost
            items and those who have found them. Through our secure platform, we facilitate connections and reunions,
            making campus life a little easier for everyone.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Easy item reporting with photo uploads</li>
            <li>Advanced search and filtering capabilities</li>
            <li>Secure messaging between finders and owners</li>
            <li>Real-time notifications for potential matches</li>
            <li>Category-based browsing for quick discovery</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
