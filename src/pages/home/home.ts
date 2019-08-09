import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { TranslationProvider } from "../../providers/translation/translation";
import { TextToSpeech } from "@ionic-native/text-to-speech";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private userInput: string;
  private userInput2: string;
  public result: string;
  public result2: string;
  public matches: Array<any>;
  public matches2: Array<any>;

  constructor(
    public navCtrl: NavController,
    private translationProvider: TranslationProvider,
    private tts: TextToSpeech
  ) {}

  public btnTranslateClicked(userInput: string): void {
    //console.log(userInput);
    this.userInput = userInput;

    this.translationProvider.getTranslation(userInput).subscribe(response => {
      // API response event handler
      console.log(response);
      this.result = response.responseData.translatedText;
      this.matches = response.matches;

      // speak the result
      this.tts
        .speak(this.result)
        .then(() => console.log("Success"))
        .catch((reason: any) => console.log(reason));
    });
  }

  public btnCzClicked(userInput2: string): void {
    //console.log(userInput);
    this.userInput2 = userInput2;

    this.translationProvider
      .getTranslationTo(userInput2)
      .subscribe(response => {
        // API response event handler
        console.log(response);
        this.result2 = response.responseData.translatedText;
        this.matches = response.matches;

        // speak the result
        this.tts
          .speak(this.result2)
          .then(() => console.log("Success"))
          .catch((reason: any) => console.log(reason));
      });
  }
}
