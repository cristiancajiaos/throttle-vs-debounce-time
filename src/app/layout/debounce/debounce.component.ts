import { Component, OnInit } from '@angular/core';
import { debounce, tap } from 'rxjs';
import { fromEvent, debounceTime, pluck, map, filter } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const cities = [
      'rome',
      'madrid',
      'paris',
      'brussels',
      'eindhoven',
      'berlin',
      'copenhagen',
      'stockholm',
    ];

    const filterCities = (value) =>
      cities.filter((city) => city.indexOf(value) !== -1);

    const input = document.querySelector('input');
    const suggestions = document.querySelector('#suggestionsDebounce');

    fromEvent(input, 'keyup')
      .pipe(
        pluck('target', 'value'),
        debounceTime(500),
        map((value) => {
          console.log('value is ', value);
          return filterCities(value);
        }),
        map((filteredCities) =>
          filteredCities.map((city) => `<li>${city}</li>`).join('')
        )
      )
      .subscribe((html) => (suggestions.innerHTML = html));
  }
}
