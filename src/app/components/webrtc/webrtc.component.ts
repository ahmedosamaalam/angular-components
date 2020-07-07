import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-webrtc",
  templateUrl: "./webrtc.component.html",
  styleUrls: ["./webrtc.component.scss"],
})
export class WebrtcComponent implements OnInit {
  constructor() {}
  constraints = {
    video: true,
    // audio: true
  };

  hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  ngOnInit(): void {
    const video = document.querySelector("video");

    if (this.hasGetUserMedia()) {
      navigator.mediaDevices.getUserMedia(this.constraints).then((stream) => {
        console.log("object", stream);
        video.srcObject = stream;
      });
    } else {
      alert("getUserMedia() is not supported by your browser");
    }
  }
}
