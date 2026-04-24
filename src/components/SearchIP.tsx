import React from "react";
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

const Filterdata = [
    {
        id: 1, title: "React"
    },
    {
        id:2, title: "JavaScript"
    },
    {
        id:2, title: "TypeScript"
    },
    {
        id:2, title: "Node JS"
    }
];

const SearchInput = () => {

    const[search, setSearch] = useState("");

    const filterdata = () => {
        item.title.toLowerCase().includes(search.toLowerCase())
    }

    return(
        <div className="max-w-md mx-auto relative">
             {/* Icon */}
              <Search className="absolute left-3 top-3 text-gray-400" />
              {/* input */}
              <input
                type="text"
                placeholder="search..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="mt-6 space-y-3">
  {filterdata.length > 0 ? (
    filterdata.map(item => (
      <div
        key={item.id}
        className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
      >
        {item.title}
      </div>
    ))
  ) : (
    <p className="text-gray-500 text-center">No results found 😔</p>
  )}
</div>
        </div>
    )
}

export default SearchInput;