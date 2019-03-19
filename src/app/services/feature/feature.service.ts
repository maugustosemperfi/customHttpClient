import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httt-serivce.decorator';

@Injectable()
@HttpService('custom-controller')
export class FeatureService {
  [x: string]: any;

  constructor(private httpClient: HttpClient) {}

  getSomething() {
    this.getHttpClient()
        .get('dsa')
        .subscribe()
  }
}