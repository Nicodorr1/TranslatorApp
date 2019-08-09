import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the TranslationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TranslationProvider {
  constructor(public http: HttpClient) {
    console.log("Hello TranslationProvider Provider");
  }

  // get translation
  public getTranslation(userInput: string): Observable<any> {
    let url =
      "https://api.mymemory.translated.net/get?q=" +
      userInput +
      "&langpair=cs|en";
    return this.http.get(url);
  }

  // get translation from EN to CZ
  public getTranslationTo(userInput2: string): Observable<any> {
    let url =
      "https://api.mymemory.translated.net/get?q=" +
      userInput2 +
      "&langpair=en|cs";
    return this.http.get(url);
  }
}
