import { useState, useEffect } from 'react';

interface FilterState {
  searchQuery: string;
  selectedAlloyType: string;
  selectedCoating: string;
  diameterMin: number | null;
  diameterMax: number | null;
}

const STORAGE_KEY = 'productFilters';

export function useFilterState(categoryId: string) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlloyType, setSelectedAlloyType] = useState<string>('');
  const [selectedCoating, setSelectedCoating] = useState<string>('');
  const [diameterMin, setDiameterMin] = useState<number | null>(null);
  const [diameterMax, setDiameterMax] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load filters from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const filters = JSON.parse(stored);
        
        // Only restore filters if they're for the same category
        if (filters.categoryId === categoryId) {
          setSearchQuery(filters.searchQuery || '');
          setSelectedAlloyType(filters.selectedAlloyType || '');
          setSelectedCoating(filters.selectedCoating || '');
          setDiameterMin(filters.diameterMin ?? null);
          setDiameterMax(filters.diameterMax ?? null);
        }
      }
    } catch (error) {
      console.error('Failed to load filters from localStorage:', error);
    }
    setIsLoaded(true);
  }, [categoryId]);

  // Save filters to localStorage whenever they change
  useEffect(() => {
    if (!isLoaded) return;

    try {
      const filterState: FilterState & { categoryId: string } = {
        categoryId,
        searchQuery,
        selectedAlloyType,
        selectedCoating,
        diameterMin,
        diameterMax,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filterState));
    } catch (error) {
      console.error('Failed to save filters to localStorage:', error);
    }
  }, [categoryId, searchQuery, selectedAlloyType, selectedCoating, diameterMin, diameterMax, isLoaded]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedAlloyType('');
    setSelectedCoating('');
    setDiameterMin(null);
    setDiameterMax(null);
  };

  const clearStoredFilters = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear filters from localStorage:', error);
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedAlloyType,
    setSelectedAlloyType,
    selectedCoating,
    setSelectedCoating,
    diameterMin,
    setDiameterMin,
    diameterMax,
    setDiameterMax,
    resetFilters,
    clearStoredFilters,
    isLoaded,
  };
}
