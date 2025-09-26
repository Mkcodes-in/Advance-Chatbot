import './App.css';
import Header from './component/Header';
import InputField from './component/InputField';
import { UseTheme } from './hooks/UseTheme';

function App() {
  const { theme } = UseTheme();

  return (
    <div className={`max-7xl mx-auto h-screen flex flex-col transition-colors duration-300 ease-in-out justify-center ${theme ? "bg-[#212121]" : "bg-gray-50"}`}>

      {/* Header */}
      <Header />

      {/* Main chat + input layout */}
      <div className="flex flex-col flex-grow relative overflow-hidden">
        <div className="flex-grow overflow-y-auto px-4 py-6">
          
        </div>
        {/* Input field */}
        <InputField />
      </div>
    </div>
  );
}
export default App;
