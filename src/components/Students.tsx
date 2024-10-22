import React, { useState } from 'react';
import { UserPlus, Edit, Trash2 } from 'lucide-react';
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Students: React.FC = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', grade: '10th' },
    { id: 2, name: 'Jane Smith', grade: '11th' },
    { id: 3, name: 'Bob Johnson', grade: '9th' },
  ]);

  const [newStudent, setNewStudent] = useState({ name: '', grade: '' });

  const addStudent = () => {
    if (newStudent.name && newStudent.grade) {
      setStudents([...students, { id: students.length + 1, ...newStudent }]);
      setNewStudent({ name: '', grade: '' });
    }
  };

  const deleteStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <div className="mb-4 flex space-x-2">
        <Input
          placeholder="Student Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <Input
          placeholder="Grade"
          value={newStudent.grade}
          onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
        />
        <Button onClick={addStudent}>
          <UserPlus className="h-4 w-4 mr-2" />
          Add Student
        </Button>
      </div>
      <div className="space-y-4">
        {students.map(student => (
          <div key={student.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div>
              <span className="font-semibold">{student.name}</span>
              <span className="ml-2 text-gray-500">{student.grade}</span>
            </div>
            <div>
              <Button variant="outline" size="sm" className="mr-2">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="destructive" size="sm" onClick={() => deleteStudent(student.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;