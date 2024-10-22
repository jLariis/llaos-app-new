import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Fish } from 'lucide-react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
    // Add your login logic here
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <Card className="w-[350px] border-none shadow-none">
          <CardHeader className="flex items-center justify-center">
            <div className="bg-orange-300 p-3 rounded-lg">
              <Fish className="h-12 w-12 text-orange-600" />
            </div>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  placeholder="Enter your username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-2">
              <Button className="w-full bg-orange-400 hover:bg-orange-500" type="submit">
                Iniciar
              </Button>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                ¿Olvidó su contraseña?
              </a>
            </CardFooter>
          </form>
        </Card>
      </div>

      {/* Right side - Background image */}
      <div 
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{backgroundImage: 'url("https://images.unsplash.com/photo-1596627118111-5b6c7890bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'}}
      >
        <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            Empresa Socialmente Responsable
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;