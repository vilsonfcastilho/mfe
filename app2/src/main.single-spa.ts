import { APP_BASE_HREF } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { inject, NgZone } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavigationStart, provideRouter, Router } from '@angular/router';
import { InMemoryCache } from '@apollo/client/core';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { getSingleSpaExtraProviders, singleSpaAngular } from 'single-spa-angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return bootstrapApplication(AppComponent, {
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        getSingleSpaExtraProviders(),
        provideRouter(routes), provideHttpClient(), provideApollo(() => {
          const httpLink = inject(HttpLink);

          return {
            link: httpLink.create({
              uri: 'https://main--spacex-l4uc6p.apollographos.net/graphql',
            }),
            cache: new InMemoryCache(),
          };
        }),
      ],
    });
  },
  template: '<app-root />',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
