import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { movieWords } from '../utils/movieWords';
import { Observable } from 'rxjs';

import { MediaResponse, MediaDetails } from '../models/media.model';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private http: HttpClient) {}

  getRandomWord() {
    const randomIndex = Math.floor(Math.random() * movieWords.length);
    return movieWords[randomIndex];
  }

  getRandomMedia(type: 'movie' | 'series'): Observable<MediaResponse> {
    const randomWord = this.getRandomWord();
    return this.http.get<MediaResponse>(
      `${environment.baseURL}?s=${randomWord}&type=${type}&apikey=${environment.apiKey}`
    );
  }

  getMediaDetails(id: string): Observable<MediaDetails> {
    return this.http.get<MediaDetails>(
      `${environment.baseURL}?i=${id}&apikey=${environment.apiKey}`
    );
  }

  getSearchResults(searchTerm: string): Observable<MediaResponse> {
    return this.http.get<MediaResponse>(
      `${environment.baseURL}?s=${searchTerm}&apikey=${environment.apiKey}`
    );
  }
}
