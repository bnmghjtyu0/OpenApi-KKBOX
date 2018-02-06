// 3.匯入 HttpClient 類別
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Component, OnInit } from "@angular/core";
import { Auth, Api } from "@kkbox/kkbox-js-sdk";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  data = [];

  // 4.注入 HttpClient 服務
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // 5.發出 Http 要求 (GET)
    let headers = new HttpHeaders({
      Authorization: "Bearer zMag02Dzk1a9V9xFqFdtIw=="
    });
    var dataURL =
      "https://api.kkbox.com/v1.1/search?limit=15&offset=30&q=%E5%89%9B%E5%A5%BD%E9%81%87%E8%A6%8B%E4%BD%A0&territory=TW&type=track";
    this.http.get<any[]>(dataURL, { headers: headers }).subscribe(data => {
      this.data = data.tracks.data;
      console.log(data);
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
