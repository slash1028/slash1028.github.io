---
layout: page
permalink: /Methodology/index.html
title: Corpus Methodology
---

# Corpus Methodology

## Derive TD Corpora from TI Corpora

<center>
<img src="https://slash1028.github.io/Sub3Vox/Image/overall.png" class="responsive-img" alt="自适应图片">
</center>

<br>The sub-3sec problem motivates a new way to gather resources for text-dependent verification. Typically, speech corpora are curated by requesting speakers to speak live through some recording front-ends or remotely through a telephone or mobile network [26]. Over the years, many corpora, such as TIMIT [27], RSR2015 [28], and Mixer [29], have played a critical role in advancing speaker recognition technology. However, the laborious manual work always limit the size of these corpora compared with the automatically curated ones, such as the VoxCeleb [19]. To solve the sub- 3sec problem mentioned in Section II, it is possible to derive a large text-dependent corpus from text-independent corpora using automated pipelines, since it is easy to find enough short phrases less than three seconds that many people would say in daily life from large TI corpora. On the other hand, number of longer phrases (such as “open the refrigerator to get some vegetables and drinks”) is much smaller. The flowchart of our proposed automatic pipeline is shown in Figure 1. It contains four steps, which will be explained further in the following subsections.

## Text Analysis

Text-dependent corpora focus more on lexical content than text-independent ones. To develop a TD corpus, the first step is selecting available passphrases. If the TI corpus lacks transcriptions, such as VoxCeleb, transcribing the text from utterances is necessary. Various self-supervised learning (SSL) front-ends can be used for automatic speech recognition (ASR) tasks, including wav2vec 2.0 [30], WavLM [31], HuBERT [32], and Whisper [33]. We used Whisper from OpenAI for ASR on text-independent corpora. However, hallucinations are a common issue in large models, including the Whisper model, which often repeats sentences or transcribes non-existent content. To address this issue, voice activity detection (VAD) is used to distinguish between speech and non-speech segments in a signal. By separating these parts in advance, VAD reduces auditory hallucinations in the Whisper model and improves recognition speed. 


## N-gram Frequency Analysis

After obtaining the text content from utterances in the TI corpus, we selected suitable phrases as mentioned in Section III-B. In a TI corpus, different speakers often utter different sentences, but for a TD-SV system, the text of a test utterance must match the registered text of the target speaker. Therefore, it is crucial to have enough phrases spoken by the same and different speakers to form various test trials in a text-dependent corpus. We searched the most commonly used phrases, sorting the top 500 in each N-gram list (N = 1, 2, ..., 9). N-gram refers to a set of N words. For text-dependent use, phrases must be spoken by a speaker at least twice.

##  Trimming

With the most commonly used phrases among the corpus, we trimmed the corresponding segment according to the timestamps of each phrase to form the test utterances. When processing the data from VoxCeleb1, we make the folder storage structure of the proposed Sub3Vox as consistent as possible with the original corpus.

##  Manual Check

To ensure the correctness of the dataset, we added a manual check at the end of the automated pipeline. This procedure can detect some problematic and unusual cases in the TI-SV corpus. For example, in VoxCeleb1, the folder of a female speaker (id10384) contains a male speaker’s clip, which our pipeline could not automatically detect. Therefore, random checking by human listeners is necessary to minimize the number of incorrectly annotated segments. 

**Jan 2023:** I have set up the [online-coffee-time](https://calendly.com/lancecai/meet-with-lance) (Inspired by [Shangzhe Wu](https://elliottwu.com/)). Welcome to chat with me!

<!-- Calendly inline widget begin -->

<div class="calendly-inline-widget" data-url="https://calendly.com/lancecai/meet-with-lance" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->

