import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipes } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipes[] = [];
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.recipes = this.recipeService.getAllRecipes();
  }

}
