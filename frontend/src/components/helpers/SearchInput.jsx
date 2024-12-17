import { Search } from "@mui/icons-material";

export default function SearchInput({ defaultValue, onChange }) {
    return (
        <div className="relative">
            <input
                type="text"
                className="w-full border-cyan-700 text-white bg-gray-800 rounded-sm py-2 pl-4 pr-10 text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Search ..."
                defaultValue={defaultValue}
                onChange={(e) => onChange(e.target.value)}
            />
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                <Search className="text-gray-500" />
            </div>
        </div>
    );
}
