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
    max-width: 75%;
    height: auto;
  }
  .responsive-img2 {
  max-width: 70%;
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

As shown in Table 1, Sub3Vox contains 1,250 speakers: 1,210 in "eval1" and 40 in "eval2", with 560 female and 690 male speakers. Compared to the original VoxCeleb, there is a slight decrease in the number of speakers because Sub3Vox includes only English utterances. 

<center>
<img src="https://slash1028.github.io/Image/Table1.png" class="responsive-img1" alt="自适应图片">
</center>
<br>
We divided Sub3Vox into  "eval1", and "eval2", where the utterances in Sub3Vox-eval1 were obtained from VoxCeleb1-dev and the utterances in Sub3Vox-eval2 were obtained from VoxCeleb1-test. Table 1 shows the total duration, number of unique phrases, and number of utterances in each part of the corpus. Figure 2 illustrates that most utterances in Sub3Vox are less than two seconds. 

<center>
<img src="https://slash1028.github.io/Image/Figure2.png" class="responsive-img1" alt="自适应图片">
</center>
<br>
The demographic distribution in Sub3Vox is similar to that of VoxCeleb1, with most speakers from the USA and UK. Those native English speakers speak faster, making the trimmed segments shorter compared to the manual recordings, where speakers utter pre-defined phrases or sentences. 

For each *N* from 1 to 9, we sorted the commonly used N-word phrases in the whole VoxCeleb1. Apparently, the frequency of occurrences of these *N-word* phrases decreases with *N*. Because none of the speakers in VoxCeleb1 spoke the same 9-word phrases twice, the maximum number of words in a phrase in Sub3Vox is 8. In the future, we will increase this number using a larger TI corpus, such as VoxBlink.