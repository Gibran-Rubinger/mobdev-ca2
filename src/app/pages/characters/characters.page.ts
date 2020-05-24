import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})

export class CharactersPage implements OnInit {

    characters: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }
  
  ngOnInit() {
      this.characters = this.api.getCharacters();
      this.characters.subscribe(data => {
         console.log('my characters: ',data);
     })
  }
  openDetails(character) {
      let characterId = character.char_id;  
    this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    console.log('my charactersDetails :' ,characterId);
    }

loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();

            if (this.api.getQuote.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
}