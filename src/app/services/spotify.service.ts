import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  urlToken: 'https://spotify-get-token.herokuapp.com/spotify/';
  urlSpotify: 'https://api.spotify.com/v1/search';

  apiKey: '9bda0d21fb354278a6dcc1c6c6af5365';
  secretKey: 'adf54f55934b436ba9446643daeb0149';

  horaToken: number;
  Token: string;


  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getMusic(cancion: string) {
    if ( (this.horaToken - Date.now()) > 0) {
      const headers = new HttpHeaders({
        'Authorization': this.Token
      });

      return this.http.get(`https://api.spotify.com/v1/search?q=${cancion}&type=track&limit=10`, {headers});
    } else {
      this.getToken();
      this.getMusic(cancion);
    }

  }

  getToken() {
    this.http.get('https://spotify-get-token.herokuapp.com/spotify/9bda0d21fb354278a6dcc1c6c6af5365/adf54f55934b436ba9446643daeb0149')
          .subscribe( (data: any) => {
                        console.log(data);
                        this.horaToken = Date.now() + Number (data.expires_in * 1000);
                        this.Token = (data.token_type + ' ' + data.access_token);
                      });
  }
}
