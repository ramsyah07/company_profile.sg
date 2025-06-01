export default function Language() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Select Your Language</h1>
      <select className="border p-2 rounded">
        <option value="en">English</option>
        <option value="id">Bahasa Indonesia</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
}

