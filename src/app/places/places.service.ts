import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://leadingestates.com/wp-content/uploads/2015/11/184-10-manhattan-01.jpg',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris',
      'https://www.iata.org/contentassets/4b8ec35d55dd4596a1ee21a75aaab835/paris-330x200.jpg?w=330&h=200&mode=crop&scale=both&v=20190829085556',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://images.fineartamerica.com/images-medium-large-5/foggy-palace-5-sfphotostore-.jpg',
      99.99
    )
  ];

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    // eslint-disable-next-line no-underscore-dangle
    return {...this._places.find(p => p.id === id)};
  }

}
