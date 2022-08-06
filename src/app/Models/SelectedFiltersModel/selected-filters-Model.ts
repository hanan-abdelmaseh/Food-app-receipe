export interface SelectedFiltersModel {
  recipeName?: string | null;
  ingrediants?: string | null;
  allergies?: string | null;
  cuisines?: string | null;
  nutritions?: string | null;
  time?: string | null;
}
export interface FiltersModel {
  name: string;
  preferences: string[];
}
