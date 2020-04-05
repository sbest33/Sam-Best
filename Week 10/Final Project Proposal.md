# Final Project Proposal
## What is the Project?
My project is an **Effect Switching System for a Guitar Pedalboard**. Basically what this means is that I will build a device that can recall multiple configurations of effect pedal routings, where each configuration will be triggered by its own foot-switch.

So why would this be useful? Well let's say a guitarist is playing a song that has a Verse with which requires a clean tone with some reverb, chorus, and long delay, but then the Chorus which comes right after it requires a heavy distorted tone, with no reverb, delay or chorus. In this situation, the guitarist needs to turn off three effect pedals, possibly switch pickups and hit the downbeat of the Chorus smoothly and while keeping good time, in the space of one beat. As you can imagine this is very hard to do, and leaves a lot of margin for error. With my device, all the effect switching could be done with one button press.

With the system I am proposing to build, it would only take one button press to turn on or off any number of effects that are in a pedalboard configuration of up to 8 pedals, and there would be 3 banks of 4 pedal configurations, with each pedal configuration within each bank to have it's own foot-switch to control it.

### Examples of similar products and projects:
Here are a few commercially available products which are more elaborate versions of what I would like to build, but have the same basic functionality:
* [Boss ES-5](https://www.sweetwater.com/store/detail/ES5--boss-es-5-effects-switching-system?mrkgadid=3303551177&mrkgcl=28&mrkgen=gpla&mrkgbflag=0&mrkgcat=guitars&&acctid=21700000001645388&dskeywordid=92700046934854961&lid=92700046934854961&ds_s_kwgid=58700005285194964&ds_s_inventory_feed_id=97700000007215323&dsproductgroupid=385156301715&product_id=ES5&prodctry=US&prodlang=en&channel=online&storeid=%7bproduct_store_id%7d&device=c&network=g&matchtype=&locationid=%7bloc_phyiscal_ms%7d&creative=285729057343&targetid=pla-385156301715&campaignid=1465808371&gclid=EAIaIQobChMIg_jo6_zP6AIVSj0MCh1acQGnEAQYASABEgIPs_D_BwE&gclsrc=aw.ds)
* [Electro-Harmonix Super Switcher](https://www.sweetwater.com/store/detail/SuperSwitcher--electro-harmonix-super-switcher-programmable-effects-hub?mrkgadid=3332697220&mrkgcl=28&mrkgen=gpla&mrkgbflag=0&mrkgcat=guitars&&acctid=21700000001645388&dskeywordid=92700046937568522&lid=92700046937568522&ds_s_kwgid=58700005283385744&ds_s_inventory_feed_id=97700000007215323&dsproductgroupid=657314505535&product_id=SuperSwitcher&prodctry=US&prodlang=en&channel=online&storeid=%7bproduct_store_id%7d&device=c&network=g&matchtype=&locationid=%7bloc_phyiscal_ms%7d&creative=337614398144&targetid=pla-657314505535&campaignid=1465808371&gclid=EAIaIQobChMIg_jo6_zP6AIVSj0MCh1acQGnEAQYAyABEgLTYPD_BwE&gclsrc=aw.ds)
* [Hotone Patch Kommander](https://www.zzounds.com/item--HOTTPLS10?siid=239005&gclid=EAIaIQobChMI1fKSyf3P6AIViZ6zCh0cwQtdEAQYAiABEgKdAvD_BwE)
* [TC-Helicon Switch-6](https://www.sweetwater.com/store/detail/Switch6--tc-helicon-switch-6-accessory-pedal-for-expanded-effects-control?mrkgadid=3303552361&mrkgcl=28&mrkgen=gpla&mrkgbflag=0&mrkgcat=guitars&&acctid=21700000001645388&dskeywordid=92700046934854529&lid=92700046934854529&ds_s_kwgid=58700005285194820&ds_s_inventory_feed_id=97700000007215323&dsproductgroupid=476457798200&product_id=Switch6&prodctry=US&prodlang=en&channel=online&storeid=%7bproduct_store_id%7d&device=c&network=g&matchtype=&locationid=%7bloc_phyiscal_ms%7d&creative=285723452633&targetid=pla-476457798200&campaignid=1465808371&gclid=EAIaIQobChMI1fKSyf3P6AIViZ6zCh0cwQtdEAQYCSABEgLDmvD_BwE&gclsrc=aw.ds)

And here are a few projects similar to mine made by *makers* and *hackers* throughout the world:
* [Arduino Programmable 5 Pedal Switcher](https://www.instructables.com/id/arduino-programable-5-pedal-switcher/)
* [DIY 4 Loop Switcher \(made with all analog electronics\)](https://www.youtube.com/watch?v=Fd_LKoOA7sE)
* [DIY 8 Pedal Loop Switcher \(which I used to base my project on\)](https://www.youtube.com/watch?v=NYT-uuoJm2o)

## Where to start?
At first this seemed like quite an overwhelming project, but after a lot of research I am starting to feel confident that I will be able to pull it off. Thankfully my girlfriend, Rachel, is a product engineer with a lot of experience as a thinker, and has offered to help me if I am to get stuck or hit a dead end. On top of that her brother is an Electric Engineer who has served as a great resource just for me to check if the things I am thinking of making are indeed possible and will, theoretically, work. Thankfully so far I have not hit any kind of dead end, but all the help that I have needed will be mentioned later on.

The first resource I used, was a Youtube video build demonstration of a very similar project that user [Paul Graham](https://www.youtube.com/channel/UCrw0n8YMvLIxB3unvbfISsw) made. I went all over the place afterwards looking for ideas, but I ended up going back to this video to use as a base for my project. He based his project off of an Arduino Mega 2560, which I will talk about more in the future, but after some research this seemed like the best method to be able to control multiple signals and to set up a system that could memorize different banks of effect configurations (I will discuss later on why I came to this conclusion).

## Understanding the analog version
I thought it would be a very good and crucial exercise for me to understand how the same kind of project can be done in analog fashion, using only electronic components, so I could then understand and appreciate how it could be recreated with the use of digital components as well. When we had previously conversed about the creation of this project, you pointed me to [this forum](https://www.harmonycentral.com/forums/topic/118660-building-an-effect-switching-system/) which was very useful in understanding the way signal can be routed in a pedalboard through electronic manipulation, especially because on this forum page I found [this page](http://www.geofex.com/article_folders/fxswitchr/fxswitchr.htm) which was crucial for me to understand an analog version of how this could be created.

### Any effect path with 3 effects
I will now do my best to explain how this can be made using only analog components, and why I decided to use a digital micro-controller such as the Arduino to complete the project rather than make it all in Analog form. *(I will be using reference to the images in the page I mentioned in the above paragraph.)*

![Any signal path through three effects](https://github.com/sbest33/Sam-Best/blob/master/Week%2010/fxselex4%20copy.gif)

In the above picture, we can see signal coming in, and then multiple combinations of signal routing options before going to the output. Basically we have the option of routing the signal through any possible permutation of signal with 3 pedals (ranging from permutations that involve all three pedals on, to two pedals on, to just one, or to the situation where you would want to bypass all the pedals altogether).

Let's say for instance that we would like the signal to follow the following path: **Guitar In -> FX2 -> FX1 -> Output.** For this to be accomplished, all we would need to do would be to **set the first switch to the second position** (for signal to go to the Input of FX2), **the second switch to the fourth position** (for the signal to go to the main Output after it comes from the Output of FX1), **the third switch would remain on the first position** (to carry the signal into the Input of FX1), and **the fourth switch would not matter** because this pedal configuration would not include FX3.

If you come up with any configuration using any amount of those pedals, by using four SP4T (Single Pole Quadruple Throw, more on that [here](https://www.dummies.com/programming/electronics/components/switches-in-electronic-circuits-poles-and-throws/)) switches such as the ones in this circuit, it can be achieved.

### Two paths through three effects
So what was demonstrated in the above circuit would allow any combination of pedal routing to be created with 3 pedals, but let's say now we want to have a second configuration of pedals. This is what it would look like.
![Two signal paths through three effects](https://github.com/sbest33/Sam-Best/blob/master/Week%2010/fxselex5%20copy.gif)

Now we have two *"programs"*, each being controlled through a 4PST (Quadruple Pole Single Throw) switch which would, one marked P1 and the other P2. When P1 is closed (turned On), signal can run to all four of the SP4T switches in *"program" 1*, and when P2 is closed, signal can run to all four of the SP4T switches in *"program" 2*. Basically what we have now are two circuits the same as in the first image, running in parallel, each with their own pedal configuration. So let's we could set Program 1, to have the following signal flow: **Guitar In -> FX2 -> FX3 -> FX1 -> Output**; and Program 2 could have this signal flow: **Guitar In -> FX3 -> Output**.

The really nice thing about this model is that you could now just keep adding more *"programs"*, by repeating another parallel instance of the original circuit. **The problem is that there are two main issues:**
1. There is nothing that makes the *"Program 2"* turn off when *"Program"* 1 is on or vice versa, so if both of the foot-switches were closed at the same time, there would be some weird signal artifacts, like a possible feedback loop, **and as this will be used for practical performance purposes, this is enough reason to find a different method.**
2. To change the routing configuration within each *"Program"*, you need to physically open up the device and individually configure each switch in the circuit to the correct switch position.

## Making a Digital Version of the same System
So at this point I knew that the analog version would maybe not be flawless enough to be used in a real performance situation (and not to mention it does not require any real programming), so I had to figure out a way to be able to make it digitally. Fortunately in the past, as a young teenager, I had spent some time playing with the Arduino and also learning about Electronics, with the goal of wanting to build some effect pedals (and thankfully I was fortunate enough to eventually actually make some). One of the components remember learning about was the Relay, which is a device that can receive a signal, and through a magnetic transducer (well usually a magnetic transducer, the ones I ended up using were actually controlled through Optical Isolation), a second circuit, usually of much higher current, can be triggered to allow signal to flow through it. So if you send a signal with low current (like 40 mA) to a Relay it can allow a much higher flow of current to be engaged, such as the current that would be flowing in and out of a guitar pedal. So basically one Relay would be able to control one effect, so 8 Relays would be able to control 8 Pedals.

So these two elements, the Arduino and the Relay, which I had a basic understanding of, were the two fundamental parts in the Effect Switching System that Rick Graham (mentioned earlier) built. Therefore I thought it would be best to design my project based on his. His creation, just like I am planning mine to have, has 6 foot-switches 5 of them to be used to swap between *"programs"* and then one to swap between banks.

### Writing/Testing the Code
So the first thing he did was create a simpler version of his circuit where instead of controlling the current to flow/not flow to each pedal there would be an LED in place of each relay. (In the full build he ends up also using an LED to indicate which *"Program"* is turned On at a give time, and what pedal is turned On within each Program, and also to show what Bank is selected).

This is the code he uses to test the code with LED's (this is an updated version of the code by *Youtube* user *MassaM SDC*, but it only has two Banks of *"programs"* and 6 Effect Pedals):
```cpp
/*

  Author:
  MassaM
  March-2017

  Project:
  Arduino Uno - Guitar Pedals Looper
  Has 2 swtichable Banks of each 6 Patches (Pre-Programmed as in Hard Coded)

*/

// constants won't change. They're used here to
// set pin numbers:

const int bankin1 = 1; //input for bank input

const int button1 = 2; // button 1 input pin
const int button2 = 3; // button 2 input pin
const int button3 = 4; // button 3 input pin
const int button4 = 5; // button 4 input pin

const int loop1 = 6; //  loop 1 output pin
const int loop2 = 7; //  loop 2 output pin
const int loop3 = 8; //  loop 3 output pin
const int loop4 = 9; //  loop 4 output pin
const int loop5 = 10; // loop 5 output pin
const int loop6 = 11; // loop 6 output pin

const int bank1 = 12; // bank1 output pin
const int bank2 = 13; // bank2 output pin


// variables will change:
int buttonState1 = 0; // variable for reading button1 status
int buttonState2 = 0; // variable for reading button2 status
int buttonState3 = 0; // variable for reading button3 status
int buttonState4 = 0; // variable for reading button4 status  

int bankread1 = 0;  // variable for reading Bank Select status
int bank1State = 0;
int bank2State = 0;

long lastDebounce = 0;
long debounceDelay = 100;

void setup() {

  // initialize the Loop pins as an outputs:
  pinMode(loop1, OUTPUT);
  pinMode(loop2, OUTPUT);
  pinMode(loop3, OUTPUT);
  pinMode(loop4, OUTPUT);
  pinMode(loop5, OUTPUT);
  pinMode(loop6, OUTPUT);
  pinMode(bank1, OUTPUT);
  pinMode(bank2, OUTPUT);

  // initialize the button pins as an inputs:
  pinMode(button1, INPUT);
  pinMode(button2, INPUT);
  pinMode(button3, INPUT);
  pinMode(button4, INPUT);

  pinMode(bankin1, INPUT);

  digitalWrite(bank1, HIGH); // Default Bank1 selected on startup

} // Setup end

void loop() {

/* BANK SELECTION TOGGLE */

//one button bank switching with delay for debouncing

  bankread1 = digitalRead(bankin1);
  bank1State = digitalRead(bank1);

  if ((bankread1 == HIGH) && (bank1State == LOW)){

  //turn led8 on
    digitalWrite(bank2, LOW);
    delay(100);
    digitalWrite(bank1, HIGH);
    delay(100);

  }else if((bankread1 == HIGH) && (bank1State == HIGH)){

  //turn led7 on
    digitalWrite(bank1, LOW);
    delay(100);
    digitalWrite(bank2, HIGH);
    delay(100);

  }


  /* BANK 1 PATCHES SELECTION  */

  // bank one programming PATCHES

  // Bank 1 - Button 1 stuff
  buttonState1 = digitalRead(button1);

  if ((buttonState1 == HIGH) && (bank1State == HIGH)){
  // turn LEDs on and off:
    digitalWrite(loop1, HIGH);
    digitalWrite(loop3, HIGH);
    digitalWrite(loop5, HIGH);
    digitalWrite(loop2, LOW);
    digitalWrite(loop4, LOW);
    digitalWrite(loop6, LOW);
  }

  // Bank 1 - Button 2 stuff
  buttonState2 = digitalRead(button2);

  // turn LEDs on and off:
  if ((buttonState2 == HIGH) && (bank1State == HIGH)) {
    digitalWrite(loop1, LOW);
    digitalWrite(loop3, LOW);
    digitalWrite(loop5, LOW);
    digitalWrite(loop2, HIGH);
    digitalWrite(loop4, HIGH);
    digitalWrite(loop6, HIGH);
  }

  // Bank 1 - Button 3 stuff
  buttonState3 = digitalRead(button3);

  // turn LEDs on and off:
  if ((buttonState3 == HIGH) && (bank1State == HIGH)) {
    digitalWrite(loop1, HIGH);
    digitalWrite(loop2, HIGH);
    digitalWrite(loop3, LOW);
    digitalWrite(loop4, LOW);
    digitalWrite(loop5, HIGH);
    digitalWrite(loop6, HIGH);
  }

  // Bank 1 - Button 4 stuff
  buttonState4 = digitalRead(button4);

  // turn LEDs on and off:
  if ((buttonState4 == HIGH) && (bank1State == HIGH)) {
    digitalWrite(loop1, LOW);
    digitalWrite(loop2, HIGH);
    digitalWrite(loop3, HIGH);
    digitalWrite(loop4, LOW);
    digitalWrite(loop5, LOW);
    digitalWrite(loop6, LOW);
  }

  /* BANK 2 PATCHES SELECTION  */

  //bank two programming PATCHES

  // Bank 2 - Button 1 stuff
  buttonState1 = digitalRead(button1);

  // turn LEDs on and off:
  if ((buttonState1 == HIGH) && (bank1State == LOW)){
    digitalWrite(loop1, LOW);
    digitalWrite(loop3, HIGH);
    digitalWrite(loop5, HIGH);
    digitalWrite(loop2, LOW);
    digitalWrite(loop4, HIGH);
    digitalWrite(loop6, LOW);
  }

  // Bank 2 - Button 2 stuff
  buttonState2 = digitalRead(button2);

  // turn LEDs on and off:
  if ((buttonState2 == HIGH) && (bank1State == LOW)){
    digitalWrite(loop1, HIGH);
    digitalWrite(loop3, LOW);
    digitalWrite(loop5, LOW);
    digitalWrite(loop2, HIGH);
    digitalWrite(loop4, HIGH);
    digitalWrite(loop6, LOW);
  }

  // Bank 2 - Button 3 stuff
  buttonState3 = digitalRead(button3);

  // turn LEDs on and off:
  if ((buttonState3 == HIGH) && (bank1State == LOW)) {
    digitalWrite(loop1, HIGH);
    digitalWrite(loop2, HIGH);
    digitalWrite(loop3, HIGH);
    digitalWrite(loop4, HIGH);
    digitalWrite(loop5, HIGH);
    digitalWrite(loop6, HIGH);
  }

  // Bank 2 - Button 4 stuff
  buttonState4 = digitalRead(button4);

  // turn LEDs on and off:
  if ((buttonState4 == HIGH) && (bank1State == LOW)) {
    digitalWrite(loop1, HIGH);
    digitalWrite(loop2, LOW);
    digitalWrite(loop3, HIGH);
    digitalWrite(loop4, LOW);
    digitalWrite(loop5, HIGH);
    digitalWrite(loop6, LOW);
  }

} // LOOP end﻿
```

So now that I had this code which is enough to demo the signal flow and all the *"thinking"* that the Arduino is doing, I started to make a wiring diagram for the what actual program might look like, using the program [***Fritzing***](https://fritzing.org/home/). This is what my current diagram looks like:
![First Wiring Diagram](https://github.com/sbest33/Sam-Best/blob/master/Week%2010/First%20Wiring%20Diagram.jpg).
