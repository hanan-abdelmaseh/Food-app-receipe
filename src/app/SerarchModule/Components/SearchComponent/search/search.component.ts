import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  FiltersModel,
  SelectedFiltersModel,
} from 'src/app/Models/SelectedFiltersModel/selected-filters-Model';
import { SearchService } from 'src/app/Services/SearchService/search.service';
import { MainReceipe } from 'src/app/viewModel/main-receipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  filterdList: MainReceipe[] = [];
  textShown: string =
    'Sorry There Are No Recipies Yet According To Your Search Options.';
  filterBtnShown: boolean = false;
  title: string = 'Receipes';
  text: string = 'Our Receipes';
  Time: string[];
  Ingrediant: string | null = null;
  Allergies: string[];
  Cuisines: string[];
  Nutritions: string[];
  recipeName: string = '';
  spinnerShown: boolean = false;
  pageNumber: number = 1;
  searchClicked: boolean = true;
  cryShown: boolean = false;
  selectedFilters: SelectedFiltersModel = {
    allergies: 'Dont Have Allergies',
    cuisines: 'All Cuisines',
    ingrediants: '',
    nutritions: 'All Nutritions',
    time: 'Any',
  };

  // selectedFilters: SelectedFiltersModel = { name: '', preferences: [] };
  constructor(private searchService: SearchService) {
    this.Time = [
      '< 15 Mins',
      '< 30 Mins',
      '< 60 Mins',
      '< 2 Hours',
      '< 4 Hours',
    ];
    this.Allergies = ['Egg Free', 'Lactous Free'];
    this.Cuisines = [
      'Southwest Asia (middle East)',
      'Asian',
      'European',
      'Southwestern U.S.',
      'Chinese',
      'Japanese',
      'Greek',
      'Indonesian',
      'African',
      'Moroccan',
      'South African',
      'Native American',
      'South American',
      'Caribbean',
      'Cuban',
      'Spanish',
      'Canadian',
      'Kid Friendly',
      'Turkish',
      'Hawaiian',
      'German',
    ];
    this.Nutritions = [
      'High Protein',
      'High Calories',
      'High Carbs',
      'Low Protein',
      'Low Cholesterol',
      'Very Low Carbs',
    ];
  }

  ngOnInit(): void {}
  hideSearchButton() {
    this.filterBtnShown = !this.filterBtnShown;
  }
  increaseCounter() {
    this.pageNumber++;
    if (this.searchClicked) {
      this.search();
    } else {
      this.filter();
    }
  }

  decreaseCounter() {
    this.pageNumber--;
    if (this.searchClicked) {
      this.search();
    } else {
      this.filter();
    }
  }
  search() {
    this.spinnerShown = true;

    this.searchClicked = true;
    this.searchService.search(this.recipeName, this.pageNumber).subscribe({
      next: (recipes) => {
        this.spinnerShown = false;

        this.filterdList = recipes;
      },
    });
  }
  filter() {
    this.spinnerShown = true;
    let filtersModel: FiltersModel = {
      name: '',
      preferences: [],
    };
    if (this.recipeName != '') {
      filtersModel.name = this.recipeName!;
    }
    if (this.selectedFilters.ingrediants != '') {
      filtersModel.preferences.push(this.selectedFilters.ingrediants!);
    }
    if (this.selectedFilters.allergies != 'Dont Have Allergies') {
      filtersModel.preferences.push(this.selectedFilters.allergies!);
    }
    if (this.selectedFilters.cuisines != 'All Cuisines') {
      filtersModel.preferences.push(this.selectedFilters.cuisines!);
    }
    if (this.selectedFilters.nutritions != 'All Nutritions') {
      filtersModel.preferences.push(this.selectedFilters.nutritions!);
    }
    if (this.selectedFilters.time != 'Any') {
      filtersModel.preferences.push(this.selectedFilters.time!);
    }
    this.searchService.filter(this.pageNumber, filtersModel).subscribe({
      next: (recipes) => {
        this.spinnerShown = false;
        this.filterdList = recipes;
      },
    });
  }
  searchAndFilter() {
    this.pageNumber = 1;
    if (
      this.selectedFilters.ingrediants == '' &&
      this.selectedFilters.allergies == 'Dont Have Allergies' &&
      this.selectedFilters.cuisines == 'All Cuisines' &&
      this.selectedFilters.nutritions == 'All Nutritions' &&
      this.selectedFilters.time == 'Any'
    ) {
      this.search();
    } else {
      this.filter();
    }
  }
}
