import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'current-weather',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../current-weather-tab/current-weather-tab.module').then(m => m.CurrentWeatherTabModule)
          }
        ]
      },
      {
        path: 'forecast',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../forecast-tab/forecast-tab.module').then(m => m.ForecastTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/current-weather',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/current-weather',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
