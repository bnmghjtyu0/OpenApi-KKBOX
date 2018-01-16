import { Component, OnInit } from "@angular/core";
import { Auth } from "@kkbox/kkbox-js-sdk";
import { Api } from "@kkbox/kkbox-js-sdk";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  ngOnInit() {
    const auth = new Auth(
      "60016913f613f55c92464838fe168e81",
      "c0b101bf141418eb0cdbb992727f4ade"
    );
    auth.clientCredentialsFlow.fetchAccessToken().then(response => {
      const access_token = response.data.access_token;
      const api = new Api(access_token);
      api.searchFetcher
        .setSearchCriteria("五月天 派對動物", "track")
        .fetchSearchResult()
        .then(response => {
          console.log(response.data);
        });
    });
  }
}
