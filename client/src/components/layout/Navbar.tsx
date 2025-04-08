import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 bg-white/90 backdrop-blur-sm border-b border-border sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-primary font-bold text-xl"
        >
          <Shield className="h-6 w-6" />
          <span>SecuritySentinel</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-foreground hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            to="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/dashboard">
            <Button variant="outline" className="hidden sm:inline-flex">
              Dashboard
            </Button>
          </Link>
          <Link to="/admin">
            <Button>Admin Panel</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
