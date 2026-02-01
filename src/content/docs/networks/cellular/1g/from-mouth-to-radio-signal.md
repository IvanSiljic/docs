---
title: From Mouth to Radio Signal
description: How your voice becomes a radio signal in 1G phones.
---

Now we're getting to the good stuff: how does your voice, that wiggly air pressure thing, actually turn into something a phone can shoot through the air? Let's follow one shout, step by step, from your lungs to the antenna.

## Waves

Waves, everything is waves (well, almost everything). By Wikipedia's definition: "Wave is a propagating dynamic disturbance (change from equilibrium) of one or more quantities."[^1] You can head over there or somewhere better for more information, but here we'll explain it in the simplest way possible and introduce just the basic necessary parts.

There are multiple types of waves and they all share common properties, so we'll look at a mechanical sea wave to introduce some concepts that transfer to all the rest. If we steal Timmy's beach ball and put a tracker in it that only measures its height and throw it at to the ocean. If we take the height measurements and plot it on the y-axis of the graph and take the time through x-axis we get a diagram something like this:  

![Wave anatomy](/src/assets/networks/cellular/wave.png)

### Amplitude

If we take the 0 line on the y-axis as the resting position of the water (call it the "resting line"), then amplitude (marked with $A$) is the maximum distance the beach ball travels from this resting line.

- Bigger amplitude = stronger wave = more energy
- After the wave peak, there's an equal opposite reaction - the ball dips below the resting line by the same distance $A$

Your shout = big $A$ (loud). Whisper = small $A$ (quiet).

### Period

The part marked with $T$ is the time for one complete roller coaster ride - from peak up, through the dip down, back to start. We call this the period (not to be confused with women's period - that's a whole other roller coaster of emotions).

$$
f = \frac{1}{T}
$$

Longer $T$ = fewer waves per second = lower pitch. Shorter $T$ = more waves per second = higher pitch.


### Frequency

This is the big one. I sneaked the equation into the previous part but didn't explain it because that's this section's job. 

Frequency $f$ = number of complete up-down cycles per second. We measure it in **Hz** (Hertz) after the scientist Heinrich Hertz.

Human hearing: 20 Hz to 20,000 Hz (20,000 up-downs per second!). Amazing stuff.

Your average speaking voice: 85-180 Hz (men), 165-255 Hz (women).

### Decibels (dB)

Another important concept later on is Decibels (dB for short). It measures the strength/loudness of a wave/sound on a logarithmic scale, meaning a small bump from 80 dB to 81 dB is actually much stronger than it seems. Why? Because human ears hear that way - don't question it too much.

Examples:
- Whisper: 20-30 dB
- Normal talk: 60 dB  
- Loud shout: 90 dB
- Jet takeoff: 140 dB (pain!)

Big amplitude = big dB. We don't want everyone shouting all the time.

## The Microphone - Sound to Electricity

Now Timmy's beach ball wiggles (your shout) hit the 1G phone's microphone. It used a carbon button microphone - dead simple but clever:

1. Thin metal diaphragm vibrates from sound pressure (90 dB shout = big push)
2. Diaphragm squeezes carbon granules between two metal plates
3. More squeeze = granules touch better = less electrical resistance = bigger voltage

Result: voltage wave matches your voice wave exactly - same amplitude (dB), same frequency (150 Hz).

Thats simple, now we need a way to convert electricity to radio waves - which we will cover in the next section.

## Electromagnetic waves

Now that we have a copy of your voice in electrical form we can play with it. We can't send electrical signals directly just like your voice, they'll fizzle out quickly. We need a better medium to transfer it longer distances, and the perfect candidate is electromagnetic waves. You've heard of them: light, radio frequencies, ultraviolet - all electromagnetic waves, just named differently by wavelength spectrum.

What is Wavelength? Refer back to the graph - the part marked $T$ (period) relates to wavelength. Period $T$ is time for one wave cycle. Wavelength $\lambda$ is distance for one cycle. For electromagnetic waves traveling at constant speed of light $c \approx 300,000$ km/s:

$$
c = f \cdot \lambda
$$

- $f$ = frequency (Hz)
- $\lambda$ = wavelength (meters/km)

There was no international "1G" standard so each region had its own. We'll look at AMPS (America's 1G system) which used 824-849 MHz for upload and 869-894 MHz for download. These frequencies gave short wavelengths (~33 cm) that radiate efficiently from small phone antennas, unlike your voice's kilometer-long waves.

But if we look into the spectrum of frequencies we have for AMPS upload is only 25 MHz = 25,000,000 Hz, and our voice is ~20,000 Hz = 0.02 MHz. They operate on different frequencies, so we would have to convert the frequency... Cool part is that we don't!

We multiply the waves of different frequencies and the wave with higher frequency will follow the amplitude of the lower frequency wave:



[^1]: [Wikipedia: Wave](https://en.wikipedia.org/wiki/Wave)
