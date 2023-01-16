---
uid: skyppy-v1

date: 2023-01-16T00:00:00.000Z
cover: skyppy-site.png
title: Skyppy - Cut to the chase!
summary: Sometimes you just want to view certain parts of YouTube video. Skyppy makes it easy to skip the parts you don't want. You can even send the Skyppyd version to a friend.
---

## Skyppy

When I discovered [inaSpeechSegmenter](https://github.com/ina-foss/inaSpeechSegmenter) from [Institut National de l'Audiovisuel](https://www.ina.fr/)
I knew that I had to base our next Bad Idea™ on it. INA’s Speech Segmenter segments audio into music, noise and speaker gender. Turns out that last bit needs to be approached very carefully.

Like all side projects I work on, they tend to last years (if not decades). I think we’re into our 3rd year with Skyppy. It’s been a slow, slow burner. 

So what’s the idea? The idea is to segment or split parts of an audio file (or YouTube video in our case), based on specific criteria – silence, voice type, music and  noise. Maybe you don’t want to listen to that intro music or the applause and just consume the parts that matter. Or maybe you just want a handy visual guide of who is doing all the speaking. With Skyppy you can skip those bits.

I started working on this with my friend Marco, who handled all the back-end stuff, while I concentrated on the front-end and pretty early on in the development process, we had a demo… which of course [I tweeted about](
https://twitter.com/maboa/status/1220649076301189122)


Always good to get feedback early and we did. Now there’s a big issue with this demo – can you spot it? We used the default settings of the speech segmentation algorithm which divides things into noise, silence, music, male and female. See the issue yet? I’ll give you a clue – it’s the gender catagorisation. 

Two issues here, firstly – it‘s overly simplistic to split gender into male and female, and secondly how can you differentiate a so-called female voice from a male one? The second issue is a classic problem in the field of Artificial Intelligence – your algorithm is only as good as the data you trained it on. And depending on how you train it, you can introduce biases. In this case if the people classifying the training data believe that there are only two genders, that’s how they will categorise and train the algorithm. 

At the time of the tweet, we were reflecting the categories which the algorithm uses to tag data, in our first iteration. But we soon realised that this was not a good representation, to say the least. At the same time we understood the value of (for example) evaluating how much men talk compared to women, so in the latest UI we replaced “female” and “male” with “higher voice” and “lower voice”, respectively. Importantly these categories can be easily relabelled by the user so if they establish the gender of the people talking, they can label it as any gender they like.

For demo purposes I used a Robert Smith (I’m a bit of a fan) being interviewed after a concert in Japan and just removed his voice, this had a comical effect as his mannerisms were left in which looked like non verbal responses to the questions. I’d like to repeat (as I did on Twitter), that was not meant as a slight, I think Robert is a wonderful person.
