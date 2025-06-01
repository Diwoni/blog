import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[64px] bg-white/80 shadow z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-full">
        <Link to="/" className="text-xl font-bold">
          Tripal
        </Link>
        <nav className="h-full py-2 flex gap-6 text-sm font-medium">
          <div className="h-full px-1 flex items-center border border-transparent rounded-lg hover:bg-gray-200 hover:font-bold">
            <Link to="/about">함께 여행해요</Link>
          </div>
          <div className="h-full px-1 flex items-center border border-transparent rounded-lg hover:bg-gray-200 hover:font-bold">
            <Link to="/careers">AI와 계획을 세워봐요</Link>
          </div>
          <div className="h-full px-1 flex items-center border border-transparent rounded-lg hover:bg-gray-200 hover:font-bold">
            <Link to="/support">여행을 기록해보아요</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
