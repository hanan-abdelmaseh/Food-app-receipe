import { Component, OnInit, TemplateRef } from '@angular/core';
import { SelectedFiltersModel } from 'src/app/Models/SelectedFiltersModel/selected-filters-Model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  filterBtnShown: boolean = false;
  title: string = 'Receipes';
  text: string = 'Our Receipes';
  Time: string[];
  Ingrediant: string[] | null = null;
  Allergies: string[];
  Cuisines: string[];
  Nutritions: string[];

  selectedFilters: SelectedFiltersModel = {
    recipeName: '',
    allergies: 'Dont Have Allergies',
    cuisines: 'All Cuisines',
    ingrediant: '',
    nutritions: 'All Nutritions',
    time: 'Any',
  };
  constructor() {
    this.Time = ['5', '10', '15', '20', '30', '60', '90', '120'];
    this.Allergies = ['Egg-Free', 'Lactous-Free'];
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
      'Low Fat',
      'Low Calories',
      'High Fiber',
      'Low Carb',
      'Low Sodium',
      'Low Sugar',
    ];
  }

  ngOnInit(): void {}
  hideSearchButton() {
    this.filterBtnShown = !this.filterBtnShown;
  }
  printfn() {
    let selectedFilters: SelectedFiltersModel = {};
    if (this.selectedFilters.recipeName != '') {
      selectedFilters.recipeName = this.selectedFilters.recipeName;
    }
    if (this.selectedFilters.ingrediant != '') {
      selectedFilters.ingrediant = this.selectedFilters.ingrediant;
    }
    if (this.selectedFilters.allergies != 'Dont Have Allergies') {
      selectedFilters.allergies = this.selectedFilters.allergies;
    }
    if (this.selectedFilters.cuisines != 'All Cuisines') {
      selectedFilters.cuisines = this.selectedFilters.cuisines;
    }
    if (this.selectedFilters.nutritions != 'All Nutritions') {
      selectedFilters.nutritions = this.selectedFilters.nutritions;
    }
    if (this.selectedFilters.time != 'Any') {
      selectedFilters.time = this.selectedFilters.time;
    }
    console.log(selectedFilters);
  }
}
