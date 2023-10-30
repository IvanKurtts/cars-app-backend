import { Injectable } from '@nestjs/common';
import { allCars } from 'constants/cars';

@Injectable()
export class AppService {
  async getAllCars({
    limit,
    brand,
    model,
    color,
    sort,
  }: {
    limit: string;
    brand: string;
    model: string;
    color: string;
    sort: string;
  }) {
    console.log({
      limit,
      brand,
      model,
      color,
      sort,
    });
    let filteredCards = allCars;
    if (brand !== '') {
      filteredCards = filteredCards.filter((car) => car.make === brand);
    }
    if (model !== '') {
      filteredCards = filteredCards.filter((car) => car.model.includes(model));
    }
    if (color !== '') {
      filteredCards = filteredCards.filter((car) => car.color === color);
    }
    if (sort == 'default') {
      filteredCards = filteredCards.sort((a, b) =>
        a.make.localeCompare(b.make),
      );
    }
    if (sort == 'price: ascending') {
      filteredCards = filteredCards.sort((a, b) => a.price - b.price);
    }
    if (sort == 'price: descending') {
      filteredCards = filteredCards.sort((a, b) => b.price - a.price);
    }
    if (sort == 'year: ascending') {
      filteredCards = filteredCards.sort((a, b) => a.year - b.year);
    }
    if (sort == 'year: descending') {
      filteredCards = filteredCards.sort((a, b) => b.year - a.year);
    }

    return filteredCards.slice(0, +limit);
  }

  async getCar(id: string) {
    return allCars.find((car) => car.id === id);
  }
}
