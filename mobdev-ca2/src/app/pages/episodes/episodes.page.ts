/*
//the original
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'; //to see episodes
import { ApiService } from '../../services/api.service'; //imported Api service that we created earlier
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
    //declare episodes value observable 
  episodes: Observable<any>;
        //inclued inside the constructor the route/api service
  constructor(private router: Router, private api: ApiService) { }
  ngOnInit() {
    this.episodes = this.api.getEpisodes();
     // this.episodes.subscribe(data => {
     // console.log('my episodes: ',data);
  }
  //fuction to open the episode (see at .http open buttom)
  openDetails(episode) {
      let episodeId = episode.episode_id;  
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
    
    }
}