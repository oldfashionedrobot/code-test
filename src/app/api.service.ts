import { Injectable } from '@angular/core';

export interface RouteStop {
  address: {
    street1: string,
    street2: string,
    city: string,
    state: string,
    zip: string
  },
  expectedAt: number,
  comments: string[]
}

export interface RouteData {
  loading: RouteStop[],
  unloading: RouteStop[]
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly MOCK_DATA: RouteData = {
    "loading": [
      {
        "address": {
          "street1": "6375 Bren Mar Dr",
          "street2": "",
          "city": "Alexandria",
          "state": "VA",
          "zip": "22312"
        },
        "expectedAt": 1662382800,
        "comments": ["This is a comment"]
      },
      {
        "address": {
          "street1": "6025 Farrington Ave",
          "street2": "Unit B",
          "city": "Alexandria",
          "state": "VA",
          "zip": "22304"
        },
        "expectedAt": 1662386400,
        "comments": []
      }
    ],
    "unloading": [
      {
        "address": {
          "street1": "5824 Rising Sun Ave",
          "street2": "",
          "city": "Philadelphia",
          "state": "PA",
          "zip": "19120"
        },
        "expectedAt": 1662408000,
        "comments": []
      },
      {
        "address": {
          "street1": "2417 Welsh Rd",
          "street2": "",
          "city": "Philadelphia",
          "state": "PA",
          "zip": "19114"
        },
        "expectedAt": 1662411600,
        "comments": []
      },
      {
        "address": {
          "street1": "630 Main St",
          "street2": "",
          "city": "Hackensack",
          "state": "NJ",
          "zip": "07601"
        },
        "expectedAt": 1662413400,
        "comments": []
      },
      {
        "address": {
          "street1": "400 Huyler St",
          "street2": "",
          "city": "South Hackensack",
          "state": "NJ",
          "zip": "07606"
        },
        "expectedAt": 1662415200,
        "comments": []
      },
      {
        "address": {
          "street1": "665 American Legion Dr",
          "street2": "",
          "city": "Teaneck",
          "state": "NJ",
          "zip": "07666"
        },
        "expectedAt": 1662418800,
        "comments": []
      }
    ]
  }
  constructor() { }

  getRoutes(): Promise<RouteData> {
    // Mock API request
    return new Promise((resolve) => {
      resolve(this.MOCK_DATA);
    });
  }
}
