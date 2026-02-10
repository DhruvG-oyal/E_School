import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast from "react-hot-toast";
const SearchInput = () => {
    const [search, setSearch] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error("Search term must be at least 3 characters long");
        }
        const foundConversation = findConversation(search);

        if (foundConversation) {
            setSelectedConversation(foundConversation);
            setSearch("");
        } else {
            toast.error("No such user found!");
        }
    };
    const findConversation = (searchTerm) => {
        const lowerCaseSearch = searchTerm.toLowerCase();

        return conversations.find((c) => (
            c.fullName.toLowerCase().includes(lowerCaseSearch) ||
            c.email.toLowerCase().includes(lowerCaseSearch)
        ));
    };

    return (
        <form onSubmit={handleSubmit} className="flex  items-center gap-2">
            <input
                type="text"
                placeholder="Search..."
                className="input text-white h-[26px] placeholder-white border border-[#2c2e73] border-solid bg-[#030712] rounded-md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-circle bg-[#030712] border border-solid border-[#2c2e73] text-white">
                <IoSearchSharp className="w-5 h-5 outline-none" />
            </button>
        </form>
    );
};

export default SearchInput;
