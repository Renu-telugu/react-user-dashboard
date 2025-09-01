export default function SortSelect({ value, onChange }) {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Sort by:
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field py-1 px-2 text-sm"
      >
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
      </select>
    </div>
  );
}
