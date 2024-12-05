import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartsModule } from '@carbon/charts-angular';
import { Apollo, gql } from 'apollo-angular';
import bar_data from './carbon-charts/bar-data';
import bar_options from './carbon-charts/bar-options';
import choropleth_data from './carbon-charts/choropleth-data';
import choropleth_options from './carbon-charts/choropleth-options';
import combo_data from './carbon-charts/combo-data';
import combo_options from './carbon-charts/combo-options';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app2';

  bar_options = bar_options;
  bar_data = bar_data;
  choropleth_options = choropleth_options;
  choropleth_data = choropleth_data;
  combo_options = combo_options;
  combo_data = combo_data;

  rocketsData: { group: string, value: number }[] = [];
  rocketsOptions = {
    title: 'Rocket sizes',
    axes: {
      left: {
        title: 'Meters high',
        mapsTo: 'value'
      },
      bottom: {
        title: 'Rocket types',
        mapsTo: 'group',
        scaleType: 'labels'
      }
    },
    height: '400px',
    accessibility: {
      svgAriaLabel: 'Simple bar chart'
    }
  }

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`
        query Rockets {
          rockets {
            name
            type
            description
            height {
              meters
            }
          }
        }
      `
    })
    .valueChanges.subscribe((res: any) => {
      const rockets = res?.data?.rockets || [];
      this.rocketsData = rockets.map((rocket: any) => ({
        group: rocket.name,
        value: rocket.height?.meters || 0,
      }));
    });
  }
}
