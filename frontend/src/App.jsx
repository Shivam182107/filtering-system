import { useMemo, useState } from "react";
import "./App.css"
import Card from "./Card";

const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 20,
    marks: 89,
    department: "Computer Science",
    city: "Delhi",
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: 2,
    name: "Priya Singh",
    age: 22,
    marks: 74,
    department: "Mechanical",
    city: "Mumbai",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 3,
    name: "Aman Verma",
    age: 19,
    marks: 95,
    department: "Computer Science",
    city: "Bangalore",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    id: 4,
    name: "Sneha Patel",
    age: 21,
    marks: 67,
    department: "Civil",
    city: "Ahmedabad",
    image: "https://i.pravatar.cc/300?img=9",
  },
  {
    id: 5,
    name: "Karan Mehta",
    age: 23,
    marks: 82,
    department: "Electrical",
    city: "Pune",
    image: "https://i.pravatar.cc/300?img=13",
  },
  {
    id: 6,
    name: "Anjali Das",
    age: 20,
    marks: 91,
    department: "Computer Science",
    city: "Kolkata",
    image: "https://i.pravatar.cc/300?img=20",
  },
  {
    id: 7,
    name: "Rohit Kumar",
    age: 24,
    marks: 58,
    department: "Mechanical",
    city: "Chennai",
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    id: 8,
    name: "Meera Joshi",
    age: 22,
    marks: 77,
    department: "Civil",
    city: "Jaipur",
    image: "https://i.pravatar.cc/300?img=32",
  },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [age, setAge] = useState("All");
  const [marks, setMarks] = useState("All");
  const [city, setCity] = useState("All");

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const searchMatch = student.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const deptMatch =
        department === "All" || student.department === department;

      const ageMatch =
        age === "All"
          ? true
          : age === "18-20"
          ? student.age >= 18 && student.age <= 20
          : age === "21-22"
          ? student.age >= 21 && student.age <= 22
          : student.age >= 23;

      const marksMatch =
        marks === "All"
          ? true
          : marks === "90+"
          ? student.marks >= 90
          : marks === "75-89"
          ? student.marks >= 75 && student.marks <= 89
          : student.marks < 75;

      const cityMatch = city === "All" || student.city === city;

      return (
        searchMatch &&
        deptMatch &&
        ageMatch &&
        marksMatch &&
        cityMatch
      );
    });
  }, [search, department, age, marks, city]);

  const clearFilters = () => {
    setSearch("");
    setDepartment("All");
    setAge("All");
    setMarks("All");
    setCity("All");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Filtering System
      </h1>

      <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4 mb-10">
        <input
          type="text"
          placeholder="Search Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 outline-none"
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="bg-zinc-900 p-3 rounded-lg"
        >
          <option>All</option>
          <option>Computer Science</option>
          <option>Mechanical</option>
          <option>Civil</option>
          <option>Electrical</option>
        </select>

        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="bg-zinc-900 p-3 rounded-lg"
        >
          <option>All</option>
          <option>18-20</option>
          <option>21-22</option>
          <option>23+</option>
        </select>

        <select
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          className="bg-zinc-900 p-3 rounded-lg"
        >
          <option>All</option>
          <option>90+</option>
          <option>75-89</option>
          <option>Below 75</option>
        </select>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-zinc-900 p-3 rounded-lg"
        >
          <option>All</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
          <option>Ahmedabad</option>
          <option>Pune</option>
          <option>Kolkata</option>
          <option>Chennai</option>
          <option>Jaipur</option>
        </select>

        <button
          onClick={clearFilters}
          className="bg-red-500 hover:bg-red-600 rounded-lg font-semibold"
        >
          Clear Filters
        </button>
      </div>

      <h2 className="text-xl mb-6">
        Showing {filteredStudents.length} Students
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {filteredStudents.length ? (
          filteredStudents.map((student) => (
          <Card student={student}/>
          ))
        ) : (
          <div className="col-span-full text-center text-2xl text-gray-400 py-20">
            No Student Found 😔
          </div>
        )}
      </div>
    </div>
  );
}