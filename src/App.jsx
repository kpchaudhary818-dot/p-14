
import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetail";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setStudent({
      name: name,
      email: email,
      course: course,
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-lg rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <h1 className="mb-2 text-center text-3xl font-bold text-indigo-700">
          Student Registration
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Fill in your details to register
        </p>

        <StudentForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          course={course}
          setCourse={setCourse}
          onSubmit={handleSubmit}
        />

        <StudentDetails student={student} />
      </div>
    </div>
  );
}

export default App;
