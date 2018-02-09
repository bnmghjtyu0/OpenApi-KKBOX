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
  data: any;

  // 4.注入 HttpClient 服務
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // 5.發出 Http 要求 (GET)
    let headers = new HttpHeaders({
      Authorization: "Bearer zMag02Dzk1a9V9xFqFdtIw=="
    });


    // 測試中
   
    // --需要有 ID
    // 1.tracks 取得歌曲資訊
    var trackURL =
      "https://api.kkbox.com/v1.1/tracks/4kxvr3wPWkaL9_y3o_?territory=TW";
    // 2.Albums 取得專輯資訊
    var albumnsURL =
      "https://api.kkbox.com/v1.1/albums/KmRKnW5qmUrTnGRuxF?territory=TW";
    // 3.Artists 取得歌手資訊
    var artistsURL = "https://api.kkbox.com/v1.1/artists/foo?territory=foo";
    // 4.shared-playlists 分享歌單的資訊
    var sharedURL =
      "https://api.kkbox.com/v1.1/shared-playlists/4nUZM-TY2aVxZ2xaA-?territory=TW";

    // 不需要 ID
    // 5.featured-playlists 取得最新主題歌單列表
    var featuredURL =
      "https://api.kkbox.com/v1.1/featured-playlists?territory=TW&offset=0&limit=500";
    // 6.featured-playlists-categories 取得主題歌單類別列表
    var featuredCateURL =
      "https://api.kkbox.com/v1.1/featured-playlist-categories?territory=TW&offset=0&limit=500";
    // 7.mood-stations 取得情境電台列表
    var moodURL =
      "https://api.kkbox.com/v1.1/mood-stations?territory=TW&offset=0&limit=500";
    // 8.genre-stations 取得曲風電台列表
    var genreURL =
      "https://api.kkbox.com/v1.1/genre-stations?territory=TW&offset=0&limit=500";
    // 9.new-release-categories 取得最新發行類別列表
    var newReleaseURL =
      "https://api.kkbox.com/v1.1/new-release-categories?territory=TW&offset=0&limit=500";
    // 10.search 透過關鍵字、指定類別，取得想要的資訊
    var searchURL =
      "https://api.kkbox.com/v1.1/search?q=Mayday&type=track&territory=TW&offset=0&limit=50";
    // 11.new-hits-playlists 取得最新熱門歌單列表
    var newHitURL =
      "https://api.kkbox.com/v1.1/new-hits-playlists?territory=TW&offset=0&limit=10";
    // 12.charts 取得歌曲排行榜列表
    var chartsURL =
      "https://api.kkbox.com/v1.1/charts?territory=TW&offset=0&limit=50";

    // search 音樂搜尋引擎
    var searchOption = {
      limit: 10,
      q: "五月天",
      offset: 10,
      terr: "TW",
      type: "track"
    };
    var searchURL = `https://api.kkbox.com/v1.1/search?limit=${
      searchOption.limit
    }&offset=${searchOption.offset}&q=${searchOption.q}&territory=${
      searchOption.terr
    }&type=${searchOption.type}`;

    this.http
      .get<any[]>(searchURL, { headers: headers })
      .subscribe((data: any) => {
        this.data = data.tracks.data;
        console.log(data);
      });
  }
}
