import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecipeService } from 'src/app/recipe.service';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {
  recipe: Recipes

  constructor(private recipeService: RecipeService,private activatedRoute: ActivatedRoute, private route: Router,private alert: AlertController ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        console.log('not found')
        return;
      }

      const recipeId = paramMap.get('recipeId');
      this.recipe = this.recipeService.getRecipe(recipeId);
    })
  }

  async onDelete(){
    const alert = await this.alert.create({
      header: 'Are you sure?',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.deleteRecipe(this.recipe.id);
            this.route.navigate(['./recipes']);
          }
        }
      ]
    })
    alert.present();
  }

}
