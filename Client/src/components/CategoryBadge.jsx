export default function CategoryBadge({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="category-badge bg-white rounded-lg shadow p-4 text-center hover:bg-primary hover:text-white transition-colors group"
    >
      <Icon className="mx-auto h-8 w-8 text-primary group-hover:text-white transition-colors" />
      <span className="mt-2 block text-sm font-medium">{label}</span>
    </button>
  );
}
