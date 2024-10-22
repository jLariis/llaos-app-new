import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Grades: React.FC = () => {
  const [grades, setGrades] = useState([
    { id: 1, name: 'John Doe', subject: 'Math', grade: '' },
    { id: 2, name: 'Jane Smith', subject: 'Science', grade: '' },
    { id: 3, name: 'Bob Johnson', subject: 'History', grade: '' },
  ]);

  const updateGrade = (id: number, grade: string) => {
    setGrades(grades.map(item =>
      item.id === id ? { ...item, grade } : item
    ));
  };

  const saveGrades = () => {
    console.log('Grades saved:', grades);
    // Here you would typically send the grades to a backend API
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Grades</h1>
      <div className="space-y-4">
        {grades.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
            <div>
              <span className="font-semibold">{item.name}</span>
              <span className="ml-2 text-gray-500">{item.subject}</span>
            </div>
            <Input
              type="text"
              placeholder="Grade"
              value={item.grade}
              onChange={(e) => updateGrade(item.id, e.target.value)}
              className="w-20"
            />
          </div>
        ))}
      </div>
      <Button onClick={saveGrades} className="mt-4">
        <Save className="h-4 w-4 mr-2" />
        Save Grades
      </Button>
    </div>
  );
};

export default Grades;