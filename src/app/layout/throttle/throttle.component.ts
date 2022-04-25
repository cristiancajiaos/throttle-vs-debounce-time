import { Component, OnInit } from '@angular/core';
import { throttleTime, pluck, map, fromEvent } from 'rxjs';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.scss']
})
export class ThrottleComponent implements OnInit {

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

    const filterCities = (value) => cities.filter((city) => city.indexOf(value) !== -1);

    const input = document.querySelector('#inputThrottle');
    const suggestions = document.querySelector('#suggestionsThrottle');

    fromEvent(input, "keyup")
      .pipe(
        pluck("target", "value"),
        throttleTime(500),
        map(value => {
          console.log("value is ", value);
          return filterCities(value);
        }),
        map(filteredCities =>
          filteredCities.map(city => `<li>${city}</li>`).join('')
         )
       )
      .subscribe(html => (suggestions.innerHTML = html));
    }
}
