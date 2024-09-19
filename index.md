---
layout: page
---
# "The Sub-3Sec Problem: From Text-Independent to Text-Dependent Corpus"

<img src="https://github.com/slash1028/Sub3Vox/blob/main/Image/Paper_title.png" class="floatpic" width="600" height="280">

## The Sub-3Sec Problem

In the past, at least one minute of speech is required for a TI-SV system to achieve good performance [22]. Today’s state-of-the-art TI-SV systems are proven to be effective when speech segments have three to ten seconds, primarily because of sufficient coverage of the phonetic space for such a long segment. However, segments below three seconds are seldom explored by text-independent methods. The lack of lexical coverage in short utterances results in phonetic mismatch between the enrollment and test utterances, causing the performance of TI systems degrades tremendously. Nevertheless, under the same short-utterance scenario, TD-SV systems tend to perform better than TI-SV systems because the linguistic constraint and short utterance duration reduce the chance of having phonetic mismatch [5].

Taking English as an example, the typical speaking rate in English is 4 syllables per second [25]. Therefore, in the case of English, the sub-3sec problem requires a speaker verification system to make a decision based on about 12 or less English syllables.

## Sub3Vox Corpus

[Prof. Zhezhuang Xu](https://www.researchgate.net/profile/Zhezhuang-Xu) [Dr. Meng Yuan](https://www.researchgate.net/profile/Meng-Yuan-4). [Prof. Pietro Liò](https://www.cl.cam.ac.uk/~pl219/)  an **AAAI & KDD UC Scholar**. - *hanlin[dot]cai[at]ieee[dot]org*

 The Sub3Vox, a new English corpus, is introduced for TD-SV. It was created from a TI-SV dataset in an automated pipeline and is larger than any existing TD-SV corpora. This is the first time that a TD-SV corpus has been created from a TI-SV corpus. The characteristics of the Sub3Vox are analyzed, and its baseline performance is reported.

  In the paper, we propose an automatic pipeline to curate TD-SV corpora from TI-SV corpora, which addresses the shortcomings of the existing TD corpora not being large enough and saves the effort in manual recording.

<img src="https://github.com/slash1028/Sub3Vox/blob/main/Image/overall.png" class="floatpic" width="600" height="280">

---

## How and When you can access the database

As mentioned before, the project is running now and the first phase of it should be finished by the end of summer. Post-processing of the database needs several months and so we plan the first phase release of the database at the end of 2018. We will try to process the database very quickly and it is possible that the database will be ready in autumn. Anyway, we promise to process and release the database at most by the end of the year. If you are interested in the unprocessed data, we can provide access to the last snapshot of the database. You can communicate with us to discuss about this possibility.

## News and Updates

- **Sep 2024**：Our paper "Denoising Student Features with Diffusion Models for Knowledge Distillation in Speaker Verification" has been submitted to the Main Tracks of the [2025 IEEE International Conference on Acoustics, Speech and Signal Processing](https://2025.ieeeicassp.org/). See you in Hyderabad, India!
- **May 2024**：We curated our first Sub3Vox corpus from VoxCeleb1!
