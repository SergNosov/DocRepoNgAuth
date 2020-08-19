import {Injectable} from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.error('Error saving to localStorage', err);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      console.error('Error loading from localStorage', err);
      return null;
    }
  }

  clear(key: string): void {
    try {
      localStorage.clear();
    } catch (err) {
      console.error('Error clearing localStorage', err);
      return null;
    }
  }
}
