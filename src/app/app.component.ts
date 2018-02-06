// 3.匯入 HttpClient 類別
import { HttpClient } from "@angular/common/http";

import { Component, OnInit } from "@angular/core";
import { Auth, Api } from "@kkbox/kkbox-js-sdk";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  data;

  // 4.注入 HttpClient 服務
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // 5.發出 Http 要求 (GET)
    this.http.get<any[]>("https://gank.io/api/random/data/福利/20").subscribe(data => {
      this.data = data;
    });
  }

  // ngOnInit() {
  //   var http = require("https");
  //   var options = {
  //     method: "GET",
  //     hostname: "api.kkbox.com",
  //     port: null,
  //     path: "/v1.1/search?q=剛好遇見你&type=track&territory=TW",
  //     headers: {
  //       accept: "application/json",
  //       authorization: "Bearer zMag02Dzk1a9V9xFqFdtIw=="
  //     }
  //   };
  //   var req = http.request(options, function(res) {
  //     var chunks = [];
  //     res.on("data", function(chunk) {
  //       chunks.push(chunk);
  //     });
  //     res.on("end", function() {
  //       var body = Buffer.concat(chunks);
  //       this.data =  body.toString();
  //       // console.log(body.toString());
  //     });
  //   });
  //   req.end();
  // }
}
