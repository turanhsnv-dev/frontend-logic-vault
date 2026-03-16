"use client";

import { useState } from "react";
import { MOCK_USERS } from "@/mock-data/users";
import { useSearch } from "@/features/search-engine/hooks/useSearch"; 
import { useDebounce } from "@/hooks/useDebounce";
import { Search, MapPin, Award, Sparkles } from "lucide-react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  const { results, suggestion } = useSearch({
    data: MOCK_USERS,
    query: debouncedSearchTerm, 
    keys: ["name", "role", "metadata.city", "metadata.level"],
  });

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-[20px] font-sans selection:bg-indigo-500/30">
      <div className="w-full space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Algorithm Vault
          </h1>
        </div>
        
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-neutral-500 group-focus-within:text-indigo-400 transition-colors" />
          </div>
          <input
            type="text"
            value={searchTerm}
            placeholder="Search by name, role, or city... (e.g. Bkau)"
            className="w-full pl-11 pr-4 py-4 bg-neutral-900 border border-neutral-800 rounded-2xl 
                     text-neutral-100 placeholder:text-neutral-500
                     focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50
                     transition-all duration-300 shadow-sm shadow-indigo-500/5"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {suggestion && (
          <div className="flex items-center gap-2 px-2 py-1 animate-in fade-in slide-in-from-top-2 duration-300">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-neutral-400">Bunu mu demek istediniz?</span>
            <button 
              onClick={() => setSearchTerm(suggestion)}
              className="text-indigo-400 font-bold hover:text-indigo-300 hover:underline transition-all cursor-pointer"
            >
              {suggestion}
            </button>
          </div>
        )}

        <div className="flex items-center justify-between px-1">
          <p className="text-sm font-medium text-neutral-400">
            Found <span className="text-indigo-400 font-bold">{results.length}</span> results
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {results.map((user) => (
            <div 
              key={user.id} 
              className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800/60 
                       hover:border-neutral-700 hover:bg-neutral-800/80 transition-all duration-300
                       flex flex-col gap-3 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-neutral-100 group-hover:text-indigo-300 transition-colors">
                    {user.name}
                  </h3>
                  <p className="text-sm font-medium text-indigo-400/90">{user.role}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-xs font-medium text-neutral-300">
                  <MapPin className="h-3.5 w-3.5 text-neutral-500" />
                  {user.metadata.city}
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-xs font-medium text-neutral-300">
                  <Award className="h-3.5 w-3.5 text-yellow-500/70" />
                  {user.metadata.level}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {results.length === 0 && !suggestion && searchTerm.length > 0 && (
          <div className="text-center py-20 px-6 rounded-2xl border border-dashed border-neutral-800">
            <p className="text-neutral-500 text-lg">No results found for "{searchTerm}"</p>
            <p className="text-neutral-600 text-sm mt-2">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </main>
  );
}