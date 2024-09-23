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

# The Sub-3Sec Problem

In the past, at least one minute of speech is required for a TI-SV system to achieve good performance [22]. Today’s state-of-the-art TI-SV systems are proven to be effective when speech segments have three to ten seconds, primarily because of sufficient coverage of the phonetic space for such a long segment. However, segments below three seconds are seldom explored by text-independent methods. The lack of lexical coverage in short utterances results in phonetic mismatch between the enrollment and test utterances, causing the performance of TI systems degrades tremendously. Nevertheless, under the same short-utterance scenario, TD-SV systems tend to perform better than TI-SV systems because the linguistic constraint and short utterance duration reduce the chance of having phonetic mismatch [5].

Taking English as an example, the typical speaking rate in English is 4 syllables per second [25]. Therefore, in the case of English, the sub-3sec problem requires a speaker verification system to make a decision based on about 12 or less English syllables.

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