import { useMemo } from 'react';
import { getLevenshteinDistance } from '../utils/levenshtein';

interface SearchOptions<T> {
  data: T[];
  query: string;
  keys: string[];
}

interface SearchResult<T> {
  results: T[];
  suggestion: string | null;
}

export const useSearch = <T,>({ data, query, keys }: SearchOptions<T>): SearchResult<T> => {
  return useMemo(() => {
    if (!query.trim()) return { results: data, suggestion: null };

    const lowerCaseQuery = query.toLowerCase().trim();
    const dictionary = new Set<string>();

    const exactMatches = data.filter((item) => {
      let isMatch = false;

      keys.forEach((key) => {
        const value = String(key.split('.').reduce((acc, curr) => (acc as any)?.[curr], item)).toLowerCase();
        
        value.split(' ').forEach(word => dictionary.add(word));

        if (value.includes(lowerCaseQuery)) {
          isMatch = true;
        }
      });

      return isMatch;
    });

    if (exactMatches.length > 0 || lowerCaseQuery.length < 3) {
      return { results: exactMatches, suggestion: null };
    }

    let closestWord = "";
    let minDistance = Infinity;

    dictionary.forEach((word) => {
      const distance = getLevenshteinDistance(lowerCaseQuery, word);
      if (distance < minDistance && distance <= 2) {
        minDistance = distance;
        closestWord = word;
      }
    });

    return {
      results: [],
      suggestion: closestWord ? closestWord.charAt(0).toUpperCase() + closestWord.slice(1) : null
    };
  }, [data, query, keys]);
};