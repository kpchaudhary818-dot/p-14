
function StudentForm({
  name,
  setName,
  email,
  setEmail,
  course,
  setCourse,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Student Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Select Course
        </label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        >
          <option value="">Choose a course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MCA">MCA</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Register Student
      </button>
    </form>
  );
}

export default StudentForm;
