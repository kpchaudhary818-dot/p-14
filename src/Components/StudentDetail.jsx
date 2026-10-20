
function StudentDetails({ student }) {
  if (!student) return null;

  return (
    <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">
      <h2 className="mb-4 text-xl font-bold text-green-800">
        Registration Successful!
      </h2>

      <p className="mb-2 text-gray-700">
        <strong>Name:</strong> {student.name}
      </p>

      <p className="mb-2 text-gray-700">
        <strong>Email:</strong> {student.email}
      </p>

      <p className="text-gray-700">
        <strong>Course:</strong> {student.course}
      </p>
    </div>
  );
}

export default StudentDetails;
