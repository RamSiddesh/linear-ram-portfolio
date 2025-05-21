
import React, { useEffect, useRef, useState } from 'react';
import { Command, Search, ExternalLink } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  sections: string[];
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, setIsOpen, sections }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  
  // Filter sections based on query
  const filteredSections = sections.filter(section => 
    section.toLowerCase().includes(query.toLowerCase())
  );
  
  // Reset selection when filtered results change
  useEffect(() => {
    if (filteredSections.length > 0 && selectedIndex >= filteredSections.length) {
      setSelectedIndex(0);
    }
  }, [filteredSections, selectedIndex]);
  
  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredSections.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredSections.length) % filteredSections.length);
        break;
      case 'Enter':
        if (filteredSections[selectedIndex]) {
          navigateToSection(filteredSections[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };
  
  const navigateToSection = (section: string) => {
    setIsOpen(false);
    window.location.href = `#${section}`;
  };
  
  // Set up click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const palette = document.getElementById('command-palette');
      if (palette && !palette.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);
  
  return (
    <>
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40" aria-hidden="true" />
      <div 
        id="command-palette"
        className="command-palette animate-fade-in"
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center px-4 py-3 border-b border-border">
          <Command className="w-4 h-4 mr-2 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands..."
            className="flex-1 bg-transparent focus:outline-none text-sm"
          />
          <kbd className="ml-1.5 text-[10px] py-0.5 px-1 rounded bg-muted text-muted-foreground font-mono">
            ESC
          </kbd>
        </div>
        <div className="max-h-72 overflow-y-auto p-2">
          {filteredSections.length > 0 ? (
            filteredSections.map((section, index) => (
              <div
                key={section}
                ref={el => (itemsRef.current[index] = el)}
                onClick={() => navigateToSection(section)}
                className={`px-3 py-2 rounded-md text-sm cursor-pointer flex justify-between items-center ${
                  index === selectedIndex ? 'bg-accent/10 text-accent' : 'hover:bg-secondary'
                }`}
              >
                <div className="flex items-center">
                  <Search className="w-3.5 h-3.5 mr-2.5 text-muted-foreground" />
                  <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
            ))
          ) : (
            <div className="px-3 py-6 text-center text-muted-foreground">
              No results found.
            </div>
          )}
        </div>
        <div className="px-3 py-2.5 text-xs text-muted-foreground border-t border-border">
          <span>Navigate with ↑↓, select with Enter</span>
        </div>
      </div>
    </>
  );
};

export default CommandPalette;
