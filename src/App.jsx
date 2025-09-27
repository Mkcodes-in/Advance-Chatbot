import './App.css';
import ChatSection from './component/ChatSection';
import Header from './component/Header';
import InputField from './component/InputField';
import UseChat from './hooks/UseChat';
import { UseTheme } from './hooks/UseTheme';

function App() {
  const { theme } = UseTheme();
  const { state } = UseChat();

  const isEmpty = state?.messages.length === 0;
  return (
    <div className={`max-7xl mx-auto h-screen flex flex-col transition-colors duration-300 ease-in-out justify-center ${theme ? "bg-[#212121]" : "bg-gray-50"}`}>
      {/* wrap max width for responsive */}
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className={`flex-grow flex ${isEmpty ? "items-center justify-center" : "flex-col"}`}>
        {isEmpty ? (
          <div className="w-full px-4">
            <div className="text-white font-sans text-center space-y-1">
              <h1 className="text-4xl font-semibold">Hello, John 👋</h1>
              <p className="text-lg mb-2">What can I help you with today?</p>
            </div>
            <InputField />
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto px-4 py-6 space-y-2">
              <ChatSection />
            </div>
            <InputField />
          </>
        )}
      </div>
    </div>
  );
}
export default App;
