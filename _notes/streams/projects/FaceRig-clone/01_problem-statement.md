## Problem Statement

I don't want to share my beautiful face on stream. However, I want to have a different representation of my face on stream in real-time that chat can change when they redeem their points on stream.

I have found this interesting program, [FaceRig](https://store.steampowered.com/app/274920/FaceRig/), by [Holotech Studios](https://facerig.com/about-us/) that allows an animated character with a face to simulate a human's face motion by mapping the human's face features to the animated character.

{% include video id="ZFy5B8OC3Tw" provider="youtube" %}

As I want the animated character to be updated based on viewers chose. I will need to build an API to allow the update to happen.

I think there are few problems to tackle are:
* Building face recognition system.
* Compiling/finding a 3D model of an animated character.
* Mapping the face recognition system with the 3D model.
* Enabling the ability to update the 3D model with different animated characters from a script.
* Building an API to allow the update from different machines on different networks.
* Building a bot for the connectivity between the program API and Twitch API.