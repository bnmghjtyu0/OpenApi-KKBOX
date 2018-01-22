import { Component, OnInit } from "@angular/core";
import { Auth, Api } from "@kkbox/kkbox-js-sdk";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  ngOnInit() {
    var http = require("https");
    var options = {
      method: "GET",
      hostname: "api.kkbox.com",
      port: null,
      path: "/v1.1/search?q=剛好遇見你&type=track&territory=TW",
      headers: {
        accept: "application/json",
        authorization: "Bearer zMag02Dzk1a9V9xFqFdtIw=="
      }
    };
    var req = http.request(options, function(res) {
      var chunks = [];
      res.on("data", function(chunk) {
        chunks.push(chunk);
      });
      res.on("end", function() {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });
    req.end();
  }
}
