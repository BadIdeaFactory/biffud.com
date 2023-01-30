---
uid: skyppy

date: 2023-01-19
title: "Skyppy: Speech is overrated – skyp it!"
active: true
score: 127

cover: cover.png
slides: ["image-01.png", "image-02.png"]
bifpresents: "Skyppy: Speech is overrated – skyp it!"
tagline: A web application built upon INA Speech Segmenter facilitating the skipping of certain types of audio in a video.
link: https://skyppy.tv
source: https://github.com/BadIdeaFactory/skyppy/
blogpost: /tldr/skyppy-v1
code: BIF 28
feature: true
timeframe: January 2020 – January 2023


needs:
  code: true
  graphic: true
  money: true
  uxui: true
  users: true
---

Skyppy builds upon the open source work of [Institut National de l'Audiovisuel](https://ina.fr) who have produced a [CNN-based audio segmentation toolkit](https://github.com/ina-foss/inaSpeechSegmenter) to detect speech, music and speaker. It's been designed for large scale gender equality studies based on speech time per gender. 

We provide an interface so that people can use this technology on any YouTube video and produce an edited version where certain segments are skipped. So far we've used this mostly for [comic effect](https://skyppy.tv/?#v=udVvb5giPcg&s=hqn&h=Chigusa&l=Robert), although we're sure that it will come in handy for a host of other use cases.

