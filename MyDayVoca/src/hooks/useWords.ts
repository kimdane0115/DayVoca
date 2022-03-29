import { useSelector } from "react-redux";

export default function useWords() {
    return useSelector((state) => state.words);
}