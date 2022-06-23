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
    space: 'snsi67m36dp1',
    accessToken: '4PhQ6jlWzFnnGKBLTSfrw9nJDgaTuc_7lraVXyGPkAY'
    //space: environment.spaceId,
    //accessToken: environment.accessToken
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
