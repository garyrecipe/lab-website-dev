import { Navbar } from './Navbar';
import backgroundImage from '../assets/background.png';

const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen w-screen relative bg-slate-50">
      {/* 背景圖片 */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />

      {/* 漸層覆蓋 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/70 via-white/60 to-transparent" />

      {/* 導覽列和內容 */}
      <div className="relative z-10">
        {/* 固定導覽列 */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        {/* 主要內容區域，加上上方間距以避免被導覽列遮擋 */}
        <main className="pt-16">
        {/* 標題橫幅 */}
        {title && (<div className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg mb-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-center text-white">
                {title}
            </h1>
            </div>
        </div>)}
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 