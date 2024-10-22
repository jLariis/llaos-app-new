import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Attendance: React.FC = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', present: false },
    { id: 2, name: 'Jane Smith', present: false },
    { id: 3, name: 'Bob Johnson', present: false },
  ]);

  const toggleAttendance = (id: number) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, present: !student.present } : student
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <div className="space-y-4">
        {students.map(student => (
          <div key={student.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <span>{student.name}</span>
            <div>
              <Button
                onClick={() => toggleAttendance(student.id)}
                variant={student.present ? "default" : "outline"}
                size="sm"
                className="mr-2"
              >
                <Check className={`h-4 w-4 ${student.present ? 'text-white' : 'text-gray-400'}`} />
              </Button>
              <Button
                onClick={() => toggleAttendance(student.id)}
                variant={!student.present ? "default" : "outline"}
                size="sm"
              >
                <X className={`h-4 w-4 ${!student.present ? 'text-white' : 'text-gray-400'}`} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;