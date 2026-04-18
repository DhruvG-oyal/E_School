import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import LearningPaths from "../LearningPath";

const Cards = ({ searchTerm, buttonTag }) => {
  const [cardsData, setCardsData] = useState([]);
  const [searchTermTags, setSearchTermTags] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/cards`, {
          params: { searchTerm, buttonTag, page: currentPage, limit: itemsPerPage },
        });
        if (response.data?.cards) {
          setCardsData(response.data.cards);
          setTotalPages(Math.ceil(response.data.totalCount / itemsPerPage));
        } else {
          setCardsData([]);
        }
      } catch (err) {
        console.error("Error fetching cards", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, [searchTerm, buttonTag, currentPage]);

  useEffect(() => {
    if (buttonTag && !searchTerm) setSearchTermTags(buttonTag);
    else if (!buttonTag && searchTermTags) setSearchTermTags("");
  }, [buttonTag, searchTerm]);

  const getSortedFiltered = () => {
    let cards = cardsData.filter((card) => {
      if (searchTermTags) return card.tags.some((t) => t.toLowerCase().includes(searchTermTags.toLowerCase()));
      if (searchTerm) return card.title.toLowerCase().includes(searchTerm.toLowerCase());
      return true;
    });
    if (sortOption === "createdAt")
      cards = cards.slice().sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    return cards;
  };

  const filteredCards = getSortedFiltered();

  return (
    <div className="px-6 py-6">
      {/* filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* top tags */}
        <LearningPaths onSearchTagChange={setSearchTermTags} cards={cardsData} />

        <div className="flex items-center gap-2 ml-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Filter by tag…"
              value={searchTermTags}
              onChange={(e) => setSearchTermTags(e.target.value)}
              className="pl-7 pr-3 py-1.5 text-[12px] bg-[#0f172a] border border-[#1e2a45] text-slate-200 rounded-lg placeholder-slate-500 focus:outline-none focus:border-blue-600 w-36 transition"
            />
            <svg className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="text-[12px] bg-[#0f172a] border border-[#1e2a45] text-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-blue-600 cursor-pointer transition"
          >
            <option value="default">Default</option>
            <option value="createdAt">Newest</option>
          </select>
        </div>
      </div>

      {/* cards grid */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-[400px]">
            {filteredCards.length > 0 ? (
              filteredCards.map((card, i) => <Card key={i} card={card} />)
            ) : (
              <div className="col-span-2 flex flex-col items-center justify-center min-h-[300px] text-slate-500">
                <div className="text-4xl mb-3">🔍</div>
                <div className="text-[15px]">No courses match your filter.</div>
              </div>
            )}
          </div>

          {/* pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 text-[13px] rounded-lg border border-[#1e2a45] bg-[#0d1424] text-slate-200 hover:text-white hover:border-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-lg text-[13px] font-medium transition cursor-pointer ${
                    i + 1 === currentPage
                      ? 'bg-blue-600 text-white border border-blue-500'
                      : 'border border-[#1e2a45] bg-[#0d1424] text-slate-200 hover:border-blue-600 hover:text-white'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 text-[13px] rounded-lg border border-[#1e2a45] bg-[#0d1424] text-slate-200 hover:text-white hover:border-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cards;
