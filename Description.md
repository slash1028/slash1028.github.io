---
layout: page
permalink: /Description/index.html
title: Corpus Description
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>自适应图片</title>
<style>
  .center {
    text-align: center;
  }
  .responsive-img1 {
    max-width: 60%;
    height: auto;
  }
  .responsive-img2 {
  max-width: 65%;
  height: auto;
  }
</style>
</head>
<body>
<div class="center">
</div>
</body>
</html>

## Data Overview

Sub3Vox contains 1,250 speakers: 1,210 in the dev set and 40 in the test set, with 560 female and 690 male speakers. Compared to the original VoxCeleb2, there is a slight decrease in the number of speakers because Sub3Vox includes only English utterances, excluding speakers with samples in other languages. 

<center>
<img src="https://slash1028.github.io/Image/speakernumber.png" class="responsive-img1" alt="自适应图片">
</center>

<br>We sorted commonly used N-grams in each part of the corpus, as shown in Table II. While we searched for phrases with N ranging from one to nine, higher N-grams naturally appear less frequently

<center>
<img src="https://slash1028.github.io/Image/totalduration.png" class="responsive-img1" alt="自适应图片">
</center>
<br>

## Types of Errors and the Others

We classified the recordings in the new corpus into six kinds to ensure robustness and real-world applicability. They are pre-ambiguous, post-ambiguous, pre- and post- ambiguous, stammer, clear, and wrong.

<center>
<img src="https://slash1028.github.io/Image/error_types.png" class="responsive-img1" alt="自适应图片">
</center>

Most wrong samples result from fast and ambiguous pronunciation, with only a few caused by hallucinations from the speech recognition model.