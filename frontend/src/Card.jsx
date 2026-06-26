import React from "react";

const Card = ({student}) => {
  return (
    <>
      <div
        key={student.id}
        className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 hover:scale-105 duration-300"
      >
        <img
          src={student.image}
          className="w-full h-56 object-cover"
          alt={student.name}
        />

        <div className="p-5 space-y-2">
          <h2 className="text-xl font-bold">{student.name}</h2>

          <p>
            <span className="font-semibold">Department:</span>{" "}
            {student.department}
          </p>

          <p>
            <span className="font-semibold">Age:</span> {student.age}
          </p>

          <p>
            <span className="font-semibold">Marks:</span> {student.marks}
          </p>

          <p>
            <span className="font-semibold">City:</span> {student.city}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
