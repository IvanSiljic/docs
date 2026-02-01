---
title: 1G Cellular Networks
description: Foreword and high-level view of 1G cellular systems.
tags:
  - networks
  - cellular
  - 1g
  - history
  - overview
---

This document will go over the first introductions of cellular networks (we'll bundle these under the friendly label "1G"). We'll mostly focus on the "why" at first, and then gradually slide into the "how," with a healthy amount of simplification along the way.

We'll also look at what technologies had to exist before this marvelous "talk to someone from a moving car" trick was even possible. Some of those technologies I'll dive into in more depth if they're interesting enough; if not, tough luck, go search for them, there are much smarter people than me who have already written about them.

## Why?

A long time ago, landlines/"fixed lines"/house phones were cutting-edge tech and printing money for operators. Then something terrible happened (for them, not for you): phones got cheap, everyone had one, and people used them as much as possible. So how do you increase revenue when the phone is already in every living room? Easy: invent a phone you can drag everywhere and let people talk all day.

Of course, it wasn't only about making more money. A few breakthrough technologies had to show up first before anyone could even pretend this was possible. We'll talk about those in the next section, after we actually explain what 1G brought to the table: talking on the phone without being tied to a wall or bolted into a car. Oh, and making everyone permanently reachable and slightly anxious all the time. To be fair to the engineers, they didn't really see that part coming, so we'll cut them some slack.

## Required technologies for 1G (for normal humans)

To make 1G work, a few pieces had to show up first. You don't need to know the full physics yet; just keep these in the back of your mind while we wave our hands enthusiastically.

First, there is the "talking through the air" part. That needs three main ingredients: something to throw your voice into the air (an antenna), something to push it hard enough to reach a tower (a power thingy), and something on the other end to catch and understand it again. All of that lives in what grown-ups call "RF electronics," and we'll poke at antennas, transmitters, receivers, and other little boxes that make radio magic possible in the next chapter.

Second, there is the "not turning the sky into audio soup" part. If everyone yelled over radio at the same time on random frequencies, nothing would work. So people had to agree on which chunks of the airwaves are used for mobile phones, and how many "lanes" you can carve out of that space so multiple conversations can go on without colliding.

Imagine a dark room where everyone talks using flashlights: on means "1", off means "0". If everyone uses the same plain white flashlight, all the blinks smear together into one giant mess of light. You know something is happening, but you have no idea who is saying what. Now give each conversation a different "color range" of light. One pair uses mostly red, another mostly green, another mostly blue, and so on. Your eyes (or special "glasses") are tuned to just your color range, so you can pick out your partner's blinks even while everyone else is shouting in photons. The room is still full of mixed-up light, but you only pay attention to the slice that belongs to you.

Radio works the same way, just with radio frequencies instead of colors of light. The air is one big shared medium, but we carve it into "lanes" and tell each call which lane to use so everything doesn't turn into one giant RF word salad. In the "How" chapters, we'll slowly walk a single call from your mouth, through your phone, across those lanes, and into someone else's ear, one step at a time.

## What's next?

This was the "why does 1G exist and what problem is it trying to solve?" chapter. Next comes the fun part: turning your voice into a radio signal that can actually fly through the air, then getting it from your pocket to a tower.
