import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: environment._spaceId,
    accessToken: environment._accessToken
  });

  getAllEntries()
  {
    const promise = this.client.getEntries();
    return from(promise);
  }

  getEntryById(id: string)
  {
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
