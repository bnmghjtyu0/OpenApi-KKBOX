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
    var limit = 20;
    var q = "五月天";
    var offset = 30;
    var terr = "TW";
    var type = "track";

    var dataURL = `https://api.kkbox.com/v1.1/search?limit=${limit}&offset=${offset}&q=${q}&territory=${terr}&type=${type}`;
    this.http.get<any[]>(dataURL, { headers: headers }).subscribe(data => {
      this.data = data.tracks.data;
      // console.log(data);
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
